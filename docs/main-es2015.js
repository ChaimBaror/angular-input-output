(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comps_parent_parent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comps/parent/parent.component */ "./src/app/comps/parent/parent.component.ts");
/* harmony import */ var _comps_OI_FM_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/OI-FM/j-page/j-page.component */ "./src/app/comps/OI-FM/j-page/j-page.component.ts");




class AppComponent {
    constructor() {
        this.title = 'child-input';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-parent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-j-page");
    } }, directives: [_comps_parent_parent_component__WEBPACK_IMPORTED_MODULE_1__["ParentComponent"], _comps_OI_FM_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_2__["JPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_parent_parent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/parent/parent.component */ "./src/app/comps/parent/parent.component.ts");
/* harmony import */ var _comps_chlid_chlid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/chlid/chlid.component */ "./src/app/comps/chlid/chlid.component.ts");
/* harmony import */ var _comps_chlid_fn_chlid_fn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/chlid-fn/chlid-fn.component */ "./src/app/comps/chlid-fn/chlid-fn.component.ts");
/* harmony import */ var _comps_parent_fn_parent_fn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/parent-fn/parent-fn.component */ "./src/app/comps/parent-fn/parent-fn.component.ts");
/* harmony import */ var _comps_OI_FM_j_itme_j_itme_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/OI-FM/j-itme/j-itme.component */ "./src/app/comps/OI-FM/j-itme/j-itme.component.ts");
/* harmony import */ var _comps_OI_FM_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/OI-FM/j-page/j-page.component */ "./src/app/comps/OI-FM/j-page/j-page.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _comps_parent_parent_component__WEBPACK_IMPORTED_MODULE_3__["ParentComponent"],
        _comps_chlid_chlid_component__WEBPACK_IMPORTED_MODULE_4__["ChlidComponent"],
        _comps_chlid_fn_chlid_fn_component__WEBPACK_IMPORTED_MODULE_5__["ChlidFnComponent"],
        _comps_parent_fn_parent_fn_component__WEBPACK_IMPORTED_MODULE_6__["ParentFnComponent"],
        _comps_OI_FM_j_itme_j_itme_component__WEBPACK_IMPORTED_MODULE_7__["JItmeComponent"],
        _comps_OI_FM_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_8__["JPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _comps_parent_parent_component__WEBPACK_IMPORTED_MODULE_3__["ParentComponent"],
                    _comps_chlid_chlid_component__WEBPACK_IMPORTED_MODULE_4__["ChlidComponent"],
                    _comps_chlid_fn_chlid_fn_component__WEBPACK_IMPORTED_MODULE_5__["ChlidFnComponent"],
                    _comps_parent_fn_parent_fn_component__WEBPACK_IMPORTED_MODULE_6__["ParentFnComponent"],
                    _comps_OI_FM_j_itme_j_itme_component__WEBPACK_IMPORTED_MODULE_7__["JItmeComponent"],
                    _comps_OI_FM_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_8__["JPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_comps_OI_FM_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_8__["JPageComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgPluralCase"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
    _comps_parent_parent_component__WEBPACK_IMPORTED_MODULE_3__["ParentComponent"],
    _comps_chlid_chlid_component__WEBPACK_IMPORTED_MODULE_4__["ChlidComponent"],
    _comps_chlid_fn_chlid_fn_component__WEBPACK_IMPORTED_MODULE_5__["ChlidFnComponent"],
    _comps_parent_fn_parent_fn_component__WEBPACK_IMPORTED_MODULE_6__["ParentFnComponent"],
    _comps_OI_FM_j_itme_j_itme_component__WEBPACK_IMPORTED_MODULE_7__["JItmeComponent"],
    _comps_OI_FM_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_8__["JPageComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/comps/OI-FM/j-itme/j-itme.component.ts":
/*!********************************************************!*\
  !*** ./src/app/comps/OI-FM/j-itme/j-itme.component.ts ***!
  \********************************************************/
/*! exports provided: JItmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JItmeComponent", function() { return JItmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class JItmeComponent {
    constructor() {
        this.clickcolor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itmedelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isboss = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        setTimeout(() => {
            this.clickcolor.emit(this.jiraff.color);
        }, 1000 * this.jiraff.id);
    }
    clickItme(color) {
        console.log(color);
        this.bak = color;
        this.clickcolor.emit(color);
    }
    clickDelete(id) {
        this.itmedelete.emit(id);
    }
    clickboss(id) {
        this.isboss.emit(id);
    }
}
JItmeComponent.ɵfac = function JItmeComponent_Factory(t) { return new (t || JItmeComponent)(); };
JItmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JItmeComponent, selectors: [["j-itme"]], inputs: { jiraff: "jiraff" }, outputs: { clickcolor: "clickcolor", itmedelete: "itmedelete", isboss: "isboss" }, decls: 16, vars: 9, consts: [[3, "click"], ["coloes", ""]], template: function JItmeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "j-itme works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JItmeComponent_Template_button_click_7_listener() { return ctx.clickItme(ctx.jiraff.color); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JItmeComponent_Template_button_click_10_listener() { return ctx.clickboss(ctx.jiraff.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JItmeComponent_Template_button_click_14_listener() { return ctx.clickDelete(ctx.jiraff.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("j-itme" + (ctx.jiraff.isBossy ? " bossy" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.bak, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("jid", ctx.jiraff.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jiraff.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jiraff.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("this color : ", ctx.jiraff.color, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("is Bossy : ", ctx.jiraff.isBossy, "");
    } }, styles: [".j-itme[_ngcontent-%COMP%]{\r\n     text-align: center ;\r\n     border: coral 2px solid\r\n }\r\n\r\n .j-itme.bossy[_ngcontent-%COMP%]{\r\n    text-align: center ;\r\n    \r\n    border: coral 10px solid\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvT0ktRk0vai1pdG1lL2otaXRtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0NBRUM7eURBQ3dEOztDQUV4RDtLQUNJLG1CQUFtQjtLQUNuQjtDQUNKOztDQUVBO0lBQ0csbUJBQW1COztJQUVuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvT0ktRk0vai1pdG1lL2otaXRtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gLyogW2NsYXNzXT1cIidqLWl0bWUnICsgKGppcmFmZi5pc0Jvc3N5ID8gJ2Jvc3N5JyA6ICcnKVwiXHJcbiBzdHlsZT0gXCJ0ZXh0LWFsaWduOiBjZW50ZXIgO2JvcmRlcjogY29yYWwgMnB4IHNvbGlkIDtcIiAqL1xyXG5cclxuIC5qLWl0bWV7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyIDtcclxuICAgICBib3JkZXI6IGNvcmFsIDJweCBzb2xpZFxyXG4gfVxyXG5cclxuIC5qLWl0bWUuYm9zc3l7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgO1xyXG4gICAgXHJcbiAgICBib3JkZXI6IGNvcmFsIDEwcHggc29saWRcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JItmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'j-itme',
                templateUrl: './j-itme.component.html',
                styleUrls: ['./j-itme.component.css']
            }]
    }], function () { return []; }, { jiraff: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickcolor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itmedelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isboss: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/comps/OI-FM/j-page/j-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/comps/OI-FM/j-page/j-page.component.ts ***!
  \********************************************************/
/*! exports provided: JPageComponent, Jiraff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JPageComponent", function() { return JPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jiraff", function() { return Jiraff; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


function JPageComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](j_r2.name);
} }
function JPageComponent_j_itme_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "j-itme", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickcolor", function JPageComponent_j_itme_13_Template_j_itme_clickcolor_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.bakColor = $event; })("isboss", function JPageComponent_j_itme_13_Template_j_itme_isboss_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.boss($event); })("itmedelete", function JPageComponent_j_itme_13_Template_j_itme_itmedelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deletej($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jiraff", j_r3);
} }
class JPageComponent {
    constructor() {
        this.jiraffArr = [
            // new Jiraff()
            { id: 1, name: "moshe", color: "red", isBossy: false },
            { id: 2, name: "chaim", color: "Azure", isBossy: true },
            { id: 3, name: "jiraff", color: "blue" },
            { id: 4, name: "jojo", color: "BlueViolet" },
            { id: 5, name: "gogo", color: "Orange", isBossy: false },
            { id: 6, name: "lavi", color: "Beige" },
            { id: 7, name: "talger", color: "Coral" },
            { id: 8, name: "beroch", color: "DarkGray" },
            { id: 9, name: "jeron", color: "DarkKhaki", isBossy: false },
            { id: 10, name: "golon", color: "DarkSeaGreen" },
            { id: 11, name: "leon", color: "DarkOrange", isBossy: false },
            { id: 12, name: "podel", color: "DarkSalmon", isBossy: false }
        ];
    }
    ngOnInit() {
    }
    deletej(id_j) {
        let index = this.jiraffArr.findIndex(j => id_j == j.id);
        this.jiraffArr.splice(index, 1);
    }
    boss(id) {
        for (let i = 0; i < this.jiraffArr.length; i++) {
            if (this.jiraffArr[i].id == id) {
                this.jiraffArr[i].isBossy = this.jiraffArr[i].isBossy ? false : true;
            }
        }
    }
}
JPageComponent.ɵfac = function JPageComponent_Factory(t) { return new (t || JPageComponent)(); };
JPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JPageComponent, selectors: [["app-j-page"]], decls: 14, vars: 5, consts: [[4, "ngFor", "ngForOf"], [2, "display", "flex"], [1, "force=jitme"], [3, "jiraff", "clickcolor", "isboss", "itmedelete", 4, "ngFor", "ngForOf"], [3, "jiraff", "clickcolor", "isboss", "itmedelete"]], template: function JPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "j-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "wellcom jiraff ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, JPageComponent_li_5_Template, 2, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "this color new :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, JPageComponent_j_itme_13_Template, 1, 1, "j-itme", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jiraffArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.bakColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bakColor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jiraffArr);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL09JLUZNL2otcGFnZS9qLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-j-page',
                templateUrl: './j-page.component.html',
                styleUrls: ['./j-page.component.css']
            }]
    }], function () { return []; }, null); })();
class Jiraff {
}


/***/ }),

/***/ "./src/app/comps/chlid-fn/chlid-fn.component.ts":
/*!******************************************************!*\
  !*** ./src/app/comps/chlid-fn/chlid-fn.component.ts ***!
  \******************************************************/
/*! exports provided: ChlidFnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChlidFnComponent", function() { return ChlidFnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChlidFnComponent {
    constructor() {
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.secondsCounter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    convertTo(str) {
        let n = parseInt(str);
        this.myEvent.emit(n);
    }
    ngOnInit() {
        setInterval(() => this.secondsCounter.emit(new Date().toLocaleTimeString()), 1000);
    }
}
ChlidFnComponent.ɵfac = function ChlidFnComponent_Factory(t) { return new (t || ChlidFnComponent)(); };
ChlidFnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChlidFnComponent, selectors: [["app-chlid-fn"]], outputs: { myEvent: "myEvent", secondsCounter: "secondsCounter" }, decls: 3, vars: 0, consts: [[3, "input"]], template: function ChlidFnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "chlid-fn works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ChlidFnComponent_Template_input_input_2_listener($event) { return ctx.convertTo($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2NobGlkLWZuL2NobGlkLWZuLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChlidFnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chlid-fn',
                templateUrl: './chlid-fn.component.html',
                styleUrls: ['./chlid-fn.component.css']
            }]
    }], function () { return []; }, { myEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], secondsCounter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/comps/chlid/chlid.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/chlid/chlid.component.ts ***!
  \************************************************/
/*! exports provided: ChlidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChlidComponent", function() { return ChlidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChlidComponent {
    constructor() {
        this.parent1 = "";
        this.parent2 = "";
    }
    ngOnInit() {
    }
}
ChlidComponent.ɵfac = function ChlidComponent_Factory(t) { return new (t || ChlidComponent)(); };
ChlidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChlidComponent, selectors: [["app-chlid"]], inputs: { parent1: "parent1", parent2: "parent2" }, decls: 10, vars: 2, template: function ChlidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "chlid works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "parent1 : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "parent2 : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.parent1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.parent2, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2NobGlkL2NobGlkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChlidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chlid',
                templateUrl: './chlid.component.html',
                styleUrls: ['./chlid.component.css']
            }]
    }], function () { return []; }, { parent1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], parent2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/comps/parent-fn/parent-fn.component.ts":
/*!********************************************************!*\
  !*** ./src/app/comps/parent-fn/parent-fn.component.ts ***!
  \********************************************************/
/*! exports provided: ParentFnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentFnComponent", function() { return ParentFnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ParentFnComponent {
    constructor() { }
    ngOnInit() {
    }
}
ParentFnComponent.ɵfac = function ParentFnComponent_Factory(t) { return new (t || ParentFnComponent)(); };
ParentFnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParentFnComponent, selectors: [["app-parent-fn"]], decls: 2, vars: 0, template: function ParentFnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "parent-fn works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3BhcmVudC1mbi9wYXJlbnQtZm4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParentFnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-parent-fn',
                templateUrl: './parent-fn.component.html',
                styleUrls: ['./parent-fn.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/parent/parent.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/parent/parent.component.ts ***!
  \**************************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _chlid_chlid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chlid/chlid.component */ "./src/app/comps/chlid/chlid.component.ts");
/* harmony import */ var _chlid_fn_chlid_fn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chlid-fn/chlid-fn.component */ "./src/app/comps/chlid-fn/chlid-fn.component.ts");




class ParentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ParentComponent.ɵfac = function ParentComponent_Factory(t) { return new (t || ParentComponent)(); };
ParentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParentComponent, selectors: [["app-parent"]], decls: 20, vars: 2, consts: [[2, "text-align", "center"], ["seconds", ""], [3, "input"], ["inp1", ""], ["inp2", ""], [3, "parent1", "parent2"], [3, "myEvent", "secondsCounter"], ["num", ""]], template: function ParentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "parent works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ParentComponent_Template_input_input_5_listener($event) { return $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 2, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ParentComponent_Template_input_input_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r2.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-chlid", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "output");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-chlid-fn", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("myEvent", function ParentComponent_Template_app_chlid_fn_myEvent_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return _r3.innerHTML = $event; })("secondsCounter", function ParentComponent_Template_app_chlid_fn_secondsCounter_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.innerHTML = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent1", _r1.value)("parent2", _r2.value);
    } }, directives: [_chlid_chlid_component__WEBPACK_IMPORTED_MODULE_1__["ChlidComponent"], _chlid_fn_chlid_fn_component__WEBPACK_IMPORTED_MODULE_2__["ChlidFnComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3BhcmVudC9wYXJlbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-parent',
                templateUrl: './parent.component.html',
                styleUrls: ['./parent.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\stu\Desktop\HomeWork\angular\child-input\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map