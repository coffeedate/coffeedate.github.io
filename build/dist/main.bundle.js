webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_date_date_component__ = __webpack_require__("../../../../../src/app/components/date/date.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_onboarding_onboarding_component__ = __webpack_require__("../../../../../src/app/components/onboarding/onboarding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_survey_survey_component__ = __webpack_require__("../../../../../src/app/components/survey/survey.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_date_date_component__["a" /* DateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'onboarding', component: __WEBPACK_IMPORTED_MODULE_9__components_onboarding_onboarding_component__["a" /* OnboardingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'survey', component: __WEBPACK_IMPORTED_MODULE_10__components_survey_survey_component__["a" /* SurveyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_date_date_component__["a" /* DateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_onboarding_onboarding_component__["a" /* OnboardingComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_survey_survey_component__["a" /* SurveyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuardService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/date/date.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/date/date.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"date\">\n  <h1 style=\"font-family:verdana;\">CoffeeDate Live Cam</h1>\n  <iframe src=\"https://tokbox.com/embed/embed/ot-embed.js?embedId=58d3a254-7912-4048-8c4b-4b75dc8d119b&room=DEFAULT_ROOM&iframe=true\" width=\"800px\" height=\"640px\" allow=\"microphone; camera\" ></iframe>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/date/date.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateComponent = /** @class */ (function () {
    function DateComponent() {
    }
    DateComponent.prototype.ngOnInit = function () {
    };
    DateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-date',
            template: __webpack_require__("../../../../../src/app/components/date/date.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/date/date.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DateComponent);
    return DateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n    width: 200px;\n    /* height: 800px; */\n}\n.container {\n    width: 20vw;\n    margin: 30vh 40vw;\n}\n/* Full-width input fields */\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n/* Set a style for all buttons */\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 49%;\n}\nbutton:hover {\n    opacity: 0.8;\n}\n/* Extra styles for the cancel button */\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n/* Center the image and position the close button */\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n    position: relative;\n}\nimg.avatar {\n    width: 100px;\n    height: 200px;\n    border-radius: 50%;\n}\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n/* The Modal (background) */\n.modal {\n    /* display: none; Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n}\n/* Modal Content/Box */\n.modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n/* The Close Button (x) */\n.close {\n    position: absolute;\n    right: 25px;\n    top: 0;\n    color: #000;\n    font-size: 35px;\n    font-weight: bold;\n}\n.close:hover,\n.close:focus {\n    color: red;\n    cursor: pointer;\n}\n/* Add Zoom Animation */\n.animate {\n    -webkit-animation: animatezoom 0.6s;\n    animation: animatezoom 0.6s\n}\n@-webkit-keyframes animatezoom {\n    from {-webkit-transform: scale(0)} \n    to {-webkit-transform: scale(1)}\n}\n@keyframes animatezoom {\n    from {-webkit-transform: scale(0);transform: scale(0)} \n    to {-webkit-transform: scale(1);transform: scale(1)}\n}\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n<form class=\"login-comp\">\n  <!-- <div class=\"imgcontainer\">\n    <img src=\"https://i.imgur.com/A0ZYKAb.png\" alt=\"Avatar\" class=\"avatar\">\n  </div> -->\n\n  <div class=\"container\">\n    <label><b style=\"color: white;\">Username</b></label>\n    <input [(ngModel)]='username' #ctrl=\"ngModel\" type=\"text\" placeholder=\"Enter Username\" name=\"uname\"required>\n\n    <label><b style=\"color: white;\">Password</b></label>\n    <input [(ngModel)]='password' #ctrl=\"ngModel\" type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\n\n    <button type=\"submit\" (click)='login()'>Login</button>\n    <button type=\"submit\" style=\"background-color: darkgrey !important\" (click)='login()'>Sign Up</button>\n    <!-- <label> \n      <input type=\"checkbox\" checked=\"checked\"> <span style=\"color:white\">Remember me</span>\n    </label> -->\n  </div>\n\n  <!-- <div class=\"container\"> -->\n    <!-- <button type=\"button\" class=\"cancelbtn\">Cancel</button>\n    <span class=\"psw\">Forgot <a href=\"#\">password?</a></span> -->\n  <!-- </div> -->\n</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.username = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        localStorage.setItem('username', this.username);
        localStorage.setItem('password', this.password);
        if (this.username != '' && this.password != '') {
            this.router.navigate(['survey']);
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/onboarding/onboarding.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/onboarding/onboarding.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  onboarding works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/onboarding/onboarding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnboardingComponent = /** @class */ (function () {
    function OnboardingComponent() {
    }
    OnboardingComponent.prototype.ngOnInit = function () {
    };
    OnboardingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-onboarding',
            template: __webpack_require__("../../../../../src/app/components/onboarding/onboarding.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/onboarding/onboarding.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OnboardingComponent);
    return OnboardingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/survey/survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    height: 100vh;\n}\n.carousel-inner{\n    height: 100vh;\n}\n.coffee-icon{\n    height: 40vh;\n    width: 20vw;\n}\n.carousel-caption{\n    padding-bottom: 20vh !important;\n}\n.carousel-inner > .item > img,\n  .carousel-inner > .item > a > img {\n      /* width: 70%; */\n      margin: auto;\n  }\n.my-button {\n    background-color: rgb(74, 111, 160); /* Green */\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n}\n.my-button:active {\n    background-color: rgb(51, 80, 117); \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/survey/survey.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval='false'>\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n\n      <div class=\"item active\">\n        <img src=\"https://i.imgur.com/A0ZYKAb.png\" alt=\"Chania\" width=\"480\" height=\"365\">\n        <div class=\"carousel-caption\">\n          <h1>Hello {{name}}!</h1>\n          <h3>Let us know a bit more about yourself.</h3>\n          <button class=\"my-button\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">Okay!</button>\n        </div>\n      </div>\n\n      <div class=\"item\" *ngFor='let i of arr'>\n        <img src=\"https://i.imgur.com/A0ZYKAb.png\" alt=\"Chania\" width=\"480\" height=\"365\">\n        <div class=\"carousel-caption\" *ngIf='i < 19'>\n          <h1>Question {{i+1}}</h1>\n          <h3>{{questionList[i]}}</h3>\n          <button class=\"my-button\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\" (click)=\"logAnswer(i, 0)\">{{questionAnswers[i][0]}}</button>\n          <button class=\"my-button\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\" (click)=\"logAnswer(i, 1)\">{{questionAnswers[i][1]}}</button>\n        </div>\n        <div class=\"carousel-caption\" *ngIf='i == 19'>\n          <h1>Thanks for completing our onboarding!</h1>\n          <h3>Click the button below to get started!</h3>\n          <button class=\"my-button\" (click)=\"finish()\">Get Started!</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <!-- <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a> -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/survey/survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurveyComponent = /** @class */ (function () {
    function SurveyComponent(router) {
        this.router = router;
        this.questionTitles = [];
        this.questionList = [
            'Do you have or want any pets?',
            'Would you rather stay in and watch netflix or go out?',
            'Is sexual compatibility important to you?',
            'Do believe a cup is half-empty or half-full?',
            'Are you a morning or a night person?',
            'Are you more of a city or country person?',
            'Are you a clean or messy person?',
            'Are you a religious person?',
            'Do you want children?',
            'Do you like to eat out or eat in?',
            'Do you like to play sports?',
            'Do you follow politics?',
            'Are you spontaneous or predictable?',
            'Are you looking for a long-term relationship?',
            'Do you tend to procrastinate?',
            'Do you like to travel?',
            'Are you an introvert or extrovert?',
            'Are you close with your family?',
            'Are you close with your family?'
        ];
        this.questionAnswers = [
            ['pets', 'no pets'],
            ['stay in and watch netflix', 'go out instead of staying in'],
            ['sexual compatibility matters', 'sexual compatibility does not matter'],
            ['cup is half-empty', 'cup is half-full'],
            ['morning person', 'night person'],
            ['city person', 'country person'],
            ['clean', 'messy'],
            ['religious', 'not religious'],
            ['want children', 'do not want children'],
            ['eat in', 'eat out'],
            ['play sports', 'do not play sports'],
            ['follows politics', 'does not follow politics'],
            ['spontaneous', 'predictable'],
            ['want long-term relationship', 'does not want long-term relationship'],
            ['procrastinates', 'does not procrastinate'],
            ['likes to travel', 'does not like to travel'],
            ['introvert', 'extrovert'],
            ['close to your family', 'not close to your family'],
            ['close to your family', 'not close to your family'],
        ];
        this.arr = Array.from({ length: 20 }, function (x, i) { return i; });
        this.userAnswers = Array.from({ length: 20 }, function (x, i) { return ''; });
        this.name = localStorage.getItem('username') || 'YOUR_NAMES';
    }
    SurveyComponent.prototype.ngOnInit = function () {
    };
    SurveyComponent.prototype.logAnswer = function (i, ans) {
        this.userAnswers.splice(i, 1);
        this.userAnswers.splice(i, 0, this.questionAnswers[i][ans]);
        console.log(this.userAnswers);
    };
    SurveyComponent.prototype.finish = function () {
        this.router.navigate(['']);
    };
    SurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-survey',
            template: __webpack_require__("../../../../../src/app/components/survey/survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/survey/survey.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!localStorage.getItem('username') || localStorage.getItem('username') == 'null') {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map