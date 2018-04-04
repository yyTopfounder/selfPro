webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Administrator\Desktop\selfPro\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab1Root" tabTitle="板块" tabIcon="apps"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="发帖" tabIcon="paper"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="我的" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\selfPro\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\selfPro\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\selfPro\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\selfPro\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\selfPro\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, el, menuCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.el = el;
        this.menuCtrl = menuCtrl;
        this.newMove = 0;
        this.themColor = '#30d05f';
        setInterval(function () {
            if (_this.newMove + 60 === 0) {
                _this.el.nativeElement.querySelector('.newItem').style.marginTop = '0px';
                _this.newMove = 0;
            }
            else {
                var count_1 = 0;
                var intervalT = setInterval(function () {
                    _this.newMove -= 2;
                    count_1 += 1;
                    if (count_1 === 15) {
                        clearInterval(intervalT);
                    }
                    else {
                        _this.el.nativeElement.querySelector('.newItem').style.marginTop = _this.newMove + 'px';
                    }
                }, 80);
            }
        }, 5000);
    }
    HomePage.prototype.openMenu = function (flag) {
        if (flag) {
            this.menuCtrl.enable(true, 'filterMenu');
            this.menuCtrl.enable(false, 'mangeMenu');
        }
        else {
            this.menuCtrl.enable(false, 'filterMenu');
            this.menuCtrl.enable(true, 'mangeMenu');
        }
        this.menuCtrl.open();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\selfPro\src\pages\home\home.html"*/'<ion-menu id="filterMenu" [content]="mycontent" side="right">\n  <ion-content>\n    <div class="trafficContrain" [ngStyle]="{\'background-color\':themColor}">交通</div>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3>\n          <button ion-button class="titleButton" outline [ngStyle]="{\'border-color\':themColor}">1号线</button>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button class="titleButton" outline [ngStyle]="{\'border-color\':themColor}">2号线</button>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button class="titleButton" outline [ngStyle]="{\'border-color\':themColor}">3号线</button>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button class="titleButton" outline [ngStyle]="{\'border-color\':themColor}">4号线</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <canvas width="100%" height="60"></canvas>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-3>\n          <button ion-button class="titleButton" outline [ngStyle]="{\'border-color\':themColor}">5号线</button>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button class="titleButton" outline [ngStyle]="{\'border-color\':themColor}">6号线</button>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button class="titleButton" outline [ngStyle]="{\'border-color\':themColor}">7号线</button>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button class="titleButton" outline [ngStyle]="{\'border-color\':themColor}">8号线</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-3>\n          <button ion-button class="titleButton" outline [ngStyle]="{\'border-color\':themColor}">9号线</button>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button class="titleButton" outline [ngStyle]="{\'border-color\':themColor}">10号线</button>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button class="titleButton" outline [ngStyle]="{\'border-color\':themColor}">11号线</button>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button class="titleButton" outline [ngStyle]="{\'border-color\':themColor}">12号线</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-3>\n          <button ion-button class="titleButton" outline [ngStyle]="{\'border-color\':themColor}">13号线</button>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button class="titleButton" outline [ngStyle]="{\'border-color\':themColor}">14号线</button>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button class="titleButton" outline [ngStyle]="{\'border-color\':themColor}">15号线</button>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button class="titleButton" outline [ngStyle]="{\'border-color\':themColor}">16号线</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item-group>\n      <ion-item-divider [ngStyle]="{\'background-color\':themColor}">其他</ion-item-divider>\n      <ion-item>论坛相册</ion-item>\n      <ion-item>热帖</ion-item>\n      <ion-item>悬赏</ion-item>\n    </ion-item-group>\n  </ion-content>\n</ion-menu>\n<ion-menu [content]="mycontent" side="right" id="mangeMenu">\n  <ion-item-group>\n    <ion-item-divider [ngStyle]="{\'background-color\':themColor}">换肤</ion-item-divider>\n    <ion-item>草木绿</ion-item>\n    <ion-item>魅力红</ion-item>\n    <ion-item>天空蓝</ion-item>\n  </ion-item-group>\n</ion-menu>\n<ion-content #mycontent>\n  <div class="bannerContrain">\n    <ion-slides pager autoplay="3000" loop=true>\n      <ion-slide><img src="http://placehold.it/350x100" alt=""></ion-slide>\n      <ion-slide><img src="http://placehold.it/350x100" alt=""></ion-slide>\n      <ion-slide><img src="http://placehold.it/350x100" alt=""></ion-slide>\n    </ion-slides>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n        <button ion-button class="titleButton" [ngStyle]="{\'background-color\':themColor}">\n          <ion-icon name="create"></ion-icon>&nbsp;&nbsp;签到\n        </button>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button class="titleButton" [ngStyle]="{\'background-color\':themColor}">\n          <ion-icon name="eye"></ion-icon>&nbsp;&nbsp;关注\n        </button>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button class="titleButton" (click)="openMenu(false)" [ngStyle]="{\'background-color\':themColor}">\n          <ion-icon name="people"></ion-icon>&nbsp;&nbsp;管理\n        </button>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button class="titleButton" (click)="openMenu(true)" [ngStyle]="{\'background-color\':themColor}">\n          <ion-icon name="list"></ion-icon>&nbsp;&nbsp;筛选\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="newContrain">\n    <div class="newItem">\n      <div><ion-icon name="megaphone"></ion-icon>&nbsp;&nbsp;<span>消息1</span></div>\n      <div><ion-icon name="mail"></ion-icon>&nbsp;&nbsp;<span>消息2</span></div>\n      <div><ion-icon name="alarm"></ion-icon>&nbsp;&nbsp;<span>消息3</span></div>\n    </div>\n  </div>\n\n  <ion-card>\n    <ion-card-header>\n      <div class="cardImage">\n        <img src="http://placehold.it/50x50" alt="">\n      </div>\n      <div class="cardInfo">\n        <div>\n          <span [ngStyle]="{\'color\':themColor}">张三</span>\n          <span>v.2</span>\n          <span><ion-icon name="arrow-round-up"></ion-icon></span>\n        </div>\n        <div>\n          <span>2018-1-1</span>\n          <span>浏览:8888</span>\n        </div>\n      </div>\n    </ion-card-header>\n    <ion-card-content>\n      <p class="cardContentTitle">一号线通河新村站步行15分钟品尚公寓多样房型选择满足不同选择</p>\n      <p class="cardContentText"><span [ngStyle]="{\'color\':themColor,\'border-color\':themColor}">通河新村</span>&nbsp;&nbsp;\n        一号线通河新村站步行15分钟品尚公寓多样房型选择满足不同选择,\n        一号线通河新村站步行15分钟品尚公寓多样房型选择满足不同选择</p>\n      <p class="showAllTexe"><span [ngStyle]="{\'color\':themColor}">展示全文</span></p>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <img src="http://placehold.it/50x50" alt="">\n          </ion-col>\n          <ion-col col-4>\n            <img src="http://placehold.it/50x50" alt="">\n          </ion-col>\n          <ion-col col-4>\n            <img src="http://placehold.it/50x50" alt="">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            <img src="http://placehold.it/50x50" alt="">\n          </ion-col>\n          <ion-col col-4>\n            <img src="http://placehold.it/50x50" alt="">\n          </ion-col>\n          <ion-col col-4>\n            <img src="http://placehold.it/50x50" alt="">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3>\n            <button ion-button outline class="titleButton" [ngStyle]="{\'color\':themColor,\'border-color\':themColor}">\n              <ion-icon name="logo-yen"></ion-icon>&nbsp;&nbsp;赏\n            </button>\n          </ion-col>\n          <ion-col col-3>\n            <button ion-button outline class="titleButton" [ngStyle]="{\'color\':themColor,\'border-color\':themColor}">\n              <ion-icon name="share-alt"></ion-icon>&nbsp;&nbsp;转\n            </button>\n          </ion-col>\n          <ion-col col-3>\n            <button ion-button outline class="titleButton" [ngStyle]="{\'color\':themColor,\'border-color\':themColor}">\n              <ion-icon name="text"></ion-icon>&nbsp;&nbsp;评\n            </button>\n          </ion-col>\n          <ion-col col-3>\n            <button ion-button outline class="titleButton" [ngStyle]="{\'color\':themColor,\'border-color\':themColor}">\n              <ion-icon name="thumbs-up"></ion-icon>&nbsp;&nbsp;赞\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div style="border-bottom: 1px solid #cccccc"></div>\n\n      <div class="commnetContrain">\n        <p><span [ngStyle]="{\'color\':themColor}">王五</span>:<span>房源不错!</span></p>\n        <p><span [ngStyle]="{\'color\':themColor}">王五</span>:<span>房源不错!</span></p>\n      </div>\n\n      <div class="moreCommentBtn" style="" [ngStyle]="{\'color\':themColor}">显示全部8条回复</div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\selfPro\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Administrator\Desktop\selfPro\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\selfPro\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map