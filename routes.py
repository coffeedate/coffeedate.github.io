"""REST API for saying hi."""
# from app import app as application
from flask import *
# import send_static_file
import os
import datetime
application = Flask(__name__, static_folder='dist')
BASE_URL = os.path.abspath(os.path.dirname(__file__))
CLIENT_APP_FOLDER = os.path.join(BASE_URL, "dist")

import numpy as np
import datetime
np.random.seed(42)
codex = [['pets', 'no pets'],
		 ['stay in and watch netflix', 'go out instead of staying in'],
		 ['sexual compatibility matters', 'sexual compatibility does not matter'],
		 ['cup is half-empty','cup is half-full'],
		 ['morning person','night person'],
		 ['city person','country person'],
		 ['clean','messy'],
		 ['religious','not religious'],
		 ['want children','do not want children'],
		 ['eat in','eat out'],
		 ['play sports','do not play sports'],
		 ['follows politics','does not follow politics'],
		 ['spontaneous','predictable'],
		 ['want long-term relationship','does not want long-term relationship'],
		 ['procrastinates','does not procrastinate'],
		 ['likes to travel','does not like to travel'],
		 ['introvert','extrovert'],
		 ['close to your family','not close to your family'],		 
		 ]

train_size = 400
codex_length = len(codex)
ans = np.random.randint(2, size=(train_size,codex_length))
profiles = [[codex[i][ans[j][i]] for i in range(codex_length)] for j in range(train_size)]
labels = [None] * train_size

class User:
	def __init__(self, name, description, picture, interests, survey):
		self.name = name
		self.description = description
		self.picture = picture
		self.interests = interests
		self.newMatch = False
		self.survey = survey
		self.iLike = set()
		self.likedBy = set()
		self.matches = set()
	def getSurvey(self):
		return self.survey
	def like(self, userName):
		self.iLike.add(userName)
		if userName in self.likedBy:
			return self.match(userName)
		if self.newMatch:
			self.newMatch = False
			return True
		return False
	def getLiked(self, userName):
		self.likedBy.add(userName)
		if userName in self.iLike:
			self.match(userName)
	def match(self, userName):
		self.matches.add(userName)
		self.newMatch = True
		return userName
		# return True

auth = {'wellford': ['wellford1', 'Wellford Chan'],
		'james': ['james2', 'James Chen'],
		'kusthie': ['kusthie3', 'Kushtie Nguyen'],
		'panda': ['panda4', 'Ashwinee Panda']}

users = {'Wellford Chan': User(name='Wellford Chan',
			description='the boi',
			picture='https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/11061206_10202668311107436_8620547020144133577_n.jpg?oh=9e13008c4ca1bbbd6e221369f8776d41&oe=5ADC8F1A',
			interests='long walks on the beach', survey=[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0] ),
		'James Chen': User(name='James Chen',
			description='kassidin main',
			picture='https://scontent.fsnc1-1.fna.fbcdn.net/v/l/t1.0-9/14079948_10208635955750119_4515098002705318896_n.jpg?oh=659971a58f78a90e1b3facefec0b515f&oe=5AE97E85',
			interests='long walks on the beach', survey=[0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0] ),
		'Kushtie Nguyen': User(name='Kushtie Nguyen',
			description='smokes joints',
			picture='https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/11146244_955466264494134_1735259667299678513_n.jpg?oh=5ec018932da6d589edb03bc1790b8322&oe=5AD83BE4',
			interests='long walks on the beach', survey=[0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0] ),
		'Ashwinee Panda': User(name='Ashwinee Panda',
			description='no longer endangered',
			picture='https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/26814904_878256455667619_4477007155290854499_n.jpg?oh=005ebf3cd5721f7d675865bfa307729a&oe=5AE4C9C2',
			interests='long walks on the beach', survey=[0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1] )
		}

def myconvert(o):
	if isinstance(o, set):
		return list(o)
	if callable(o):
		return o.__str__()
	if isinstance(o, datetime.datetime):
		return o.__str__()
	return o.__dict__

@application.route('/api/makeLabel/', methods=["POST"])
def makeLabel():
	r = request.get_json()
	if "label" not in r:
		return json.dumps("bamboozle")
	labels[r["index"]] = r["label"]
	return json.dumps(labels[int(r["index"])])

@application.route('/api/getProfile/', methods=["GET"])
def getProfile():
	r = request.args
	if "index" not in r:
		return json.dumps("bamboozle")
	return json.dumps(profiles[int(r["index"])])

@application.route('/api/getLabels/', methods=["GET"])
def getLabels():
	return json.dumps(labels)

import ast

@application.route('/api/makeUser/', methods=["POST"])
def makeUser():
	r = request.get_json()
	print(r)
	if "userName" not in r:
		return json.dumps("bamboozle")
	auth[r['userName']] = (r['password'], r['name'])
	user = User(
		r['name'],
		r['description'],
		r['picture'],
		r['interests'],
		survey=ast.literal_eval(['survey'])
		)
	users[r['name']] = user
	return json.dumps(user, default = myconvert)

@application.route('/api/getUser/', methods=["GET"])
def getUser():
	r = request.args
	if "userName" not in r:
		return json.dumps("bamboozle")
	authInfo = auth[r["userName"]]
	truePass = authInfo[0]
	if truePass == r["password"]:
		return json.dumps(users[authInfo[1]], default = myconvert)

@application.route('/api/getAllUsers/', methods=["GET"])
def getAllUsers():
	return json.dumps(users, default = myconvert)

@application.route('/api/like/', methods=["POST"])
def likeye():
	r = request.get_json()
	if "userA" not in r:
		return json.dumps("bamboozle")
	userA = users[r["userA"]]
	userB = users[r["userB"]]
	userB.getLiked(r["userA"])
	if userA.like(r["userB"]):
		return json.dumps("You have a match!")
	else:
		return json.dumps("No match")

@application.route('/<path:path>/')
def send_js(path):
	return send_from_directory(CLIENT_APP_FOLDER,"index.html")

@application.route('/')
def index():
	return send_from_directory(CLIENT_APP_FOLDER,"index.html")

import scipy.io
from scipy import stats
from sklearn.tree import DecisionTreeClassifier
from sklearn.base import BaseEstimator, ClassifierMixin
import pandas as pd
from sklearn.preprocessing import Imputer, OneHotEncoder, LabelEncoder
from sklearn.model_selection import KFold

eps = 1e-5  # a small number


class DecisionTree:

    def __init__(self, max_depth=3, feature_labels=None):
        self.max_depth = max_depth
        self.features = feature_labels
        self.left, self.right = None, None  # for non-leaf nodes
        self.split_idx, self.thresh = None, None  # for non-leaf nodes
        self.data, self.pred = None, None  # for leaf nodes

    @staticmethod
    def entropy(y):
        c = dict(zip(*np.unique(y, return_counts=True)))
        return sum([c[i]/len(y) * np.log(1/(c[i]/len(y))) for i in c])

    @staticmethod
    def information_gain(X, y, thresh):
        dt = DecisionTree.entropy(X)
        X_l, y_l, X_h, y_h = X[y<thresh], y[y<thresh],  X[y>=thresh], y[y>=thresh]
        p_y_l, p_y_h = len(y_l)/len(y), len(y_h)/len(y)
        dt_y_l, dt_y_h = DecisionTree.entropy(X_l), DecisionTree.entropy(X_h)
        dt_xy = p_y_l * dt_y_l + p_y_h * dt_y_h
        return dt - dt_xy

    def split(self, X, y, idx, thresh):
        X0, idx0, X1, idx1 = self.split_test(X, idx=idx, thresh=thresh)
        y0, y1 = y[idx0], y[idx1]
        return X0, y0, X1, y1

    def split_test(self, X, idx, thresh):
        idx0 = np.where(X[:,idx] < thresh)[0]
        idx1 = np.where(X[:,idx] >= thresh)[0]
        X0, X1 = X[idx0, :], X[idx1, :]
        return X0, idx0, X1, idx1

    def fit(self, X, y):
        if self.max_depth > 0:
            # compute entropy gain for all single-dimension splits,
            # thresholding with a linear interpolation of 10 values
            gains = []
            thresh = np.array([np.linspace(np.min(X[:, i]) + eps,
                                           np.max(X[:, i]) - eps, num=10) for i
                               in range(X.shape[1])])
            for i in range(X.shape[1]):
                gains.append([self.information_gain(X[:, i], y, t) for t in
                              thresh[i, :]])

            gains = np.nan_to_num(np.array(gains))
            self.split_idx, thresh_idx = np.unravel_index(np.argmax(gains),
                                                          gains.shape)
            self.thresh = thresh[self.split_idx, thresh_idx]
            X0, y0, X1, y1 = self.split(X, y, idx=self.split_idx,
                                        thresh=self.thresh)
            if X0.size > 0 and X1.size > 0:
                self.left = DecisionTree(max_depth=self.max_depth-1,
                                         feature_labels=self.features)
                self.left.fit(X0, y0)
                self.right = DecisionTree(max_depth=self.max_depth-1,
                                          feature_labels=self.features)
                self.right.fit(X1, y1)
            else:
                self.max_depth = 0
                self.data, self.labels = X, y
                self.pred = stats.mode(y).mode[0]
        else:
            self.data, self.labels = X, y
            self.pred = stats.mode(y).mode[0]
        return self

    def predict(self, X):
        if self.max_depth == 0:
            return self.pred * np.ones(X.shape[0])
        else:
            X0, idx0, X1, idx1 = self.split_test(X, idx=self.split_idx,
                                                 thresh=self.thresh)
            yhat = np.zeros(X.shape[0])
            yhat[idx0] = self.left.predict(X0)
            yhat[idx1] = self.right.predict(X1)
            return yhat


class BaggedTrees(BaseEstimator, ClassifierMixin):

    def __init__(self, params=None, n=200):
        if params is None:
            params = {}
        self.params = params
        self.n = n
        self.decision_trees = [
            DecisionTreeClassifier(random_state=i, **self.params) for i in
            range(self.n)]

    def fit(self, X, y):
        for dt in self.decision_trees:
            i = np.random.choice(len(X), len(X))
            X, y = X[i], y[i]
            dt.fit(X,y)

    def predict(self, X):
        preds = [tree.predict(X) for tree in self.decision_trees]
        return stats.mode(preds)[0][0]

def split(tree, y):
    dts = tree.decision_trees
    d = {}
    for dt in dts:
        s = (y[dt.tree_.feature[0]], dt.tree_.threshold[0])
        d[s] = d.get(s, 0) + 1
    return d

class RandomForest(BaggedTrees):
    def __init__(self, params=None, n=200, m=1): 
        if params is None:
            params = {}
        params['max_features'] = m
        self.n = n
        super().__init__(params, n)
        self.m = m
        self.features = [[] for i in range(self.n)]
class BoostedRandomForest(RandomForest):
    def fit(self, X, y):
        self.w = np.ones(X.shape[0]) / X.shape[0]  # Weights on data
        self.a = np.zeros(self.n)  # Weights on decision trees
        for i in range(self.n):
            dt = self.decision_trees[i]
            datum = np.random.choice(len(X[0]), self.m, replace=False)
            self.features[i] = datum
            Xc = X.T[datum, :].T
            idx = np.random.choice(len(Xc), size=len(Xc), p=self.w/sum(self.w))
            xs, ys = Xc[idx], y[idx]
            dt.fit(xs, ys)
            pred = dt.predict(Xc)
            err = sum(self.w[pred != y]) / sum(self.w)
            self.a[i] = .5 * np.log((1 - err)/err)
            for j in range(len(self.w)):
                if (pred != y)[j]:
                    self.w[j] *= np.exp(self.a[i])
                else:
                    self.w[j] *= np.exp(- self.a[i])
        return self
    def predict(self, X):
        res = np.zeros(X.shape[0])
        for j in range(self.n):
            dt = self.decision_trees[j]
            pred = dt.predict(X[:, self.features[j]]) * self.a[j]
            res += pred
        tip = sum(self.a)/2
        res = [int(r > tip) for r in res]
        return res

def main_method():
    params = {
        "max_depth": 5,
        # "random_state": 6,
        "min_samples_leaf": 10,
    }
    N = 100
    path_train= 'labels.csv'
    df = pd.read_csv(path_train)
    class_names = ["Right", "Left"]
    features = df.columns.values[1:]
    y = df['label'].as_matrix().astype(np.float)
    df = df.drop('label', axis=1)
    X= df.values
    dt = BoostedRandomForest()
    dt.fit(X, y)
    return dt
    # TODO implement and evaluate parts c-h
def smc(X, Y):
	X = np.mat(X)
	Y = np.mat(Y)
	N1, M = np.shape(X)
	sim = ((X*Y.T)+((1-X)*(1-Y).T))/M
	return sim
model = main_method()

from collections import OrderedDict

@application.route('/api/predict/', methods=["GET"])
def predict():
	r = request.args
	if "userName" not in r:
		return json.dumps("bamboozle")
	thisUser = users[r['userName']]
	data = np.array([smc(thisUser.getSurvey(), user.getSurvey()).tolist()[0] + user.getSurvey() for user in users.values()])
	predictions = model.predict(data)
	names = users.values()
	people = dict(zip(names, predictions))
	toReturn = OrderedDict(sorted(people.items(), key=lambda t: t[1], reverse=True))
	return json.dumps(list(toReturn.keys()), default = myconvert)

if __name__ == "__main__":
	# Setting debug to True enables debug output. This line should be
	# removed before deploying a production app.
	application.debug = True
	application.run()