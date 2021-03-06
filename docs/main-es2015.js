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
/* harmony import */ var _comps_OI_FM_j_detels_j_detels_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/OI-FM/j-detels/j-detels.component */ "./src/app/comps/OI-FM/j-detels/j-detels.component.ts");
/* harmony import */ var _comps_OI_FM_add_itme_add_itme_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/OI-FM/add-itme/add-itme.component */ "./src/app/comps/OI-FM/add-itme/add-itme.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













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
        _comps_OI_FM_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_8__["JPageComponent"],
        _comps_OI_FM_j_detels_j_detels_component__WEBPACK_IMPORTED_MODULE_9__["JDetelsComponent"],
        _comps_OI_FM_add_itme_add_itme_component__WEBPACK_IMPORTED_MODULE_10__["AddItmeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
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
                    _comps_OI_FM_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_8__["JPageComponent"],
                    _comps_OI_FM_j_detels_j_detels_component__WEBPACK_IMPORTED_MODULE_9__["JDetelsComponent"],
                    _comps_OI_FM_add_itme_add_itme_component__WEBPACK_IMPORTED_MODULE_10__["AddItmeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_comps_OI_FM_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_8__["JPageComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgPluralCase"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
    _comps_parent_parent_component__WEBPACK_IMPORTED_MODULE_3__["ParentComponent"],
    _comps_chlid_chlid_component__WEBPACK_IMPORTED_MODULE_4__["ChlidComponent"],
    _comps_chlid_fn_chlid_fn_component__WEBPACK_IMPORTED_MODULE_5__["ChlidFnComponent"],
    _comps_parent_fn_parent_fn_component__WEBPACK_IMPORTED_MODULE_6__["ParentFnComponent"],
    _comps_OI_FM_j_itme_j_itme_component__WEBPACK_IMPORTED_MODULE_7__["JItmeComponent"],
    _comps_OI_FM_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_8__["JPageComponent"],
    _comps_OI_FM_j_detels_j_detels_component__WEBPACK_IMPORTED_MODULE_9__["JDetelsComponent"],
    _comps_OI_FM_add_itme_add_itme_component__WEBPACK_IMPORTED_MODULE_10__["AddItmeComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/comps/OI-FM/add-itme/add-itme.component.ts":
/*!************************************************************!*\
  !*** ./src/app/comps/OI-FM/add-itme/add-itme.component.ts ***!
  \************************************************************/
/*! exports provided: AddItmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItmeComponent", function() { return AddItmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _j_page_j_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../j-page/j-page.component */ "./src/app/comps/OI-FM/j-page/j-page.component.ts");



class AddItmeComponent {
    constructor() {
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    addNewItem(name, id, color, boos) {
        let value = new _j_page_j_page_component__WEBPACK_IMPORTED_MODULE_1__["Jiraff"]();
        value.name = name;
        value.id = id;
        value.color = color;
        value.isBossy = boos;
        console.log(value);
        this.newItemEvent.emit(value);
    }
}
AddItmeComponent.ɵfac = function AddItmeComponent_Factory(t) { return new (t || AddItmeComponent)(); };
AddItmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddItmeComponent, selectors: [["add-itme"]], outputs: { newItemEvent: "newItemEvent" }, decls: 33, vars: 0, consts: [["butt", ""], [1, "adding"], ["type", "text"], ["newItem", ""], ["type", "number"], ["newItemid", ""], ["type", "color"], ["newItemColor", ""], ["type", "checkbox"], ["newItemBoss", ""], [3, "click"]], template: function AddItmeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add-itme works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add an name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add an id : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add an color: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add an isBossy:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItmeComponent_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return ctx.addNewItem(_r1.value, _r2.value, _r3.value, _r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Add to parent's list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".adding[_ngcontent-%COMP%]{\r\n   background: cornsilk;\r\n   border: chocolate 2px solid;\r\n   margin: 200px ;\r\n   padding: 5px;text-align: center;\r\nwidth: 200px;\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvT0ktRk0vYWRkLWl0bWUvYWRkLWl0bWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLG9CQUFvQjtHQUNwQiwyQkFBMkI7R0FDM0IsY0FBYztHQUNkLFlBQVksQ0FBQyxrQkFBa0I7QUFDbEMsWUFBWTs7O0FBR1oiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9PSS1GTS9hZGQtaXRtZS9hZGQtaXRtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZGluZ3tcclxuICAgYmFja2dyb3VuZDogY29ybnNpbGs7XHJcbiAgIGJvcmRlcjogY2hvY29sYXRlIDJweCBzb2xpZDtcclxuICAgbWFyZ2luOiAyMDBweCA7XHJcbiAgIHBhZGRpbmc6IDVweDt0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbndpZHRoOiAyMDBweDtcclxuXHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddItmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'add-itme',
                templateUrl: './add-itme.component.html',
                styleUrls: ['./add-itme.component.css']
            }]
    }], function () { return []; }, { newItemEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/comps/OI-FM/j-detels/j-detels.component.ts":
/*!************************************************************!*\
  !*** ./src/app/comps/OI-FM/j-detels/j-detels.component.ts ***!
  \************************************************************/
/*! exports provided: JDetelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JDetelsComponent", function() { return JDetelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function JDetelsComponent_h1_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "this is bossy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class JDetelsComponent {
    constructor() { }
    ngOnInit() {
    }
}
JDetelsComponent.ɵfac = function JDetelsComponent_Factory(t) { return new (t || JDetelsComponent)(); };
JDetelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JDetelsComponent, selectors: [["j-detels"]], inputs: { detel_j: "detel_j" }, decls: 17, vars: 6, consts: [[1, "detel"], [4, "ngIf"]], template: function JDetelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "j-detels works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "the is dblclick in itme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, JDetelsComponent_h1_7_Template, 2, 0, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ID :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "Span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "color : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.detel_j.color, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detel_j.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detel_j.isBossy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detel_j.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detel_j.color);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".detel[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    border: 1px solid skyblue;\r\n    margin: 100px;\r\n    padding: 10px;\r\n    background: violet;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvT0ktRk0vai1kZXRlbHMvai1kZXRlbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9PSS1GTS9qLWRldGVscy9qLWRldGVscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGVse1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2t5Ymx1ZTtcclxuICAgIG1hcmdpbjogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmlvbGV0O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JDetelsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'j-detels',
                templateUrl: './j-detels.component.html',
                styleUrls: ['./j-detels.component.css']
            }]
    }], function () { return []; }, { detel_j: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
        this.detelItnefm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        setInterval(() => {
            this.clickcolor.emit(this.jiraff.color);
            this.bak = this.jiraff.color;
        }, 2000 * this.jiraff.id);
    }
    detelItne(j) {
        console.log("what is click :" + j);
        this.detelItnefm.emit(j);
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
JItmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JItmeComponent, selectors: [["j-itme"]], inputs: { jiraff: "jiraff" }, outputs: { clickcolor: "clickcolor", itmedelete: "itmedelete", isboss: "isboss", detelItnefm: "detelItnefm" }, decls: 17, vars: 9, consts: [[3, "dblclick"], [3, "click"], ["coloes", ""]], template: function JItmeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "j-itme works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function JItmeComponent_Template_div_dblclick_2_listener() { return ctx.detelItne(ctx.jiraff); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JItmeComponent_Template_button_click_7_listener() { return ctx.clickItme(ctx.jiraff.color); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JItmeComponent_Template_button_click_11_listener() { return ctx.clickboss(ctx.jiraff.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JItmeComponent_Template_button_click_15_listener() { return ctx.clickDelete(ctx.jiraff.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "delete");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("is Bossy : ", ctx.jiraff.isBossy, "");
    } }, styles: [".j-itme[_ngcontent-%COMP%]{\r\n     text-align: center ;\r\n     border: coral 2px solid\r\n }\r\n\r\n .j-itme.bossy[_ngcontent-%COMP%]{\r\n    text-align: center ;\r\n    \r\n    border: rgb(230, 217, 103) 10px solid\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvT0ktRk0vai1pdG1lL2otaXRtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0NBRUM7eURBQ3dEOztDQUV4RDtLQUNJLG1CQUFtQjtLQUNuQjtDQUNKOztDQUVBO0lBQ0csbUJBQW1COztJQUVuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvT0ktRk0vai1pdG1lL2otaXRtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gLyogW2NsYXNzXT1cIidqLWl0bWUnICsgKGppcmFmZi5pc0Jvc3N5ID8gJ2Jvc3N5JyA6ICcnKVwiXHJcbiBzdHlsZT0gXCJ0ZXh0LWFsaWduOiBjZW50ZXIgO2JvcmRlcjogY29yYWwgMnB4IHNvbGlkIDtcIiAqL1xyXG5cclxuIC5qLWl0bWV7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyIDtcclxuICAgICBib3JkZXI6IGNvcmFsIDJweCBzb2xpZFxyXG4gfVxyXG5cclxuIC5qLWl0bWUuYm9zc3l7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgO1xyXG4gICAgXHJcbiAgICBib3JkZXI6IHJnYigyMzAsIDIxNywgMTAzKSAxMHB4IHNvbGlkXHJcbn0iXX0= */"] });
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
        }], detelItnefm: [{
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


function JPageComponent_j_itme_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "j-itme", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickcolor", function JPageComponent_j_itme_11_Template_j_itme_clickcolor_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.bakColor = $event; })("detelItnefm", function JPageComponent_j_itme_11_Template_j_itme_detelItnefm_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.detelfm = $event; })("isboss", function JPageComponent_j_itme_11_Template_j_itme_isboss_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.boss($event); })("itmedelete", function JPageComponent_j_itme_11_Template_j_itme_itmedelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deletej($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jiraff", j_r1);
} }
class JPageComponent {
    constructor() {
        this.jiraffArr = [
            // new Jiraff()
            { id: 1, name: "moshe", color: "red", isBossy: false },
            { id: 2, name: "chaim", color: "Azure", isBossy: true },
            { id: 3, name: "jiraff", color: "blue" },
            { id: 4, name: "jojo", color: "BlueViolet" },
            { id: 5, name: "gogo", color: "GreenYellow", isBossy: false },
            { id: 6, name: "lavi", color: "Beige" },
            { id: 7, name: "talger", color: "Coral" },
            { id: 8, name: "beroch", color: "DarkGray" },
            { id: 9, name: "jeron", color: "DarkKhaki", isBossy: false },
            { id: 10, name: "golon", color: "DarkSeaGreen" },
            { id: 11, name: "leon", color: "DarkOrange", isBossy: false },
            { id: 12, name: "podel", color: "Gold", isBossy: false }
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
    add(itme) {
        this.jiraffArr.push(itme);
    }
}
JPageComponent.ɵfac = function JPageComponent_Factory(t) { return new (t || JPageComponent)(); };
JPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JPageComponent, selectors: [["app-j-page"]], decls: 17, vars: 5, consts: [[1, "contener"], [2, "text-align", "center"], [2, "display", "flex"], [1, "force=jitme"], ["class", " j-item-as-list", 3, "jiraff", "clickcolor", "detelItnefm", "isboss", "itmedelete", 4, "ngFor", "ngForOf"], [3, "newItemEvent"], [3, "detel_j"], [1, "j-item-as-list", 3, "jiraff", "clickcolor", "detelItnefm", "isboss", "itmedelete"]], template: function JPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "j-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Wellcom Jiraff Component ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "this color new :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, JPageComponent_j_itme_11_Template, 1, 1, "j-itme", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "add-itme", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newItemEvent", function JPageComponent_Template_add_itme_newItemEvent_14_listener($event) { return ctx.add($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "j-detels", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.bakColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bakColor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jiraffArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detel_j", ctx.detelfm);
    } }, styles: [".contener[_ngcontent-%COMP%]{\r\n    margin: 10%;\r\n}\r\n\r\n.j-item-as-list[_ngcontent-%COMP%]{\r\n    display: list-item;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvT0ktRk0vai1wYWdlL2otcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvT0ktRk0vai1wYWdlL2otcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmVye1xyXG4gICAgbWFyZ2luOiAxMCU7XHJcbn1cclxuXHJcbi5qLWl0ZW0tYXMtbGlzdHtcclxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcclxufSJdfQ== */"] });
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