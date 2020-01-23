(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations/animation.ts":
/*!*****************************************!*\
  !*** ./src/app/animations/animation.ts ***!
  \*****************************************/
/*! exports provided: fadeFilter, fadeNameTable, fadeTable, fadeTableItem, fadePaginator, loginOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeFilter", function() { return fadeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeNameTable", function() { return fadeNameTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeTable", function() { return fadeTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeTableItem", function() { return fadeTableItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadePaginator", function() { return fadePaginator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginOut", function() { return loginOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeFilter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeFilter', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-100px)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0px)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(600)
    ])
]);
var fadeNameTable = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeNameTable', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-30px)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0px)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(600)
    ])
]);
var fadeTable = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeTable', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(50px)' }))
    ])
]);
var fadeTableItem = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeTableItem', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-30px)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0px)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(600)
    ])
]);
var fadePaginator = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadePaginator', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(50px)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0px)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter, :leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(600)
    ])
]);
var loginOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('loginOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _document_add_pattern_document_add_pattern_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document-add-pattern/document-add-pattern.component */ "./src/app/document-add-pattern/document-add-pattern.component.ts");
/* harmony import */ var _documents_add_work_contract_work_contract_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documents-add/work-contract/work-contract.component */ "./src/app/documents-add/work-contract/work-contract.component.ts");
/* harmony import */ var _documents_add_credit_contract_credit_contract_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./documents-add/credit-contract/credit-contract.component */ "./src/app/documents-add/credit-contract/credit-contract.component.ts");
/* harmony import */ var _documents_add_cooperation_contract_cooperation_contract_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./documents-add/cooperation-contract/cooperation-contract.component */ "./src/app/documents-add/cooperation-contract/cooperation-contract.component.ts");
/* harmony import */ var _documents_add_contract_of_sale_contract_of_sale_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./documents-add/contract-of-sale/contract-of-sale.component */ "./src/app/documents-add/contract-of-sale/contract-of-sale.component.ts");
/* harmony import */ var _documents_add_rental_contract_rental_contract_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./documents-add/rental-contract/rental-contract.component */ "./src/app/documents-add/rental-contract/rental-contract.component.ts");
/* harmony import */ var _document_pattern_document_pattern_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./document-pattern/document-pattern.component */ "./src/app/document-pattern/document-pattern.component.ts");
/* harmony import */ var _documents_edit_rental_edit_rental_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./documents-edit/rental-edit/rental-edit.component */ "./src/app/documents-edit/rental-edit/rental-edit.component.ts");
/* harmony import */ var _documents_edit_sale_edit_sale_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./documents-edit/sale-edit/sale-edit.component */ "./src/app/documents-edit/sale-edit/sale-edit.component.ts");
/* harmony import */ var _documents_edit_cooperation_edit_cooperation_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./documents-edit/cooperation-edit/cooperation-edit.component */ "./src/app/documents-edit/cooperation-edit/cooperation-edit.component.ts");
/* harmony import */ var _documents_edit_credit_edit_credit_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./documents-edit/credit-edit/credit-edit.component */ "./src/app/documents-edit/credit-edit/credit-edit.component.ts");
/* harmony import */ var _documents_edit_work_edit_work_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./documents-edit/work-edit/work-edit.component */ "./src/app/documents-edit/work-edit/work-edit.component.ts");

















var routes = [
    {
        path: 'documents-list',
        component: _document_pattern_document_pattern_component__WEBPACK_IMPORTED_MODULE_11__["DocumentPatternComponent"]
    },
    {
        path: 'work-contract',
        component: _documents_add_work_contract_work_contract_component__WEBPACK_IMPORTED_MODULE_6__["WorkContractComponent"]
    },
    {
        path: 'loan-contract',
        component: _documents_add_credit_contract_credit_contract_component__WEBPACK_IMPORTED_MODULE_7__["CreditContractComponent"]
    },
    {
        path: 'cooperation-contract',
        component: _documents_add_cooperation_contract_cooperation_contract_component__WEBPACK_IMPORTED_MODULE_8__["CooperationContractComponent"]
    },
    {
        path: 'contract-of-sale',
        component: _documents_add_contract_of_sale_contract_of_sale_component__WEBPACK_IMPORTED_MODULE_9__["ContractOfSaleComponent"]
    },
    {
        path: 'lease-contract',
        component: _documents_add_rental_contract_rental_contract_component__WEBPACK_IMPORTED_MODULE_10__["RentalContractComponent"]
    },
    {
        path: 'work-edit',
        component: _documents_edit_work_edit_work_edit_component__WEBPACK_IMPORTED_MODULE_16__["WorkEditComponent"]
    },
    {
        path: 'loan-edit',
        component: _documents_edit_credit_edit_credit_edit_component__WEBPACK_IMPORTED_MODULE_15__["CreditEditComponent"]
    },
    {
        path: 'cooperation-edit',
        component: _documents_edit_cooperation_edit_cooperation_edit_component__WEBPACK_IMPORTED_MODULE_14__["CooperationEditComponent"]
    },
    {
        path: 'sale-edit',
        component: _documents_edit_sale_edit_sale_edit_component__WEBPACK_IMPORTED_MODULE_13__["SaleEditComponent"]
    },
    {
        path: 'lease-edit',
        component: _documents_edit_rental_edit_rental_edit_component__WEBPACK_IMPORTED_MODULE_12__["RentalEditComponent"]
    },
    {
        path: 'document-add',
        component: _document_add_pattern_document_add_pattern_component__WEBPACK_IMPORTED_MODULE_5__["DocumentAddPatternComponent"]
    },
    {
        path: 'users-list',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-nav li {\n    padding-right: 20px\n}\n\n.container{\n    padding-top: 10%\n}\n\n.blur{\n    -webkit-filter: blur(5px);\n            filter: blur(5px)\n}\n\n.card{\n    text-align: end;    \n}\n\n.card-img-overlay{\n    padding-top: 12%;\n    padding-right: 10%\n}\n\n.app {\n    background-image: linear-gradient( rgb(129, 169, 206), rgb(255, 255, 255));\n    background-position: center;\n    background-blend-mode: overlay;\n}\n\n.form {\n    margin-top: 10%\n}\n\n.box {    \n    overflow: hidden;\n    width: 360px;\n    grid-row-end: 400px;\n    transition: 0.5s;   \n    box-sizing: border-box;\n    padding: 30px;\n    box-shadow: -10px 25px 50px rgb(0,0,0,.2);     \n    text-shadow: 1px 1px 1px #fff;       \n}\n\n.footer{\n    margin-top: 50px;\n    background: rgb(81, 94, 117);\n    height: 100px;\n    width: 100%\n}\n\n.footertext{\n    padding-top: 25px;\n    color: #fff;\n\n}\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHlCQUFnQjtZQUFoQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksMEVBQTBFO0lBQzFFLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSTtBQUNKOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVzs7QUFFZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1uYXYgbGkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHhcbn1cblxuLmNvbnRhaW5lcntcbiAgICBwYWRkaW5nLXRvcDogMTAlXG59XG5cbi5ibHVye1xuICAgIGZpbHRlcjogYmx1cig1cHgpXG59XG5cbi5jYXJke1xuICAgIHRleHQtYWxpZ246IGVuZDsgICAgXG59XG5cbi5jYXJkLWltZy1vdmVybGF5e1xuICAgIHBhZGRpbmctdG9wOiAxMiU7XG4gICAgcGFkZGluZy1yaWdodDogMTAlXG59XG5cbi5hcHAge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggcmdiKDEyOSwgMTY5LCAyMDYpLCByZ2IoMjU1LCAyNTUsIDI1NSkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG92ZXJsYXk7XG59XG5cbi5mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiAxMCVcbn1cblxuXG4uYm94IHsgICAgXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMzYwcHg7XG4gICAgZ3JpZC1yb3ctZW5kOiA0MDBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzOyAgIFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3gtc2hhZG93OiAtMTBweCAyNXB4IDUwcHggcmdiKDAsMCwwLC4yKTsgICAgIFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjZmZmOyAgICAgICBcbn1cblxuLmZvb3RlcntcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYig4MSwgOTQsIDExNyk7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJVxufVxuXG4uZm9vdGVydGV4dHtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBjb2xvcjogI2ZmZjtcblxufVxuXG5cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark sticky-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand  h1\" style=\"color: white\">Document Managament System</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navres\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navres\">\n      <ul class=\"navbar-nav ml-auto \" routerLinkActive=\"active\">\n        <li *ngIf=\"authority\" class=\"nav-item \">\n          <a class=\"btn btn-outline-success\" routerLink=\"document-add\">Create contract!</a>\n        </li>\n        <li *ngIf=\"authority === 'admin'\" class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"users-list\">Show all users</a>\n        </li>\n        <li *ngIf=\"authority === 'admin'\" class=\"nav-item \">\n          <a class=\"nav-link\" id=\"docs\" routerLink=\"documents-list\">Show contracts</a>\n        </li>\n        <li *ngIf=\"authority === 'user'\" class=\"nav-item \">\n          <a class=\"nav-link\" id=\"docs\" routerLink=\"documents-list\">Show my contracts</a>\n        </li>\n\n        <li *ngIf=\"authority === 'user'\" class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"profile\">{{username}}</a>\n        </li>\n        <li *ngIf=\"authority === 'admin'\" class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"profile\">{{username}} (Admin)</a>\n        </li>\n\n        <li *ngIf=\"!authority\" class=\"nav-item \">\n          <a class=\"btn btn-outline-success\" id=\"show_login\" routerLink=\"\" data-toggle=\"modal\" data-target=\"#login\">Login</a>\n        </li>\n        <li *ngIf=\"!authority\" class=\"nav-item \">\n          <a class=\"btn btn-outline-primary\" id=\"show_register\" routerLink=\"\" data-toggle=\"modal\" data-target=\"#reg\">Register</a>\n        </li>\n\n        <button *ngIf=\"authority\" class=\"btn btn-danger\" routerLink=\"/\" (click)=\"logout()\">Logout</button>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<!-- home page -->\n<div @loginOut @fadeTableItem *ngIf=\"!authority\" class=\"app \">\n\n  <div class=\"card bg-dark text-dark \">\n    <img src=\"../../assets/images/home0.jpg\" class=\"d-block w-100 blur\">\n    <div class=\"card-img-overlay \">\n      <h1 class=\"display-1 \">DMS</h1>\n      <h2>Document Management System</h2>\n    </div>\n  </div>\n\n  <div class=\"container text-center\">\n\n    <h1 class=\"display-4\">Reduce document creation time</h1>\n    <hr>\n    <h4>Sales teams spend about 40% of the time creating documents</h4>\n\n    <br><br>\n    <h1 class=\"display-4\">Document generation</h1>\n    <hr>\n    <h4>Generate custom, error-free documents with partners faster than ever</h4>\n    <br><br>\n\n    <h1 class=\"display-4\">Who use DMS?</h1>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col \">\n        <div class=\"box\">\n          <h4>Sales reps</h4>\n          <hr>\n          <h6>Sales teams without document generation software spend a quarter or more of their\n            working\n            hours creating documents. With DMS, that time is reduced by as much as 80%.</h6>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"box\">\n          <h4>Contract managers</h4>\n          <h6>Assembling new contracts is a time-consuming process that can be drastically\n            improved.\n            DMS answers the challenge by making it painless to create, customize, review, and\n            collaborate on new contracts or renewals.</h6>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"footer text-center\">\n<h4 class=\"footertext\">Zaslinks 2020</h4>\n  </div>\n</div>\n\n\n<!-- content -->\n<div *ngIf=\"authority\">\n  <router-outlet></router-outlet>\n</div>\n\n<!-- form login -->\n<div class=\"modal fade\" id=\"login\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title display-4\" id=\"exampleModalCenterTitle\">Login form</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #closeLog>\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <form name=\"form1\" #fl=\"ngForm\" novalidate>\n          <div class=\"form-group\">\n\n            <input id=\"username\" type=\"text\" class=\"form-control\" name=\"usernamel\" placeholder=\"Username\"\n              [(ngModel)]=\"form1.usernamel\" #usernamel=\"ngModel\" required minlength=\"5\"\n              [ngClass]=\"{'is-valid':usernamel.valid && usernamel.touched,'is-invalid':usernamel.invalid && usernamel.touched}\" />\n            <div *ngIf=\"usernamel.touched && usernamel.invalid\">\n              <small class=\"form-text alert alert-danger\" *ngIf=\"usernamel.errors.required\">Username is\n                required</small>\n              <small class=\"form-text alert alert-danger\" *ngIf=\"usernamel.errors.minlength\">Username must be at least\n                5\n                characters</small>\n            </div>\n\n          </div>\n          <div class=\"form-group \">\n            <input id=\"password\" type=\"password\" class=\"form-control\" name=\"passwordl\" placeholder=\"Password\"\n              [(ngModel)]=\"form1.passwordl\" #passwordl=\"ngModel\" required minlength=\"6\"\n              [ngClass]=\"{'is-valid':passwordl.valid && passwordl.touched,'is-invalid':passwordl.invalid && passwordl.touched}\" />\n            <div *ngIf=\"passwordl.touched && passwordl.invalid\">\n              <small class=\"form-text alert alert-danger\" *ngIf=\"passwordl.errors.required\">Password is\n                required</small>\n              <small class=\"form-text alert alert-danger\" *ngIf=\"passwordl.errors.minlength\">Password must be at least\n                6\n                characters</small>\n            </div>\n          </div>\n          <div class=\"form-group d-flex justify-content-center\">\n            <button id=\"login\" class=\"btn btn-primary \" routerLink=\"/profile\"  [disabled]=\"fl.form.invalid\"\n              (click)=\"onSubmitl(fl)\">Login</button>\n\n          </div>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- register form -->\n<div class=\"modal fade\" id=\"reg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title display-4\" id=\"exampleModalCenterTitle\">Registration form</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #closeReg>\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <form name=\"form2\" #fr=\"ngForm\" novalidate>\n          <div class=\"form-group\">\n            <input id=\"rname\" type=\"text\" class=\"form-control\" placeholder=\"Your full name\" name=\"namer\" [(ngModel)]=\"form2.namer\"\n              #namer=\"ngModel\" required maxlength=\"50\" minlength=\"5\"\n              [ngClass]=\"{'is-valid':namer.valid && namer.touched,'is-invalid':namer.invalid && namer.touched}\" />\n            <div *ngIf=\"fr.submitted && namer.invalid || namer.touched && namer.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"namer.errors.required\">Name is required</small>\n              <small class=\"form-text alert alert-warning\" *ngIf=\"namer.errors.minlength\">Name must be at least 5\n                characters</small>\n              <small class=\"form-text alert alert-warning\" *ngIf=\"namer.errors.maxlength\">Name must be less than 50\n                characters</small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <input id=\"rusername\" type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"usernamer\"\n              [(ngModel)]=\"form2.usernamer\" #usernamer=\"ngModel\" required minlength=\"5\" maxlength=\"20\"\n              [ngClass]=\"{'is-valid':usernamer.valid && usernamer.touched,'is-invalid':usernamer.invalid && usernamer.touched}\" />\n            <div *ngIf=\"fr.submitted && usernamer.invalid || usernamer.touched && usernamer.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"usernamer.errors.required\">Username is\n                required</small>\n              <small class=\"form-text alert alert-warning\" *ngIf=\"usernamer.errors.minlength\">Username must be at\n                least\n                5\n                characters</small>\n              <small class=\"form-text alert alert-warning\" *ngIf=\"usernamer.errors.maxlength\">Username must be less\n                than\n                20\n                characters</small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n\n            <input id=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"emailr\" [(ngModel)]=\"form2.emailr\"\n              #emailr=\"ngModel\" required email minlength=\"6\" maxlength=\"50\"\n              [ngClass]=\"{'is-valid':emailr.valid && emailr.touched,'is-invalid':emailr.invalid && emailr.touched}\" />\n            <div *ngIf=\"fr.submitted && emailr.invalid || emailr.touched && emailr.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"emailr.errors.required\">Email is required</small>\n              <small class=\"form-text alert alert-warning\" *ngIf=\"emailr.errors.email\">Email must be a valid email\n                address</small>\n              <small class=\"form-text alert alert-warning\" *ngIf=\"emailr.errors.maxlength\">Email must be less than 50\n                characters</small>\n              <small class=\"form-text alert alert-warning\" *ngIf=\"emailr.errors.minlength\">Email must be at least 6\n                characters</small>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <input id=\"rpassword\" type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"passwordr\"\n              [(ngModel)]=\"form2.passwordr\" #passwordr=\"ngModel\" required minlength=\"6\"\n              [ngClass]=\"{'is-valid':passwordr.valid && passwordr.touched,'is-invalid':passwordr.invalid && passwordr.touched}\" />\n            <div *ngIf=\"fr.submitted && passwordr.invalid || passwordr.touched && passwordr.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"passwordr.errors.required\">Password is\n                required</small>\n              <small class=\"form-text alert alert-warning\" *ngIf=\"passwordr.errors.minlength\">Password must be at\n                least\n                6\n                characters\n              </small>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <input id=\"cpass\" type=\"password\" class=\"form-control\" placeholder=\"Confirm password\" name=\"cpassword\"\n              [(ngModel)]=\"form2.cpassword\" #cpassword=\"ngModel\" required\n              [ngClass]=\"{'is-valid':form2.passwordr==form2.cpassword && cpassword.touched,'is-invalid':form2.passwordr!=form2.cpassword && cpassword.touched || cpassword.invalid && cpassword.touched}\" />\n            <div *ngIf=\"form2.passwordr!=form2.cpassword \">\n              <small class=\"form-text alert alert-warning\">Passwords don't match</small>\n            </div>\n          </div>\n\n          <div class=\"form-group d-flex justify-content-center\">\n            <button type=\"button\" id=\"register\" [disabled]=\"fr.form.invalid || load || form2.passwordr!=form2.cpassword\"\n              class=\"btn btn-primary\" (click)=\"onSubmitr(fr)\">Register account\n              <span *ngIf=load class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n            </button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _auth_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login */ "./src/app/auth/login.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _auth_signup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup */ "./src/app/auth/signup.ts");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animations/animation */ "./src/app/animations/animation.ts");









var AppComponent = /** @class */ (function () {
    function AppComponent(authService, tokenStorage, toast) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.toast = toast;
        this.form1 = {};
        this.form2 = {};
        this.isLogin = true;
        this.isSignedUp = false;
        this.errorMessage = '';
        this.load = false;
        this.showLoadingIndicator = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.init();
    };
    AppComponent.prototype.init = function () {
        if (this.tokenStorage.getToken()) {
            this.token = this.tokenStorage.getToken();
            this.username = this.tokenStorage.getUsername();
            this.roles = this.tokenStorage.getAuthorities();
            if (this.roles[0] === 'ROLE_ADMIN') {
                this.authority = 'admin';
            }
            else {
                this.authority = 'user';
            }
        }
        console.log(this.authority);
    };
    AppComponent.prototype.onSubmitl = function (form) {
        var _this = this;
        this.loginInfo = new _auth_login__WEBPACK_IMPORTED_MODULE_3__["Login"](this.form1.usernamel, this.form1.passwordl);
        console.log(this.loginInfo);
        this.authService.signIn(this.loginInfo).subscribe(function (data) {
            _this.closeLog.nativeElement.click();
            _this.tokenStorage.saveToken(data.token);
            _this.tokenStorage.saveUsername(data.username);
            _this.tokenStorage.saveAuthorities(data.authorities);
            _this.tokenStorage.saveExpriration(data.expiration);
            _this.init();
            form.resetForm();
            console.log(_this.tokenStorage.getExpriration());
            console.log(new Date());
        }, function (error) {
            console.log(error);
            _this.toast.showError("", error.error.message);
        });
    };
    AppComponent.prototype.onSubmitr = function (form) {
        var _this = this;
        this.load = true;
        this.signupInfo = new _auth_signup__WEBPACK_IMPORTED_MODULE_6__["SignUp"](this.form2.namer, this.form2.usernamer, this.form2.emailr, this.form2.passwordr);
        console.log(this.signupInfo);
        this.authService.signUp(this.signupInfo).subscribe(function (data) {
            _this.closeReg.nativeElement.click();
            console.log(data);
            _this.load = false;
            _this.isLogin = true;
            _this.toast.showSuccess("", "Successful registration!");
            _this.toast.showWarning("", "Please check your email and confirm account");
            form.resetForm();
        }, function (error) {
            console.log(error.error.message);
            //this.errorMessage = error.error.message;
            _this.load = false;
            _this.toast.showError("", error.error.message);
        });
    };
    AppComponent.prototype.logout = function () {
        this.authority = null;
        this.tokenStorage.signOut();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeReg'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "closeReg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeLog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "closeLog", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_7__["loginOut"], _animations_animation__WEBPACK_IMPORTED_MODULE_7__["fadeTableItem"]
            ],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _document_add_pattern_document_add_pattern_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./document-add-pattern/document-add-pattern.component */ "./src/app/document-add-pattern/document-add-pattern.component.ts");
/* harmony import */ var _documents_add_work_contract_work_contract_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./documents-add/work-contract/work-contract.component */ "./src/app/documents-add/work-contract/work-contract.component.ts");
/* harmony import */ var _documents_add_credit_contract_credit_contract_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./documents-add/credit-contract/credit-contract.component */ "./src/app/documents-add/credit-contract/credit-contract.component.ts");
/* harmony import */ var _documents_add_contract_of_sale_contract_of_sale_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./documents-add/contract-of-sale/contract-of-sale.component */ "./src/app/documents-add/contract-of-sale/contract-of-sale.component.ts");
/* harmony import */ var _documents_add_cooperation_contract_cooperation_contract_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./documents-add/cooperation-contract/cooperation-contract.component */ "./src/app/documents-add/cooperation-contract/cooperation-contract.component.ts");
/* harmony import */ var _documents_add_rental_contract_rental_contract_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./documents-add/rental-contract/rental-contract.component */ "./src/app/documents-add/rental-contract/rental-contract.component.ts");
/* harmony import */ var _document_pattern_document_pattern_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./document-pattern/document-pattern.component */ "./src/app/document-pattern/document-pattern.component.ts");
/* harmony import */ var _documents_work_list_work_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./documents/work-list/work-list.component */ "./src/app/documents/work-list/work-list.component.ts");
/* harmony import */ var _documents_credit_list_credit_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./documents/credit-list/credit-list.component */ "./src/app/documents/credit-list/credit-list.component.ts");
/* harmony import */ var _documents_cooperation_list_cooperation_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./documents/cooperation-list/cooperation-list.component */ "./src/app/documents/cooperation-list/cooperation-list.component.ts");
/* harmony import */ var _documents_rental_list_rental_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./documents/rental-list/rental-list.component */ "./src/app/documents/rental-list/rental-list.component.ts");
/* harmony import */ var _documents_sale_list_sale_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./documents/sale-list/sale-list.component */ "./src/app/documents/sale-list/sale-list.component.ts");
/* harmony import */ var _documents_edit_work_edit_work_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./documents-edit/work-edit/work-edit.component */ "./src/app/documents-edit/work-edit/work-edit.component.ts");
/* harmony import */ var _documents_edit_sale_edit_sale_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./documents-edit/sale-edit/sale-edit.component */ "./src/app/documents-edit/sale-edit/sale-edit.component.ts");
/* harmony import */ var _documents_edit_cooperation_edit_cooperation_edit_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./documents-edit/cooperation-edit/cooperation-edit.component */ "./src/app/documents-edit/cooperation-edit/cooperation-edit.component.ts");
/* harmony import */ var _documents_edit_credit_edit_credit_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./documents-edit/credit-edit/credit-edit.component */ "./src/app/documents-edit/credit-edit/credit-edit.component.ts");
/* harmony import */ var _documents_edit_rental_edit_rental_edit_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./documents-edit/rental-edit/rental-edit.component */ "./src/app/documents-edit/rental-edit/rental-edit.component.ts");
/* harmony import */ var _component_name_component_name_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./component-name/component-name.component */ "./src/app/component-name/component-name.component.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
                _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_11__["SearchPipe"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _document_add_pattern_document_add_pattern_component__WEBPACK_IMPORTED_MODULE_14__["DocumentAddPatternComponent"],
                _documents_add_work_contract_work_contract_component__WEBPACK_IMPORTED_MODULE_15__["WorkContractComponent"],
                _documents_add_credit_contract_credit_contract_component__WEBPACK_IMPORTED_MODULE_16__["CreditContractComponent"],
                _documents_add_contract_of_sale_contract_of_sale_component__WEBPACK_IMPORTED_MODULE_17__["ContractOfSaleComponent"],
                _documents_add_cooperation_contract_cooperation_contract_component__WEBPACK_IMPORTED_MODULE_18__["CooperationContractComponent"],
                _documents_add_rental_contract_rental_contract_component__WEBPACK_IMPORTED_MODULE_19__["RentalContractComponent"],
                _document_pattern_document_pattern_component__WEBPACK_IMPORTED_MODULE_20__["DocumentPatternComponent"],
                _documents_work_list_work_list_component__WEBPACK_IMPORTED_MODULE_21__["WorkListComponent"],
                _documents_credit_list_credit_list_component__WEBPACK_IMPORTED_MODULE_22__["CreditListComponent"],
                _documents_cooperation_list_cooperation_list_component__WEBPACK_IMPORTED_MODULE_23__["CooperationListComponent"],
                _documents_rental_list_rental_list_component__WEBPACK_IMPORTED_MODULE_24__["RentalListComponent"],
                _documents_sale_list_sale_list_component__WEBPACK_IMPORTED_MODULE_25__["SaleListComponent"],
                _documents_edit_work_edit_work_edit_component__WEBPACK_IMPORTED_MODULE_26__["WorkEditComponent"],
                _documents_edit_sale_edit_sale_edit_component__WEBPACK_IMPORTED_MODULE_27__["SaleEditComponent"],
                _documents_edit_cooperation_edit_cooperation_edit_component__WEBPACK_IMPORTED_MODULE_28__["CooperationEditComponent"],
                _documents_edit_credit_edit_credit_edit_component__WEBPACK_IMPORTED_MODULE_29__["CreditEditComponent"],
                _documents_edit_rental_edit_rental_edit_component__WEBPACK_IMPORTED_MODULE_30__["RentalEditComponent"],
                _component_name_component_name_component__WEBPACK_IMPORTED_MODULE_31__["ComponentNameComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({ timeOut: 5000, positionClass: 'toast-top-right' })
            ],
            providers: [_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["httpInterceptorProviders"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor, httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/auth/token-storage.service.ts");




var TOKEN_HEADER_KEY = 'Authorization';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(token) {
        this.token = token;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
            console.log(token);
        }
        return next.handle(authReq);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.loginUrl = 'http://localhost:8080/auth/login';
        this.signupUrl = 'http://localhost:8080/auth/signup';
    }
    AuthService.prototype.signIn = function (credentials) {
        return this.http.post(this.loginUrl, credentials, httpOptions);
    };
    AuthService.prototype.signUp = function (info) {
        return this.http.post(this.signupUrl, info, httpOptions);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login.ts":
/*!*******************************!*\
  !*** ./src/app/auth/login.ts ***!
  \*******************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
var Login = /** @class */ (function () {
    function Login(username, password) {
        this.username = username;
        this.password = password;
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/auth/signup.ts":
/*!********************************!*\
  !*** ./src/app/auth/signup.ts ***!
  \********************************/
/*! exports provided: SignUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
var SignUp = /** @class */ (function () {
    function SignUp(name, username, email, password) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['ROLE_USER'];
    }
    return SignUp;
}());



/***/ }),

/***/ "./src/app/auth/token-storage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/token-storage.service.ts ***!
  \***********************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TOKEN_KEY = 'Token';
var USERNAME_KEY = 'Username';
var AUTHORITIES_KEY = 'Authorities';
var EXPIRED_IN = 'Expiration';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
        this.roles = [];
    }
    TokenStorageService.prototype.signOut = function () {
        sessionStorage.clear();
    };
    TokenStorageService.prototype.saveExpriration = function (expiration) {
        window.sessionStorage.removeItem(EXPIRED_IN);
        window.sessionStorage.setItem(EXPIRED_IN, expiration.toString());
    };
    TokenStorageService.prototype.getExpriration = function () {
        return sessionStorage.getItem(EXPIRED_IN);
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveUsername = function (username) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    };
    TokenStorageService.prototype.getUsername = function () {
        return sessionStorage.getItem(USERNAME_KEY);
    };
    TokenStorageService.prototype.saveAuthorities = function (authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    };
    TokenStorageService.prototype.getAuthorities = function () {
        var _this = this;
        this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
                _this.roles.push(authority.authority);
            });
        }
        return this.roles;
    };
    TokenStorageService.prototype.compareDates = function () {
        var date_expiration = new Date(this.getExpriration());
        if (new Date() > date_expiration) {
            return false;
        }
        else {
            return true;
        }
    };
    TokenStorageService.prototype.isLogin = function () {
        if (this.getToken()) {
            if (this.compareDates()) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/component-name/component-name.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component-name/component-name.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC1uYW1lL2NvbXBvbmVudC1uYW1lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component-name/component-name.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component-name/component-name.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  component-name works!\n</p>\n"

/***/ }),

/***/ "./src/app/component-name/component-name.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component-name/component-name.component.ts ***!
  \************************************************************/
/*! exports provided: ComponentNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentNameComponent", function() { return ComponentNameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComponentNameComponent = /** @class */ (function () {
    function ComponentNameComponent() {
    }
    ComponentNameComponent.prototype.ngOnInit = function () {
    };
    ComponentNameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-component-name',
            template: __webpack_require__(/*! ./component-name.component.html */ "./src/app/component-name/component-name.component.html"),
            styles: [__webpack_require__(/*! ./component-name.component.css */ "./src/app/component-name/component-name.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComponentNameComponent);
    return ComponentNameComponent;
}());



/***/ }),

/***/ "./src/app/document-add-pattern/document-add-pattern.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/document-add-pattern/document-add-pattern.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50LWFkZC1wYXR0ZXJuL2RvY3VtZW50LWFkZC1wYXR0ZXJuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/document-add-pattern/document-add-pattern.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/document-add-pattern/document-add-pattern.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-3\">\n\n  <ul class=\"nav nav-tabs justify-content-center\" id=\"myTab\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\"  data-toggle=\"tab\" href=\"#work\" role=\"tab\" aria-controls=\"home\"\n        aria-selected=\"true\"><strong>STUDENT DOCUMENT</strong></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\"  data-toggle=\"tab\" href=\"#credit\" role=\"tab\" aria-controls=\"profile\"\n        aria-selected=\"false\"><strong>STUDENT RESUME</strong></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\"  data-toggle=\"tab\" href=\"#cooperation\" role=\"tab\" aria-controls=\"contact\"\n        aria-selected=\"false\"><strong>STUDENT TRANSCRIPTS</strong></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\"  data-toggle=\"tab\" href=\"#sale\" role=\"tab\" aria-controls=\"contact\"\n        aria-selected=\"false\"><strong>UNIVERSITY APPLICATIONS</strong></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"lease_tab\" data-toggle=\"tab\" href=\"#rental\" role=\"tab\" aria-controls=\"contact\"\n        aria-selected=\"false\"><strong>APPLICATION STATUS</strong></a>\n    </li>\n  </ul>\n\n  <div class=\"tab-content\" id=\"myTabContent\">\n    <div class=\"tab-pane fade show active\" id=\"work\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n      <app-work-contract></app-work-contract>\n    </div>\n    <div class=\"tab-pane fade\" id=\"credit\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n      <app-credit-contract></app-credit-contract>\n    </div>\n    <div class=\"tab-pane fade\" id=\"cooperation\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n      <app-cooperation-contract></app-cooperation-contract>\n    </div>\n    <div class=\"tab-pane fade\" id=\"sale\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n      <app-contract-of-sale></app-contract-of-sale>\n    </div>\n    <div class=\"tab-pane fade\" id=\"rental\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n      <app-rental-contract></app-rental-contract>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/document-add-pattern/document-add-pattern.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/document-add-pattern/document-add-pattern.component.ts ***!
  \************************************************************************/
/*! exports provided: DocumentAddPatternComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentAddPatternComponent", function() { return DocumentAddPatternComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentAddPatternComponent = /** @class */ (function () {
    function DocumentAddPatternComponent() {
    }
    DocumentAddPatternComponent.prototype.ngOnInit = function () {
    };
    DocumentAddPatternComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-document-add-pattern',
            template: __webpack_require__(/*! ./document-add-pattern.component.html */ "./src/app/document-add-pattern/document-add-pattern.component.html"),
            styles: [__webpack_require__(/*! ./document-add-pattern.component.css */ "./src/app/document-add-pattern/document-add-pattern.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentAddPatternComponent);
    return DocumentAddPatternComponent;
}());



/***/ }),

/***/ "./src/app/document-pattern/document-pattern.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/document-pattern/document-pattern.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50LXBhdHRlcm4vZG9jdW1lbnQtcGF0dGVybi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/document-pattern/document-pattern.component.html":
/*!******************************************************************!*\
  !*** ./src/app/document-pattern/document-pattern.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-3\">\n    <ul class=\"nav nav-tabs justify-content-center\" id=\"myTab\" role=\"tablist\">\n        <li class=\"nav-item\">\n          <a [ngClass]=\"{'active':patternItem=='1'}\" class=\"nav-link\" id=\"home-tab\" data-toggle=\"tab\" href=\"#work\" role=\"tab\" aria-controls=\"home\"\n            aria-selected=\"true\" id=\"work_list\" (click)=\"patternItem='1'\"><strong>WORK CONTRACT</strong></a>\n        </li>\n        <li class=\"nav-item\">\n          <a [ngClass]=\"{'active':patternItem=='2'}\" class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#credit\" role=\"tab\" aria-controls=\"profile\"\n            aria-selected=\"false\" (click)=\"patternItem='2'\"><strong>LOAN CONTRACT</strong></a>\n        </li>\n        <li class=\"nav-item\">\n          <a [ngClass]=\"{'active':patternItem=='3'}\" class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#cooperation\" role=\"tab\" aria-controls=\"contact\"\n            aria-selected=\"false\" (click)=\"patternItem='3'\"><strong>COOPERATION CONTRACT</strong></a>\n        </li>\n        <li class=\"nav-item\">\n          <a [ngClass]=\"{'active':patternItem=='4'}\" class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#sale\" role=\"tab\" aria-controls=\"contact\"\n            aria-selected=\"false\" (click)=\"patternItem='4'\"><strong>CONTRACT OF SALE</strong></a>\n        </li>\n        <li class=\"nav-item\">\n          <a [ngClass]=\"{'active':patternItem=='5'}\" class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#rental\" role=\"tab\" aria-controls=\"contact\"\n            aria-selected=\"false\" (click)=\"patternItem='5'\"><strong>LEASE CONTRACT</strong></a>\n        </li>\n      </ul>\n</div>\n  \n  <div *ngIf=\"patternItem=='1'\">\n    <app-work-list></app-work-list>\n  </div>\n  <div *ngIf=\"patternItem=='2'\">\n    <app-credit-list></app-credit-list>\n  </div>\n  <div *ngIf=\"patternItem=='3'\">\n    <app-cooperation-list></app-cooperation-list>\n  </div>\n  <div *ngIf=\"patternItem=='4'\">\n    <app-sale-list></app-sale-list>\n  </div>\n  <div *ngIf=\"patternItem=='5'\">\n    <app-rental-list></app-rental-list>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/document-pattern/document-pattern.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/document-pattern/document-pattern.component.ts ***!
  \****************************************************************/
/*! exports provided: DocumentPatternComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentPatternComponent", function() { return DocumentPatternComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



var DocumentPatternComponent = /** @class */ (function () {
    function DocumentPatternComponent(userService) {
        this.userService = userService;
        this.patternItem = '';
    }
    DocumentPatternComponent.prototype.ngOnInit = function () {
        this.patternItem = this.userService.getKindOfContract();
        console.log(this.patternItem);
    };
    DocumentPatternComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-document-pattern',
            template: __webpack_require__(/*! ./document-pattern.component.html */ "./src/app/document-pattern/document-pattern.component.html"),
            styles: [__webpack_require__(/*! ./document-pattern.component.css */ "./src/app/document-pattern/document-pattern.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], DocumentPatternComponent);
    return DocumentPatternComponent;
}());



/***/ }),

/***/ "./src/app/documents-add/contract-of-sale/contract-of-sale.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/documents-add/contract-of-sale/contract-of-sale.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy1hZGQvY29udHJhY3Qtb2Ytc2FsZS9jb250cmFjdC1vZi1zYWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/documents-add/contract-of-sale/contract-of-sale.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/documents-add/contract-of-sale/contract-of-sale.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" *ngIf=\"isLogin; else notLogin\">\n  <h1 @fadeNameTable class=\"display-4 \">Add new <strong>Contract of sale</strong></h1>\n\n  <hr>\n\n  <br>\n  <form @fadeFilter (ngSubmit)=\"f.form.valid && addDoc()\" #f=\"ngForm\" novalidate>\n    <div class=\"row\">\n      <div class=\"col-3\">\n        <label for=\"id\">Id</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"auto complete\" name=\"id\" [(ngModel)]=\"form.id\"\n          #id=\"ngModel\" disabled />\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <a data-toggle=\"collapse\" href=\"#collapseTitle\" role=\"button\" aria-expanded=\"false\"\n            aria-controls=\"collapseExample\">\n            *</a>\n          <div class=\"collapse\" id=\"collapseTitle\">\n            <small class=\"form-text alert alert-info\">\n              Be careful, the title is set <strong>1 time</strong> and after successful creation of the document it\n              <strong>can't be changed</strong>\n            </small>\n          </div>\n          <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"form.title\" #title=\"ngModel\" required\n            minlength=\"10\" maxlength=\"100\"\n            [ngClass]=\"{'is-valid':title.valid && title.touched,'is-invalid':title.invalid && title.touched}\" />\n          <div *ngIf=\"f.submitted && title.invalid || title.touched && title.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.required\">Title is required</small>\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.minlength\">Title must be at least 10\n              characters</small>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"form-group\">\n          <label for=\"clientFullName\">Buyer full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"clientFullName\" [(ngModel)]=\"form.clientFullName\"\n            #clientFullName=\"ngModel\" required maxlength=\"100\"\n            [ngClass]=\"{'is-valid':clientFullName.valid && clientFullName.touched,'is-invalid':clientFullName.invalid && clientFullName.touched}\" />\n          <div *ngIf=\"f.submitted && clientFullName.invalid || clientFullName.touched && clientFullName.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientFullName.errors.required\">Buyer full name is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"clientAdress\">Buyer adress</label>\n          <input type=\"text\" class=\"form-control\" name=\"clientAdress\" [(ngModel)]=\"form.clientAdress\"\n            #clientAdress=\"ngModel\" required maxlength=\"255\"\n            [ngClass]=\"{'is-valid':clientAdress.valid && clientAdress.touched,'is-invalid':clientAdress.invalid && clientAdress.touched}\" />\n          <div *ngIf=\"f.submitted && clientAdress.invalid || clientAdress.touched && clientAdress.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientAdress.errors.required\">Buyer adress is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"saleObject\">Sale object</label>\n          <input type=\"text\" class=\"form-control\" name=\"saleObject\" [(ngModel)]=\"form.saleObject\" #saleObject=\"ngModel\"\n            required maxlength=\"100\"\n            [ngClass]=\"{'is-valid':saleObject.valid && saleObject.touched,'is-invalid':saleObject.invalid && saleObject.touched}\" />\n          <div *ngIf=\"f.submitted && saleObject.invalid || saleObject.touched && saleObject.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"saleObject.errors.required\">Sale object is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"salingPrice\">Saling price</label>\n          <div class=\"input-group\">\n            <input type=\"number\" class=\"form-control\" name=\"salingPrice\" [(ngModel)]=\"form.salingPrice\"\n              #salingPrice=\"ngModel\" required\n              [ngClass]=\"{'is-valid':salingPrice.valid && salingPrice.touched,'is-invalid':salingPrice.invalid && salingPrice.touched}\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\" id=\"basic-addon2\">$</span>\n            </div>\n          </div>\n          <div *ngIf=\"f.submitted && salingPrice.invalid || salingPrice.touched && salingPrice.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"salingPrice.errors.required\">Saling price is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"warrantyPeriod\">Warranty period</label>          \n          \n          <div class=\"input-group\">\n          <input type=\"number\" min=\"1\" class=\"form-control\" name=\"warrantyPeriod\" [(ngModel)]=\"form.warrantyPeriod\"\n            #warrantyPeriod=\"ngModel\" required\n            [ngClass]=\"{'is-valid':warrantyPeriod.valid && warrantyPeriod.touched,'is-invalid':warrantyPeriod.invalid && warrantyPeriod.touched}\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\" id=\"basic-addon2\">days</span>\n            </div>\n          </div>\n            <div *ngIf=\"f.submitted && warrantyPeriod.invalid || warrantyPeriod.touched && warrantyPeriod.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"warrantyPeriod.errors.required\">Warranty period is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row \">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"otherInfo\">Other info</label>\n          <textarea maxlength=\"1000\" class=\"form-control\" name=\"otherInfo\" rows=\"3\" [(ngModel)]=\"form.otherInfo\"\n            #otherInfo=\"ngModel\"></textarea>          \n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <hr>\n      <button [disabled]=\"f.form.invalid\" class=\"btn btn-success\">Add new contract</button>    \n    </div>\n  </form>\n</div>\n\n<ng-template #notLogin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a routerLink=\"/\" class=\"alert-link\">login</a>!\n    </h5>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/documents-add/contract-of-sale/contract-of-sale.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/documents-add/contract-of-sale/contract-of-sale.component.ts ***!
  \******************************************************************************/
/*! exports provided: ContractOfSaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractOfSaleComponent", function() { return ContractOfSaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_services_contracts_contract_of_sale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/contracts/contract-of-sale.service */ "./src/app/services/contracts/contract-of-sale.service.ts");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");








var ContractOfSaleComponent = /** @class */ (function () {
    function ContractOfSaleComponent(docService, userService, tokenStorage, router, toast) {
        this.docService = docService;
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.toast = toast;
        this.form = {};
        this.errorMessage = '';
        this.isFailed = false;
        this.isLogin = false;
        this.today = "";
    }
    ContractOfSaleComponent.prototype.ngOnInit = function () {
        if (!this.tokenStorage.isLogin()) {
            this.router.navigate(['/']);
        }
        else {
            this.today = this.userService.initToday();
            this.addNewDoc();
            this.isLogin = this.tokenStorage.isLogin();
        }
    };
    ContractOfSaleComponent.prototype.addDoc = function () {
        var _this = this;
        console.log(this.tokenStorage.getUsername());
        console.log(this.form);
        this.docService.add(this.tokenStorage.getUsername(), this.form)
            .subscribe(function (data) {
            _this.userService.saveKindOfContract("4");
            _this.isFailed = false;
            _this.router.navigate(['/documents-list']);
            _this.toast.showSuccess("", "Contract of sale '" + data.title + "' created successfully");
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isFailed = true;
            console.log(_this.errorMessage);
        });
    };
    ContractOfSaleComponent.prototype.addNewDoc = function () {
        this.form.id = null;
        this.form.active = null;
        this.form.clientAdress = null;
        this.form.clientFullName = null;
        this.form.lastChange = null;
        this.form.title = null;
        this.form.otherInfo = null;
        this.form.kind = null;
        this.form.saleObject = null;
        this.form.salingPrice = null;
        this.form.warrantyPeriod = null;
    };
    ContractOfSaleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contract-of-sale',
            template: __webpack_require__(/*! ./contract-of-sale.component.html */ "./src/app/documents-add/contract-of-sale/contract-of-sale.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_7__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_7__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./contract-of-sale.component.css */ "./src/app/documents-add/contract-of-sale/contract-of-sale.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contracts_contract_of_sale_service__WEBPACK_IMPORTED_MODULE_6__["ContractOfSaleService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
    ], ContractOfSaleComponent);
    return ContractOfSaleComponent;
}());



/***/ }),

/***/ "./src/app/documents-add/cooperation-contract/cooperation-contract.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/documents-add/cooperation-contract/cooperation-contract.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy1hZGQvY29vcGVyYXRpb24tY29udHJhY3QvY29vcGVyYXRpb24tY29udHJhY3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/documents-add/cooperation-contract/cooperation-contract.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/documents-add/cooperation-contract/cooperation-contract.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" *ngIf=\"isLogin; else notLogin\">\n  <h1 @fadeNameTable class=\"display-4 \">Add new <strong>Cooperation contract</strong></h1>\n\n  <hr>\n\n  <br>\n  <form @fadeFilter (ngSubmit)=\"f.form.valid && addDoc()\" #f=\"ngForm\" novalidate>\n    <div class=\"row\">\n      <div class=\"col-3\">\n        <label for=\"id\">Id</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"auto complete\" name=\"id\" [(ngModel)]=\"form.id\"\n          #id=\"ngModel\" disabled />\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <a data-toggle=\"collapse\" href=\"#collapseTitle\" role=\"button\" aria-expanded=\"false\"\n            aria-controls=\"collapseExample\">\n            *</a>\n          <div class=\"collapse\" id=\"collapseTitle\">\n            <small class=\"form-text alert alert-info\">\n              Be careful, the title is set <strong>1 time</strong> and after successful creation of the document it\n              <strong>can't be changed</strong>\n            </small>\n          </div>\n          <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"form.title\" #title=\"ngModel\" required\n            minlength=\"10\" maxlength=\"100\" \n            [ngClass]=\"{'is-valid':title.valid && title.touched,'is-invalid':title.invalid && title.touched}\" />\n          <div *ngIf=\"f.submitted && title.invalid || title.touched && title.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.required\">Title is required</small>\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.minlength\">Title must be at least 10\n              characters</small>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"form-group\">\n          <label for=\"clientFullName\">Client full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"clientFullName\" [(ngModel)]=\"form.clientFullName\"\n            #clientFullName=\"ngModel\" required maxlength=\"100\"\n            [ngClass]=\"{'is-valid':clientFullName.valid && clientFullName.touched,'is-invalid':clientFullName.invalid && clientFullName.touched}\" />\n          <div *ngIf=\"f.submitted && clientFullName.invalid || clientFullName.touched && clientFullName.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientFullName.errors.required\">Client full name is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"clientAdress\">Client adress</label>\n          <input type=\"text\" class=\"form-control\" name=\"clientAdress\" [(ngModel)]=\"form.clientAdress\"\n            #clientAdress=\"ngModel\" required maxlength=\"255\"\n            [ngClass]=\"{'is-valid':clientAdress.valid && clientAdress.touched,'is-invalid':clientAdress.invalid && clientAdress.touched}\" />\n          <div *ngIf=\"f.submitted && clientAdress.invalid || clientAdress.touched && clientAdress.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientAdress.errors.required\">Client adress is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row\">\n      <div class=\"col-8\">\n        <div class=\"form-group\">\n          <label for=\"kindOfActivity\">Kind of activity</label>\n          <input type=\"text\" class=\"form-control\" name=\"kindOfActivity\" [(ngModel)]=\"form.kindOfActivity\"\n            #kindOfActivity=\"ngModel\" required maxlength=\"100\"\n            [ngClass]=\"{'is-valid':kindOfActivity.valid && kindOfActivity.touched,'is-invalid':kindOfActivity.invalid && kindOfActivity.touched}\" />\n          <div *ngIf=\"f.submitted && kindOfActivity.invalid || kindOfActivity.touched && kindOfActivity.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"kindOfActivity.errors.required\">Kind of activity is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"term\">Term</label>\n          <div class=\"input-group\">\n            <input type=\"number\" class=\"form-control\" name=\"term\" [(ngModel)]=\"form.term\" #term=\"ngModel\" required\n              [ngClass]=\"{'is-valid':term.valid && term.touched,'is-invalid':term.invalid && term.touched}\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\" id=\"basic-addon2\">days</span>\n            </div>\n          </div>\n          <div *ngIf=\"f.submitted && term.invalid || term.touched && term.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"term.errors.required\">Term is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row \">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"clientResponsibility\">Client responsibility</label>\n          <textarea required maxlength=\"1000\" class=\"form-control\" name=\"clientResponsibility\" rows=\"2\"\n            [(ngModel)]=\"form.clientResponsibility\" #clientResponsibility=\"ngModel\"\n            [ngClass]=\"{'is-valid':clientResponsibility.valid && clientResponsibility.touched,'is-invalid':clientResponsibility.invalid && clientResponsibility.touched}\"></textarea>\n          <div\n            *ngIf=\"f.submitted && clientResponsibility.invalid || clientResponsibility.touched && clientResponsibility.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientResponsibility.errors.required\">Client responsibility is\n              required</small>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"creatorResponsibility\">Creator responsibility</label>\n          <textarea required maxlength=\"1000\" class=\"form-control\" name=\"creatorResponsibility\" rows=\"2\"\n            [(ngModel)]=\"form.creatorResponsibility\" #creatorResponsibility=\"ngModel\"\n            [ngClass]=\"{'is-valid':creatorResponsibility.valid && creatorResponsibility.touched,'is-invalid':creatorResponsibility.invalid && creatorResponsibility.touched}\"></textarea>\n          <div\n            *ngIf=\"f.submitted && creatorResponsibility.invalid || creatorResponsibility.touched && creatorResponsibility.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"creatorResponsibility.errors.required\">Creator responsibility is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row \">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"terminationConditions\">Termination conditions</label>\n          <textarea required maxlength=\"1000\" class=\"form-control\" name=\"terminationConditions\" rows=\"2\"\n            [(ngModel)]=\"form.terminationConditions\" #terminationConditions=\"ngModel\"\n            [ngClass]=\"{'is-valid':terminationConditions.valid && terminationConditions.touched,'is-invalid':terminationConditions.invalid && terminationConditions.touched}\"></textarea>\n          <div\n            *ngIf=\"f.submitted && terminationConditions.invalid || terminationConditions.touched && terminationConditions.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"terminationConditions.errors.required\">Termination conditions is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row \">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"otherInfo\">Other info</label>\n          <textarea maxlength=\"1000\" class=\"form-control\" name=\"otherInfo\" rows=\"3\" [(ngModel)]=\"form.otherInfo\"\n            #otherInfo=\"ngModel\"></textarea>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <hr>\n      <button [disabled]=\"f.form.invalid\" class=\"btn btn-success\">Add new contract</button>\n      \n    </div>\n  </form>\n</div>\n\n<ng-template #notLogin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a routerLink=\"/\" class=\"alert-link\">login</a>!\n    </h5>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/documents-add/cooperation-contract/cooperation-contract.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/documents-add/cooperation-contract/cooperation-contract.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CooperationContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CooperationContractComponent", function() { return CooperationContractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_services_contracts_cooperation_contract_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/contracts/cooperation-contract.service */ "./src/app/services/contracts/cooperation-contract.service.ts");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");








var CooperationContractComponent = /** @class */ (function () {
    function CooperationContractComponent(docService, userService, tokenStorage, router, toast) {
        this.docService = docService;
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.toast = toast;
        this.form = {};
        this.errorMessage = '';
        this.isFailed = false;
        this.isLogin = false;
        this.today = "";
    }
    CooperationContractComponent.prototype.ngOnInit = function () {
        if (!this.tokenStorage.isLogin()) {
            this.router.navigate(['/']);
        }
        else {
            this.today = this.userService.initToday();
            this.addNewDoc();
            this.isLogin = this.tokenStorage.isLogin();
        }
    };
    CooperationContractComponent.prototype.addDoc = function () {
        var _this = this;
        console.log(this.tokenStorage.getUsername());
        console.log(this.form);
        this.docService.add(this.tokenStorage.getUsername(), this.form)
            .subscribe(function (data) {
            _this.userService.saveKindOfContract("3");
            _this.isFailed = false;
            _this.router.navigate(['/documents-list']);
            _this.toast.showSuccess("", "Cooperation contract '" + data.title + "' created successfully");
        }, function (error) {
            console.log(error);
            _this.toast.showError("", error.error.message);
            _this.isFailed = true;
            console.log(_this.errorMessage);
        });
    };
    CooperationContractComponent.prototype.addNewDoc = function () {
        this.form.id = null;
        this.form.active = null;
        this.form.clientAdress = null;
        this.form.clientFullName = null;
        this.form.lastChange = null;
        this.form.title = null;
        this.form.otherInfo = null;
        this.form.kind = null;
        this.form.clientResponsibility = null;
        this.form.creatorResponsibility = null;
        this.form.kindOfActivity = null;
        this.form.term = null;
        this.form.terminationConditions = null;
    };
    CooperationContractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cooperation-contract',
            template: __webpack_require__(/*! ./cooperation-contract.component.html */ "./src/app/documents-add/cooperation-contract/cooperation-contract.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_7__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_7__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./cooperation-contract.component.css */ "./src/app/documents-add/cooperation-contract/cooperation-contract.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contracts_cooperation_contract_service__WEBPACK_IMPORTED_MODULE_6__["CooperationContractService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
    ], CooperationContractComponent);
    return CooperationContractComponent;
}());



/***/ }),

/***/ "./src/app/documents-add/credit-contract/credit-contract.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/documents-add/credit-contract/credit-contract.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy1hZGQvY3JlZGl0LWNvbnRyYWN0L2NyZWRpdC1jb250cmFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/documents-add/credit-contract/credit-contract.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/documents-add/credit-contract/credit-contract.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" *ngIf=\"isLogin; else notLogin\">\n  <h1 @fadeNameTable class=\"display-4 \">Add new <strong>Loan contract</strong></h1>\n\n  <hr>\n\n  <br>\n  <form @fadeFilter (ngSubmit)=\"f.form.valid && addDoc()\" #f=\"ngForm\" novalidate>\n    <div class=\"row\">\n      <div class=\"col-3\">\n        <label for=\"id\">Id</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"auto complete\" name=\"id\" [(ngModel)]=\"form.id\"\n          #id=\"ngModel\" disabled />\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <a data-toggle=\"collapse\" href=\"#collapseTitle\" role=\"button\" aria-expanded=\"false\"\n            aria-controls=\"collapseExample\">\n            *</a>\n          <div class=\"collapse\" id=\"collapseTitle\">\n            <small class=\"form-text alert alert-info\">\n              Be careful, the title is set <strong>1 time</strong> and after successful creation of the document it\n              <strong>can't be changed</strong>\n            </small>\n          </div>\n          <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"form.title\" #title=\"ngModel\" required\n            minlength=\"10\" maxlength=\"100\"\n            [ngClass]=\"{'is-valid':title.valid && title.touched,'is-invalid':title.invalid && title.touched}\" />\n          <div *ngIf=\"f.submitted && title.invalid || title.touched && title.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.required\">Title is required</small>\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.minlength\">Title must be at least 10\n              characters</small>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"form-group\">\n          <label for=\"clientFullName\">Borrower full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"clientFullName\" [(ngModel)]=\"form.clientFullName\"\n            #clientFullName=\"ngModel\" required maxlength=\"100\"\n            [ngClass]=\"{'is-valid':clientFullName.valid && clientFullName.touched,'is-invalid':clientFullName.invalid && clientFullName.touched}\" />\n          <div *ngIf=\"f.submitted && clientFullName.invalid || clientFullName.touched && clientFullName.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientFullName.errors.required\">Borrower full name is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"clientAdress\">Borrower adress</label>\n          <input type=\"text\" class=\"form-control\" name=\"clientAdress\" [(ngModel)]=\"form.clientAdress\"\n            #clientAdress=\"ngModel\" required maxlength=\"255\"\n            [ngClass]=\"{'is-valid':clientAdress.valid && clientAdress.touched,'is-invalid':clientAdress.invalid && clientAdress.touched}\" />\n          <div *ngIf=\"f.submitted && clientAdress.invalid || clientAdress.touched && clientAdress.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientAdress.errors.required\">Borrower adress is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"creditAmount\">Loan amount</label>\n          <div class=\"input-group\">\n            <input type=\"number\" class=\"form-control\" name=\"creditAmount\" [(ngModel)]=\"form.creditAmount\"\n              #creditAmount=\"ngModel\" required\n              [ngClass]=\"{'is-valid':creditAmount.valid && creditAmount.touched,'is-invalid':creditAmount.invalid && creditAmount.touched}\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\" id=\"basic-addon2\">$</span>\n            </div>\n          </div>\n          <div *ngIf=\"f.submitted && creditAmount.invalid || creditAmount.touched && creditAmount.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"creditAmount.errors.required\">Loan amount is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group \">\n          <label for=\"annualInterest\">Annual interest</label>\n          <div class=\"input-group\">\n            <input type=\"number\" class=\"form-control\" name=\"annualInterest\" [(ngModel)]=\"form.annualInterest\"\n              #annualInterest=\"ngModel\" required\n              [ngClass]=\"{'is-valid':annualInterest.valid && annualInterest.touched,'is-invalid':annualInterest.invalid && annualInterest.touched}\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\" id=\"basic-addon2\">%</span>\n            </div>\n          </div>\n          <div *ngIf=\"f.submitted && annualInterest.invalid || annualInterest.touched && annualInterest.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"annualInterest.errors.required\">Annual interest is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"term\">Term</label>\n          <div class=\"input-group\">\n          <input type=\"number\" class=\"form-control\" name=\"term\" [(ngModel)]=\"form.term\" #term=\"ngModel\" required\n            [ngClass]=\"{'is-valid':term.valid && term.touched,'is-invalid':term.invalid && term.touched}\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\" id=\"basic-addon2\">days</span>\n            </div>\n          </div>\n            <div *ngIf=\"f.submitted && term.invalid || term.touched && term.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"term.errors.required\">Term is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row \">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"otherInfo\">Other info</label>\n          <textarea maxlength=\"1000\" class=\"form-control\" name=\"otherInfo\" rows=\"3\" [(ngModel)]=\"form.otherInfo\"\n            #otherInfo=\"ngModel\"></textarea>          \n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <hr>\n      <button [disabled]=\"f.form.invalid\" class=\"btn btn-success\">Add new contract</button>\n      \n    </div>\n  </form>\n</div>\n\n<ng-template #notLogin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a routerLink=\"/\" class=\"alert-link\">login</a>!\n    </h5>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/documents-add/credit-contract/credit-contract.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/documents-add/credit-contract/credit-contract.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreditContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditContractComponent", function() { return CreditContractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var src_app_services_contracts_credit_contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contracts/credit-contract.service */ "./src/app/services/contracts/credit-contract.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");








var CreditContractComponent = /** @class */ (function () {
    function CreditContractComponent(docService, userService, tokenStorage, router, toast) {
        this.docService = docService;
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.toast = toast;
        this.form = {};
        this.errorMessage = '';
        this.isFailed = false;
        this.isLogin = false;
        this.today = "";
    }
    CreditContractComponent.prototype.ngOnInit = function () {
        if (!this.tokenStorage.isLogin()) {
            this.router.navigate(['/']);
        }
        else {
            this.today = this.userService.initToday();
            this.addNewDoc();
            this.isLogin = this.tokenStorage.isLogin();
        }
    };
    CreditContractComponent.prototype.addDoc = function () {
        var _this = this;
        console.log(this.tokenStorage.getUsername());
        console.log(this.form);
        this.docService.add(this.tokenStorage.getUsername(), this.form)
            .subscribe(function (data) {
            _this.userService.saveKindOfContract("2");
            _this.isFailed = false;
            _this.router.navigate(['/documents-list']);
            _this.toast.showSuccess("", "Loan contract '" + data.title + "' created successfully");
        }, function (error) {
            console.log(error);
            _this.toast.showError("", error.error.message);
            _this.isFailed = true;
            console.log(_this.errorMessage);
        });
    };
    CreditContractComponent.prototype.addNewDoc = function () {
        this.form.id = null;
        this.form.active = null;
        this.form.clientAdress = null;
        this.form.clientFullName = null;
        this.form.lastChange = null;
        this.form.title = null;
        this.form.otherInfo = null;
        this.form.kind = null;
        this.form.creditAmount = null;
        this.form.annualInterest = null;
        this.form.term = null;
    };
    CreditContractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-credit-contract',
            template: __webpack_require__(/*! ./credit-contract.component.html */ "./src/app/documents-add/credit-contract/credit-contract.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./credit-contract.component.css */ "./src/app/documents-add/credit-contract/credit-contract.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contracts_credit_contract_service__WEBPACK_IMPORTED_MODULE_3__["CreditContractService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]])
    ], CreditContractComponent);
    return CreditContractComponent;
}());



/***/ }),

/***/ "./src/app/documents-add/rental-contract/rental-contract.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/documents-add/rental-contract/rental-contract.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy1hZGQvcmVudGFsLWNvbnRyYWN0L3JlbnRhbC1jb250cmFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/documents-add/rental-contract/rental-contract.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/documents-add/rental-contract/rental-contract.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" *ngIf=\"isLogin; else notLogin\">\n  <h1 @fadeNameTable class=\"display-4 \">Add new <strong>Lease contract</strong></h1>\n\n  <hr>\n\n  <br>\n  <form @fadeFilter (ngSubmit)=\"f.form.valid && addDoc()\" #f=\"ngForm\" novalidate>\n    <div class=\"row\">\n      <div class=\"col-3\">\n        <label for=\"id\">Id</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"auto complete\" name=\"id\" [(ngModel)]=\"form.id\"\n          #id=\"ngModel\" disabled />\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <a data-toggle=\"collapse\" href=\"#collapseTitle\" role=\"button\" aria-expanded=\"false\"\n            aria-controls=\"collapseExample\">\n            *</a>\n          <div class=\"collapse\" id=\"collapseTitle\">\n            <small class=\"form-text alert alert-info\">\n              Be careful, the title is set <strong>1 time</strong> and after successful creation of the document it\n              <strong>can't be changed</strong>\n            </small>\n          </div>\n          <input id=\"title\" type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"form.title\" #title=\"ngModel\" required\n            minlength=\"10\" maxlength=\"100\"\n            [ngClass]=\"{'is-valid':title.valid && title.touched,'is-invalid':title.invalid && title.touched}\" />\n          <div *ngIf=\"f.submitted && title.invalid || title.touched && title.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.required\">Title is required</small>\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.minlength\">Title must be at least 10\n              characters</small>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"form-group\">\n          <label for=\"clientFullName\">Lessee full name</label>\n          <input id=\"name\" type=\"text\" class=\"form-control\" name=\"clientFullName\" [(ngModel)]=\"form.clientFullName\"\n            #clientFullName=\"ngModel\" required maxlength=\"100\"\n            [ngClass]=\"{'is-valid':clientFullName.valid && clientFullName.touched,'is-invalid':clientFullName.invalid && clientFullName.touched}\" />\n          <div *ngIf=\"f.submitted && clientFullName.invalid || clientFullName.touched && clientFullName.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientFullName.errors.required\">Lessee full name is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"clientAdress\">Lessee adress</label>\n          <input id=\"adress\" type=\"text\" class=\"form-control\" name=\"clientAdress\" [(ngModel)]=\"form.clientAdress\"\n            #clientAdress=\"ngModel\" required maxlength=\"255\"\n            [ngClass]=\"{'is-valid':clientAdress.valid && clientAdress.touched,'is-invalid':clientAdress.invalid && clientAdress.touched}\" />\n          <div *ngIf=\"f.submitted && clientAdress.invalid || clientAdress.touched && clientAdress.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientAdress.errors.required\">Lessee adress is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"rentalObject\">Lease object</label>\n          <input id=\"object\" type=\"text\" class=\"form-control\" name=\"rentalObject\" [(ngModel)]=\"form.rentalObject\"\n            #rentalObject=\"ngModel\" required maxlength=\"100\"\n            [ngClass]=\"{'is-valid':rentalObject.valid && rentalObject.touched,'is-invalid':rentalObject.invalid && rentalObject.touched}\" />\n          <div *ngIf=\"f.submitted && rentalObject.invalid || rentalObject.touched && rentalObject.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"rentalObject.errors.required\">Lease object is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"form-group\">\n            <label for=\"rentalPrice\">Lease price</label>\n            <div class=\"input-group\">\n              <input id=\"price\" type=\"number\" class=\"form-control\" name=\"rentalPrice\" [(ngModel)]=\"form.rentalPrice\"\n                #rentalPrice=\"ngModel\" required\n                [ngClass]=\"{'is-valid':rentalPrice.valid && rentalPrice.touched,'is-invalid':rentalPrice.invalid && rentalPrice.touched}\" />\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\" id=\"basic-addon2\">$/day</span>\n              </div>\n            </div>\n            <div *ngIf=\"f.submitted && rentalPrice.invalid || rentalPrice.touched && rentalPrice.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"rentalPrice.errors.required\">Lease price is\n                required</small>\n            </div>\n          </div>\n        </div>\n      <div class=\"col\">\n          <div class=\"form-group\">\n            <label for=\"startRental\">Start lease</label>           \n            <input id=\"start\" type=\"date\" min={{today}} class=\"form-control\" name=\"startRental\" [(ngModel)]=\"form.startRental\"\n              #startRental=\"ngModel\" required \n              [ngClass]=\"{'is-valid':startRental.valid && startRental.touched,'is-invalid':startRental.invalid && startRental.touched}\" />\n            <div *ngIf=\"f.submitted && startRental.invalid || startRental.touched && startRental.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"startRental.errors.required\">Start lease is\n                required</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n            <div class=\"form-group\">\n              <label for=\"endRental\">End lease</label>           \n              <input id=\"end\" type=\"date\" min={{form.startRental}} class=\"form-control\" name=\"endRental\" [(ngModel)]=\"form.endRental\"\n                #endRental=\"ngModel\" required\n                [ngClass]=\"{'is-valid':endRental.valid && endRental.touched,'is-invalid':endRental.invalid && endRental.touched}\" />\n              <div *ngIf=\"f.submitted && endRental.invalid || endRental.touched && endRental.invalid\">\n                <small class=\"form-text alert alert-warning\" *ngIf=\"endRental.errors.required\">End lease is\n                  required</small>\n              </div>\n            </div>\n          </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row \">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"otherInfo\">Other info</label>\n          <textarea id=\"other\" maxlength=\"1000\" class=\"form-control\" name=\"otherInfo\" rows=\"3\" [(ngModel)]=\"form.otherInfo\"\n            #otherInfo=\"ngModel\"></textarea>          \n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <hr>\n      <button id=\"add\" [disabled]=\"f.form.invalid\" class=\"btn btn-success\">Add new contract</button>\n      \n    </div>\n  </form>\n</div>\n\n<ng-template #notLogin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a routerLink=\"/\" class=\"alert-link\">login</a>!\n    </h5>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/documents-add/rental-contract/rental-contract.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/documents-add/rental-contract/rental-contract.component.ts ***!
  \****************************************************************************/
/*! exports provided: RentalContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalContractComponent", function() { return RentalContractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var src_app_services_contracts_rental_contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contracts/rental-contract.service */ "./src/app/services/contracts/rental-contract.service.ts");
/* harmony import */ var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");








var RentalContractComponent = /** @class */ (function () {
    function RentalContractComponent(docService, userService, tokenStorage, router, toast) {
        this.docService = docService;
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.toast = toast;
        this.form = {};
        this.errorMessage = '';
        this.isFailed = false;
        this.isLogin = false;
        this.today = "";
    }
    RentalContractComponent.prototype.ngOnInit = function () {
        if (!this.tokenStorage.isLogin()) {
            this.router.navigate(['/']);
        }
        else {
            this.today = this.userService.initToday();
            this.addNewDoc();
            this.isLogin = this.tokenStorage.isLogin();
        }
    };
    RentalContractComponent.prototype.addDoc = function () {
        var _this = this;
        console.log(this.tokenStorage.getUsername());
        console.log(this.form);
        this.docService.add(this.tokenStorage.getUsername(), this.form)
            .subscribe(function (data) {
            _this.userService.saveKindOfContract("5");
            _this.isFailed = false;
            _this.router.navigate(['/documents-list']);
            _this.toast.showSuccess("", "Lease contract '" + data.title + "' created successfully");
        }, function (error) {
            console.log(error);
            _this.toast.showError("", error.error.message);
            _this.isFailed = true;
            console.log(_this.errorMessage);
        });
    };
    RentalContractComponent.prototype.addNewDoc = function () {
        this.form.id = null;
        this.form.active = null;
        this.form.clientAdress = null;
        this.form.clientFullName = null;
        this.form.lastChange = null;
        this.form.title = null;
        this.form.otherInfo = null;
        this.form.kind = null;
        this.form.rentalObject = null;
        this.form.startRental = null;
        this.form.endRental = null;
        this.form.rentalPrice = null;
    };
    RentalContractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rental-contract',
            template: __webpack_require__(/*! ./rental-contract.component.html */ "./src/app/documents-add/rental-contract/rental-contract.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./rental-contract.component.css */ "./src/app/documents-add/rental-contract/rental-contract.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contracts_rental_contract_service__WEBPACK_IMPORTED_MODULE_3__["RentalContractService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]])
    ], RentalContractComponent);
    return RentalContractComponent;
}());



/***/ }),

/***/ "./src/app/documents-add/work-contract/work-contract.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/documents-add/work-contract/work-contract.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy1hZGQvd29yay1jb250cmFjdC93b3JrLWNvbnRyYWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/documents-add/work-contract/work-contract.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/documents-add/work-contract/work-contract.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" *ngIf=\"isLogin; else notLogin\">\n  <h1 @fadeNameTable class=\"display-4 \">Add new <strong>Work contract</strong></h1>\n\n  <hr>\n\n  <br>\n  <form @fadeFilter (ngSubmit)=\"f.form.valid && addDoc()\" #f=\"ngForm\" novalidate>\n    <div class=\"row\">\n      <div class=\"col-3\">\n        <label for=\"id\">Id</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"auto complete\" name=\"id\" [(ngModel)]=\"form.id\"\n          #id=\"ngModel\" disabled />\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <a data-toggle=\"collapse\" href=\"#collapseTitle\" role=\"button\" aria-expanded=\"false\"\n            aria-controls=\"collapseExample\">\n            *</a>\n          <div class=\"collapse\" id=\"collapseTitle\">\n            <small class=\"form-text alert alert-info\">\n              Be careful, the title is set <strong>1 time</strong> and after successful creation of the document it\n              <strong>can't be changed</strong>\n            </small>\n          </div>\n          <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"form.title\" #title=\"ngModel\" required\n            minlength=\"10\" maxlength=\"100\"\n            [ngClass]=\"{'is-valid':title.valid && title.touched,'is-invalid':title.invalid && title.touched}\" />\n          <div *ngIf=\"f.submitted && title.invalid || title.touched && title.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.required\">Title is required</small>\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.minlength\">Title must be at least 10\n              characters</small>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"form-group\">\n          <label for=\"clientFullName\">Employee full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"clientFullName\" [(ngModel)]=\"form.clientFullName\"\n            #clientFullName=\"ngModel\" required maxlength=\"100\"\n            [ngClass]=\"{'is-valid':clientFullName.valid && clientFullName.touched,'is-invalid':clientFullName.invalid && clientFullName.touched}\" />\n          <div *ngIf=\"f.submitted && clientFullName.invalid || clientFullName.touched && clientFullName.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientFullName.errors.required\">Employee full name is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"clientAdress\">Employee adress</label>\n          <input type=\"text\" class=\"form-control\" name=\"clientAdress\" [(ngModel)]=\"form.clientAdress\"\n            #clientAdress=\"ngModel\" required maxlength=\"255\"\n            [ngClass]=\"{'is-valid':clientAdress.valid && clientAdress.touched,'is-invalid':clientAdress.invalid && clientAdress.touched}\" />\n          <div *ngIf=\"f.submitted && clientAdress.invalid || clientAdress.touched && clientAdress.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientAdress.errors.required\">Employee adress is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"form-group\">\n              <label for=\"placeOfWork\">Place of work</label>\n              <input type=\"text\" class=\"form-control\" name=\"placeOfWork\" [(ngModel)]=\"form.placeOfWork\" #placeOfWork=\"ngModel\"\n                required maxlength=\"100\"\n                [ngClass]=\"{'is-valid':placeOfWork.valid && placeOfWork.touched,'is-invalid':placeOfWork.invalid && placeOfWork.touched}\" />\n              <div *ngIf=\"f.submitted && placeOfWork.invalid || placeOfWork.touched && placeOfWork.invalid\">\n                <small class=\"form-text alert alert-warning\" *ngIf=\"placeOfWork.errors.required\">Place of work is\n                  required</small>\n              </div>\n            </div>\n          </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"position\">Position</label>\n          <input type=\"text\" class=\"form-control\" name=\"position\" [(ngModel)]=\"form.position\" #position=\"ngModel\"\n            required maxlength=\"100\"\n            [ngClass]=\"{'is-valid':position.valid && position.touched,'is-invalid':position.invalid && position.touched}\" />\n          <div *ngIf=\"f.submitted && position.invalid || position.touched && position.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"position.errors.required\">Position is\n              required</small>\n          </div>\n        </div>\n      </div>      \n      <div class=\"col-2\">\n        <div class=\"form-group\">\n          <label for=\"operationMode\">Operation mode</label>\n          <select required  class=\"custom-select\" name=\"operationMode\" [(ngModel)]=\"form.operationMode\"  #operationMode=\"ngModel\"         \n            [ngClass]=\"{'is-valid':operationMode.valid && operationMode.touched,'is-invalid':operationMode.invalid && operationMode.touched}\">\n            <option *ngFor=\"let mode of listOfMode\" [ngValue]=\"mode\">{{mode.operationMode}}</option>\n          </select>\n          \n          <div *ngIf=\"f.submitted && operationMode.invalid || operationMode.touched && operationMode.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"operationMode.errors.required\">Operation mode is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-3\">\n        <div class=\"form-group\">\n          <label for=\"startWork\">Start work</label>\n          <input type=\"date\" class=\"form-control\" min=\"{{today}}\" name=\"startWork\" [(ngModel)]=\"form.startWork\"\n            #startWork=\"ngModel\" required\n            [ngClass]=\"{'is-valid':startWork.valid && startWork.touched,'is-invalid':startWork.invalid && startWork.touched}\" />\n          <div *ngIf=\"f.submitted && startWork.invalid || startWork.touched && startWork.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"startWork.errors.required\">Start work is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row \">\n        <div class=\"col\">\n            <div class=\"form-group\">\n              <label for=\"term\">Term</label>\n              <div class=\"input-group\">\n                <input type=\"number\" min=\"0\" class=\"form-control\" name=\"term\" [(ngModel)]=\"form.term\"\n                  #term=\"ngModel\" required\n                  [ngClass]=\"{'is-valid':term.valid && term.touched,'is-invalid':term.invalid && term.touched}\" />\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\" id=\"basic-addon2\">days</span>\n                </div>\n              </div>\n              <div *ngIf=\"f.submitted && term.invalid || term.touched && term.invalid\">\n                <small class=\"form-text alert alert-warning\" *ngIf=\"term.errors.required\">Term is\n                  required</small>\n              </div>\n            </div>\n          </div>\n        <div class=\"col\">\n            <div class=\"form-group\">\n              <label for=\"workingHours\">Working hours</label>\n              <div class=\"input-group\">\n                <input type=\"number\" min=\"0\" class=\"form-control\" name=\"workingHours\" [(ngModel)]=\"form.workingHours\"\n                  #workingHours=\"ngModel\" required\n                  [ngClass]=\"{'is-valid':workingHours.valid && workingHours.touched,'is-invalid':workingHours.invalid && workingHours.touched}\" />\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\" id=\"basic-addon2\">hours/week</span>\n                </div>\n              </div>\n              <div *ngIf=\"f.submitted && workingHours.invalid || workingHours.touched && workingHours.invalid\">\n                <small class=\"form-text alert alert-warning\" *ngIf=\"workingHours.errors.required\">Working hours is\n                  required</small>\n              </div>\n            </div>\n          </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"holiday\">Holiday</label>\n          <div class=\"input-group\">\n            <input type=\"number\" class=\"form-control\" name=\"holiday\" [(ngModel)]=\"form.holiday\" #holiday=\"ngModel\"\n              required min=\"0\"\n              [ngClass]=\"{'is-valid':holiday.valid && holiday.touched,'is-invalid':holiday.invalid && holiday.touched}\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\" id=\"basic-addon2\">days/year</span>\n            </div>\n          </div>\n          <div *ngIf=\"f.submitted && holiday.invalid || holiday.touched && holiday.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"holiday.errors.required\">Holiday is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"form-group\">\n            <label for=\"salary\">Salary</label>\n            <div class=\"input-group\">\n              <input type=\"number\" class=\"form-control\" name=\"salary\" [(ngModel)]=\"form.salary\" #salary=\"ngModel\"\n                required min=\"0\"\n                [ngClass]=\"{'is-valid':salary.valid && salary.touched,'is-invalid':salary.invalid && salary.touched}\" />\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\" id=\"basic-addon2\">$</span>\n              </div>\n            </div>\n            <div *ngIf=\"f.submitted && salary.invalid || salary.touched && salary.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"salary.errors.required\">Salary is\n                required</small>\n            </div>\n          </div>\n        </div>\n    </div>\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row \">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"otherInfo\">Other info</label>\n          <textarea maxlength=\"1000\" class=\"form-control\" name=\"otherInfo\" rows=\"3\" [(ngModel)]=\"form.otherInfo\"\n            #otherInfo=\"ngModel\"></textarea>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <hr>\n      <button [disabled]=\"f.form.invalid\" class=\"btn btn-success\">Add new contract</button>\n      \n    </div>\n  </form>\n</div>\n\n<ng-template #notLogin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a routerLink=\"/\" class=\"alert-link\">login</a>!\n    </h5>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/documents-add/work-contract/work-contract.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/documents-add/work-contract/work-contract.component.ts ***!
  \************************************************************************/
/*! exports provided: WorkContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkContractComponent", function() { return WorkContractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contracts_work_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contracts/work-contract.service */ "./src/app/services/contracts/work-contract.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_services_catalog_of_operation_mode_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/catalog-of-operation-mode.service */ "./src/app/services/catalog-of-operation-mode.service.ts");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");









var WorkContractComponent = /** @class */ (function () {
    function WorkContractComponent(catalogService, docService, userService, tokenStorage, router, toast) {
        this.catalogService = catalogService;
        this.docService = docService;
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.toast = toast;
        this.form = {};
        this.errorMessage = '';
        this.isFailed = false;
        this.isLogin = false;
        this.today = "";
        this.listOfMode = [];
    }
    WorkContractComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.tokenStorage.isLogin()) {
            this.router.navigate(['/']);
        }
        else {
            this.catalogService.getListOfMode()
                .subscribe(function (data) {
                _this.listOfMode = data;
                console.log("list modes" + _this.listOfMode.toString());
            }, function (error) {
                console.log(error);
            });
            this.today = this.userService.initToday();
            console.log(this.today);
            this.addNewDoc();
            this.isLogin = this.tokenStorage.isLogin();
        }
    };
    WorkContractComponent.prototype.addDoc = function () {
        var _this = this;
        this.docService.add(this.tokenStorage.getUsername(), this.form)
            .subscribe(function (data) {
            _this.userService.saveKindOfContract("1");
            _this.isFailed = false;
            _this.toast.showSuccess("", "Work contract '" + data.title + "' created successfully");
            _this.router.navigate(['/documents-list']);
        }, function (error) {
            console.log(error);
            _this.toast.showError("", error.error.message);
            _this.isFailed = true;
            console.log(_this.errorMessage);
        });
    };
    WorkContractComponent.prototype.addNewDoc = function () {
        this.form.id = null;
        this.form.active = null;
        this.form.clientAdress = null;
        this.form.clientFullName = null;
        this.form.lastChange = null;
        this.form.title = null;
        this.form.otherInfo = null;
        this.form.kind = null;
        this.form.startWork = null;
        this.form.position = null;
        this.form.workingHours = null;
        this.form.holiday = null;
        this.form.salary = null;
        this.form.operationMode = null;
        this.form.term = null;
        this.form.placeOfWork = null;
    };
    WorkContractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-contract',
            template: __webpack_require__(/*! ./work-contract.component.html */ "./src/app/documents-add/work-contract/work-contract.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./work-contract.component.css */ "./src/app/documents-add/work-contract/work-contract.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_catalog_of_operation_mode_service__WEBPACK_IMPORTED_MODULE_7__["CatalogOfOperationModeService"],
            src_app_services_contracts_work_contract_service__WEBPACK_IMPORTED_MODULE_2__["WorkContractService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]])
    ], WorkContractComponent);
    return WorkContractComponent;
}());



/***/ }),

/***/ "./src/app/documents-edit/cooperation-edit/cooperation-edit.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/documents-edit/cooperation-edit/cooperation-edit.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy1lZGl0L2Nvb3BlcmF0aW9uLWVkaXQvY29vcGVyYXRpb24tZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/documents-edit/cooperation-edit/cooperation-edit.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/documents-edit/cooperation-edit/cooperation-edit.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"isLogin; else notLogin\">\n    <div class=\"text-center\" >\n      <h1 *ngIf=isEdit class=\"display-4 \">{{form.title}}*</h1>\n      <h1 *ngIf=!isEdit class=\"display-4 \">{{form.title}}</h1>\n    </div>\n  \n    <div @fadeFilter>\n      <h3 *ngIf=\"form.active == true\" style=\"color:green\">Active document</h3>\n      <h3 *ngIf=\"form.active == false\" style=\"color:red\">Expired document</h3>\n    <hr>\n    <label>Attached file</label>\n    <a data-toggle=\"collapse\" href=\"#collapseAtt\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n      *</a>\n    <div class=\"collapse\" id=\"collapseAtt\">\n      <small class=\"form-text alert alert-info\">\n        File size can't be more <strong>50MB</strong>\n      </small>\n    </div>\n    \n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" readonly [(ngModel)]=\"form.filename\" #filename=\"ngModel\"\n            aria-describedby=\"button-addon4\" placeholder=\"Attached file not found\">\n          <div class=\"input-group-append\" id=\"button-addon4\">\n            <button class=\"btn btn-danger\" [hidden]=\"!form.filename\" (click)=\"deleteFile(form.filename)\"\n              type=\"button\">Delete file</button>\n            <button class=\"btn btn-success\" [hidden]=\"!form.filename\" (click)=\"downloadFile()\" type=\"button\">Download\n            </button>\n            <button class=\"btn btn-warning\" type=\"button\" [hidden]=\"show || form.filename\" (click)=showUploadPanel()>Update</button>\n          </div>\n        </div>\n      </div>\n      <br>\n      <div *ngIf=\"show\" class=\"col\" style=\"max-width: 280px\">\n        <div class=\"input-group\">\n          <div class=\"custom-file\">\n            <input type=\"file\"  class=\"form-control\" aria-describedby=\"inputGroupFileAddon04\" id=\"inputGroupFile04\"\n              (change)=\"selectFile($event)\">\n            <label class=\"custom-file-label\" for=\"inputGroupFile04\"></label>\n          </div>\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-warning\" [disabled]=\"!selectedFile\" id=\"inputGroupFileAddon04\" type=\"button\"\n              (click)=\"uploadFile()\">Upload file</button>\n            <button class=\"btn btn-danger\" type=\"button\" (click)=showUploadPanel()>Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"uploadResponse.status === 'progress'\">\n      <div class=\"progress\" style=\"height: 1px;\">\n        <div class=\"progress-bar\" [style.width.%]=\"uploadResponse.message\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n        </div>\n      </div>    \n    </div>\n    \n    <br><hr><br>\n    <form @fadeFilter (change)=\"change()\"  #f=\"ngForm\" novalidate>\n      <div class=\"row\">\n        <div class=\"col-2\">\n          <label for=\"id\">Id</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"auto complete\" name=\"id\" [(ngModel)]=\"form.id\"\n            #id=\"ngModel\" disabled />\n        </div>\n        <div class=\"col-3\">\n          <label for=\"dateOfCreation\">Date of creation</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"auto complete\" name=\"dateOfCreation\" [(ngModel)]=\"form.dateOfCreation\"\n            #dateOfCreation=\"ngModel\" disabled />\n        </div>\n        <div class=\"col\">\n          <div class=\"form-group\">\n            <label for=\"title\">Title</label>\n            <a data-toggle=\"collapse\" href=\"#collapseTitle\" role=\"button\" aria-expanded=\"false\"\n              aria-controls=\"collapseExample\">\n              *</a>\n            <div class=\"collapse\" id=\"collapseTitle\">\n              <small class=\"form-text alert alert-info\">\n                Be careful, the title is set <strong>1 time</strong> and after successful creation of the document it\n                <strong>can't be changed</strong>\n              </small>\n            </div>\n            <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"form.title\" #title=\"ngModel\" required\n              minlength=\"10\" maxlength=\"100\"\n              [ngClass]=\"{'is-valid':title.valid && title.touched,'is-invalid':title.invalid && title.touched}\" />\n            <div *ngIf=\"f.submitted && title.invalid || title.touched && title.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.required\">Title is required</small>\n              <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.minlength\">Title must be at least 10\n                characters</small>\n            </div>\n          </div>\n        </div>\n  \n      </div>\n  \n      <div class=\"row\">\n        <div class=\"col-4\">\n          <div class=\"form-group\">\n            <label for=\"clientFullName\">Client full name</label>\n            <input type=\"text\" class=\"form-control\" name=\"clientFullName\" [(ngModel)]=\"form.clientFullName\"\n              #clientFullName=\"ngModel\" required maxlength=\"100\"\n              [ngClass]=\"{'is-valid':clientFullName.valid && clientFullName.touched,'is-invalid':clientFullName.invalid && clientFullName.touched}\" />\n            <div *ngIf=\"f.submitted && clientFullName.invalid || clientFullName.touched && clientFullName.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"clientFullName.errors.required\">Client full name is\n                required</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"form-group\">\n            <label for=\"clientAdress\">Client adress</label>\n            <input type=\"text\" class=\"form-control\" name=\"clientAdress\" [(ngModel)]=\"form.clientAdress\"\n              #clientAdress=\"ngModel\" required maxlength=\"255\"\n              [ngClass]=\"{'is-valid':clientAdress.valid && clientAdress.touched,'is-invalid':clientAdress.invalid && clientAdress.touched}\" />\n            <div *ngIf=\"f.submitted && clientAdress.invalid || clientAdress.touched && clientAdress.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"clientAdress.errors.required\">Client adress is\n                required</small>\n            </div>\n          </div>\n        </div>\n      </div>\n  \n      <!-- gggggggggggggggggggggg -->\n  \n      <div class=\"row\">\n        <div class=\"col-8\">\n          <div class=\"form-group\">\n            <label for=\"kindOfActivity\">Kind of activity</label>\n            <input type=\"text\" class=\"form-control\" name=\"kindOfActivity\" [(ngModel)]=\"form.kindOfActivity\"\n              #kindOfActivity=\"ngModel\" required maxlength=\"100\"\n              [ngClass]=\"{'is-valid':kindOfActivity.valid && kindOfActivity.touched,'is-invalid':kindOfActivity.invalid && kindOfActivity.touched}\" />\n            <div *ngIf=\"f.submitted && kindOfActivity.invalid || kindOfActivity.touched && kindOfActivity.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"kindOfActivity.errors.required\">Kind of activity is\n                required</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"form-group\">\n            <label for=\"term\">Term</label>\n            <div class=\"input-group\">\n              <input type=\"number\" class=\"form-control\" name=\"term\" [(ngModel)]=\"form.term\" #term=\"ngModel\" required\n                [ngClass]=\"{'is-valid':term.valid && term.touched,'is-invalid':term.invalid && term.touched}\" />\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\" id=\"basic-addon2\">days</span>\n              </div>\n            </div>\n            <div *ngIf=\"f.submitted && term.invalid || term.touched && term.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"term.errors.required\">Term is\n                required</small>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row \">\n        <div class=\"col\">\n          <div class=\"form-group\">\n            <label for=\"clientResponsibility\">Client responsibility</label>\n            <textarea required maxlength=\"1000\" class=\"form-control\" name=\"clientResponsibility\" rows=\"2\"\n              [(ngModel)]=\"form.clientResponsibility\" #clientResponsibility=\"ngModel\"\n              [ngClass]=\"{'is-valid':clientResponsibility.valid && clientResponsibility.touched,'is-invalid':clientResponsibility.invalid && clientResponsibility.touched}\"></textarea>\n            <div\n              *ngIf=\"f.submitted && clientResponsibility.invalid || clientResponsibility.touched && clientResponsibility.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"clientResponsibility.errors.required\">Client responsibility is\n                required</small>\n            </div>\n          </div>\n        </div>\n  \n        <div class=\"col\">\n          <div class=\"form-group\">\n            <label for=\"creatorResponsibility\">Creator responsibility</label>\n            <textarea required maxlength=\"1000\" class=\"form-control\" name=\"creatorResponsibility\" rows=\"2\"\n              [(ngModel)]=\"form.creatorResponsibility\" #creatorResponsibility=\"ngModel\"\n              [ngClass]=\"{'is-valid':creatorResponsibility.valid && creatorResponsibility.touched,'is-invalid':creatorResponsibility.invalid && creatorResponsibility.touched}\"></textarea>\n            <div\n              *ngIf=\"f.submitted && creatorResponsibility.invalid || creatorResponsibility.touched && creatorResponsibility.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"creatorResponsibility.errors.required\">Creator responsibility is\n                required</small>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row \">\n        <div class=\"col\">\n          <div class=\"form-group\">\n            <label for=\"terminationConditions\">Termination conditions</label>\n            <textarea required maxlength=\"1000\" class=\"form-control\" name=\"terminationConditions\" rows=\"2\"\n              [(ngModel)]=\"form.terminationConditions\" #terminationConditions=\"ngModel\"\n              [ngClass]=\"{'is-valid':terminationConditions.valid && terminationConditions.touched,'is-invalid':terminationConditions.invalid && terminationConditions.touched}\"></textarea>\n            <div\n              *ngIf=\"f.submitted && terminationConditions.invalid || terminationConditions.touched && terminationConditions.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"terminationConditions.errors.required\">Termination conditions is\n                required</small>\n            </div>\n          </div>\n        </div>\n      </div>\n  \n      <!-- gggggggggggggggggggggg -->\n  \n      <div class=\"row \">\n        <div class=\"col\">\n          <div class=\"form-group\">\n            <label for=\"otherInfo\">Other info</label>\n            <textarea maxlength=\"1000\" class=\"form-control\" name=\"otherInfo\" rows=\"3\" [(ngModel)]=\"form.otherInfo\"\n              #otherInfo=\"ngModel\"></textarea>\n          </div>\n        </div>\n      </div>\n  \n      <div class=\"form-group\">\n        <hr>\n        <button *ngIf=\"!isEdit\" class=\"btn btn-secondary mr-3\" routerLink=\"/documents-list\" \n      >Cancel</button>\n      <button *ngIf=\"isEdit\" class=\"btn btn-secondary mr-3\" \n      data-toggle=\"modal\" data-target=\"#editsale\">Cancel</button>\n      <button  [disabled]=\"isEdit===false  || f.form.invalid\" (click)=\"updateDoc()\" class=\"mr-3 btn btn-success\">Update contract</button>\n        <button  class=\"btn btn-primary\" (click)=\"saveAsPDF()\">Save as PDF</button>\n      </div>\n    </form>\n  </div>\n</div>\n  <div class=\"modal fade\" id=\"editsale\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalCenterTitle\">Confirm the action</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h6>Are you sure you want to cancel changes?</h6>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" data-dismiss=\"modal\" routerLink=\"/documents-list\" \n         class=\"btn btn-success\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n  <ng-template #notLogin>\n    <div class=\"alert alert-danger\" role=\"alert\">\n      <h2 class=\"alert-heading\">Oops...</h2>\n      <hr>\n      <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a routerLink=\"/\" class=\"alert-link\">login</a>!\n      </h5>\n    </div>\n  </ng-template>"

/***/ }),

/***/ "./src/app/documents-edit/cooperation-edit/cooperation-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/documents-edit/cooperation-edit/cooperation-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CooperationEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CooperationEditComponent", function() { return CooperationEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contracts_cooperation_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contracts/cooperation-contract.service */ "./src/app/services/contracts/cooperation-contract.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_services_pdf_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/pdf.service */ "./src/app/services/pdf.service.ts");











var CooperationEditComponent = /** @class */ (function () {
    function CooperationEditComponent(service, userService, tokenStorage, fileService, router, toast, pdfService) {
        this.service = service;
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.fileService = fileService;
        this.router = router;
        this.toast = toast;
        this.pdfService = pdfService;
        this.form = {};
        this.isEdit = false;
        this.show = false;
        this.isLogin = false;
        this.errorMessage = '';
        this.errorMessageUpdate = '';
        this.isFailedDownload = false;
        this.isFailed = false;
        this.uploadResponse = { status: '', message: '', filePath: '' };
        this.today = "";
    }
    CooperationEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLogin = this.tokenStorage.isLogin();
        if (!this.isLogin) {
            this.router.navigate(['/']);
        }
        else {
            this.today = this.userService.initToday();
            console.log(this.today);
            this.userService.getByUsername(this.tokenStorage.getUsername())
                .subscribe(function (data) {
                _this.curUser = data;
            });
            this.curRole = this.tokenStorage.getAuthorities();
            this.docId = window.sessionStorage.getItem("docId");
            console.log("doc id " + this.docId);
            this.initDoc();
        }
    };
    CooperationEditComponent.prototype.showUploadPanel = function () {
        this.show = !this.show;
        this.isFailedDownload = false;
    };
    CooperationEditComponent.prototype.initDoc = function () {
        var _this = this;
        this.isEdit = false;
        this.service.getById(this.docId)
            .subscribe(function (data) {
            if (data) {
                _this.document = data;
                _this.form.id = _this.document.id;
                if (_this.document.dateOfCreation === null) {
                    _this.form.dateOfCreation = new Date();
                }
                else {
                    _this.form.dateOfCreation = _this.document.dateOfCreation;
                }
                _this.form.active = _this.document.active;
                _this.form.clientAdress = _this.document.clientAdress;
                _this.form.clientFullName = _this.document.clientFullName;
                _this.form.lastChange = _this.document.lastChange;
                _this.form.title = _this.document.title;
                _this.form.otherInfo = _this.document.otherInfo;
                _this.form.user = _this.curUser;
                _this.form.filename = _this.document.filename;
                _this.form.clientResponsibility = _this.document.clientResponsibility;
                _this.form.creatorResponsibility = _this.document.creatorResponsibility;
                _this.form.kindOfActivity = _this.document.kindOfActivity;
                _this.form.term = _this.document.term;
                _this.form.terminationConditions = _this.document.terminationConditions;
            }
        });
    };
    CooperationEditComponent.prototype.updateDoc = function () {
        var _this = this;
        if (this.form.dateOfCreation === '')
            this.form.dateOfCreation = new Date();
        this.service.update(this.curUser.username, this.form)
            .subscribe(function () {
            _this.initDoc();
            _this.isFailed = false;
            _this.toast.showSuccess("", "Cooperation contract updated successfully");
        }, function (error) {
            console.log(error);
            //this.errorMessageUpdate = error.error.message;
            _this.toast.showError("", error.error.message);
            _this.isFailed = true;
        });
        this.isEdit = false;
    };
    CooperationEditComponent.prototype.change = function () {
        this.isFailedDownload = false;
        this.isEdit = true;
    };
    CooperationEditComponent.prototype.selectFile = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile.name);
    };
    CooperationEditComponent.prototype.uploadFile = function () {
        var _this = this;
        if (this.form.filename != null) {
            this.deleteFile(this.form.filename);
        }
        if (this.selectedFile.size > 51200000) { // 50 MB
            this.toast.showError("", "File wasn't uploaded, because file size exceeded the limit of 50mb");
            this.selectedFile = undefined;
        }
        else {
            this.fileService.uploadFile(this.selectedFile, this.document.id, "cooperation")
                .subscribe(function (data) {
                _this.form.filename = data.filename;
                _this.uploadResponse = data;
                _this.initDoc();
                if (_this.uploadResponse.message == '100') {
                    _this.toast.showSuccess("", "File uploaded successfully");
                    console.log("status " + _this.uploadResponse.status);
                    console.log("message " + _this.uploadResponse.message);
                    console.log("filePath " + _this.uploadResponse.filePath);
                }
            }, function (error) {
                console.log(error);
                //this.errorMessage = error.message;
                _this.toast.showError("", error.message);
            });
            this.selectedFile = undefined;
            this.show = false;
        }
    };
    CooperationEditComponent.prototype.downloadFile = function () {
        var _this = this;
        var openedToast = null;
        openedToast = this.toast.showInfo("", "File is downloading...");
        this.fileService.downloadFile(this.form.filename, "cooperation")
            .subscribe(function (response) {
            _this.saveFile(response);
            _this.toast.deleteToast(openedToast);
            _this.toast.showSuccess("", "File downloaded");
        }, function (error) {
            //this.errorMessage = error.message;
            _this.toast.deleteToast(openedToast);
            _this.toast.showError("", "File can't be download, maybe it was deleted from storage");
            console.log(error);
            _this.initDoc();
        });
    };
    CooperationEditComponent.prototype.saveFile = function (data) {
        var blob = new Blob([data], { type: this.form.fileType });
        file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"](blob, this.form.filename);
    };
    CooperationEditComponent.prototype.deleteFile = function (data) {
        var _this = this;
        this.fileService.deleteFile(data, "cooperation")
            .subscribe(function () {
            console.log("success delete");
            _this.initDoc();
            //this.toast.showSuccess("", "File deleted successfully");
        }, function (error) {
            console.log("unsucces delete");
        });
    };
    CooperationEditComponent.prototype.saveAsPDF = function () {
        console.log("88 " + this.curUser.adress);
        if (this.curUser.adress == null || this.curUser.adress == '') {
            this.toast.showWarning("", "To generate a PDF document, please go to your account and fill in the address");
        }
        else {
            this.pdfService.saveAsPDFCooperation(this.form.kindOfActivity, this.form.dateOfCreation, this.form.clientResponsibility, this.form.creatorResponsibility, this.form.term, this.form.terminationConditions, this.form.title, this.form.clientFullName, this.form.clientAdress, this.curUser.name, this.curUser.adress, this.form.otherInfo);
            this.toast.showSuccess("", "Save as PDF succesfully");
        }
    };
    CooperationEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cooperation-edit',
            template: __webpack_require__(/*! ./cooperation-edit.component.html */ "./src/app/documents-edit/cooperation-edit/cooperation-edit.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_5__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_5__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./cooperation-edit.component.css */ "./src/app/documents-edit/cooperation-edit/cooperation-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contracts_cooperation_contract_service__WEBPACK_IMPORTED_MODULE_2__["CooperationContractService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"],
            src_app_services_file_service__WEBPACK_IMPORTED_MODULE_8__["FileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
            src_app_services_pdf_service__WEBPACK_IMPORTED_MODULE_10__["PDFService"]])
    ], CooperationEditComponent);
    return CooperationEditComponent;
}());



/***/ }),

/***/ "./src/app/documents-edit/credit-edit/credit-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/documents-edit/credit-edit/credit-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy1lZGl0L2NyZWRpdC1lZGl0L2NyZWRpdC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/documents-edit/credit-edit/credit-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/documents-edit/credit-edit/credit-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"isLogin; else notLogin\">\n  <div class=\"text-center\" >\n    <h1 *ngIf=isEdit class=\"display-4 \">{{form.title}}*</h1>\n    <h1 *ngIf=!isEdit class=\"display-4 \">{{form.title}}</h1>\n  </div>\n\n  <div @fadeFilter>\n  <h3 *ngIf=\"form.active == true\" style=\"color:green\">Active document</h3>\n  <h3 *ngIf=\"form.active == false\" style=\"color:red\">Expired document</h3>\n  <hr>\n  <label>Attached file</label>\n  <a data-toggle=\"collapse\" href=\"#collapseAtt\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n    *</a>\n  <div class=\"collapse\" id=\"collapseAtt\">\n    <small class=\"form-text alert alert-info\">\n      File size can't be more <strong>50MB</strong>\n    </small>\n  </div>\n  \n  <div  class=\"row\">\n    <div class=\"col\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" readonly [(ngModel)]=\"form.filename\" #filename=\"ngModel\"\n          aria-describedby=\"button-addon4\" placeholder=\"Attached file not found\">\n        <div class=\"input-group-append\" id=\"button-addon4\">\n          <button class=\"btn btn-danger\" [hidden]=\"!form.filename\" (click)=\"deleteFile(form.filename)\"\n            type=\"button\">Delete file</button>\n          <button class=\"btn btn-success\" [hidden]=\"!form.filename\" (click)=\"downloadFile()\" type=\"button\">Download\n          </button>\n          <button class=\"btn btn-warning\" type=\"button\" [hidden]=\"show || form.filename\" (click)=showUploadPanel()>Update</button>\n        </div>\n      </div>\n    </div>\n    <br>\n    <div *ngIf=\"show\" class=\"col\" style=\"max-width: 280px\">\n      <div class=\"input-group\">\n        <div class=\"custom-file\">\n          <input type=\"file\"  class=\"form-control\" aria-describedby=\"inputGroupFileAddon04\" id=\"inputGroupFile04\"\n            (change)=\"selectFile($event)\">\n          <label class=\"custom-file-label\" for=\"inputGroupFile04\"></label>\n        </div>\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-warning\" [disabled]=\"!selectedFile\" id=\"inputGroupFileAddon04\" type=\"button\"\n            (click)=\"uploadFile()\">Upload file</button>\n          <button class=\"btn btn-danger\" type=\"button\" (click)=showUploadPanel()>Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"uploadResponse.status === 'progress'\">\n    <div class=\"progress\" style=\"height: 1px;\">\n      <div class=\"progress-bar\" [style.width.%]=\"uploadResponse.message\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n      </div>\n    </div>    \n  </div>\n  \n  <br><hr><br>\n  <form  (change)=\"change()\"  #f=\"ngForm\" novalidate>\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <label for=\"id\">Id</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"auto complete\" name=\"id\" [(ngModel)]=\"form.id\"\n          #id=\"ngModel\" disabled />\n      </div>\n      <div class=\"col-3\">\n        <label for=\"dateOfCreation\">Date of creation</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"auto complete\" name=\"dateOfCreation\" [(ngModel)]=\"form.dateOfCreation\"\n          #dateOfCreation=\"ngModel\" disabled />\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <a data-toggle=\"collapse\" href=\"#collapseTitle\" role=\"button\" aria-expanded=\"false\"\n            aria-controls=\"collapseExample\">\n            *</a>\n          <div class=\"collapse\" id=\"collapseTitle\">\n            <small class=\"form-text alert alert-info\">\n              Be careful, the title is set <strong>1 time</strong> and after successful creation of the document it\n              <strong>can't be changed</strong>\n            </small>\n          </div>\n          <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"form.title\" #title=\"ngModel\" required\n            minlength=\"10\" maxlength=\"100\"\n            [ngClass]=\"{'is-valid':title.valid && title.touched,'is-invalid':title.invalid && title.touched}\" />\n          <div *ngIf=\"f.submitted && title.invalid || title.touched && title.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.required\">Title is required</small>\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.minlength\">Title must be at least 10\n              characters</small>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"form-group\">\n          <label for=\"clientFullName\">Borrower full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"clientFullName\" [(ngModel)]=\"form.clientFullName\"\n            #clientFullName=\"ngModel\" required maxlength=\"100\"\n            [ngClass]=\"{'is-valid':clientFullName.valid && clientFullName.touched,'is-invalid':clientFullName.invalid && clientFullName.touched}\" />\n          <div *ngIf=\"f.submitted && clientFullName.invalid || clientFullName.touched && clientFullName.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientFullName.errors.required\">Borrower full name is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"clientAdress\">Borrower adress</label>\n          <input type=\"text\" class=\"form-control\" name=\"clientAdress\" [(ngModel)]=\"form.clientAdress\"\n            #clientAdress=\"ngModel\" required maxlength=\"255\"\n            [ngClass]=\"{'is-valid':clientAdress.valid && clientAdress.touched,'is-invalid':clientAdress.invalid && clientAdress.touched}\" />\n          <div *ngIf=\"f.submitted && clientAdress.invalid || clientAdress.touched && clientAdress.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientAdress.errors.required\">Borrower adress is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"creditAmount\">Loan amount</label>\n          <div class=\"input-group\">\n            <input type=\"number\" class=\"form-control\" name=\"creditAmount\" [(ngModel)]=\"form.creditAmount\"\n              #creditAmount=\"ngModel\" required\n              [ngClass]=\"{'is-valid':creditAmount.valid && creditAmount.touched,'is-invalid':creditAmount.invalid && creditAmount.touched}\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\" id=\"basic-addon2\">$</span>\n            </div>\n          </div>\n          <div *ngIf=\"f.submitted && creditAmount.invalid || creditAmount.touched && creditAmount.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"creditAmount.errors.required\">Loan amount is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group \">\n          <label for=\"annualInterest\">Annual interest</label>\n          <div class=\"input-group\">\n            <input type=\"number\" class=\"form-control\" name=\"annualInterest\" [(ngModel)]=\"form.annualInterest\"\n              #annualInterest=\"ngModel\" required\n              [ngClass]=\"{'is-valid':annualInterest.valid && annualInterest.touched,'is-invalid':annualInterest.invalid && annualInterest.touched}\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\" id=\"basic-addon2\">%</span>\n            </div>\n          </div>\n          <div *ngIf=\"f.submitted && annualInterest.invalid || annualInterest.touched && annualInterest.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"annualInterest.errors.required\">Annual interest is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"term\">Term</label>\n          <div class=\"input-group\">\n          <input type=\"number\" class=\"form-control\" name=\"term\" [(ngModel)]=\"form.term\" #term=\"ngModel\" required\n            [ngClass]=\"{'is-valid':term.valid && term.touched,'is-invalid':term.invalid && term.touched}\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\" id=\"basic-addon2\">days</span>\n            </div>\n          </div>\n            <div *ngIf=\"f.submitted && term.invalid || term.touched && term.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"term.errors.required\">Term is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row \">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"otherInfo\">Other info</label>\n          <textarea maxlength=\"1000\" class=\"form-control\" name=\"otherInfo\" rows=\"3\" [(ngModel)]=\"form.otherInfo\"\n            #otherInfo=\"ngModel\"></textarea>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <hr>\n      <button *ngIf=\"!isEdit\" class=\"btn btn-secondary mr-3\" routerLink=\"/documents-list\" \n      >Cancel</button>\n      <button *ngIf=\"isEdit\" class=\"btn btn-secondary mr-3\" \n      data-toggle=\"modal\" data-target=\"#editsale\">Cancel</button>\n      <button  [disabled]=\"isEdit===false  || f.form.invalid\" (click)=\"updateDoc()\" class=\"btn btn-success\">Update contract</button>\n      <button  class=\"btn btn-primary ml-3\" (click)=\"saveAsPDF()\">Save as PDF</button>\n    </div>\n  </form>\n</div>\n</div>\n<div class=\"modal fade\" id=\"editsale\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" id=\"exampleModalCenterTitle\">Confirm the action</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <h6>Are you sure you want to cancel changes?</h6>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n          <button type=\"button\" data-dismiss=\"modal\" routerLink=\"/documents-list\" \n           class=\"btn btn-success\">Yes</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<ng-template #notLogin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a routerLink=\"/\" class=\"alert-link\">login</a>!\n    </h5>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/documents-edit/credit-edit/credit-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/documents-edit/credit-edit/credit-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreditEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditEditComponent", function() { return CreditEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_services_contracts_credit_contract_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/contracts/credit-contract.service */ "./src/app/services/contracts/credit-contract.service.ts");
/* harmony import */ var src_app_services_pdf_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/pdf.service */ "./src/app/services/pdf.service.ts");











var CreditEditComponent = /** @class */ (function () {
    function CreditEditComponent(service, userService, tokenStorage, fileService, router, toast, pdfService) {
        this.service = service;
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.fileService = fileService;
        this.router = router;
        this.toast = toast;
        this.pdfService = pdfService;
        this.form = {};
        this.isEdit = false;
        this.show = false;
        this.isLogin = false;
        this.errorMessage = '';
        this.errorMessageUpdate = '';
        this.isFailedDownload = false;
        this.isFailed = false;
        this.uploadResponse = { status: '', message: '', filePath: '' };
        this.today = "";
    }
    CreditEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLogin = this.tokenStorage.isLogin();
        if (!this.isLogin) {
            this.router.navigate(['/']);
        }
        else {
            this.today = this.userService.initToday();
            console.log(this.today);
            this.userService.getByUsername(this.tokenStorage.getUsername())
                .subscribe(function (data) {
                _this.curUser = data;
            });
            this.curRole = this.tokenStorage.getAuthorities();
            this.docId = window.sessionStorage.getItem("docId");
            console.log("doc id " + this.docId);
            this.initDoc();
        }
    };
    CreditEditComponent.prototype.showUploadPanel = function () {
        this.show = !this.show;
        this.isFailedDownload = false;
    };
    CreditEditComponent.prototype.initDoc = function () {
        var _this = this;
        this.isEdit = false;
        this.service.getById(this.docId)
            .subscribe(function (data) {
            if (data) {
                _this.document = data;
                _this.form.id = _this.document.id;
                if (_this.document.dateOfCreation === null) {
                    _this.form.dateOfCreation = new Date();
                }
                else {
                    _this.form.dateOfCreation = _this.document.dateOfCreation;
                }
                _this.form.active = _this.document.active;
                _this.form.clientAdress = _this.document.clientAdress;
                _this.form.clientFullName = _this.document.clientFullName;
                _this.form.lastChange = _this.document.lastChange;
                _this.form.title = _this.document.title;
                _this.form.otherInfo = _this.document.otherInfo;
                _this.form.user = _this.curUser;
                _this.form.filename = _this.document.filename;
                _this.form.term = _this.document.term;
                _this.form.creditAmount = _this.document.creditAmount;
                _this.form.annualInterest = _this.document.annualInterest;
            }
        });
    };
    CreditEditComponent.prototype.updateDoc = function () {
        var _this = this;
        if (this.form.dateOfCreation === '')
            this.form.dateOfCreation = new Date();
        this.service.update(this.curUser.username, this.form)
            .subscribe(function () {
            _this.initDoc();
            _this.isFailed = false;
            _this.toast.showSuccess("", "Credit contract updated successfully");
        }, function (error) {
            console.log(error);
            //this.errorMessageUpdate = error.error.message;
            _this.toast.showError("", error.error.message);
            _this.isFailed = true;
        });
        this.isEdit = false;
    };
    CreditEditComponent.prototype.change = function () {
        this.isFailedDownload = false;
        this.isEdit = true;
    };
    CreditEditComponent.prototype.selectFile = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile.name);
    };
    CreditEditComponent.prototype.uploadFile = function () {
        var _this = this;
        if (this.form.filename != null) {
            this.deleteFile(this.form.filename);
        }
        if (this.selectedFile.size > 51200000) { // 50 MB
            this.toast.showError("", "File wasn't uploaded, because file size exceeded the limit of 50mb");
            this.selectedFile = undefined;
        }
        else {
            this.fileService.uploadFile(this.selectedFile, this.document.id, "credit")
                .subscribe(function (data) {
                _this.form.filename = data.filename;
                _this.uploadResponse = data;
                _this.initDoc();
                if (_this.uploadResponse.message == '100') {
                    _this.toast.showSuccess("", "File uploaded successfully");
                    console.log("status " + _this.uploadResponse.status);
                    console.log("message " + _this.uploadResponse.message);
                    console.log("filePath " + _this.uploadResponse.filePath);
                }
            }, function (error) {
                console.log(error);
                //this.errorMessage = error.message;
                _this.toast.showError("", error.message);
            });
            this.selectedFile = undefined;
            this.show = false;
        }
    };
    CreditEditComponent.prototype.downloadFile = function () {
        var _this = this;
        var openedToast = null;
        openedToast = this.toast.showInfo("", "File is downloading...");
        this.fileService.downloadFile(this.form.filename, "credit")
            .subscribe(function (response) {
            _this.saveFile(response);
            _this.toast.deleteToast(openedToast);
            _this.toast.showSuccess("", "File downloaded");
        }, function (error) {
            //this.errorMessage = error.message;
            _this.toast.deleteToast(openedToast);
            _this.toast.showError("", "File can't be download, maybe it was deleted from storage");
            console.log(error);
            _this.initDoc();
        });
    };
    CreditEditComponent.prototype.saveFile = function (data) {
        var blob = new Blob([data], { type: this.form.fileType });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](blob, this.form.filename);
    };
    CreditEditComponent.prototype.deleteFile = function (data) {
        var _this = this;
        this.fileService.deleteFile(data, "credit")
            .subscribe(function () {
            console.log("success delete");
            _this.initDoc();
            //this.toast.showSuccess("", "File deleted successfully");
        }, function (error) {
            console.log("unsucces delete");
        });
    };
    CreditEditComponent.prototype.saveAsPDF = function () {
        console.log("88 " + this.curUser.adress);
        if (this.curUser.adress == null || this.curUser.adress == '') {
            this.toast.showWarning("", "To generate a PDF document, please go to your account and fill in the address");
        }
        else {
            this.pdfService.saveAsPDFCredit(this.form.title, this.form.clientFullName, this.form.clientAdress, this.curUser.name, this.curUser.adress, this.form.dateOfCreation, this.form.otherInfo, this.form.creditAmount, this.form.annualInterest, this.form.term);
            this.toast.showSuccess("", "Save as PDF succesfully");
        }
    };
    CreditEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-credit-edit',
            template: __webpack_require__(/*! ./credit-edit.component.html */ "./src/app/documents-edit/credit-edit/credit-edit.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_4__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_4__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./credit-edit.component.css */ "./src/app/documents-edit/credit-edit/credit-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contracts_credit_contract_service__WEBPACK_IMPORTED_MODULE_9__["CreditContractService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"],
            src_app_services_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
            src_app_services_pdf_service__WEBPACK_IMPORTED_MODULE_10__["PDFService"]])
    ], CreditEditComponent);
    return CreditEditComponent;
}());



/***/ }),

/***/ "./src/app/documents-edit/rental-edit/rental-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/documents-edit/rental-edit/rental-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy1lZGl0L3JlbnRhbC1lZGl0L3JlbnRhbC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/documents-edit/rental-edit/rental-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/documents-edit/rental-edit/rental-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"isLogin; else notLogin\">\n  <div class=\"text-center\" >\n    <h1 *ngIf=isEdit class=\"display-4 \">{{form.title}}*</h1>\n    <h1 *ngIf=!isEdit class=\"display-4 \">{{form.title}}</h1>\n  </div>\n  <div @fadeFilter>\n    <h3 *ngIf=\"form.active == true\" style=\"color:green\">Active document</h3>\n    <h3 *ngIf=\"form.active == false\" style=\"color:red\">Expired document</h3>\n  <hr>\n  <label>Attached file</label>\n  <a data-toggle=\"collapse\" href=\"#collapseAtt\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n    *</a>\n  <div class=\"collapse\" id=\"collapseAtt\">\n    <small class=\"form-text alert alert-info\">\n      File size can't be more <strong>50MB</strong>\n    </small>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" readonly [(ngModel)]=\"form.filename\" #filename=\"ngModel\"\n          aria-describedby=\"button-addon4\" placeholder=\"Attached file not found\">\n        <div class=\"input-group-append\" id=\"button-addon4\">\n          <button class=\"btn btn-danger\" [hidden]=\"!form.filename\" (click)=\"deleteFile(form.filename)\"\n            type=\"button\">Delete file</button>\n          <button class=\"btn btn-success\" [hidden]=\"!form.filename\" (click)=\"downloadFile()\" type=\"button\">Download\n          </button>\n          <button class=\"btn btn-warning\" type=\"button\" [hidden]=\"show || form.filename\" (click)=showUploadPanel()>Update</button>\n        </div>\n      </div>\n    </div>\n    <br>\n    <div *ngIf=\"show\" class=\"col\" style=\"max-width: 280px\">\n      <div class=\"input-group\">\n        <div class=\"custom-file\">\n          <input type=\"file\"  class=\"form-control\" aria-describedby=\"inputGroupFileAddon04\" id=\"inputGroupFile04\"\n            (change)=\"selectFile($event)\">\n          <label class=\"custom-file-label\" for=\"inputGroupFile04\"></label>\n        </div>\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-warning\" [disabled]=\"!selectedFile\" id=\"inputGroupFileAddon04\" type=\"button\"\n            (click)=\"uploadFile()\">Upload file</button>\n          <button class=\"btn btn-danger\" type=\"button\" (click)=showUploadPanel()>Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"uploadResponse.status === 'progress'\">\n    <div class=\"progress\" style=\"height: 1px;\">\n      <div class=\"progress-bar\" [style.width.%]=\"uploadResponse.message\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n      </div>\n    </div>    \n  </div>\n  \n  <br><hr><br>\n  <form @fadeFilter (change)=\"change()\"  #f=\"ngForm\" novalidate>\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <label for=\"id\">Id</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"auto complete\" name=\"id\" [(ngModel)]=\"form.id\"\n          #id=\"ngModel\" disabled />\n      </div>\n      <div class=\"col-3\">\n        <label for=\"dateOfCreation\">Date of creation</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"auto complete\" name=\"dateOfCreation\" [(ngModel)]=\"form.dateOfCreation\"\n          #dateOfCreation=\"ngModel\" disabled />\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <a data-toggle=\"collapse\" href=\"#collapseTitle\" role=\"button\" aria-expanded=\"false\"\n            aria-controls=\"collapseExample\">\n            *</a>\n          <div class=\"collapse\" id=\"collapseTitle\">\n            <small class=\"form-text alert alert-info\">\n              Be careful, the title is set <strong>1 time</strong> and after successful creation of the document it\n              <strong>can't be changed</strong>\n            </small>\n          </div>\n          <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"form.title\" #title=\"ngModel\" required\n            minlength=\"10\" maxlength=\"100\"\n            [ngClass]=\"{'is-valid':title.valid && title.touched,'is-invalid':title.invalid && title.touched}\" />\n          <div *ngIf=\"f.submitted && title.invalid || title.touched && title.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.required\">Title is required</small>\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.minlength\">Title must be at least 10\n              characters</small>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"form-group\">\n          <label for=\"clientFullName\">Lessee full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"clientFullName\" [(ngModel)]=\"form.clientFullName\"\n            #clientFullName=\"ngModel\" required maxlength=\"100\"\n            [ngClass]=\"{'is-valid':clientFullName.valid && clientFullName.touched,'is-invalid':clientFullName.invalid && clientFullName.touched}\" />\n          <div *ngIf=\"f.submitted && clientFullName.invalid || clientFullName.touched && clientFullName.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientFullName.errors.required\">Lessee full name is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"clientAdress\">Lessee adress</label>\n          <input type=\"text\" class=\"form-control\" name=\"clientAdress\" [(ngModel)]=\"form.clientAdress\"\n            #clientAdress=\"ngModel\" required maxlength=\"255\"\n            [ngClass]=\"{'is-valid':clientAdress.valid && clientAdress.touched,'is-invalid':clientAdress.invalid && clientAdress.touched}\" />\n          <div *ngIf=\"f.submitted && clientAdress.invalid || clientAdress.touched && clientAdress.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientAdress.errors.required\">Lessee adress is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"rentalObject\">Lease object</label>\n          <input type=\"text\" class=\"form-control\" name=\"rentalObject\" [(ngModel)]=\"form.rentalObject\"\n            #rentalObject=\"ngModel\" required maxlength=\"100\"\n            [ngClass]=\"{'is-valid':rentalObject.valid && rentalObject.touched,'is-invalid':rentalObject.invalid && rentalObject.touched}\" />\n          <div *ngIf=\"f.submitted && rentalObject.invalid || rentalObject.touched && rentalObject.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"rentalObject.errors.required\">Lease object is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"form-group\">\n            <label for=\"rentalPrice\">Lease price</label>\n            <div class=\"input-group\">\n              <input type=\"number\" class=\"form-control\" name=\"rentalPrice\" [(ngModel)]=\"form.rentalPrice\"\n                #rentalPrice=\"ngModel\" required\n                [ngClass]=\"{'is-valid':rentalPrice.valid && rentalPrice.touched,'is-invalid':rentalPrice.invalid && rentalPrice.touched}\" />\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\" id=\"basic-addon2\">$/day</span>\n              </div>\n            </div>\n            <div *ngIf=\"f.submitted && rentalPrice.invalid || rentalPrice.touched && rentalPrice.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"rentalPrice.errors.required\">Lease price is\n                required</small>\n            </div>\n          </div>\n        </div>\n      <div class=\"col\">\n          <div class=\"form-group\">\n            <label for=\"startRental\">Start lease</label>           \n            <input type=\"date\" min={{today}} class=\"form-control\" name=\"startRental\" [(ngModel)]=\"form.startRental\"\n              #startRental=\"ngModel\" required\n              [ngClass]=\"{'is-valid':startRental.valid && startRental.touched,'is-invalid':startRental.invalid && startRental.touched}\" />\n            <div *ngIf=\"f.submitted && startRental.invalid || startRental.touched && startRental.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"startRental.errors.required\">Start lease is\n                required</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n            <div class=\"form-group\">\n              <label for=\"endRental\">End lease</label>              \n              <input type=\"date\" min={{today}} class=\"form-control\" name=\"endRental\" [(ngModel)]=\"form.endRental\"\n                #endRental=\"ngModel\" required\n                [ngClass]=\"{'is-valid':endRental.valid && endRental.touched,'is-invalid':endRental.invalid && endRental.touched}\" />\n              <div *ngIf=\"f.submitted && endRental.invalid || endRental.touched && endRental.invalid\">\n                <small class=\"form-text alert alert-warning\" *ngIf=\"endRental.errors.required\">End lease is\n                  required</small>\n              </div>\n            </div>\n          </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row \">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"otherInfo\">Other info</label>\n          <textarea maxlength=\"1000\" class=\"form-control\" name=\"otherInfo\" rows=\"3\" [(ngModel)]=\"form.otherInfo\"\n            #otherInfo=\"ngModel\"></textarea>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <hr>\n      <button *ngIf=\"!isEdit\" class=\"btn btn-secondary mr-3\" routerLink=\"/documents-list\" \n      >Cancel</button>\n      <button *ngIf=\"isEdit\" class=\"btn btn-secondary mr-3\" \n      data-toggle=\"modal\" data-target=\"#editsale\">Cancel</button>\n      <button  [disabled]=\"isEdit===false  || f.form.invalid\" (click)=\"updateDoc()\" class=\"btn btn-success\">Update contract</button>\n      <button  class=\"btn btn-primary ml-3\" (click)=\"saveAsPDF()\">Save as PDF</button>\n    </div>\n  </form>\n</div>\n</div>\n<div class=\"modal fade\" id=\"editsale\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" id=\"exampleModalCenterTitle\">Confirm the action</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <h6>Are you sure you want to cancel changes?</h6>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n          <button type=\"button\" data-dismiss=\"modal\" routerLink=\"/documents-list\" \n           class=\"btn btn-success\">Yes</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<ng-template #notLogin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a routerLink=\"/\" class=\"alert-link\">login</a>!\n    </h5>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/documents-edit/rental-edit/rental-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/documents-edit/rental-edit/rental-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: RentalEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalEditComponent", function() { return RentalEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contracts_rental_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contracts/rental-contract.service */ "./src/app/services/contracts/rental-contract.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_services_pdf_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/pdf.service */ "./src/app/services/pdf.service.ts");











var RentalEditComponent = /** @class */ (function () {
    function RentalEditComponent(service, userService, tokenStorage, fileService, router, toast, pdfService) {
        this.service = service;
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.fileService = fileService;
        this.router = router;
        this.toast = toast;
        this.pdfService = pdfService;
        this.form = {};
        this.isEdit = false;
        this.show = false;
        this.isLogin = false;
        this.errorMessage = '';
        this.errorMessageUpdate = '';
        this.isFailedDownload = false;
        this.isFailed = false;
        this.uploadResponse = { status: '', message: '', filePath: '' };
        this.today = "";
    }
    RentalEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLogin = this.tokenStorage.isLogin();
        if (!this.isLogin) {
            this.router.navigate(['/']);
        }
        else {
            this.today = this.userService.initToday();
            console.log(this.today);
            this.userService.getByUsername(this.tokenStorage.getUsername())
                .subscribe(function (data) {
                _this.curUser = data;
            });
            this.curRole = this.tokenStorage.getAuthorities();
            this.docId = window.sessionStorage.getItem("docId");
            console.log("doc id " + this.docId);
            this.initDoc();
        }
    };
    RentalEditComponent.prototype.showUploadPanel = function () {
        this.show = !this.show;
        this.isFailedDownload = false;
    };
    RentalEditComponent.prototype.initDoc = function () {
        var _this = this;
        this.isEdit = false;
        this.service.getById(this.docId)
            .subscribe(function (data) {
            if (data) {
                _this.document = data;
                _this.form.id = _this.document.id;
                if (_this.document.dateOfCreation === null) {
                    _this.form.dateOfCreation = new Date();
                }
                else {
                    _this.form.dateOfCreation = _this.document.dateOfCreation;
                }
                _this.form.active = _this.document.active;
                _this.form.clientAdress = _this.document.clientAdress;
                _this.form.clientFullName = _this.document.clientFullName;
                _this.form.lastChange = _this.document.lastChange;
                _this.form.title = _this.document.title;
                _this.form.otherInfo = _this.document.otherInfo;
                _this.form.user = _this.curUser;
                _this.form.filename = _this.document.filename;
                _this.form.rentalObject = _this.document.rentalObject;
                _this.form.startRental = _this.document.startRental;
                _this.form.endRental = _this.document.endRental;
                _this.form.rentalPrice = _this.document.rentalPrice;
            }
        });
    };
    RentalEditComponent.prototype.updateDoc = function () {
        var _this = this;
        if (this.form.dateOfCreation === '')
            this.form.dateOfCreation = new Date();
        this.service.update(this.curUser.username, this.form)
            .subscribe(function () {
            _this.initDoc();
            _this.isFailed = false;
            _this.toast.showSuccess("", "Rental contract updated successfully");
        }, function (error) {
            console.log(error);
            //this.errorMessageUpdate = error.error.message;
            _this.toast.showError("", error.error.message);
            _this.isFailed = true;
        });
        this.isEdit = false;
    };
    RentalEditComponent.prototype.change = function () {
        this.isFailedDownload = false;
        this.isEdit = true;
    };
    RentalEditComponent.prototype.selectFile = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile.name);
    };
    RentalEditComponent.prototype.uploadFile = function () {
        var _this = this;
        if (this.form.filename != null) {
            this.deleteFile(this.form.filename);
        }
        if (this.selectedFile.size > 51200000) { // 50 MB
            this.toast.showError("", "File wasn't uploaded, because file size exceeded the limit of 50mb");
            this.selectedFile = undefined;
        }
        else {
            this.fileService.uploadFile(this.selectedFile, this.document.id, "rental")
                .subscribe(function (data) {
                _this.form.filename = data.filename;
                _this.uploadResponse = data;
                _this.initDoc();
                if (_this.uploadResponse.message == '100') {
                    _this.toast.showSuccess("", "File uploaded successfully");
                    console.log("status " + _this.uploadResponse.status);
                    console.log("message " + _this.uploadResponse.message);
                    console.log("filePath " + _this.uploadResponse.filePath);
                }
            }, function (error) {
                console.log(error);
                //this.errorMessage = error.message;
                _this.toast.showError("", error.message);
            });
            this.selectedFile = undefined;
            this.show = false;
        }
    };
    RentalEditComponent.prototype.downloadFile = function () {
        var _this = this;
        var openedToast = null;
        openedToast = this.toast.showInfo("", "File is downloading...");
        this.fileService.downloadFile(this.form.filename, "rental")
            .subscribe(function (response) {
            _this.saveFile(response);
            _this.toast.deleteToast(openedToast);
            _this.toast.showSuccess("", "File downloaded");
        }, function (error) {
            //this.errorMessage = error.message;
            _this.toast.deleteToast(openedToast);
            _this.toast.showError("", "File can't be download, maybe it was deleted from storage");
            console.log(error);
            _this.initDoc();
        });
    };
    RentalEditComponent.prototype.saveFile = function (data) {
        var blob = new Blob([data], { type: this.form.fileType });
        file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"](blob, this.form.filename);
    };
    RentalEditComponent.prototype.deleteFile = function (data) {
        var _this = this;
        this.fileService.deleteFile(data, "rental")
            .subscribe(function () {
            console.log("success delete");
            _this.initDoc();
            //this.toast.showSuccess("", "File deleted successfully");
        }, function (error) {
            console.log("unsucces delete");
        });
    };
    RentalEditComponent.prototype.saveAsPDF = function () {
        console.log("88 " + this.curUser.adress);
        if (this.curUser.adress == null || this.curUser.adress == '') {
            this.toast.showWarning("", "To generate a PDF document, please go to your account and fill in the address");
        }
        else {
            this.pdfService.saveAsPDFRental(this.form.title, this.form.clientFullName, this.form.clientAdress, this.curUser.name, this.curUser.adress, this.form.dateOfCreation, this.form.otherInfo, this.form.rentalObject, this.form.startRental, this.form.endRental, this.form.rentalPrice);
            this.toast.showSuccess("", "Save as PDF succesfully");
        }
    };
    RentalEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rental-edit',
            template: __webpack_require__(/*! ./rental-edit.component.html */ "./src/app/documents-edit/rental-edit/rental-edit.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./rental-edit.component.css */ "./src/app/documents-edit/rental-edit/rental-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contracts_rental_contract_service__WEBPACK_IMPORTED_MODULE_2__["RentalContractService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"],
            src_app_services_file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            src_app_services_pdf_service__WEBPACK_IMPORTED_MODULE_10__["PDFService"]])
    ], RentalEditComponent);
    return RentalEditComponent;
}());



/***/ }),

/***/ "./src/app/documents-edit/sale-edit/sale-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/documents-edit/sale-edit/sale-edit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy1lZGl0L3NhbGUtZWRpdC9zYWxlLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/documents-edit/sale-edit/sale-edit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/documents-edit/sale-edit/sale-edit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"isLogin; else notLogin\">\n  <div class=\"text-center\" >\n    <h1 *ngIf=isEdit class=\"display-4 \">{{form.title}}*</h1>\n    <h1 *ngIf=!isEdit class=\"display-4 \">{{form.title}}</h1>\n  </div>\n\n  <div @fadeFilter>\n    <h3 *ngIf=\"form.active == true\" style=\"color:green\">Active document</h3>\n    <h3 *ngIf=\"form.active == false\" style=\"color:red\">Expired document</h3>\n  <hr>\n  <label>Attached file</label>\n  <a data-toggle=\"collapse\" href=\"#collapseAtt\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n    *</a>\n  <div class=\"collapse\" id=\"collapseAtt\">\n    <small class=\"form-text alert alert-info\">\n      File size can't be more <strong>50MB</strong>\n    </small>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" readonly [(ngModel)]=\"form.filename\" #filename=\"ngModel\"\n          aria-describedby=\"button-addon4\" placeholder=\"Attached file not found\">\n        <div class=\"input-group-append\" id=\"button-addon4\">\n          <button class=\"btn btn-danger\" [hidden]=\"!form.filename\" (click)=\"deleteFile(form.filename)\"\n            type=\"button\">Delete file</button>\n          <button class=\"btn btn-success\" [hidden]=\"!form.filename\" (click)=\"downloadFile()\" type=\"button\">Download\n          </button>\n          <button class=\"btn btn-warning\" type=\"button\" [hidden]=\"show || form.filename\" (click)=showUploadPanel()>Update</button>\n        </div>\n      </div>\n    </div>\n    <br>\n    <div *ngIf=\"show\" class=\"col\" style=\"max-width: 280px\">\n      <div class=\"input-group\">\n        <div class=\"custom-file\">\n          <input type=\"file\"  class=\"form-control\" aria-describedby=\"inputGroupFileAddon04\" id=\"inputGroupFile04\"\n            (change)=\"selectFile($event)\">\n          <label class=\"custom-file-label\" for=\"inputGroupFile04\"></label>\n        </div>\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-warning\" [disabled]=\"!selectedFile\" id=\"inputGroupFileAddon04\" type=\"button\"\n            (click)=\"uploadFile()\">Upload file</button>\n          <button class=\"btn btn-danger\" type=\"button\" (click)=showUploadPanel()>Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"uploadResponse.status === 'progress'\">\n    <div class=\"progress\" style=\"height: 1px;\">\n      <div class=\"progress-bar\" [style.width.%]=\"uploadResponse.message\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n      </div>\n    </div>    \n  </div>\n  \n  <br><hr><br>\n  <form @fadeFilter (change)=\"change()\"  #f=\"ngForm\" novalidate>\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <label for=\"id\">Id</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"auto complete\" name=\"id\" [(ngModel)]=\"form.id\"\n          #id=\"ngModel\" disabled />\n      </div>\n      <div class=\"col-3\">\n        <label for=\"dateOfCreation\">Date of creation</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"auto complete\" name=\"dateOfCreation\" [(ngModel)]=\"form.dateOfCreation\"\n          #dateOfCreation=\"ngModel\" disabled />\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <a data-toggle=\"collapse\" href=\"#collapseTitle\" role=\"button\" aria-expanded=\"false\"\n            aria-controls=\"collapseExample\">\n            *</a>\n          <div class=\"collapse\" id=\"collapseTitle\">\n            <small class=\"form-text alert alert-info\">\n              Be careful, the title is set <strong>1 time</strong> and after successful creation of the document it\n              <strong>can't be changed</strong>\n            </small>\n          </div>\n          <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"form.title\" #title=\"ngModel\" required\n            minlength=\"10\" maxlength=\"100\"\n            [ngClass]=\"{'is-valid':title.valid && title.touched,'is-invalid':title.invalid && title.touched}\" />\n          <div *ngIf=\"f.submitted && title.invalid || title.touched && title.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.required\">Title is required</small>\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.minlength\">Title must be at least 10\n              characters</small>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"form-group\">\n          <label for=\"clientFullName\">Buyer full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"clientFullName\" [(ngModel)]=\"form.clientFullName\"\n            #clientFullName=\"ngModel\" required maxlength=\"100\"\n            [ngClass]=\"{'is-valid':clientFullName.valid && clientFullName.touched,'is-invalid':clientFullName.invalid && clientFullName.touched}\" />\n          <div *ngIf=\"f.submitted && clientFullName.invalid || clientFullName.touched && clientFullName.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientFullName.errors.required\">Buyer full name is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"clientAdress\">Buyer adress</label>\n          <input type=\"text\" class=\"form-control\" name=\"clientAdress\" [(ngModel)]=\"form.clientAdress\"\n            #clientAdress=\"ngModel\" required maxlength=\"255\"\n            [ngClass]=\"{'is-valid':clientAdress.valid && clientAdress.touched,'is-invalid':clientAdress.invalid && clientAdress.touched}\" />\n          <div *ngIf=\"f.submitted && clientAdress.invalid || clientAdress.touched && clientAdress.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientAdress.errors.required\">Buyer adress is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"saleObject\">Sale object</label>\n          <input type=\"text\" class=\"form-control\" name=\"saleObject\" [(ngModel)]=\"form.saleObject\" #saleObject=\"ngModel\"\n            required maxlength=\"100\"\n            [ngClass]=\"{'is-valid':saleObject.valid && saleObject.touched,'is-invalid':saleObject.invalid && saleObject.touched}\" />\n          <div *ngIf=\"f.submitted && saleObject.invalid || saleObject.touched && saleObject.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"saleObject.errors.required\">Sale object is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"salingPrice\">Saling price</label>\n          <div class=\"input-group\">\n            <input type=\"number\" class=\"form-control\" name=\"salingPrice\" [(ngModel)]=\"form.salingPrice\"\n              #salingPrice=\"ngModel\" required\n              [ngClass]=\"{'is-valid':salingPrice.valid && salingPrice.touched,'is-invalid':salingPrice.invalid && salingPrice.touched}\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\" id=\"basic-addon2\">$</span>\n            </div>\n          </div>\n          <div *ngIf=\"f.submitted && salingPrice.invalid || salingPrice.touched && salingPrice.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"salingPrice.errors.required\">Saling price is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"warrantyPeriod\">Warranty period</label>          \n          \n          <div class=\"input-group\">\n          <input type=\"number\" min=\"1\" class=\"form-control\" name=\"warrantyPeriod\" [(ngModel)]=\"form.warrantyPeriod\"\n            #warrantyPeriod=\"ngModel\" required\n            [ngClass]=\"{'is-valid':warrantyPeriod.valid && warrantyPeriod.touched,'is-invalid':warrantyPeriod.invalid && warrantyPeriod.touched}\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\" id=\"basic-addon2\">days</span>\n            </div>\n          </div>\n            <div *ngIf=\"f.submitted && warrantyPeriod.invalid || warrantyPeriod.touched && warrantyPeriod.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"warrantyPeriod.errors.required\">Warranty period is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row \">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"otherInfo\">Other info</label>\n          <textarea maxlength=\"1000\" class=\"form-control\" name=\"otherInfo\" rows=\"3\" [(ngModel)]=\"form.otherInfo\"\n            #otherInfo=\"ngModel\"></textarea>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <hr>\n      <button *ngIf=\"!isEdit\" class=\"btn btn-secondary mr-3\" routerLink=\"/documents-list\" \n      >Cancel</button>\n      <button *ngIf=\"isEdit\" class=\"btn btn-secondary mr-3\" \n      data-toggle=\"modal\" data-target=\"#editsale\">Cancel</button>\n      <button  [disabled]=\"isEdit===false  || f.form.invalid\" (click)=\"updateDoc()\" class=\"btn btn-success\">Update contract</button>\n      <button  class=\"btn btn-primary ml-3\" (click)=\"saveAsPDF()\">Save as PDF</button>\n    </div>\n  </form>\n</div>\n</div>\n<div class=\"modal fade\" id=\"editsale\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" id=\"exampleModalCenterTitle\">Confirm the action</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <h6>Are you sure you want to cancel changes?</h6>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n          <button type=\"button\" data-dismiss=\"modal\" routerLink=\"/documents-list\" \n           class=\"btn btn-success\">Yes</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<ng-template #notLogin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a routerLink=\"/\" class=\"alert-link\">login</a>!\n    </h5>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/documents-edit/sale-edit/sale-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/documents-edit/sale-edit/sale-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: SaleEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleEditComponent", function() { return SaleEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contracts_contract_of_sale_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contracts/contract-of-sale.service */ "./src/app/services/contracts/contract-of-sale.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_services_pdf_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/pdf.service */ "./src/app/services/pdf.service.ts");











var SaleEditComponent = /** @class */ (function () {
    function SaleEditComponent(service, userService, tokenStorage, fileService, router, toast, pdfService) {
        this.service = service;
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.fileService = fileService;
        this.router = router;
        this.toast = toast;
        this.pdfService = pdfService;
        this.form = {};
        this.isEdit = false;
        this.show = false;
        this.isLogin = false;
        this.errorMessage = '';
        this.errorMessageUpdate = '';
        this.isFailedDownload = false;
        this.isFailed = false;
        this.uploadResponse = { status: '', message: '', filePath: '' };
        this.today = "";
    }
    SaleEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLogin = this.tokenStorage.isLogin();
        if (!this.isLogin) {
            this.router.navigate(['/']);
        }
        else {
            this.today = this.userService.initToday();
            console.log(this.today);
            this.userService.getByUsername(this.tokenStorage.getUsername())
                .subscribe(function (data) {
                _this.curUser = data;
            });
            this.curRole = this.tokenStorage.getAuthorities();
            this.docId = window.sessionStorage.getItem("docId");
            console.log("doc id " + this.docId);
            this.initDoc();
        }
    };
    SaleEditComponent.prototype.showUploadPanel = function () {
        this.show = !this.show;
        this.isFailedDownload = false;
    };
    SaleEditComponent.prototype.initDoc = function () {
        var _this = this;
        this.isEdit = false;
        this.service.getById(this.docId)
            .subscribe(function (data) {
            if (data) {
                _this.document = data;
                _this.form.id = _this.document.id;
                if (_this.document.dateOfCreation === null) {
                    _this.form.dateOfCreation = new Date();
                }
                else {
                    _this.form.dateOfCreation = _this.document.dateOfCreation;
                }
                _this.form.active = _this.document.active;
                _this.form.clientAdress = _this.document.clientAdress;
                _this.form.clientFullName = _this.document.clientFullName;
                _this.form.lastChange = _this.document.lastChange;
                _this.form.title = _this.document.title;
                _this.form.otherInfo = _this.document.otherInfo;
                _this.form.user = _this.curUser;
                _this.form.filename = _this.document.filename;
                _this.form.saleObject = _this.document.saleObject;
                _this.form.salingPrice = _this.document.salingPrice;
                _this.form.warrantyPeriod = _this.document.warrantyPeriod;
            }
        });
    };
    SaleEditComponent.prototype.updateDoc = function () {
        var _this = this;
        if (this.form.dateOfCreation === '')
            this.form.dateOfCreation = new Date();
        this.service.update(this.curUser.username, this.form)
            .subscribe(function () {
            _this.initDoc();
            _this.isFailed = false;
            _this.toast.showSuccess("", "Contract of sale updated successfully");
        }, function (error) {
            console.log(error);
            //this.errorMessageUpdate = error.error.message;
            _this.toast.showError("", error.error.message);
            _this.isFailed = true;
        });
        this.isEdit = false;
    };
    SaleEditComponent.prototype.change = function () {
        this.isFailedDownload = false;
        this.isEdit = true;
    };
    SaleEditComponent.prototype.selectFile = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile.name);
    };
    SaleEditComponent.prototype.uploadFile = function () {
        var _this = this;
        if (this.form.filename != null) {
            this.deleteFile(this.form.filename);
        }
        if (this.selectedFile.size > 51200000) { // 50 MB
            this.toast.showError("", "File wasn't uploaded, because file size exceeded the limit of 50mb");
            this.selectedFile = undefined;
        }
        else {
            this.fileService.uploadFile(this.selectedFile, this.document.id, "sale")
                .subscribe(function (data) {
                _this.form.filename = data.filename;
                _this.uploadResponse = data;
                _this.initDoc();
                if (_this.uploadResponse.message == '100') {
                    _this.toast.showSuccess("", "File uploaded successfully");
                    console.log("status " + _this.uploadResponse.status);
                    console.log("message " + _this.uploadResponse.message);
                    console.log("filePath " + _this.uploadResponse.filePath);
                }
            }, function (error) {
                console.log(error);
                //this.errorMessage = error.message;
                _this.toast.showError("", error.message);
            });
            this.selectedFile = undefined;
            this.show = false;
        }
    };
    SaleEditComponent.prototype.downloadFile = function () {
        var _this = this;
        var openedToast = null;
        openedToast = this.toast.showInfo("", "File is downloading...");
        this.fileService.downloadFile(this.form.filename, "sale")
            .subscribe(function (response) {
            _this.saveFile(response);
            _this.toast.deleteToast(openedToast);
            _this.toast.showSuccess("", "File downloaded");
        }, function (error) {
            //this.errorMessage = error.message;
            _this.toast.deleteToast(openedToast);
            _this.toast.showError("", "File can't be download, maybe it was deleted from storage");
            console.log(error);
            _this.initDoc();
        });
    };
    SaleEditComponent.prototype.saveFile = function (data) {
        var blob = new Blob([data], { type: this.form.fileType });
        file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"](blob, this.form.filename);
    };
    SaleEditComponent.prototype.deleteFile = function (data) {
        var _this = this;
        this.fileService.deleteFile(data, "sale")
            .subscribe(function () {
            console.log("success delete");
            _this.initDoc();
            //this.toast.showSuccess("", "File deleted successfully");
        }, function (error) {
            console.log("unsucces delete");
        });
    };
    SaleEditComponent.prototype.saveAsPDF = function () {
        console.log("88 " + this.curUser.adress);
        if (this.curUser.adress == null || this.curUser.adress == '') {
            this.toast.showWarning("", "To generate a PDF document, please go to your account and fill in the address");
        }
        else {
            this.pdfService.saveAsPDFSale(this.form.title, this.form.clientFullName, this.form.clientAdress, this.curUser.name, this.curUser.adress, this.form.dateOfCreation, this.form.otherInfo, this.form.saleObject, this.form.salingPrice, this.form.warrantyPeriod);
            this.toast.showSuccess("", "Save as PDF succesfully");
        }
    };
    SaleEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sale-edit',
            template: __webpack_require__(/*! ./sale-edit.component.html */ "./src/app/documents-edit/sale-edit/sale-edit.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./sale-edit.component.css */ "./src/app/documents-edit/sale-edit/sale-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contracts_contract_of_sale_service__WEBPACK_IMPORTED_MODULE_2__["ContractOfSaleService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"],
            src_app_services_file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            src_app_services_pdf_service__WEBPACK_IMPORTED_MODULE_10__["PDFService"]])
    ], SaleEditComponent);
    return SaleEditComponent;
}());



/***/ }),

/***/ "./src/app/documents-edit/work-edit/work-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/documents-edit/work-edit/work-edit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy1lZGl0L3dvcmstZWRpdC93b3JrLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/documents-edit/work-edit/work-edit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/documents-edit/work-edit/work-edit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"isLogin; else notLogin\">\n  <div class=\"text-center\" >\n    <h1 *ngIf=isEdit class=\"display-4 \">{{form.title}}*</h1>\n    <h1 *ngIf=!isEdit class=\"display-4 \">{{form.title}}</h1>\n  </div>\n\n  <div @fadeFilter>\n    <h3 *ngIf=\"form.active == true\" style=\"color:green\">Active document</h3>\n    <h3 *ngIf=\"form.active == false\" style=\"color:red\">Expired document</h3>\n  <hr>\n  <label>Attached file</label>\n  <a data-toggle=\"collapse\" href=\"#collapseAtt\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n    *</a>\n  <div class=\"collapse\" id=\"collapseAtt\">\n    <small class=\"form-text alert alert-info\">\n      File size can't be more <strong>50MB</strong>\n    </small>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" readonly [(ngModel)]=\"form.filename\" #filename=\"ngModel\"\n          aria-describedby=\"button-addon4\" placeholder=\"Attached file not found\">\n        <div class=\"input-group-append\" id=\"button-addon4\">\n          <button class=\"btn btn-danger\" [hidden]=\"!form.filename\" (click)=\"deleteFile(form.filename)\"\n            type=\"button\">Delete file</button>\n          <button class=\"btn btn-success\" [hidden]=\"!form.filename\" (click)=\"downloadFile()\" type=\"button\">Download\n          </button>\n          <button id=\"show_upload\" class=\"btn btn-warning\" type=\"button\" [hidden]=\"show  || form.filename\" (click)=showUploadPanel()>Update</button>\n        </div>\n      </div>\n    </div>\n    <br>\n    <div *ngIf=\"show\" class=\"col\" style=\"max-width: 280px\">\n      <div class=\"input-group\">\n        <div class=\"custom-file\">\n          <input id=\"selector\" type=\"file\"  class=\"form-control\" aria-describedby=\"inputGroupFileAddon04\" \n            (change)=\"selectFile($event)\">\n          <label class=\"custom-file-label\" for=\"selector\"></label>\n        </div>\n        <div class=\"input-group-append\">\n          <button id=\"upload\" class=\"btn btn-warning\" [disabled]=\"!selectedFile\"  type=\"button\"\n            (click)=\"uploadFile()\">Upload file</button>\n          <button class=\"btn btn-danger\" type=\"button\" (click)=showUploadPanel()>Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"uploadResponse.status === 'progress'\">\n    <div class=\"progress\" style=\"height: 1px;\">\n      <div class=\"progress-bar\" [style.width.%]=\"uploadResponse.message\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n      </div>\n    </div>    \n  </div>\n  \n  <br><hr><br>\n  <form @fadeFilter (change)=\"change()\"  #f=\"ngForm\" novalidate>\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <label for=\"id\">Id</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"auto complete\" name=\"id\" [(ngModel)]=\"form.id\"\n          #id=\"ngModel\" disabled />\n      </div>\n      <div class=\"col-3\">\n        <label for=\"dateOfCreation\">Date of creation</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"auto complete\" name=\"dateOfCreation\" [(ngModel)]=\"form.dateOfCreation\"\n          #dateOfCreation=\"ngModel\" disabled />\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <a data-toggle=\"collapse\" href=\"#collapseTitle\" role=\"button\" aria-expanded=\"false\"\n            aria-controls=\"collapseExample\">\n            *</a>\n          <div class=\"collapse\" id=\"collapseTitle\">\n            <small class=\"form-text alert alert-info\">\n              Be careful, the title is set <strong>1 time</strong> and after successful creation of the document it\n              <strong>can't be changed</strong>\n            </small>\n          </div>\n          <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"form.title\" #title=\"ngModel\" required\n            minlength=\"10\" maxlength=\"100\"\n            [ngClass]=\"{'is-valid':title.valid && title.touched,'is-invalid':title.invalid && title.touched}\" />\n          <div *ngIf=\"f.submitted && title.invalid || title.touched && title.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.required\">Title is required</small>\n            <small class=\"form-text alert alert-warning\" *ngIf=\"title.errors.minlength\">Title must be at least 10\n              characters</small>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"form-group\">\n          <label for=\"clientFullName\">Employee full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"clientFullName\" [(ngModel)]=\"form.clientFullName\"\n            #clientFullName=\"ngModel\" required maxlength=\"100\"\n            [ngClass]=\"{'is-valid':clientFullName.valid && clientFullName.touched,'is-invalid':clientFullName.invalid && clientFullName.touched}\" />\n          <div *ngIf=\"f.submitted && clientFullName.invalid || clientFullName.touched && clientFullName.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientFullName.errors.required\">Employee full name is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"clientAdress\">Employee adress</label>\n          <input type=\"text\" class=\"form-control\" name=\"clientAdress\" [(ngModel)]=\"form.clientAdress\"\n            #clientAdress=\"ngModel\" required maxlength=\"255\"\n            [ngClass]=\"{'is-valid':clientAdress.valid && clientAdress.touched,'is-invalid':clientAdress.invalid && clientAdress.touched}\" />\n          <div *ngIf=\"f.submitted && clientAdress.invalid || clientAdress.touched && clientAdress.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"clientAdress.errors.required\">Employee adress is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"form-group\">\n              <label for=\"placeOfWork\">Place of work</label>\n              <input type=\"text\" class=\"form-control\" name=\"placeOfWork\" [(ngModel)]=\"form.placeOfWork\" #placeOfWork=\"ngModel\"\n                required maxlength=\"100\"\n                [ngClass]=\"{'is-valid':placeOfWork.valid && placeOfWork.touched,'is-invalid':placeOfWork.invalid && placeOfWork.touched}\" />\n              <div *ngIf=\"f.submitted && placeOfWork.invalid || placeOfWork.touched && placeOfWork.invalid\">\n                <small class=\"form-text alert alert-warning\" *ngIf=\"placeOfWork.errors.required\">Place of work is\n                  required</small>\n              </div>\n            </div>\n          </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"position\">Position</label>\n          <input type=\"text\" class=\"form-control\" name=\"position\" [(ngModel)]=\"form.position\" #position=\"ngModel\"\n            required maxlength=\"100\"\n            [ngClass]=\"{'is-valid':position.valid && position.touched,'is-invalid':position.invalid && position.touched}\" />\n          <div *ngIf=\"f.submitted && position.invalid || position.touched && position.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"position.errors.required\">Position is\n              required</small>\n          </div>\n        </div>\n      </div>      \n      <div class=\"col-2\">\n        <div class=\"form-group\">\n          <label for=\"operationMode\">Operation mode</label>\n          <select required  class=\"custom-select\" name=\"operationMode\" [(ngModel)]=\"form.operationMode\" \n            #operationMode=\"ngModel\"  [compareWith]=\"compareFn\"        \n            [ngClass]=\"{'is-valid':operationMode.valid && operationMode.touched,'is-invalid':operationMode.invalid && operationMode.touched}\">\n            <option *ngFor=\"let mode of listOfMode\" [ngValue]=\"mode\" >{{mode.operationMode}}</option>\n          </select>\n          \n          <div *ngIf=\"f.submitted && operationMode.invalid || operationMode.touched && operationMode.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"operationMode.errors.required\">Operation mode is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-3\">\n        <div class=\"form-group\">\n          <label for=\"startWork\">Start work</label>\n          <input type=\"date\" class=\"form-control\" min=\"{{today}}\" name=\"startWork\" [(ngModel)]=\"form.startWork\"\n            #startWork=\"ngModel\" required\n            [ngClass]=\"{'is-valid':startWork.valid && startWork.touched,'is-invalid':startWork.invalid && startWork.touched}\" />\n          <div *ngIf=\"f.submitted && startWork.invalid || startWork.touched && startWork.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"startWork.errors.required\">Start work is\n              required</small>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row \">\n        <div class=\"col\">\n            <div class=\"form-group\">\n              <label for=\"term\">Term</label>\n              <div class=\"input-group\">\n                <input type=\"number\" min=\"0\" class=\"form-control\" name=\"term\" [(ngModel)]=\"form.term\"\n                  #term=\"ngModel\" required\n                  [ngClass]=\"{'is-valid':term.valid && term.touched,'is-invalid':term.invalid && term.touched}\" />\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\" id=\"basic-addon2\">days</span>\n                </div>\n              </div>\n              <div *ngIf=\"f.submitted && term.invalid || term.touched && term.invalid\">\n                <small class=\"form-text alert alert-warning\" *ngIf=\"term.errors.required\">Term is\n                  required</small>\n              </div>\n            </div>\n          </div>\n        <div class=\"col\">\n            <div class=\"form-group\">\n              <label for=\"workingHours\">Working hours</label>\n              <div class=\"input-group\">\n                <input type=\"number\" min=\"0\" class=\"form-control\" name=\"workingHours\" [(ngModel)]=\"form.workingHours\"\n                  #workingHours=\"ngModel\" required\n                  [ngClass]=\"{'is-valid':workingHours.valid && workingHours.touched,'is-invalid':workingHours.invalid && workingHours.touched}\" />\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\" id=\"basic-addon2\">hours/week</span>\n                </div>\n              </div>\n              <div *ngIf=\"f.submitted && workingHours.invalid || workingHours.touched && workingHours.invalid\">\n                <small class=\"form-text alert alert-warning\" *ngIf=\"workingHours.errors.required\">Working hours is\n                  required</small>\n              </div>\n            </div>\n          </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"holiday\">Holiday</label>\n          <div class=\"input-group\">\n            <input type=\"number\" class=\"form-control\" name=\"holiday\" [(ngModel)]=\"form.holiday\" #holiday=\"ngModel\"\n              required min=\"0\"\n              [ngClass]=\"{'is-valid':holiday.valid && holiday.touched,'is-invalid':holiday.invalid && holiday.touched}\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\" id=\"basic-addon2\">days/year</span>\n            </div>\n          </div>\n          <div *ngIf=\"f.submitted && holiday.invalid || holiday.touched && holiday.invalid\">\n            <small class=\"form-text alert alert-warning\" *ngIf=\"holiday.errors.required\">Holiday is\n              required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"form-group\">\n            <label for=\"salary\">Salary</label>\n            <div class=\"input-group\">\n              <input type=\"number\" class=\"form-control\" name=\"salary\" [(ngModel)]=\"form.salary\" #salary=\"ngModel\"\n                required min=\"0\"\n                [ngClass]=\"{'is-valid':salary.valid && salary.touched,'is-invalid':salary.invalid && salary.touched}\" />\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\" id=\"basic-addon2\">$</span>\n              </div>\n            </div>\n            <div *ngIf=\"f.submitted && salary.invalid || salary.touched && salary.invalid\">\n              <small class=\"form-text alert alert-warning\" *ngIf=\"salary.errors.required\">Salary is\n                required</small>\n            </div>\n          </div>\n        </div>\n    </div>\n\n    <!-- gggggggggggggggggggggg -->\n\n    <div class=\"row \">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"otherInfo\">Other info</label>\n          <textarea id=\"other\" maxlength=\"1000\" class=\"form-control\" name=\"otherInfo\" rows=\"3\" [(ngModel)]=\"form.otherInfo\"\n            #otherInfo=\"ngModel\"></textarea>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <hr>\n      <button *ngIf=\"!isEdit\" class=\"btn btn-secondary mr-3\" routerLink=\"/documents-list\" \n      >Cancel</button>\n      <button *ngIf=\"isEdit\" class=\"btn btn-secondary mr-3\" \n      data-toggle=\"modal\" data-target=\"#editsale\">Cancel</button>\n      <button id=\"update\" [disabled]=\"isEdit===false  || f.form.invalid\" (click)=\"updateDoc()\" class=\"btn btn-success\">Update contract</button>\n      <button  class=\"btn btn-primary ml-3\" (click)=\"saveAsPDF()\">Save as PDF</button>\n    </div>\n  </form>\n</div>\n</div>\n\n<div class=\"modal fade\" id=\"editsale\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" id=\"exampleModalCenterTitle\">Confirm the action</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <h6>Are you sure you want to cancel changes?</h6>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n          <button type=\"button\" data-dismiss=\"modal\" routerLink=\"/documents-list\" \n           class=\"btn btn-success\">Yes</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<ng-template #notLogin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a routerLink=\"/\" class=\"alert-link\">login</a>!\n    </h5>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/documents-edit/work-edit/work-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/documents-edit/work-edit/work-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: WorkEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkEditComponent", function() { return WorkEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contracts_work_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contracts/work-contract.service */ "./src/app/services/contracts/work-contract.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_services_catalog_of_operation_mode_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/catalog-of-operation-mode.service */ "./src/app/services/catalog-of-operation-mode.service.ts");
/* harmony import */ var src_app_services_pdf_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/pdf.service */ "./src/app/services/pdf.service.ts");












var WorkEditComponent = /** @class */ (function () {
    function WorkEditComponent(catalogService, service, userService, tokenStorage, fileService, router, toast, pdfService) {
        this.catalogService = catalogService;
        this.service = service;
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.fileService = fileService;
        this.router = router;
        this.toast = toast;
        this.pdfService = pdfService;
        this.form = {};
        this.isEdit = false;
        this.show = false;
        this.isLogin = false;
        this.errorMessage = '';
        this.errorMessageUpdate = '';
        this.isFailedDownload = false;
        this.isFailed = false;
        this.uploadResponse = { status: '', message: '', filePath: '' };
        this.today = "";
        this.listOfMode = [];
    }
    WorkEditComponent.prototype.compareFn = function (x, y) {
        return x && y ? x.operationMode == y.operationMode : x == y;
    };
    WorkEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLogin = this.tokenStorage.isLogin();
        if (!this.isLogin) {
            this.router.navigate(['/']);
        }
        else {
            this.catalogService.getListOfMode()
                .subscribe(function (data) {
                _this.listOfMode = data;
                console.log("list modes" + _this.listOfMode);
            }, function (error) {
                console.log(error);
            });
            this.today = this.userService.initToday();
            console.log(this.today);
            this.userService.getByUsername(this.tokenStorage.getUsername())
                .subscribe(function (data) {
                _this.curUser = data;
            });
            this.curRole = this.tokenStorage.getAuthorities();
            this.docId = window.sessionStorage.getItem("docId");
            console.log("doc id " + this.docId);
            this.initDoc();
        }
    };
    WorkEditComponent.prototype.showUploadPanel = function () {
        this.show = !this.show;
        this.isFailedDownload = false;
    };
    WorkEditComponent.prototype.initDoc = function () {
        var _this = this;
        this.isEdit = false;
        this.service.getById(this.docId)
            .subscribe(function (data) {
            if (data) {
                _this.document = data;
                _this.form.id = _this.document.id;
                if (_this.document.dateOfCreation === null) {
                    _this.form.dateOfCreation = new Date();
                }
                else {
                    _this.form.dateOfCreation = _this.document.dateOfCreation;
                }
                _this.form.active = _this.document.active;
                _this.form.clientAdress = _this.document.clientAdress;
                _this.form.clientFullName = _this.document.clientFullName;
                _this.form.lastChange = _this.document.lastChange;
                _this.form.title = _this.document.title;
                _this.form.otherInfo = _this.document.otherInfo;
                _this.form.user = _this.curUser;
                _this.form.filename = _this.document.filename;
                _this.form.startWork = _this.document.startWork;
                _this.form.position = _this.document.position;
                _this.form.operationMode = _this.document.operationMode;
                console.log(_this.document.operationMode.operationMode);
                console.log(_this.form.operationMode);
                _this.form.workingHours = _this.document.workingHours;
                _this.form.holiday = _this.document.holiday;
                _this.form.salary = _this.document.salary;
                _this.form.term = _this.document.term;
                _this.form.placeOfWork = _this.document.placeOfWork;
            }
        });
    };
    WorkEditComponent.prototype.updateDoc = function () {
        var _this = this;
        if (this.form.dateOfCreation === '')
            this.form.dateOfCreation = new Date();
        this.service.update(this.curUser.username, this.form)
            .subscribe(function () {
            _this.initDoc();
            _this.isFailed = false;
            _this.toast.showSuccess("", "Work contract updated successfully");
        }, function (error) {
            console.log(error);
            //this.errorMessageUpdate = error.error.message;
            _this.toast.showError("", error.error.message);
            _this.isFailed = true;
        });
        this.isEdit = false;
    };
    WorkEditComponent.prototype.change = function () {
        this.isFailedDownload = false;
        this.isEdit = true;
    };
    WorkEditComponent.prototype.selectFile = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile.name);
    };
    WorkEditComponent.prototype.uploadFile = function () {
        var _this = this;
        if (this.form.filename != null) {
            this.deleteFile(this.form.filename);
        }
        if (this.selectedFile.size > 51200000) { // 50 MB
            this.toast.showError("", "File wasn't uploaded, because file size exceeded the limit of 50mb");
            this.selectedFile = undefined;
        }
        else {
            this.fileService.uploadFile(this.selectedFile, this.document.id, "work")
                .subscribe(function (data) {
                _this.form.filename = data.filename;
                _this.uploadResponse = data;
                _this.initDoc();
                if (_this.uploadResponse.message == '100') {
                    _this.toast.showSuccess("", "File uploaded successfully");
                    console.log("status " + _this.uploadResponse.status);
                    console.log("message " + _this.uploadResponse.message);
                    console.log("filePath " + _this.uploadResponse.filePath);
                }
            }, function (error) {
                console.log(error);
                //this.errorMessage = error.message;
                _this.toast.showError("", error.message);
            });
            this.selectedFile = undefined;
            this.show = false;
        }
    };
    WorkEditComponent.prototype.downloadFile = function () {
        var _this = this;
        var openedToast = null;
        openedToast = this.toast.showInfo("", "File is downloading...");
        this.fileService.downloadFile(this.form.filename, "work")
            .subscribe(function (response) {
            _this.saveFile(response);
            _this.toast.deleteToast(openedToast);
            _this.toast.showSuccess("", "File downloaded");
        }, function (error) {
            _this.errorMessage = error.message;
            _this.toast.deleteToast(openedToast);
            _this.toast.showError("", "File can't be download, maybe it was deleted from storage");
            console.log(error);
            _this.initDoc();
        });
    };
    WorkEditComponent.prototype.saveFile = function (data) {
        var blob = new Blob([data], { type: this.form.fileType });
        file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"](blob, this.form.filename);
    };
    WorkEditComponent.prototype.deleteFile = function (data) {
        var _this = this;
        this.fileService.deleteFile(data, "work")
            .subscribe(function () {
            console.log("success delete");
            _this.initDoc();
            //this.toast.showSuccess("", "File deleted successfully");
        }, function (error) {
            console.log("unsucces delete");
        });
    };
    WorkEditComponent.prototype.saveAsPDF = function () {
        console.log("88 " + this.curUser.adress);
        if (this.curUser.adress == null || this.curUser.adress == '') {
            this.toast.showWarning("", "To generate a PDF document, please go to your account and fill in the address");
        }
        else {
            this.pdfService.saveAsPDFWork(this.form.title, this.form.clientFullName, this.form.clientAdress, this.curUser.name, this.curUser.adress, this.form.dateOfCreation, this.form.otherInfo, this.form.startWork, this.form.position, this.form.placeOfWork, this.form.operationMode, this.form.workingHours, this.form.holiday, this.form.salary, this.form.term);
            this.toast.showSuccess("", "Save as PDF succesfully");
        }
    };
    WorkEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-edit',
            template: __webpack_require__(/*! ./work-edit.component.html */ "./src/app/documents-edit/work-edit/work-edit.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./work-edit.component.css */ "./src/app/documents-edit/work-edit/work-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_catalog_of_operation_mode_service__WEBPACK_IMPORTED_MODULE_10__["CatalogOfOperationModeService"],
            src_app_services_contracts_work_contract_service__WEBPACK_IMPORTED_MODULE_2__["WorkContractService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"],
            src_app_services_file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            src_app_services_pdf_service__WEBPACK_IMPORTED_MODULE_11__["PDFService"]])
    ], WorkEditComponent);
    return WorkEditComponent;
}());



/***/ }),

/***/ "./src/app/documents/cooperation-list/cooperation-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/documents/cooperation-list/cooperation-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    position: fixed;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0.356);\n    -webkit-filter: blur(10px);\n            filter: blur(10px);\n}\n\n.forward {\n    bottom: 0;\n    background: inherit;\n    position: fixed;\n}\n\n.filter {\n    max-width: 250px;\n}\n\n.expiredString {\n    color: rgb(241, 38, 38);\n    /* background-image: linear-gradient(to right, rgb(255, 117, 117), rgb(255, 255, 255)) */\n}\n\n.activeString {\n    color: rgb(21, 206, 21);\n    /* background-image: linear-gradient(to right, rgb(115, 247, 103), rgb(255, 255, 255)) */\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRzL2Nvb3BlcmF0aW9uLWxpc3QvY29vcGVyYXRpb24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsMEJBQWtCO1lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix3RkFBd0Y7QUFDNUY7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsd0ZBQXdGO0FBQzVGIiwiZmlsZSI6InNyYy9hcHAvZG9jdW1lbnRzL2Nvb3BlcmF0aW9uLWxpc3QvY29vcGVyYXRpb24tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1Nik7XG4gICAgZmlsdGVyOiBibHVyKDEwcHgpO1xufVxuXG4uZm9yd2FyZCB7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uZmlsdGVyIHtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xufVxuXG4uZXhwaXJlZFN0cmluZyB7XG4gICAgY29sb3I6IHJnYigyNDEsIDM4LCAzOCk7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjU1LCAxMTcsIDExNyksIHJnYigyNTUsIDI1NSwgMjU1KSkgKi9cbn1cblxuLmFjdGl2ZVN0cmluZyB7XG4gICAgY29sb3I6IHJnYigyMSwgMjA2LCAyMSk7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTE1LCAyNDcsIDEwMyksIHJnYigyNTUsIDI1NSwgMjU1KSkgKi9cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/documents/cooperation-list/cooperation-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/documents/cooperation-list/cooperation-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLogin; else notLogin\" class=\"mt-5 ml-2 mr-3 mb-5\">\n  <div class=\"row \">\n    <div @fadeFilter class=\"col mr-3  filter\" (input)=\"setPage(0)\">\n      <div style=\"position: fixed;width: 250px;\">\n        <div class=\"text-center\">\n          <h4>Filter</h4>\n        </div>\n        <hr>\n        <input  type=\"text\" placeholder=\"Enter title\" class=\"form-control\" name=\"title\" [(ngModel)]=\"form.title\"\n          #title=\"ngModel\">\n        <br>\n        <input  type=\"text\" placeholder=\"Enter client full name\" class=\"form-control\" name=\"clientFullname\"\n          [(ngModel)]=\"form.clientFullname\" #clientFullname=\"ngModel\">\n        <br>\n        From date of creation:<input type=\"date\" class=\"form-control\" name=\"fromDate\" [(ngModel)]=\"form.fromDate\"\n          #fromDate=\"ngModel\" />\n        To date of creation:<input type=\"date\" class=\"form-control\" name=\"toDate\" [(ngModel)]=\"form.toDate\"\n          #toDate=\"ngModel\" />\n        <br>\n        <input type=\"text\" placeholder=\"Enter kind of activity\" class=\"form-control\" name=\"kindOfActivity\"\n          [(ngModel)]=\"form.kindOfActivity\" #kindOfActivity=\"ngModel\">\n        <br>\n        <div class=\"input-group\">\n          <input type=\"number\" placeholder=\"min term\" class=\"form-control\" name=\"fromCooperationTerm\"\n            [(ngModel)]=\"form.fromCooperationTerm\" #fromCooperationTerm=\"ngModel\" />\n\n          <input type=\"number\" placeholder=\"max term\" class=\"form-control\" name=\"toCooperationTerm\"\n            [(ngModel)]=\"form.toCooperationTerm\" #toCooperationTerm=\"ngModel\" />\n\n        </div>\n        <br>\n        <div class=\"btn-group \" style=\"width: 100%\" (click)=\"setPage(0)\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.isActive=''\"\n            [ngClass]=\"{'active':form.isActive==''}\">All</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.isActive='true'\"\n            [ngClass]=\"{'active':form.isActive=='true'}\">Active</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.isActive='false'\"\n            [ngClass]=\"{'active':form.isActive=='false'}\">Expired</button>\n        </div>\n        <br><br>\n        <div *ngIf=\"role == 'ROLE_ADMIN'\">\n          <div class=\"btn-group dropup\" role=\"group\" style=\"width: 100%\">\n            <button id=\"btn1\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n              {{label}}</button>\n            <div class=\"dropdown-menu\" style=\"width: 100%\" aria-labelledby=\"btn1\" (click)=\"setPage(0)\">\n              <a class=\"dropdown-item\" (click)=\"form.username=''\" (click)=\"label='All users'\">All users</a>\n              <a *ngFor=\"let user of listUsers\" class=\"dropdown-item\"\n                (click)=\"form.username=user.username && label=user.username \">{{user.username}}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div @fadeNameTable class=\"row align-items-end mb-1\">\n        <h1 class=\"display-4\">Cooperation contracts ({{totalElements}})</h1>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\" style=\"margin-left:30%\">\n          <div *ngIf=\"showSpinner\" class=\"spinner-grow \" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </div>\n        <div @fadeTable *ngIf=\"listDocs.length > 0\" class=\"col-6\">\n          <button *ngIf=\"role === 'ROLE_ADMIN'\" data-toggle=\"modal\" data-target=\"#deleteall\"\n            class=\"btn btn-danger float-right\">Delete all</button>\n\n          <div class=\"btn-group float-right mr-3\" role=\"group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"basic-addon1\">Sort by:</span>\n            </div>\n            <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\"\n              style=\"width: 200px\">{{form.sortField}} : {{form.sortOrder}}</button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\" (click)=\"getAllDocs()\">\n              <a class=\"dropdown-item\" (click)=\"form.sortField='title'\" (click)=\" form.sortOrder='ASC'\">Title: a ->\n                z</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='title'\" (click)=\"form.sortOrder='DESC'\">Title: z ->\n                a</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='dateOfCreation'\" (click)=\" form.sortOrder='DESC'\">Date:\n                newest -> eldest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='dateOfCreation'\" (click)=\" form.sortOrder='ASC'\">Date:\n                eldest -> newest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='term'\" (click)=\" form.sortOrder='DESC'\">Term:\n                max -> min</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='term'\" (click)=\" form.sortOrder='ASC'\">Term:\n                min -> max</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div @fadeTable *ngIf=\"listDocs.length > 0; else falseLength\">\n        <table class=\"table table-hover  table-sm\" #tabledocs>\n          <thead class=\"thead-dark\">\n            <tr>\n\n              <th *ngIf=\"role == 'ROLE_ADMIN'\" scope=\"col\">User</th>\n              <th scope=\"col\">Created</th>\n              <th scope=\"col\">Updated</th>\n              <th scope=\"col\">Title</th>\n              <th scope=\"col\">Client full name</th>\n              <th scope=\"col\">Kind of activity</th>\n              <th scope=\"col\">Term (days)</th>\n              <th scope=\"col\">Options</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr @fadeTableItem *ngFor=\"let doc of listDocs \"\n              [ngClass]=\"{'activeString':doc.active==true, 'expiredString':doc.active==false}\">\n              <td *ngIf=\"role == 'ROLE_ADMIN'\">{{doc.user.username}}</td>\n              <td>{{doc.dateOfCreation | date :'mediumDate'}}</td>\n              <td *ngIf=\"doc.lastChange==null\"><em>(never)</em></td>\n              <td *ngIf=\"doc.lastChange!=null\">{{doc.lastChange | date :'medium'}} </td>\n              <td>{{doc.title}}</td>\n              <td>{{doc.clientFullName}}</td>\n              <td>{{doc.kindOfActivity}}</td>\n              <td>{{doc.term}}</td>\n              <td style=\"width: 200px;\">\n                <button routerLink=\"/cooperation-edit\" (click)=\"docEdit(doc)\"\n                  class=\"btn btn-warning mr-2\">View/Edit</button>\n                <button type=\"button\" (click)=\"deleteDocument(doc)\" class=\"btn btn-danger\">Delete</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"row container back\">\n        <div class=\"col \" style=\"height: 70px\"></div>\n      </div>\n      <div @fadePaginator *ngIf=\"listDocs.length > 0\" class=\"row container forward\">\n        <div class=\"col mt-3\">\n\n          <ul class=\"pagination \">\n            <li class=\"page-item\" [ngClass]=\"{'disabled':page==0}\">\n              <a class=\"page-link \" aria-disabled=\"true\" (click)=nextPage(false)>Previous</a>\n            </li>\n\n            <li class=\"page-item\" *ngFor=\"let p of pages\" [ngClass]=\"{'active':page==p-1}\">\n              <a *ngIf=\"p != -1\" class=\"page-link\" (click)=setPage(p-1)>{{p}}</a>\n              <a *ngIf=\"p == -1\" class=\"page-link\">...</a>\n            </li>\n\n            <li class=\"page-item\" [ngClass]=\"{'disabled':page==length-1}\">\n              <a class=\"page-link\" (click)=nextPage(true)>Next</a>\n            </li>\n          </ul>\n\n        </div>\n        <div class=\"col mt-3\">\n          <nav aria-label=\"Page navigation example\">\n            <ul class=\"pagination \">\n              <li class=\"page-item disabled\">\n                <a class=\"page-link \" aria-disabled=\"true\">Show by </a>\n              </li>\n              <li class=\"page-item\" *ngFor=\"let s of sizes\" [ngClass]=\"{'active':size==s}\">\n                <a class=\"page-link\" (click)=setSize(s)>{{s}}</a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n\n      </div>\n\n      <br>\n    </div>\n  </div>\n</div>\n\n<ng-template #falseLength>\n  <div @fadeTable *ngIf=\"showData\" class=\"text-center mt-5\">\n    <h3>Empty list of documents</h3>\n  </div>\n</ng-template>\n\n\n\n<ng-template #notLogin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a routerLink=\"/\" class=\"alert-link\">login</a>!\n    </h5>\n  </div>\n</ng-template>\n\n\n<div class=\"modal fade\" id=\"deleteall\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalCenterTitle\">Confirm the action</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h6>Are you sure you want to delete all document?</h6>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" data-dismiss=\"modal\" (click)=\"deleteAll()\" class=\"btn btn-success\">Confirm delete</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/documents/cooperation-list/cooperation-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/documents/cooperation-list/cooperation-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: CooperationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CooperationListComponent", function() { return CooperationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_filterObj_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/filterObj.model */ "./src/app/models/filterObj.model.ts");
/* harmony import */ var src_app_services_contracts_cooperation_contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contracts/cooperation-contract.service */ "./src/app/services/contracts/cooperation-contract.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/filter.service */ "./src/app/services/filter.service.ts");










var CooperationListComponent = /** @class */ (function () {
    function CooperationListComponent(cooperationService, userService, tokenStorage, router, toast, filterService) {
        this.cooperationService = cooperationService;
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.toast = toast;
        this.filterService = filterService;
        this.form = {};
        this.filter = new src_app_models_filterObj_model__WEBPACK_IMPORTED_MODULE_2__["FilterObject"]();
        this.listDocs = [];
        this.listUsers = [];
        this.searchStr = '';
        this.bool = false;
        this.isLogin = false;
        this.size = 5;
        this.page = 0;
    }
    CooperationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.saveKindOfContract("3");
        if (!this.tokenStorage.isLogin()) {
            this.router.navigate(['/']);
        }
        else {
            this.init();
            this.getAllDocs();
            if (this.role == 'ROLE_ADMIN') {
                this.userService.getAll()
                    .subscribe(function (data) {
                    _this.listUsers = data;
                });
            }
        }
    };
    CooperationListComponent.prototype.init = function () {
        this.role = this.tokenStorage.getAuthorities()[0];
        this.username = this.tokenStorage.getUsername();
        this.isLogin = this.tokenStorage.isLogin();
        this.label = "All users";
        this.sizes = [5, 10, 25, 50];
        this.form.username = "";
        this.form.title = "";
        this.form.isActive = "";
        this.form.fromDate = "";
        this.form.toDate = "";
        this.form.sortOrder = "ASC";
        this.form.sortField = "title";
        this.form.clientFullname = '';
        this.form.clientAdress = '';
        this.form.lastChange = '';
        this.form.kindOfActivity = '';
        this.form.fromCooperationTerm = null;
        this.form.toCooperationTerm = null;
    };
    CooperationListComponent.prototype.setSize = function (s) {
        this.size = s;
        this.setPage(0);
        console.log("page " + this.page);
    };
    CooperationListComponent.prototype.setPage = function (i) {
        this.page = i;
        this.getAllDocs();
        console.log("set page " + this.page);
    };
    CooperationListComponent.prototype.nextPage = function (value) {
        if (value) {
            this.page = this.page + 1;
        }
        else {
            this.page = this.page - 1;
        }
        this.getAllDocs();
        console.log(this.page);
    };
    CooperationListComponent.prototype.initFilter = function () {
        this.filter.title = this.form.title;
        this.filter.clientFullname = this.form.clientFullname;
        this.filter.clientAdress = this.form.clientAdress;
        this.filter.lastChange = this.form.lastChange;
        this.filter.isActive = this.form.isActive;
        this.filter.sortField = this.form.sortField;
        this.filter.sortOrder = this.form.sortOrder;
        this.filter.fromDate = this.form.fromDate;
        this.filter.toDate = this.form.toDate;
        this.filter.username = this.form.username;
        this.filter.kindOfActivity = this.form.kindOfActivity;
        this.filter.fromCooperationTerm = this.form.fromCooperationTerm;
        this.filter.toCooperationTerm = this.form.toCooperationTerm;
    };
    CooperationListComponent.prototype.getAllDocs = function () {
        var _this = this;
        this.showSpinner = true;
        this.showData = false;
        this.initFilter();
        if (this.role == 'ROLE_USER') {
            this.filter.username = this.username;
        }
        console.log(this.filter);
        this.cooperationService.getByFilter(this.filter, this.page, this.size)
            .subscribe(function (data) {
            _this.showSpinner = false;
            _this.showData = true;
            _this.listDocs = data['content'];
            _this.pages = new Array(data['totalPages']);
            _this.length = _this.pages.length;
            _this.totalElements = data['totalElements'];
            _this.pages = _this.filterService.viewPages(_this.length, _this.page, _this.pages);
            console.log(_this.pages);
        }, function (error) {
            console.log(error);
        });
    };
    CooperationListComponent.prototype.deleteDocument = function (doc) {
        var _this = this;
        this.cooperationService.deleteById(doc.id).subscribe(function (data) {
            _this.setPage(0);
            _this.toast.showSuccess('', 'Cooperation contract deleted successfully');
        });
        console.log(doc.title);
    };
    CooperationListComponent.prototype.deleteAll = function () {
        var _this = this;
        this.cooperationService.deleteAll().subscribe(function (data) {
            _this.getAllDocs();
            _this.toast.showSuccess('', 'All cooperation contracts deleted successfully');
        });
        console.log("all");
    };
    CooperationListComponent.prototype.docEdit = function (doc) {
        window.sessionStorage.setItem("docId", doc.id.toString());
    };
    CooperationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cooperation-list',
            template: __webpack_require__(/*! ./cooperation-list.component.html */ "./src/app/documents/cooperation-list/cooperation-list.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeTableItem"], _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadePaginator"], _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeTable"], _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./cooperation-list.component.css */ "./src/app/documents/cooperation-list/cooperation-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contracts_cooperation_contract_service__WEBPACK_IMPORTED_MODULE_3__["CooperationContractService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_9__["FilterService"]])
    ], CooperationListComponent);
    return CooperationListComponent;
}());



/***/ }),

/***/ "./src/app/documents/credit-list/credit-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/documents/credit-list/credit-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    position: fixed;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0.356);\n    -webkit-filter: blur(10px);\n            filter: blur(10px);\n   \n}\n\n.forward {\n    bottom: 0;\n    background: inherit;\n    position: fixed;\n}\n\n.filter {\n    max-width: 250px;\n   \n}\n\n.expiredString{\n    color:rgb(241, 38, 38);\n    /* background-image: linear-gradient(to right, rgb(255, 117, 117), rgb(255, 255, 255)) */\n}\n\n.activeString{\n    color: rgb(21, 206, 21);\n    /* background-image: linear-gradient(to right, rgb(115, 247, 103), rgb(255, 255, 255)) */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRzL2NyZWRpdC1saXN0L2NyZWRpdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULHNDQUFzQztJQUN0QywwQkFBa0I7WUFBbEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsd0ZBQXdGO0FBQzVGOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdGQUF3RjtBQUM1RiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy9jcmVkaXQtbGlzdC9jcmVkaXQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1Nik7XG4gICAgZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgXG59XG5cbi5mb3J3YXJkIHtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5maWx0ZXIge1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICBcbn1cblxuLmV4cGlyZWRTdHJpbmd7XG4gICAgY29sb3I6cmdiKDI0MSwgMzgsIDM4KTtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTUsIDExNywgMTE3KSwgcmdiKDI1NSwgMjU1LCAyNTUpKSAqL1xufVxuXG4uYWN0aXZlU3RyaW5ne1xuICAgIGNvbG9yOiByZ2IoMjEsIDIwNiwgMjEpO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDExNSwgMjQ3LCAxMDMpLCByZ2IoMjU1LCAyNTUsIDI1NSkpICovXG59Il19 */"

/***/ }),

/***/ "./src/app/documents/credit-list/credit-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/documents/credit-list/credit-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLogin; else notLogin\" class=\"mt-5 ml-2 mr-3 mb-5\">\n  <div class=\"row \">\n    <div @fadeFilter class=\"col mr-3  filter\" (change)=\"setPage(0)\">\n      <div style=\"position: fixed;width: 250px;\">\n        <div class=\"text-center\">\n          <h4>Filter</h4>\n        </div>\n        <hr>\n        <input type=\"text\" placeholder=\"Enter title\" class=\"form-control\" name=\"title\" [(ngModel)]=\"form.title\"\n          #title=\"ngModel\">\n        <br>\n        <input type=\"text\" placeholder=\"Enter Borrower full name\" class=\"form-control\" name=\"clientFullname\"\n          [(ngModel)]=\"form.clientFullname\" #clientFullname=\"ngModel\">\n        <br>\n        From date of creation:<input type=\"date\" class=\"form-control\" name=\"fromDate\" [(ngModel)]=\"form.fromDate\"\n          #fromDate=\"ngModel\" />\n        To date of creation:<input type=\"date\" class=\"form-control\" name=\"toDate\" [(ngModel)]=\"form.toDate\"\n          #toDate=\"ngModel\" />\n        <br>\n        <div class=\"input-group\">\n          <input type=\"number\" placeholder=\"min term\" class=\"form-control\" name=\"fromTerm\"\n            [(ngModel)]=\"form.fromTerm\" #fromTerm=\"ngModel\" />\n          <input type=\"number\" placeholder=\"max term\" class=\"form-control\" name=\"toTerm\"\n            [(ngModel)]=\"form.toTerm\" #toTerm=\"ngModel\" />\n        </div>\n        <br>\n        <div class=\"input-group\">\n          <input type=\"number\" placeholder=\"min interest\" class=\"form-control\" name=\"fromAnnualInterest\"\n            [(ngModel)]=\"form.fromAnnualInterest\" #fromAnnualInterest=\"ngModel\" />\n          <input type=\"number\" placeholder=\"max interest\" class=\"form-control\" name=\"toAnnualInterest\"\n            [(ngModel)]=\"form.toAnnualInterest\" #toAnnualInterest=\"ngModel\" />\n        </div>\n        <br>\n        <div class=\"input-group\">\n          <input type=\"number\" placeholder=\"min amount\" class=\"form-control\" name=\"fromCreditAmount\"\n            [(ngModel)]=\"form.fromCreditAmount\" #fromCreditAmount=\"ngModel\" />\n          <input type=\"number\" placeholder=\"max amount\" class=\"form-control\" name=\"toCreditAmount\"\n            [(ngModel)]=\"form.toCreditAmount\" #toCreditAmount=\"ngModel\" />\n        </div>\n        <br>\n        <div class=\"btn-group \" style=\"width: 100%\" (click)=\"setPage(0)\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.isActive=''\"\n            [ngClass]=\"{'active':form.isActive==''}\">All</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.isActive='true'\"\n            [ngClass]=\"{'active':form.isActive=='true'}\">Active</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.isActive='false'\"\n            [ngClass]=\"{'active':form.isActive=='false'}\">Expired</button>\n        </div>\n        <hr>\n        <div *ngIf=\"role == 'ROLE_ADMIN'\">\n          <div class=\"btn-group dropup\" role=\"group\" style=\"width: 100%\">\n            <button id=\"btn1\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n              {{label}}</button>\n            <div class=\"dropdown-menu\" style=\"width: 100%\" aria-labelledby=\"btn1\" (click)=\"setPage(0)\">\n              <a class=\"dropdown-item\" (click)=\"form.username=''\" (click)=\"label='All users'\">All users</a>\n              <a *ngFor=\"let user of listUsers\" class=\"dropdown-item\"\n                (click)=\"form.username=user.username && label=user.username \">{{user.username}}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div @fadeNameTable class=\"row align-items-end mb-1\">\n        <h1 class=\"display-4\">Loan contracts ({{totalElements}})</h1>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\" style=\"margin-left:30%\">\n          <div *ngIf=\"showSpinner\" class=\"spinner-grow \" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </div>\n        <div @fadeTable *ngIf=\"listDocs.length > 0\" class=\"col-6\">\n          <button *ngIf=\"role === 'ROLE_ADMIN'\" data-toggle=\"modal\" data-target=\"#deleteall\"\n            class=\"btn btn-danger float-right\">Delete all</button>\n\n          <div class=\"btn-group float-right mr-3\" role=\"group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"basic-addon1\">Sort by:</span>\n            </div>\n            <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\"\n              style=\"width: 200px\">{{form.sortField}} : {{form.sortOrder}}</button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\" (click)=\"getAllDocs()\">\n              <a class=\"dropdown-item\" (click)=\"form.sortField='title'\" (click)=\" form.sortOrder='ASC'\">Title: a ->\n                z</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='title'\" (click)=\"form.sortOrder='DESC'\">Title: z ->\n                a</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='dateOfCreation'\"\n                (click)=\" form.sortOrder='DESC'\">Created:\n                newest -> eldest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='dateOfCreation'\"\n                (click)=\" form.sortOrder='ASC'\">Created:\n                eldest -> newest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='lastChange'\" (click)=\" form.sortOrder='DESC'\">Updated:\n                newest -> eldest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='lastChange'\" (click)=\" form.sortOrder='ASC'\">Updated:\n                eldest -> newest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='creditAmount'\" (click)=\" form.sortOrder='ASC'\">Loan\n                amount: min ->\n                max</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='creditAmount'\" (click)=\"form.sortOrder='DESC'\">Loan\n                amount: max ->\n                min</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='annualInterest'\" (click)=\" form.sortOrder='ASC'\">Annual\n                interest: min ->\n                max</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='annualInterest'\" (click)=\"form.sortOrder='DESC'\">Annual\n                interest: max ->\n                min</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='term'\" (click)=\" form.sortOrder='ASC'\">Term: min ->\n                max</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='term'\" (click)=\"form.sortOrder='DESC'\">Term: max ->\n                min</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div @fadeTable *ngIf=\"listDocs.length > 0; else falseLength\">\n        <table class=\"table table-hover  table-sm\" #tabledocs>\n          <thead class=\"thead-dark\">\n            <tr>\n\n              <th *ngIf=\"role == 'ROLE_ADMIN'\" scope=\"col\">User</th>\n              <th scope=\"col\">Created</th>\n              <th scope=\"col\">Updated</th>\n              <th scope=\"col\">Title</th>\n              <th scope=\"col\">Borrower full name</th>\n              <th scope=\"col\">Borrower amount</th>\n              <th scope=\"col\">Annual interest</th>\n              <th scope=\"col\">Term (days)</th>\n              <th scope=\"col\">Options</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr @fadeTableItem *ngFor=\"let doc of listDocs \"\n              [ngClass]=\"{'activeString':doc.active==true, 'expiredString':doc.active==false}\">\n              <td *ngIf=\"role == 'ROLE_ADMIN'\">{{doc.user.username}}</td>\n              <td>{{doc.dateOfCreation | date :'mediumDate'}}</td>\n              <td *ngIf=\"doc.lastChange==null\"><em>(never)</em></td>\n              <td *ngIf=\"doc.lastChange!=null\">{{doc.lastChange | date :'medium'}} </td>\n              <td>{{doc.title}}</td>\n              <td>{{doc.clientFullName}}</td>\n              <td>{{doc.creditAmount}}$</td>\n              <td>{{doc.annualInterest}}%</td>\n              <td>{{doc.term}} </td>\n              <td style=\"width: 200px;\">\n                <button routerLink=\"/loan-edit\" (click)=\"docEdit(doc)\" class=\"btn btn-warning mr-2\">View/Edit</button>\n                <button type=\"button\" (click)=\"deleteDocument(doc)\" class=\"btn btn-danger\">Delete</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"row container back\">\n        <div class=\"col \" style=\"height: 70px\"></div>\n      </div>\n      <div @fadePaginator *ngIf=\"listDocs.length > 0\" class=\"row container forward\">\n        <div class=\"col mt-3\">\n\n          <ul class=\"pagination \">\n            <li class=\"page-item\" [ngClass]=\"{'disabled':page==0}\">\n              <a class=\"page-link \" aria-disabled=\"true\" (click)=nextPage(false)>Previous</a>\n            </li>\n\n            <li class=\"page-item\" *ngFor=\"let p of pages\" [ngClass]=\"{'active':page==p-1}\">\n              <a *ngIf=\"p != -1\" class=\"page-link\" (click)=setPage(p-1)>{{p}}</a>\n              <a *ngIf=\"p == -1\" class=\"page-link\">...</a>\n            </li>\n\n            <li class=\"page-item\" [ngClass]=\"{'disabled':page==length-1}\">\n              <a class=\"page-link\" (click)=nextPage(true)>Next</a>\n            </li>\n          </ul>\n\n        </div>\n        <div class=\"col mt-3\">\n          <nav aria-label=\"Page navigation example\">\n            <ul class=\"pagination \">\n              <li class=\"page-item disabled\">\n                <a class=\"page-link \" aria-disabled=\"true\">Show by </a>\n              </li>\n              <li class=\"page-item\" *ngFor=\"let s of sizes\" [ngClass]=\"{'active':size==s}\">\n                <a class=\"page-link\" (click)=setSize(s)>{{s}}</a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n\n      </div>\n\n      <br>\n    </div>\n  </div>\n</div>\n\n<ng-template #falseLength>\n  <div @fadeTable *ngIf=\"showData\" class=\"text-center mt-5\">\n    <h3>Empty list of documents</h3>\n  </div>\n</ng-template>\n\n\n\n<ng-template #notLogin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a routerLink=\"/\" class=\"alert-link\">login</a>!\n    </h5>\n  </div>\n</ng-template>\n\n\n<div class=\"modal fade\" id=\"deleteall\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalCenterTitle\">Confirm the action</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h6>Are you sure you want to delete all document?</h6>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" data-dismiss=\"modal\" (click)=\"deleteAll()\" class=\"btn btn-success\">Confirm delete</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/documents/credit-list/credit-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/documents/credit-list/credit-list.component.ts ***!
  \****************************************************************/
/*! exports provided: CreditListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditListComponent", function() { return CreditListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contracts_credit_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contracts/credit-contract.service */ "./src/app/services/contracts/credit-contract.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_filterObj_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/filterObj.model */ "./src/app/models/filterObj.model.ts");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/filter.service */ "./src/app/services/filter.service.ts");










var CreditListComponent = /** @class */ (function () {
    function CreditListComponent(creditService, userService, tokenStorage, router, toast, filterService) {
        this.creditService = creditService;
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.toast = toast;
        this.filterService = filterService;
        this.form = {};
        this.filter = new src_app_models_filterObj_model__WEBPACK_IMPORTED_MODULE_7__["FilterObject"]();
        this.listDocs = [];
        this.listUsers = [];
        this.searchStr = '';
        this.bool = false;
        this.isLogin = false;
        this.size = 5;
        this.page = 0;
        this.kindOfDoc = 1;
    }
    CreditListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.saveKindOfContract("2");
        if (!this.tokenStorage.isLogin()) {
            this.router.navigate(['/']);
        }
        else {
            this.init();
            this.getAllDocs();
            if (this.role == 'ROLE_ADMIN') {
                this.userService.getAll()
                    .subscribe(function (data) {
                    _this.listUsers = data;
                });
            }
        }
    };
    CreditListComponent.prototype.init = function () {
        this.role = this.tokenStorage.getAuthorities()[0];
        this.username = this.tokenStorage.getUsername();
        this.isLogin = this.tokenStorage.isLogin();
        this.label = "All users";
        this.sizes = [5, 10, 25, 50];
        this.form.username = "";
        this.form.title = "";
        this.form.isActive = "";
        this.form.fromDate = "";
        this.form.toDate = "";
        this.form.sortOrder = "ASC";
        this.form.sortField = "title";
        this.form.clientFullname = '';
        this.form.clientAdress = '';
        this.form.lastChange = '';
        this.form.toCreditAmount = null;
        this.form.toAnnualInterest = null;
        this.form.toTerm = null;
        this.form.fromCreditAmount = null;
        this.form.fromAnnualInterest = null;
        this.form.fromTerm = null;
    };
    CreditListComponent.prototype.setSize = function (s) {
        this.size = s;
        this.setPage(0);
        console.log("page " + this.page);
    };
    CreditListComponent.prototype.setPage = function (i) {
        this.page = i;
        this.getAllDocs();
        console.log("set page " + this.page);
    };
    CreditListComponent.prototype.nextPage = function (value) {
        if (value) {
            this.page = this.page + 1;
        }
        else {
            this.page = this.page - 1;
        }
        this.getAllDocs();
        console.log(this.page);
    };
    CreditListComponent.prototype.initFilter = function () {
        this.filter.title = this.form.title;
        this.filter.clientFullname = this.form.clientFullname;
        this.filter.clientAdress = this.form.clientAdress;
        this.filter.lastChange = this.form.lastChange;
        this.filter.isActive = this.form.isActive;
        this.filter.sortField = this.form.sortField;
        this.filter.sortOrder = this.form.sortOrder;
        this.filter.fromDate = this.form.fromDate;
        this.filter.toDate = this.form.toDate;
        this.filter.username = this.form.username;
        this.filter.toCreditAmount = this.form.toCreditAmount;
        this.filter.toAnnualInterest = this.form.toAnnualInterest;
        this.filter.toTerm = this.form.toTerm;
        this.filter.fromCreditAmount = this.form.fromCreditAmount;
        this.filter.fromAnnualInterest = this.form.fromAnnualInterest;
        this.filter.fromTerm = this.form.fromTerm;
    };
    CreditListComponent.prototype.getAllDocs = function () {
        var _this = this;
        this.showSpinner = true;
        this.showData = false;
        this.initFilter();
        if (this.role == 'ROLE_USER') {
            this.filter.username = this.username;
        }
        console.log(this.filter);
        this.creditService.getByFilter(this.filter, this.page, this.size)
            .subscribe(function (data) {
            _this.showSpinner = false;
            _this.showData = true;
            _this.listDocs = data['content'];
            _this.pages = new Array(data['totalPages']);
            _this.length = _this.pages.length;
            _this.totalElements = data['totalElements'];
            _this.pages = _this.filterService.viewPages(_this.length, _this.page, _this.pages);
            console.log(_this.pages);
        }, function (error) {
            console.log(error);
        });
    };
    CreditListComponent.prototype.deleteDocument = function (doc) {
        var _this = this;
        this.creditService.deleteById(doc.id).subscribe(function (data) {
            _this.setPage(0);
            _this.toast.showSuccess('', 'Loan contract deleted successfully');
        });
        console.log(doc.title);
    };
    CreditListComponent.prototype.deleteAll = function () {
        var _this = this;
        this.creditService.deleteAll().subscribe(function (data) {
            _this.getAllDocs();
            _this.toast.showSuccess('', 'All loan contracts deleted successfully');
        });
        console.log("all");
    };
    CreditListComponent.prototype.docEdit = function (doc) {
        window.sessionStorage.setItem("docId", doc.id.toString());
    };
    CreditListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-credit-list',
            template: __webpack_require__(/*! ./credit-list.component.html */ "./src/app/documents/credit-list/credit-list.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeTableItem"], _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadePaginator"], _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeTable"], _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./credit-list.component.css */ "./src/app/documents/credit-list/credit-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contracts_credit_contract_service__WEBPACK_IMPORTED_MODULE_2__["CreditContractService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_9__["FilterService"]])
    ], CreditListComponent);
    return CreditListComponent;
}());



/***/ }),

/***/ "./src/app/documents/rental-list/rental-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/documents/rental-list/rental-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    position: fixed;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0.356);\n    -webkit-filter: blur(10px);\n            filter: blur(10px);\n   \n}\n\n.forward {\n    bottom: 0;\n    background: inherit;\n    position: fixed;\n}\n\n.filter {\n    max-width: 250px;\n   \n}\n\n.expiredString{\n    color:rgb(241, 38, 38);\n    /* background-image: linear-gradient(to right, rgb(255, 117, 117), rgb(255, 255, 255)) */\n}\n\n.activeString{\n    color: rgb(21, 206, 21);\n    /* background-image: linear-gradient(to right, rgb(115, 247, 103), rgb(255, 255, 255)) */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRzL3JlbnRhbC1saXN0L3JlbnRhbC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULHNDQUFzQztJQUN0QywwQkFBa0I7WUFBbEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsd0ZBQXdGO0FBQzVGOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdGQUF3RjtBQUM1RiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy9yZW50YWwtbGlzdC9yZW50YWwtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1Nik7XG4gICAgZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgXG59XG5cbi5mb3J3YXJkIHtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5maWx0ZXIge1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICBcbn1cblxuLmV4cGlyZWRTdHJpbmd7XG4gICAgY29sb3I6cmdiKDI0MSwgMzgsIDM4KTtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTUsIDExNywgMTE3KSwgcmdiKDI1NSwgMjU1LCAyNTUpKSAqL1xufVxuXG4uYWN0aXZlU3RyaW5ne1xuICAgIGNvbG9yOiByZ2IoMjEsIDIwNiwgMjEpO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDExNSwgMjQ3LCAxMDMpLCByZ2IoMjU1LCAyNTUsIDI1NSkpICovXG59Il19 */"

/***/ }),

/***/ "./src/app/documents/rental-list/rental-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/documents/rental-list/rental-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLogin; else notLogin\" class=\"mt-5 ml-2 mr-3 mb-5\">\n  <div class=\"row \">\n    <div @fadeFilter class=\"col mr-3  filter\" (change)=\"setPage(0)\">\n      <div style=\"position: fixed; width: 250px;\">\n        <div class=\"text-center\">\n          <h4>Filter</h4>\n        </div>\n        <hr>\n        <input type=\"text\" placeholder=\"Enter title\" class=\"form-control\" name=\"title\" [(ngModel)]=\"form.title\"\n          #title=\"ngModel\">\n        <br>\n        <input type=\"text\" placeholder=\"Enter lessee full name\" class=\"form-control\" name=\"clientFullname\"\n          [(ngModel)]=\"form.clientFullname\" #clientFullname=\"ngModel\">\n        <br>\n        From date of creation:<input type=\"date\" class=\"form-control\" name=\"fromDate\" [(ngModel)]=\"form.fromDate\"\n          #fromDate=\"ngModel\" />\n        To date of creation:<input type=\"date\" class=\"form-control\" name=\"toDate\" [(ngModel)]=\"form.toDate\"\n          #toDate=\"ngModel\" />\n        <br>\n        <input type=\"text\" placeholder=\"Enter lease object\" class=\"form-control\" name=\"rentalObject\"\n          [(ngModel)]=\"form.rentalObject\" #rentalObject=\"ngModel\">\n        <br>\n        <div class=\"input-group\">\n          <input type=\"number\" placeholder=\"min price\" class=\"form-control\" name=\"fromRentalPrice\"\n            [(ngModel)]=\"form.fromRentalPrice\" #fromRentalPrice=\"ngModel\" />\n          <input type=\"number\" placeholder=\"max price\" class=\"form-control\" name=\"toRentalPrice\"\n            [(ngModel)]=\"form.toRentalPrice\" #toRentalPrice=\"ngModel\" />\n        </div>\n        <br>\n        From date of lease:<input type=\"date\" class=\"form-control\" name=\"fromRental\" [(ngModel)]=\"form.fromRental\"\n          #fromRental=\"ngModel\" />\n        To date of lease:<input type=\"date\" class=\"form-control\" name=\"toRental\" [(ngModel)]=\"form.toRental\"\n          #toRental=\"ngModel\" />\n        <br>\n        <div class=\"btn-group \" style=\"width: 100%\" (click)=\"setPage(0)\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.isActive=''\"\n            [ngClass]=\"{'active':form.isActive==''}\">All</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.isActive='true'\"\n            [ngClass]=\"{'active':form.isActive=='true'}\">Active</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.isActive='false'\"\n            [ngClass]=\"{'active':form.isActive=='false'}\">Expired</button>\n        </div>\n        <br><br>\n        <div *ngIf=\"role == 'ROLE_ADMIN'\">\n          <div class=\"btn-group dropup\" role=\"group\" style=\"width: 100%\">\n            <button id=\"btn1\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n              {{label}}</button>\n            <div class=\"dropdown-menu\" style=\"width: 100%\" aria-labelledby=\"btn1\" (click)=\"setPage(0)\">\n              <a class=\"dropdown-item\" (click)=\"form.username=''\" (click)=\"label='All users'\">All users</a>\n              <a *ngFor=\"let user of listUsers\" class=\"dropdown-item\"\n                (click)=\"form.username=user.username && label=user.username \">{{user.username}}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div @fadeNameTable class=\"row align-items-end mb-1\">\n        <h1 class=\"display-4\">Lease contracts ({{totalElements}})</h1>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\" style=\"margin-left:30%\">\n          <div *ngIf=\"showSpinner\" class=\"spinner-grow \" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </div>\n        <div @fadeTable *ngIf=\"listDocs.length > 0\" class=\"col-6\">\n          <button *ngIf=\"role === 'ROLE_ADMIN'\" data-toggle=\"modal\" data-target=\"#deleteall\"\n            class=\"btn btn-danger float-right\">Delete all</button>\n\n          <div class=\"btn-group float-right mr-3\" role=\"group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"basic-addon1\">Sort by:</span>\n            </div>\n            <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\"\n              style=\"width: 200px\">{{form.sortField}} : {{form.sortOrder}}</button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\" (click)=\"getAllDocs()\">\n              <a class=\"dropdown-item\" (click)=\"form.sortField='title'\" (click)=\" form.sortOrder='ASC'\">Title: a ->\n                z</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='title'\" (click)=\"form.sortOrder='DESC'\">Title: z ->\n                a</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='dateOfCreation'\" (click)=\" form.sortOrder='DESC'\">Created:\n                newest -> eldest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='dateOfCreation'\" (click)=\" form.sortOrder='ASC'\">Created:\n                eldest -> newest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='lastChange'\" (click)=\" form.sortOrder='DESC'\">Updated:\n                newest -> eldest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='lastChange'\" (click)=\" form.sortOrder='ASC'\">Updated:\n                eldest -> newest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='rentalPrice'\" (click)=\" form.sortOrder='ASC'\">Lease price: min ->\n                max</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='rentalPrice'\" (click)=\"form.sortOrder='DESC'\">Lease price: max ->\n                min</a>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div @fadeTable *ngIf=\"listDocs.length > 0; else falseLength\">\n        <table class=\"table table-hover  table-sm\" #tabledocs>\n          <thead class=\"thead-dark\">\n            <tr>\n\n              <th *ngIf=\"role == 'ROLE_ADMIN'\" scope=\"col\">User</th>\n              <th scope=\"col\">Created</th>\n              <th scope=\"col\">Updated</th>\n              <th scope=\"col\">Title</th>\n              <th scope=\"col\">Lessee full name</th>\n              <th scope=\"col\">Lease object</th>\n              <th scope=\"col\">Lease price / day</th>\n              <th scope=\"col\">Lease period</th>\n              <th scope=\"col\">Options</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr @fadeTableItem *ngFor=\"let doc of listDocs \"\n            [ngClass]=\"{'activeString':doc.active==true, 'expiredString':doc.active==false}\">\n              <td *ngIf=\"role == 'ROLE_ADMIN'\">{{doc.user.username}}</td>\n              <td>{{doc.dateOfCreation | date :'mediumDate'}}</td>\n              <td *ngIf=\"doc.lastChange==null\"><em>(never)</em></td>\n              <td *ngIf=\"doc.lastChange!=null\">{{doc.lastChange | date :'medium'}} </td>\n              <td>{{doc.title}}</td>\n              <td>{{doc.clientFullName}}</td>\n              <td>{{doc.rentalObject}}</td>\n              <td>{{doc.rentalPrice}}$</td>\n              <td>{{doc.startRental | date :'mediumDate'}} - {{doc.endRental | date :'mediumDate'}}</td>\n              <td style=\"width: 200px;\">\n                <button routerLink=\"/lease-edit\" (click)=\"docEdit(doc)\" class=\"btn btn-warning mr-2\">View /\n                  Edit</button>\n                <button type=\"button\" (click)=\"deleteDocument(doc)\" class=\"btn btn-danger\">Delete</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"row container back\">\n        <div class=\"col \" style=\"height: 70px\"></div>\n      </div>\n      <div @fadePaginator *ngIf=\"listDocs.length > 0\" class=\"row container forward\">\n        <div class=\"col mt-3\">\n\n          <ul class=\"pagination \">\n            <li class=\"page-item\" [ngClass]=\"{'disabled':page==0}\">\n              <a class=\"page-link \" aria-disabled=\"true\" (click)=nextPage(false)>Previous</a>\n            </li>\n\n            <li class=\"page-item\" *ngFor=\"let p of pages\" [ngClass]=\"{'active':page==p-1}\">\n              <a *ngIf=\"p != -1\" class=\"page-link\" (click)=setPage(p-1)>{{p}}</a>\n              <a *ngIf=\"p == -1\" class=\"page-link\">...</a>\n            </li>\n\n            <li class=\"page-item\" [ngClass]=\"{'disabled':page==length-1}\">\n              <a class=\"page-link\" (click)=nextPage(true)>Next</a>\n            </li>\n          </ul>\n\n        </div>\n        <div class=\"col mt-3\">\n          <nav aria-label=\"Page navigation example\">\n            <ul class=\"pagination \">\n              <li class=\"page-item disabled\">\n                <a class=\"page-link \" aria-disabled=\"true\">Show by </a>\n              </li>\n              <li class=\"page-item\" *ngFor=\"let s of sizes\" [ngClass]=\"{'active':size==s}\">\n                <a class=\"page-link\" (click)=setSize(s)>{{s}}</a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n\n      </div>\n\n      <br>\n    </div>\n  </div>\n</div>\n\n<ng-template #falseLength>\n  <div @fadeTable *ngIf=\"showData\" class=\"text-center mt-5\">\n    <h3>Empty list of documents</h3>\n  </div>\n</ng-template>\n\n\n\n<ng-template #notLogin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a routerLink=\"/\" class=\"alert-link\">login</a>!\n    </h5>\n  </div>\n</ng-template>\n\n\n<div class=\"modal fade\" id=\"deleteall\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalCenterTitle\">Confirm the action</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h6>Are you sure you want to delete all document?</h6>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" data-dismiss=\"modal\" (click)=\"deleteAll()\" class=\"btn btn-success\">Confirm delete</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/documents/rental-list/rental-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/documents/rental-list/rental-list.component.ts ***!
  \****************************************************************/
/*! exports provided: RentalListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalListComponent", function() { return RentalListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contracts_rental_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contracts/rental-contract.service */ "./src/app/services/contracts/rental-contract.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_models_filterObj_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/filterObj.model */ "./src/app/models/filterObj.model.ts");
/* harmony import */ var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/filter.service */ "./src/app/services/filter.service.ts");










var RentalListComponent = /** @class */ (function () {
    function RentalListComponent(rentalService, userService, tokenStorage, router, toast, filterService) {
        this.rentalService = rentalService;
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.toast = toast;
        this.filterService = filterService;
        this.form = {};
        this.filter = new src_app_models_filterObj_model__WEBPACK_IMPORTED_MODULE_4__["FilterObject"]();
        this.listDocs = [];
        this.listUsers = [];
        this.searchStr = '';
        this.bool = false;
        this.isLogin = false;
        this.size = 5;
        this.page = 0;
        this.kindOfDoc = 1;
    }
    RentalListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.saveKindOfContract("5");
        if (!this.tokenStorage.isLogin()) {
            this.router.navigate(['/']);
        }
        else {
            this.init();
            this.getAllDocs();
            if (this.role == 'ROLE_ADMIN') {
                this.userService.getAll()
                    .subscribe(function (data) {
                    _this.listUsers = data;
                });
            }
        }
    };
    RentalListComponent.prototype.init = function () {
        this.role = this.tokenStorage.getAuthorities()[0];
        this.username = this.tokenStorage.getUsername();
        this.isLogin = this.tokenStorage.isLogin();
        this.label = "All users";
        this.sizes = [5, 10, 25, 50];
        this.form.username = "";
        this.form.title = "";
        this.form.isActive = "";
        this.form.fromDate = "";
        this.form.toDate = "";
        this.form.sortOrder = "ASC";
        this.form.sortField = "title";
        this.form.clientFullname = '';
        this.form.clientAdress = '';
        this.form.lastChange = '';
        this.form.fromRental = '';
        this.form.toRental = '';
        this.form.fromRentalPrice = null;
        this.form.toRentalPrice = null;
        this.form.rentalObject = '';
    };
    RentalListComponent.prototype.setSize = function (s) {
        this.size = s;
        this.setPage(0);
        console.log("page " + this.page);
    };
    RentalListComponent.prototype.setPage = function (i) {
        this.page = i;
        this.getAllDocs();
        console.log("set page " + this.page);
    };
    RentalListComponent.prototype.nextPage = function (value) {
        if (value) {
            this.page = this.page + 1;
        }
        else {
            this.page = this.page - 1;
        }
        this.getAllDocs();
        console.log(this.page);
    };
    RentalListComponent.prototype.initFilter = function () {
        this.filter.title = this.form.title;
        this.filter.clientFullname = this.form.clientFullname;
        this.filter.clientAdress = this.form.clientAdress;
        this.filter.lastChange = this.form.lastChange;
        this.filter.isActive = this.form.isActive;
        this.filter.sortField = this.form.sortField;
        this.filter.sortOrder = this.form.sortOrder;
        this.filter.fromDate = this.form.fromDate;
        this.filter.toDate = this.form.toDate;
        this.filter.username = this.form.username;
        this.filter.fromRental = this.form.fromRental;
        this.filter.toRental = this.form.toRental;
        this.filter.fromRentalPrice = this.form.fromRentalPrice;
        this.filter.toRentalPrice = this.form.toRentalPrice;
        this.filter.rentalObject = this.form.rentalObject;
    };
    RentalListComponent.prototype.getAllDocs = function () {
        var _this = this;
        this.showSpinner = true;
        this.showData = false;
        this.initFilter();
        if (this.role == 'ROLE_USER') {
            this.filter.username = this.username;
        }
        console.log(this.filter);
        this.rentalService.getByFilter(this.filter, this.page, this.size)
            .subscribe(function (data) {
            _this.showSpinner = false;
            _this.showData = true;
            _this.listDocs = data['content'];
            _this.pages = new Array(data['totalPages']);
            _this.length = _this.pages.length;
            _this.totalElements = data['totalElements'];
            _this.pages = _this.filterService.viewPages(_this.length, _this.page, _this.pages);
            console.log(_this.pages);
        }, function (error) {
            console.log(error);
        });
    };
    RentalListComponent.prototype.deleteDocument = function (doc) {
        var _this = this;
        this.rentalService.deleteById(doc.id).subscribe(function (data) {
            _this.setPage(0);
            _this.toast.showSuccess('', 'Lease contract deleted successfully');
        });
        console.log(doc.title);
    };
    RentalListComponent.prototype.deleteAll = function () {
        var _this = this;
        this.rentalService.deleteAll().subscribe(function (data) {
            _this.getAllDocs();
            _this.toast.showSuccess('', 'All lease contracts deleted successfully');
        });
        console.log("all");
    };
    RentalListComponent.prototype.docEdit = function (doc) {
        window.sessionStorage.setItem("docId", doc.id.toString());
    };
    RentalListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rental-list',
            template: __webpack_require__(/*! ./rental-list.component.html */ "./src/app/documents/rental-list/rental-list.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeTableItem"], _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadePaginator"], _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeTable"], _animations_animation__WEBPACK_IMPORTED_MODULE_8__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./rental-list.component.css */ "./src/app/documents/rental-list/rental-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contracts_rental_contract_service__WEBPACK_IMPORTED_MODULE_2__["RentalContractService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_9__["FilterService"]])
    ], RentalListComponent);
    return RentalListComponent;
}());



/***/ }),

/***/ "./src/app/documents/sale-list/sale-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/documents/sale-list/sale-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    position: fixed;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0.356);\n    -webkit-filter: blur(10px);\n            filter: blur(10px);\n   \n}\n\n.forward {\n    bottom: 0;\n    background: inherit;\n    position: fixed;\n}\n\n.filter {\n    max-width: 250px;\n   \n}\n\n.expiredString{\n    color:rgb(241, 38, 38);\n    /* background-image: linear-gradient(to right, rgb(255, 117, 117), rgb(255, 255, 255)) */\n}\n\n.activeString{\n    color: rgb(21, 206, 21);\n    /* background-image: linear-gradient(to right, rgb(115, 247, 103), rgb(255, 255, 255)) */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRzL3NhbGUtbGlzdC9zYWxlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLDBCQUFrQjtZQUFsQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3RkFBd0Y7QUFDNUY7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsd0ZBQXdGO0FBQzVGIiwiZmlsZSI6InNyYy9hcHAvZG9jdW1lbnRzL3NhbGUtbGlzdC9zYWxlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNTYpO1xuICAgIGZpbHRlcjogYmx1cigxMHB4KTtcbiAgIFxufVxuXG4uZm9yd2FyZCB7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uZmlsdGVyIHtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgXG59XG5cbi5leHBpcmVkU3RyaW5ne1xuICAgIGNvbG9yOnJnYigyNDEsIDM4LCAzOCk7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjU1LCAxMTcsIDExNyksIHJnYigyNTUsIDI1NSwgMjU1KSkgKi9cbn1cblxuLmFjdGl2ZVN0cmluZ3tcbiAgICBjb2xvcjogcmdiKDIxLCAyMDYsIDIxKTtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxMTUsIDI0NywgMTAzKSwgcmdiKDI1NSwgMjU1LCAyNTUpKSAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/documents/sale-list/sale-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/documents/sale-list/sale-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLogin; else notLogin\" class=\"mt-5 ml-2 mr-3 mb-5\">\n  <div class=\"row \">\n    <div @fadeFilter class=\"col mr-3  filter\" (change)=\"setPage(0)\">\n      <div style=\"position: fixed;width: 250px;\">\n        <div class=\"text-center\">\n          <h4>Filter</h4>\n        </div>\n        <hr>\n        <input type=\"text\" placeholder=\"Enter title\" class=\"form-control\" name=\"title\" [(ngModel)]=\"form.title\"\n          #title=\"ngModel\">\n        <br>\n        <input type=\"text\" placeholder=\"Enter Buyer full name\" class=\"form-control\" name=\"clientFullname\"\n          [(ngModel)]=\"form.clientFullname\" #clientFullname=\"ngModel\">\n          <br>\n        From date of creation:<input type=\"date\" class=\"form-control\" name=\"fromDate\" [(ngModel)]=\"form.fromDate\" #fromDate=\"ngModel\" />\n        To date of creation:<input type=\"date\" class=\"form-control\" name=\"toDate\" [(ngModel)]=\"form.toDate\" #toDate=\"ngModel\" />\n        <br>\n        <input type=\"text\" placeholder=\"Enter sale object\" class=\"form-control\" name=\"saleObject\" [(ngModel)]=\"form.saleObject\"\n          #saleObject=\"ngModel\">\n        <br>\n        <div class=\"input-group\">\n            <input type=\"number\" placeholder=\"min price\" class=\"form-control\" name=\"fromSalingPrice\"\n              [(ngModel)]=\"form.fromSalingPrice\" #fromSalingPrice=\"ngModel\" />\n             \n            <input type=\"number\" placeholder=\"max price\" class=\"form-control\" name=\"toSalingPrice\"\n              [(ngModel)]=\"form.toSalingPrice\" #toSalingPrice=\"ngModel\" />\n              \n          </div>\n        <br>\n        <div class=\"input-group\">\n            <input type=\"number\" placeholder=\"min period\" class=\"form-control\" name=\"fromWarrantyPeriod\"\n              [(ngModel)]=\"form.fromWarrantyPeriod\" #fromWarrantyPeriod=\"ngModel\" />\n            <input type=\"number\" placeholder=\"max period\" class=\"form-control\" name=\"toWarrantyPeriod\"\n              [(ngModel)]=\"form.toWarrantyPeriod\" #toWarrantyPeriod=\"ngModel\" />\n          </div>\n          <br>\n        <div class=\"btn-group \" style=\"width: 100%\" (click)=\"setPage(0)\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.isActive=''\"\n            [ngClass]=\"{'active':form.isActive==''}\">All </button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.isActive='true'\"\n            [ngClass]=\"{'active':form.isActive=='true'}\">Active</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.isActive='false'\"\n            [ngClass]=\"{'active':form.isActive=='false'}\">Expired</button>\n        </div>\n        <br><br>\n        <div *ngIf=\"role == 'ROLE_ADMIN'\">\n          <div class=\"btn-group dropup\" role=\"group\" style=\"width: 100%\">\n            <button id=\"btn1\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n              {{label}}</button>\n            <div class=\"dropdown-menu\" style=\"width: 100%\" aria-labelledby=\"btn1\" (click)=\"setPage(0)\">\n              <a class=\"dropdown-item\" (click)=\"form.username=''\" (click)=\"label='All users'\">All users</a>\n              <a *ngFor=\"let user of listUsers\" class=\"dropdown-item\"\n                (click)=\"form.username=user.username && label=user.username \">{{user.username}}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div @fadeNameTable class=\"row align-items-end mb-1\">\n        <h1 class=\"display-4\">Contracts of sale ({{totalElements}})</h1>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\" style=\"margin-left:30%\">\n          <div *ngIf=\"showSpinner\" class=\"spinner-grow \" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </div>\n        <div @fadeTable *ngIf=\"listDocs.length > 0\" class=\"col-6\">\n          <button *ngIf=\"role === 'ROLE_ADMIN'\" data-toggle=\"modal\" data-target=\"#deleteall\"\n            class=\"btn btn-danger float-right\">DeleteAll</button>\n\n          <div class=\"btn-group float-right mr-3\" role=\"group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"basic-addon1\">Sort by:</span>\n            </div>\n            <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\"\n              style=\"width: 200px\">{{form.sortField}} : {{form.sortOrder}}</button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\" (click)=\"getAllDocs()\">\n              <a class=\"dropdown-item\" (click)=\"form.sortField='title'\" (click)=\" form.sortOrder='ASC'\">Title: a ->\n                z</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='title'\" (click)=\"form.sortOrder='DESC'\">Title: z ->\n                a</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='dateOfCreation'\" (click)=\" form.sortOrder='DESC'\">Created:\n                newest -> eldest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='dateOfCreation'\" (click)=\" form.sortOrder='ASC'\">Created:\n                eldest -> newest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='lastChange'\" (click)=\" form.sortOrder='DESC'\">Updated:\n                newest -> eldest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='lastChange'\" (click)=\" form.sortOrder='ASC'\">Updated:\n                eldest -> newest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='warrantyPeriod'\" (click)=\" form.sortOrder='ASC'\">Warranty period:\n                 min ->\n                max</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='warrantyPeriod'\" (click)=\"form.sortOrder='DESC'\">Warranty period:\n                 max ->\n                min</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='salingPrice'\" (click)=\" form.sortOrder='ASC'\">Saling price:\n                 min ->\n                max</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='salingPrice'\" (click)=\"form.sortOrder='DESC'\">Saling price:\n                 max ->\n                min</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div @fadeTable *ngIf=\"listDocs.length > 0; else falseLength\">\n        <table class=\"table table-hover  table-sm\" #tabledocs>\n          <thead class=\"thead-dark\">\n            <tr>\n\n              <th *ngIf=\"role == 'ROLE_ADMIN'\" scope=\"col\">User</th>\n              <th scope=\"col\">Created</th>\n              <th scope=\"col\">Updated</th>\n              <th scope=\"col\">Title</th>\n              <th scope=\"col\">Buyer full name</th>\n              <th scope=\"col\">Sale object</th>\n              <th scope=\"col\">Sale price</th>\n              <th scope=\"col\">Warranty period (days)</th>\n              <th scope=\"col\">Options</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr @fadeTableItem *ngFor=\"let doc of listDocs \"\n            [ngClass]=\"{'activeString':doc.active==true, 'expiredString':doc.active==false}\">\n              <td *ngIf=\"role == 'ROLE_ADMIN'\">{{doc.user.username}}</td>\n              <td>{{doc.dateOfCreation | date :'mediumDate'}}</td>\n              <td *ngIf=\"doc.lastChange==null\"><em>(never)</em></td>\n              <td *ngIf=\"doc.lastChange!=null\">{{doc.lastChange | date :'medium'}} </td>\n              <td>{{doc.title}}</td>\n              <td>{{doc.clientFullName}}</td>\n              <td>{{doc.saleObject}}</td>\n              <td>{{doc.salingPrice}}$</td>\n              <td>{{doc.warrantyPeriod}}</td>\n              <td style=\"width: 200px;\">\n                <button routerLink=\"/sale-edit\" (click)=\"docEdit(doc)\" class=\"btn btn-warning mr-2\">View /\n                  Edit</button>\n                <button type=\"button\" (click)=\"deleteDocument(doc)\" class=\"btn btn-danger\">Delete</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"row container back\">\n        <div class=\"col \" style=\"height: 70px\"></div>\n      </div>\n      <div @fadePaginator *ngIf=\"listDocs.length > 0\" class=\"row container forward\">\n        <div class=\"col mt-3\">\n\n          <ul class=\"pagination \">\n            <li class=\"page-item\" [ngClass]=\"{'disabled':page==0}\">\n              <a class=\"page-link \" aria-disabled=\"true\" (click)=nextPage(false)>Previous</a>\n            </li>\n\n            <li class=\"page-item\" *ngFor=\"let p of pages\" [ngClass]=\"{'active':page==p-1}\">\n              <a *ngIf=\"p != -1\" class=\"page-link\" (click)=setPage(p-1)>{{p}}</a>\n              <a *ngIf=\"p == -1\" class=\"page-link\">...</a>\n            </li>\n\n            <li class=\"page-item\" [ngClass]=\"{'disabled':page==length-1}\">\n              <a class=\"page-link\" (click)=nextPage(true)>Next</a>\n            </li>\n          </ul>\n\n        </div>\n        <div class=\"col mt-3\">\n          <nav aria-label=\"Page navigation example\">\n            <ul class=\"pagination \">\n              <li class=\"page-item disabled\">\n                <a class=\"page-link \" aria-disabled=\"true\">Show by </a>\n              </li>\n              <li class=\"page-item\" *ngFor=\"let s of sizes\" [ngClass]=\"{'active':size==s}\">\n                <a class=\"page-link\" (click)=setSize(s)>{{s}}</a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n\n      </div>\n\n      <br>\n    </div>\n  </div>\n</div>\n\n<ng-template #falseLength>\n  <div @fadeTable *ngIf=\"showData\" class=\"text-center mt-5\">\n    <h3>Empty list of documents</h3>\n  </div>\n</ng-template>\n\n\n\n<ng-template #notLogin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a routerLink=\"/\" class=\"alert-link\">login</a>!\n    </h5>\n  </div>\n</ng-template>\n\n\n<div class=\"modal fade\" id=\"deleteall\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalCenterTitle\">Confirm the action</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h6>Are you sure you want to delete all document?</h6>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" data-dismiss=\"modal\" (click)=\"deleteAll()\" class=\"btn btn-success\">Confirm delete</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/documents/sale-list/sale-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/documents/sale-list/sale-list.component.ts ***!
  \************************************************************/
/*! exports provided: SaleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleListComponent", function() { return SaleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var src_app_services_contracts_contract_of_sale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contracts/contract-of-sale.service */ "./src/app/services/contracts/contract-of-sale.service.ts");
/* harmony import */ var src_app_models_filterObj_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/filterObj.model */ "./src/app/models/filterObj.model.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/filter.service */ "./src/app/services/filter.service.ts");










var SaleListComponent = /** @class */ (function () {
    function SaleListComponent(saleService, userService, tokenStorage, router, toast, filterService) {
        this.saleService = saleService;
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.toast = toast;
        this.filterService = filterService;
        this.form = {};
        this.filter = new src_app_models_filterObj_model__WEBPACK_IMPORTED_MODULE_4__["FilterObject"]();
        this.listDocs = [];
        this.listUsers = [];
        this.searchStr = '';
        this.bool = false;
        this.isLogin = false;
        this.size = 5;
        this.page = 0;
        this.kindOfDoc = 1;
    }
    SaleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.saveKindOfContract("4");
        if (!this.tokenStorage.isLogin()) {
            this.router.navigate(['/']);
        }
        else {
            this.init();
            this.getAllDocs();
            if (this.role == 'ROLE_ADMIN') {
                this.userService.getAll()
                    .subscribe(function (data) {
                    _this.listUsers = data;
                });
            }
        }
    };
    SaleListComponent.prototype.init = function () {
        this.role = this.tokenStorage.getAuthorities()[0];
        this.username = this.tokenStorage.getUsername();
        console.log(this.username + " " + this.role);
        this.isLogin = this.tokenStorage.isLogin();
        this.label = "All users";
        this.sizes = [5, 10, 25, 50];
        this.form.username = "";
        this.form.title = "";
        this.form.isActive = "";
        this.form.fromDate = "";
        this.form.toDate = "";
        this.form.sortOrder = "ASC";
        this.form.sortField = "title";
        this.form.clientFullname = '';
        this.form.clientAdress = '';
        this.form.lastChange = '';
        this.form.saleObject = null;
        this.form.toSalingPrice = null;
        this.form.toWarrantyPeriod = null;
        this.form.fromSalingPrice = null;
        this.form.fromWarrantyPeriod = null;
    };
    SaleListComponent.prototype.setSize = function (s) {
        this.size = s;
        this.setPage(0);
        console.log("page " + this.page);
    };
    SaleListComponent.prototype.setPage = function (i) {
        this.page = i;
        this.getAllDocs();
        console.log("set page " + this.page);
    };
    SaleListComponent.prototype.nextPage = function (value) {
        if (value) {
            this.page = this.page + 1;
        }
        else {
            this.page = this.page - 1;
        }
        this.getAllDocs();
        console.log(this.page);
    };
    SaleListComponent.prototype.initFilter = function () {
        this.filter.title = this.form.title;
        this.filter.clientFullname = this.form.clientFullname;
        this.filter.clientAdress = this.form.clientAdress;
        this.filter.lastChange = this.form.lastChange;
        this.filter.isActive = this.form.isActive;
        this.filter.sortField = this.form.sortField;
        this.filter.sortOrder = this.form.sortOrder;
        this.filter.fromDate = this.form.fromDate;
        this.filter.toDate = this.form.toDate;
        this.filter.username = this.form.username;
        this.filter.saleObject = this.form.saleObject;
        this.filter.toSalingPrice = this.form.toSalingPrice;
        this.filter.toWarrantyPeriod = this.form.toWarrantyPeriod;
        this.filter.fromSalingPrice = this.form.fromSalingPrice;
        this.filter.fromWarrantyPeriod = this.form.fromWarrantyPeriod;
    };
    SaleListComponent.prototype.getAllDocs = function () {
        var _this = this;
        this.showSpinner = true;
        this.showData = false;
        this.initFilter();
        if (this.role == 'ROLE_USER') {
            this.filter.username = this.username;
            console.log(111111111);
        }
        console.log(this.form.username);
        this.saleService.getByFilter(this.filter, this.page, this.size)
            .subscribe(function (data) {
            _this.showSpinner = false;
            _this.showData = true;
            _this.listDocs = data['content'];
            _this.pages = new Array(data['totalPages']);
            _this.length = _this.pages.length;
            _this.totalElements = data['totalElements'];
            _this.pages = _this.filterService.viewPages(_this.length, _this.page, _this.pages);
            console.log(_this.pages);
        }, function (error) {
            console.log(error);
        });
    };
    SaleListComponent.prototype.deleteDocument = function (doc) {
        var _this = this;
        this.saleService.deleteById(doc.id).subscribe(function (data) {
            _this.setPage(0);
            _this.toast.showSuccess('', 'Contract of sale deleted successfully');
        });
        console.log(doc.title);
    };
    SaleListComponent.prototype.deleteAll = function () {
        var _this = this;
        this.saleService.deleteAll().subscribe(function (data) {
            _this.getAllDocs();
            _this.toast.showSuccess('', 'All contracts of sale deleted successfully');
        });
        console.log("all");
    };
    SaleListComponent.prototype.docEdit = function (doc) {
        window.sessionStorage.setItem("docId", doc.id.toString());
    };
    SaleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sale-list',
            template: __webpack_require__(/*! ./sale-list.component.html */ "./src/app/documents/sale-list/sale-list.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeTableItem"], _animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadePaginator"], _animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeTable"], _animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./sale-list.component.css */ "./src/app/documents/sale-list/sale-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contracts_contract_of_sale_service__WEBPACK_IMPORTED_MODULE_3__["ContractOfSaleService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
            src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_9__["FilterService"]])
    ], SaleListComponent);
    return SaleListComponent;
}());



/***/ }),

/***/ "./src/app/documents/work-list/work-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/documents/work-list/work-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    position: fixed;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0.356);\n    -webkit-filter: blur(10px);\n            filter: blur(10px);\n   \n}\n\n.forward {\n    bottom: 0;\n    background: inherit;\n    position: fixed;\n}\n\n.filter {\n    max-width: 250px;\n   \n}\n\n.expiredString{\n    color:rgb(241, 38, 38);\n    /* background-image: linear-gradient(to right, rgb(255, 117, 117), rgb(255, 255, 255)) */\n}\n\n.activeString{\n    color: rgb(21, 206, 21);\n    /* background-image: linear-gradient(to right, rgb(115, 247, 103), rgb(255, 255, 255)) */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRzL3dvcmstbGlzdC93b3JrLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLDBCQUFrQjtZQUFsQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3RkFBd0Y7QUFDNUY7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsd0ZBQXdGO0FBQzVGIiwiZmlsZSI6InNyYy9hcHAvZG9jdW1lbnRzL3dvcmstbGlzdC93b3JrLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNTYpO1xuICAgIGZpbHRlcjogYmx1cigxMHB4KTtcbiAgIFxufVxuXG4uZm9yd2FyZCB7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uZmlsdGVyIHtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgXG59XG5cbi5leHBpcmVkU3RyaW5ne1xuICAgIGNvbG9yOnJnYigyNDEsIDM4LCAzOCk7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjU1LCAxMTcsIDExNyksIHJnYigyNTUsIDI1NSwgMjU1KSkgKi9cbn1cblxuLmFjdGl2ZVN0cmluZ3tcbiAgICBjb2xvcjogcmdiKDIxLCAyMDYsIDIxKTtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxMTUsIDI0NywgMTAzKSwgcmdiKDI1NSwgMjU1LCAyNTUpKSAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/documents/work-list/work-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/documents/work-list/work-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLogin; else notLogin\" class=\"mt-5 ml-2 mr-3 mb-5\">\n  <div class=\"row \">\n    <div @fadeFilter class=\"col mr-3  filter\" (change)=\"setPage(0)\">\n      <div style=\"position: fixed; width: 250px;\">\n        <div class=\"text-center\">\n          <h4>Filter</h4>\n        </div>\n        <hr>\n        <input type=\"text\" id=\"title\" placeholder=\"Enter title\" class=\"form-control\" name=\"title\" [(ngModel)]=\"form.title\"\n          #title=\"ngModel\">\n        <br>\n        <input type=\"text\" placeholder=\"Enter Employee full name\" class=\"form-control\" name=\"clientFullname\"\n          [(ngModel)]=\"form.clientFullname\" #clientFullname=\"ngModel\">\n        <br>\n        From date:<input type=\"date\" class=\"form-control\" name=\"fromDate\" [(ngModel)]=\"form.fromDate\"\n          #fromDate=\"ngModel\" />\n        To date:<input type=\"date\" class=\"form-control\" name=\"toDate\" [(ngModel)]=\"form.toDate\" #toDate=\"ngModel\" />\n        <br>\n        <input type=\"text\" placeholder=\"Enter place of work\" class=\"form-control\" name=\"placeOfWork\"\n          [(ngModel)]=\"form.placeOfWork\" #placeOfWork=\"ngModel\">\n        <br>\n        <input type=\"text\" placeholder=\"Enter position\" class=\"form-control\" name=\"position\" [(ngModel)]=\"form.position\"\n          #position=\"ngModel\">\n        <br>\n        <div class=\"input-group\">\n        <input type=\"number\" id=\"min_salary\" placeholder=\"min salary\" class=\"form-control\" name=\"fromSalary\"\n          [(ngModel)]=\"form.fromSalary\" #fromSalary=\"ngModel\" />\n        \n        <input type=\"number\" id=\"max_salary\" placeholder=\"max salary\" class=\"form-control\" name=\"toSalary\"\n          [(ngModel)]=\"form.toSalary\" #toSalary=\"ngModel\" />\n        </div>\n        <br>\n        <div class=\"btn-group \" style=\"width: 100%\" (click)=\"setPage(0)\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.isActive=''\"\n            [ngClass]=\"{'active':form.isActive==''}\">All</button>\n          <button id=\"active_id\" type=\"button\" class=\"btn btn-primary\" (click)=\"form.isActive='true'\"\n            [ngClass]=\"{'active':form.isActive=='true'}\">Active</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.isActive='false'\"\n            [ngClass]=\"{'active':form.isActive=='false'}\">Expired</button>\n        </div>\n        <br> <br>\n        <div *ngIf=\"role == 'ROLE_ADMIN'\">\n          <div class=\"btn-group dropup\" role=\"group\" style=\"width: 100%\">\n            <button id=\"btn1\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n              {{label}}</button>\n            <div class=\"dropdown-menu\" style=\"width: 100%\" aria-labelledby=\"btn1\" (click)=\"setPage(0)\">\n              <a class=\"dropdown-item\" (click)=\"form.username=''\" (click)=\"label='All users'\">All users</a>\n              <a *ngFor=\"let user of listUsers\" class=\"dropdown-item\"\n                (click)=\"form.username=user.username && label=user.username \">{{user.username}}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div @fadeNameTable class=\"row align-items-end mb-1\">\n        <h1 class=\"display-4\">Work contracts ({{totalElements}})</h1>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\" style=\"margin-left:30%\">\n          <div *ngIf=\"showSpinner\" class=\"spinner-grow \" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </div>\n        <div @fadeTable *ngIf=\"listDocs.length > 0\" class=\"col-6\">\n          <button *ngIf=\"role === 'ROLE_ADMIN'\" data-toggle=\"modal\" data-target=\"#deleteall\"\n            class=\"btn btn-danger float-right\">Delete all</button>\n\n          <div class=\"btn-group float-right mr-3\" role=\"group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"basic-addon1\">Sort by:</span>\n            </div>\n            <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\"\n              style=\"width: 200px\">{{form.sortField}} : {{form.sortOrder}}</button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\" (click)=\"getAllDocs()\">\n              <a class=\"dropdown-item\" (click)=\"form.sortField='title'\" (click)=\" form.sortOrder='ASC'\">Title: a ->\n                z</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='title'\" (click)=\"form.sortOrder='DESC'\">Title: z ->\n                a</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='dateOfCreation'\"\n                (click)=\" form.sortOrder='DESC'\">Created:\n                newest -> eldest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='dateOfCreation'\"\n                (click)=\" form.sortOrder='ASC'\">Created:\n                eldest -> newest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='lastChange'\" (click)=\" form.sortOrder='DESC'\">Updated:\n                newest -> eldest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='lastChange'\" (click)=\" form.sortOrder='ASC'\">Updated:\n                eldest -> newest</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='salary'\" (click)=\" form.sortOrder='ASC'\">Salary: min -> max</a>\n              <a class=\"dropdown-item\" (click)=\"form.sortField='salary'\" (click)=\"form.sortOrder='DESC'\">Salary: max -> min</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div @fadeTable *ngIf=\"listDocs.length > 0; else falseLength\">\n        <table class=\"table table-hover  table-sm\" #tabledocs>\n          <thead class=\"thead-dark\">\n            <tr>\n\n              <th *ngIf=\"role == 'ROLE_ADMIN'\" scope=\"col\">User</th>\n              <th scope=\"col\">Created</th>\n              <th scope=\"col\">Updated</th>\n              <th scope=\"col\">Title</th>\n              <th scope=\"col\">Employee full name</th>\n              <th scope=\"col\">Place of work</th>\n              <th scope=\"col\">Position</th>\n              <th scope=\"col\">Salary</th>\n              <th scope=\"col\">Options</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr @fadeTableItem *ngFor=\"let doc of listDocs \"\n              [ngClass]=\"{'activeString':doc.active==true, 'expiredString':doc.active==false}\">\n              <td *ngIf=\"role == 'ROLE_ADMIN'\">{{doc.user.username}}</td>\n              <td>{{doc.dateOfCreation | date :'mediumDate'}}</td>\n              <td *ngIf=\"doc.lastChange==null\"><em>(never)</em></td>\n              <td *ngIf=\"doc.lastChange!=null\">{{doc.lastChange | date :'medium'}} </td>\n              <td>{{doc.title}}</td>\n              <td>{{doc.clientFullName}}</td>\n              <td>{{doc.placeOfWork}}</td>\n              <td>{{doc.position}}</td>\n              <td>{{doc.salary}}$</td>\n              <td style=\"width: 200px;\">\n                <button id=\"edit\" routerLink=\"/work-edit\" (click)=\"docEdit(doc)\" class=\"btn btn-warning mr-2\">View /\n                  Edit</button>\n                <button id=\"delete\" type=\"button\" (click)=\"deleteDocument(doc)\" class=\"btn btn-danger\">Delete</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"row container back\">\n        <div class=\"col \" style=\"height: 70px\"></div>\n      </div>\n      <div @fadePaginator *ngIf=\"listDocs.length > 0\" class=\"row container forward\">\n        <div class=\"col mt-3\">\n\n          <ul class=\"pagination \">\n            <li class=\"page-item\" [ngClass]=\"{'disabled':page==0}\">\n              <a id=\"previous_page\" class=\"page-link \" aria-disabled=\"true\" (click)=nextPage(false)>Previous</a>\n            </li>\n\n            <li class=\"page-item\" *ngFor=\"let p of pages\" [ngClass]=\"{'active':page==p-1}\">\n              <a *ngIf=\"p != -1\" class=\"page-link\" (click)=setPage(p-1)>{{p}}</a>\n              <a *ngIf=\"p == -1\" class=\"page-link\">...</a>\n            </li>\n\n            <li class=\"page-item\" [ngClass]=\"{'disabled':page==length-1}\">\n              <a id=\"next_page\" class=\"page-link\" (click)=nextPage(true)>Next</a>\n            </li>\n          </ul>\n\n        </div>\n        <div class=\"col mt-3\">\n          <nav aria-label=\"Page navigation example\">\n            <ul class=\"pagination \">\n              <li class=\"page-item disabled\">\n                <a class=\"page-link \" aria-disabled=\"true\">Show by </a>\n              </li>\n              <li class=\"page-item\" *ngFor=\"let s of sizes\" [ngClass]=\"{'active':size==s}\">\n                <a id=\"item\" class=\"page-link\" (click)=setSize(s)>{{s}}</a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n\n      </div>\n\n      <br>\n    </div>\n  </div>\n</div>\n\n<ng-template #falseLength>\n  <div @fadeTable *ngIf=\"showData\" class=\"text-center mt-5\">\n    <h3>Empty list of documents</h3>\n  </div>\n</ng-template>\n\n\n\n<ng-template #notLogin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a routerLink=\"/\" class=\"alert-link\">login</a>!\n    </h5>\n  </div>\n</ng-template>\n\n\n<div class=\"modal fade\" id=\"deleteall\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalCenterTitle\">Confirm the action</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h6>Are you sure you want to delete all document?</h6>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" data-dismiss=\"modal\" (click)=\"deleteAll()\" class=\"btn btn-success\">Confirm delete</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/documents/work-list/work-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/documents/work-list/work-list.component.ts ***!
  \************************************************************/
/*! exports provided: WorkListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkListComponent", function() { return WorkListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var src_app_models_filterObj_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/filterObj.model */ "./src/app/models/filterObj.model.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_services_contracts_work_contract_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/contracts/work-contract.service */ "./src/app/services/contracts/work-contract.service.ts");
/* harmony import */ var src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/filter.service */ "./src/app/services/filter.service.ts");










var WorkListComponent = /** @class */ (function () {
    function WorkListComponent(workService, userService, tokenStorage, router, toast, filterService) {
        this.workService = workService;
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.toast = toast;
        this.filterService = filterService;
        this.form = {};
        this.filter = new src_app_models_filterObj_model__WEBPACK_IMPORTED_MODULE_3__["FilterObject"]();
        this.listDocs = [];
        this.listUsers = [];
        this.searchStr = '';
        this.bool = false;
        this.isLogin = false;
        this.size = 5;
        this.page = 0;
        this.kindOfDoc = 1;
    }
    WorkListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.saveKindOfContract("1");
        if (!this.tokenStorage.isLogin()) {
            this.router.navigate(['/']);
        }
        else {
            this.init();
            this.getAllDocs();
            if (this.role == 'ROLE_ADMIN') {
                this.userService.getAll()
                    .subscribe(function (data) {
                    _this.listUsers = data;
                });
            }
        }
    };
    WorkListComponent.prototype.init = function () {
        this.role = this.tokenStorage.getAuthorities()[0];
        this.username = this.tokenStorage.getUsername();
        console.log(this.username + " " + this.role);
        this.isLogin = this.tokenStorage.isLogin();
        this.label = "All users";
        this.sizes = [5, 10, 25, 50];
        this.form.username = "";
        this.form.title = "";
        this.form.isActive = "";
        this.form.fromDate = "";
        this.form.toDate = "";
        this.form.sortOrder = "ASC";
        this.form.sortField = "title";
        this.form.clientFullname = '';
        this.form.clientAdress = '';
        this.form.lastChange = '';
        this.form.fromSalary = null;
        this.form.toSalary = null;
        this.form.position = '';
        this.form.placeOfWork = '';
    };
    WorkListComponent.prototype.setSize = function (s) {
        this.size = s;
        this.setPage(0);
        console.log("page " + this.page);
    };
    WorkListComponent.prototype.setPage = function (i) {
        this.page = i;
        this.getAllDocs();
        console.log("set page " + this.page);
    };
    WorkListComponent.prototype.nextPage = function (value) {
        if (value) {
            this.page = this.page + 1;
        }
        else {
            this.page = this.page - 1;
        }
        this.getAllDocs();
        console.log(this.page);
    };
    WorkListComponent.prototype.initFilter = function () {
        this.filter.title = this.form.title;
        this.filter.clientFullname = this.form.clientFullname;
        this.filter.clientAdress = this.form.clientAdress;
        this.filter.lastChange = this.form.lastChange;
        this.filter.isActive = this.form.isActive;
        this.filter.sortField = this.form.sortField;
        this.filter.sortOrder = this.form.sortOrder;
        this.filter.fromDate = this.form.fromDate;
        this.filter.toDate = this.form.toDate;
        this.filter.username = this.form.username;
        this.filter.toSalary = this.form.toSalary;
        this.filter.fromSalary = this.form.fromSalary;
        this.filter.position = this.form.position;
        this.filter.placeOfWork = this.form.placeOfWork;
    };
    WorkListComponent.prototype.getAllDocs = function () {
        var _this = this;
        this.showSpinner = true;
        this.showData = false;
        this.initFilter();
        if (this.role == 'ROLE_USER') {
            this.filter.username = this.username;
        }
        console.log(this.filter);
        this.workService.getByFilter(this.filter, this.page, this.size)
            .subscribe(function (data) {
            _this.showSpinner = false;
            _this.showData = true;
            _this.listDocs = data['content'];
            _this.pages = new Array(data['totalPages']);
            _this.length = _this.pages.length;
            _this.totalElements = data['totalElements'];
            _this.pages = _this.filterService.viewPages(_this.length, _this.page, _this.pages);
            console.log(_this.listDocs);
        }, function (error) {
            console.log(error);
        });
    };
    WorkListComponent.prototype.deleteDocument = function (doc) {
        var _this = this;
        this.workService.deleteById(doc.id).subscribe(function (data) {
            _this.setPage(0);
            _this.toast.showSuccess('', 'Work contract deleted successfully');
        });
        console.log(doc.title);
    };
    WorkListComponent.prototype.deleteAll = function () {
        var _this = this;
        this.workService.deleteAll().subscribe(function (data) {
            _this.getAllDocs();
            _this.toast.showSuccess('', 'All work contracts deleted successfully');
        });
        console.log("all");
    };
    WorkListComponent.prototype.docEdit = function (doc) {
        window.sessionStorage.setItem("docId", doc.id.toString());
    };
    WorkListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-list',
            template: __webpack_require__(/*! ./work-list.component.html */ "./src/app/documents/work-list/work-list.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeTableItem"], _animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadePaginator"], _animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeTable"], _animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./work-list.component.css */ "./src/app/documents/work-list/work-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contracts_work_contract_service__WEBPACK_IMPORTED_MODULE_8__["WorkContractService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_9__["FilterService"]])
    ], WorkListComponent);
    return WorkListComponent;
}());



/***/ }),

/***/ "./src/app/models/filterObj.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/filterObj.model.ts ***!
  \*******************************************/
/*! exports provided: FilterObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterObject", function() { return FilterObject; });
var FilterObject = /** @class */ (function () {
    function FilterObject() {
    }
    return FilterObject;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (listDocs, value) {
        if (value)
            return listDocs.filter(function (doc) { return !doc.expired; });
        else
            return listDocs;
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (listDocs, value, option) {
        /*return listDocs.filter(doc =>
            doc[option].toLowerCase().includes(value.toLowerCase()));*/
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.app {\n    background-image: url('/../assets/images/account.png'), \n    linear-gradient( rgb(168, 168, 168), rgb(255, 255, 255));\n    background-position: center;\n    background-blend-mode: overlay;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0k7NERBQ3dEO0lBQ3hELDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmFwcCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvLi4vYXNzZXRzL2ltYWdlcy9hY2NvdW50LnBuZycpLCBcbiAgICBsaW5lYXItZ3JhZGllbnQoIHJnYigxNjgsIDE2OCwgMTY4KSwgcmdiKDI1NSwgMjU1LCAyNTUpKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBvdmVybGF5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLogin; else notLogin\">\n    <div *ngIf=\"form.adress == null || form.adress == ''\">\n        <div class=\"alert alert-warning text-center\" role=\"alert\">\n            Please, fill your adress.\n          </div>\n    </div> \n    <div class=\"container mt-5\">\n  <div class=\"row \">    \n    <div @fadeFilter class=\"col\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h1 class=\"display-4\">{{form.username}}</h1>\n        </div>\n        <div class=\"col\">\n          <div *ngIf=\"showSpinner\" class=\"spinner-grow \" role=\"status\">           \n          </div>\n        </div>\n      </div>\n      <form (change)=\"change()\">\n      <div class=\"form-group\">\n        <label for=\"id\">Id</label>\n        <input type=\"text\" class=\"form-control\" name=\"id\" [(ngModel)]=\"form.id\" #id=\"ngModel\" disabled />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"name\">Full name</label>\n        <input id=\"name\" type=\"text\" class=\"form-control\"  name=\"name\" [(ngModel)]=\"form.name\" #name=\"ngModel\" />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" disabled name=\"email\" [(ngModel)]=\"form.email\" #email=\"ngModel\" />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"adress\">Adress</label>\n        <input id=\"adress\" type=\"text\" class=\"form-control\"  name=\"adress\" [(ngModel)]=\"form.adress\" #adress=\"ngModel\" />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"newpassword\">New password</label>\n        <input id=\"pass\" type=\"password\" class=\"form-control\" name=\"newpassword\" [(ngModel)]=\"form.newpassword\"\n          #newpassword=\"ngModel\" minlength=\"6\" [ngClass]=\"{'is-invalid':newpassword.invalid && newpassword.touched}\" />\n        <div *ngIf=\" newpassword.touched && newpassword.invalid\">\n          <small class=\"form-text alert alert-warning\" *ngIf=\"newpassword.errors.minlength\">Password must be at least 6\n            characters\n          </small>\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n        <button id=\"update\" [disabled]=\"isEdit==false || newpassword.invalid || load\" data-toggle=\"modal\"\n          data-target=\"#exampleModalCenter\" class=\"btn btn-primary\" >Update account\n          <span *ngIf=load class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>          \n        </button>        \n      </div>\n    </form>\n    </div>\n    <div @fadeNameTable class=\"col app\">\n\n    </div>\n  </div>\n</div>\n</div>\n\n<ng-template #notLogin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a  routerLink=\"/\"  class=\"alert-link\">login</a>!\n    </h5>\n  </div>\n</ng-template>\n\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\"\n          aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"exampleModalCenterTitle\">Confirm the action</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <h6>Are you sure you want to update account?                  \n                </h6>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"form.newpassword = ''\"\n                  data-dismiss=\"modal\">Cancel</button>\n                <button type=\"button\" data-dismiss=\"modal\" (click)=\"update()\" class=\"btn btn-success\">Confirm\n                  update</button>\n              </div>\n            </div>\n          </div>\n        </div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations/animation */ "./src/app/animations/animation.ts");







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, tokenStorage, router, toast) {
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.toast = toast;
        this.form = {};
        this.isLogin = false;
        this.load = false;
        this.isEdit = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.initUser();
        this.isLogin = this.tokenStorage.isLogin();
        if (!this.tokenStorage.isLogin()) {
            this.router.navigate(['/']);
        }
    };
    ProfileComponent.prototype.initUser = function () {
        var _this = this;
        this.showSpinner = true;
        this.userService.getByUsername(this.tokenStorage.getUsername())
            .subscribe(function (data) {
            _this.showSpinner = false;
            _this.curUser = data;
            _this.form.id = _this.curUser.id;
            _this.form.email = _this.curUser.email;
            _this.form.name = _this.curUser.name;
            _this.form.username = _this.curUser.username;
            _this.form.activationCode = _this.curUser.activationCode;
            _this.form.password = _this.curUser.password;
            _this.form.adress = _this.curUser.adress;
            _this.form.newpassword = '';
        });
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.load = true;
        this.form.password = this.form.newpassword;
        console.log(this.form.newpassword);
        this.userService.updateUser(this.form)
            .subscribe(function () {
            _this.initUser();
            if (_this.form.newpassword === '') {
                _this.toast.showSuccess("", "Account changed successfully.");
            }
            else {
                _this.toast.showSuccess("", "Account changed successfully.");
                _this.toast.showWarning("", "Check your email.");
            }
            _this.load = false;
            _this.isEdit = false;
            _this.form.newpassword = null;
        }, function (error) {
            console.log(error);
            _this.form.newpassword = '';
            _this.toast.showError("", error.error.message);
            _this.load = false;
            _this.isEdit = false;
            _this.initUser();
        });
    };
    ProfileComponent.prototype.change = function () {
        this.isEdit = true;
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_6__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_6__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/catalog-of-operation-mode.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/catalog-of-operation-mode.service.ts ***!
  \***************************************************************/
/*! exports provided: CatalogOfOperationModeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogOfOperationModeService", function() { return CatalogOfOperationModeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CatalogOfOperationModeService = /** @class */ (function () {
    function CatalogOfOperationModeService(http) {
        this.http = http;
        this.saleUrl = 'http://localhost:8080/catalog/';
    }
    CatalogOfOperationModeService.prototype.getListOfMode = function () {
        return this.http.get(this.saleUrl + "all");
    };
    CatalogOfOperationModeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CatalogOfOperationModeService);
    return CatalogOfOperationModeService;
}());



/***/ }),

/***/ "./src/app/services/contracts/contract-of-sale.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/contracts/contract-of-sale.service.ts ***!
  \****************************************************************/
/*! exports provided: ContractOfSaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractOfSaleService", function() { return ContractOfSaleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ContractOfSaleService = /** @class */ (function () {
    function ContractOfSaleService(http) {
        this.http = http;
        this.saleUrl = 'http://localhost:8080/sale-contract/';
    }
    ContractOfSaleService.prototype.getByFilter = function (filter, page, size) {
        return this.http.post(this.saleUrl + "page/get?" + "page=" + page + "&size=" + size, filter);
    };
    ContractOfSaleService.prototype.getById = function (id) {
        return this.http.get(this.saleUrl + "get/" + id);
    };
    ContractOfSaleService.prototype.getListByUsername = function (username) {
        return this.http.get(this.saleUrl + "get-username/" + username);
    };
    ContractOfSaleService.prototype.getAll = function () {
        return this.http.get(this.saleUrl + "get-all");
    };
    ContractOfSaleService.prototype.add = function (username, doc) {
        return this.http.post(this.saleUrl + "add/" + username, doc);
    };
    ContractOfSaleService.prototype.update = function (username, doc) {
        return this.http.put(this.saleUrl + "update/" + username, doc);
    };
    ContractOfSaleService.prototype.deleteById = function (id) {
        return this.http.delete(this.saleUrl + "delete/" + id);
    };
    ContractOfSaleService.prototype.deleteAll = function () {
        return this.http.delete(this.saleUrl + "delete-all");
    };
    ContractOfSaleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContractOfSaleService);
    return ContractOfSaleService;
}());



/***/ }),

/***/ "./src/app/services/contracts/cooperation-contract.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/contracts/cooperation-contract.service.ts ***!
  \********************************************************************/
/*! exports provided: CooperationContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CooperationContractService", function() { return CooperationContractService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CooperationContractService = /** @class */ (function () {
    function CooperationContractService(http) {
        this.http = http;
        this.saleUrl = 'http://localhost:8080/cooperation-contract/';
    }
    CooperationContractService.prototype.getByFilter = function (filter, page, size) {
        return this.http.post(this.saleUrl + "page/get?" + "page=" + page + "&size=" + size, filter);
    };
    CooperationContractService.prototype.getById = function (id) {
        return this.http.get(this.saleUrl + "get/" + id);
    };
    CooperationContractService.prototype.getLIstByUsername = function (username) {
        return this.http.get(this.saleUrl + "get-username/" + username);
    };
    CooperationContractService.prototype.getAll = function () {
        return this.http.get(this.saleUrl + "get-all");
    };
    CooperationContractService.prototype.add = function (username, doc) {
        return this.http.post(this.saleUrl + "add/" + username, doc);
    };
    CooperationContractService.prototype.update = function (username, doc) {
        return this.http.put(this.saleUrl + "update/" + username, doc);
    };
    CooperationContractService.prototype.deleteById = function (id) {
        return this.http.delete(this.saleUrl + "delete/" + id);
    };
    CooperationContractService.prototype.deleteAll = function () {
        return this.http.delete(this.saleUrl + "delete-all");
    };
    CooperationContractService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CooperationContractService);
    return CooperationContractService;
}());



/***/ }),

/***/ "./src/app/services/contracts/credit-contract.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/contracts/credit-contract.service.ts ***!
  \***************************************************************/
/*! exports provided: CreditContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditContractService", function() { return CreditContractService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CreditContractService = /** @class */ (function () {
    function CreditContractService(http) {
        this.http = http;
        this.saleUrl = 'http://localhost:8080/credit-contract/';
    }
    CreditContractService.prototype.getByFilter = function (filter, page, size) {
        return this.http.post(this.saleUrl + "page/get?" + "page=" + page + "&size=" + size, filter);
    };
    CreditContractService.prototype.getById = function (id) {
        return this.http.get(this.saleUrl + "get/" + id);
    };
    CreditContractService.prototype.getLIstByUsername = function (username) {
        return this.http.get(this.saleUrl + "get-username/" + username);
    };
    CreditContractService.prototype.getAll = function () {
        return this.http.get(this.saleUrl + "get-all");
    };
    CreditContractService.prototype.add = function (username, doc) {
        return this.http.post(this.saleUrl + "add/" + username, doc);
    };
    CreditContractService.prototype.update = function (username, doc) {
        return this.http.put(this.saleUrl + "update/" + username, doc);
    };
    CreditContractService.prototype.deleteById = function (id) {
        return this.http.delete(this.saleUrl + "delete/" + id);
    };
    CreditContractService.prototype.deleteAll = function () {
        return this.http.delete(this.saleUrl + "delete-all");
    };
    CreditContractService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CreditContractService);
    return CreditContractService;
}());



/***/ }),

/***/ "./src/app/services/contracts/rental-contract.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/contracts/rental-contract.service.ts ***!
  \***************************************************************/
/*! exports provided: RentalContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalContractService", function() { return RentalContractService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RentalContractService = /** @class */ (function () {
    function RentalContractService(http) {
        this.http = http;
        this.saleUrl = 'http://localhost:8080/rental-contract/';
    }
    RentalContractService.prototype.getByFilter = function (filter, page, size) {
        return this.http.post(this.saleUrl + "page/get?" + "page=" + page + "&size=" + size, filter);
    };
    RentalContractService.prototype.getById = function (id) {
        return this.http.get(this.saleUrl + "get/" + id);
    };
    RentalContractService.prototype.getLIstByUsername = function (username) {
        return this.http.get(this.saleUrl + "get-username/" + username);
    };
    RentalContractService.prototype.getAll = function () {
        return this.http.get(this.saleUrl + "get-all");
    };
    RentalContractService.prototype.add = function (username, doc) {
        return this.http.post(this.saleUrl + "add/" + username, doc);
    };
    RentalContractService.prototype.update = function (username, doc) {
        return this.http.put(this.saleUrl + "update/" + username, doc);
    };
    RentalContractService.prototype.deleteById = function (id) {
        return this.http.delete(this.saleUrl + "delete/" + id);
    };
    RentalContractService.prototype.deleteAll = function () {
        return this.http.delete(this.saleUrl + "delete-all");
    };
    RentalContractService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RentalContractService);
    return RentalContractService;
}());



/***/ }),

/***/ "./src/app/services/contracts/work-contract.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/contracts/work-contract.service.ts ***!
  \*************************************************************/
/*! exports provided: WorkContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkContractService", function() { return WorkContractService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WorkContractService = /** @class */ (function () {
    function WorkContractService(http) {
        this.http = http;
        this.saleUrl = 'http://localhost:8080/work-contract/';
    }
    WorkContractService.prototype.getByFilter = function (filter, page, size) {
        return this.http.post(this.saleUrl + "page/get?" + "page=" + page + "&size=" + size, filter);
    };
    WorkContractService.prototype.getById = function (id) {
        return this.http.get(this.saleUrl + "get/" + id);
    };
    WorkContractService.prototype.getLIstByUsername = function (username) {
        return this.http.get(this.saleUrl + "get-username/" + username);
    };
    WorkContractService.prototype.getAll = function () {
        return this.http.get(this.saleUrl + "get-all");
    };
    WorkContractService.prototype.add = function (username, doc) {
        return this.http.post(this.saleUrl + "add/" + username, doc);
    };
    WorkContractService.prototype.update = function (username, doc) {
        return this.http.put(this.saleUrl + "update/" + username, doc);
    };
    WorkContractService.prototype.deleteById = function (id) {
        return this.http.delete(this.saleUrl + "delete/" + id);
    };
    WorkContractService.prototype.deleteAll = function () {
        return this.http.delete(this.saleUrl + "delete-all");
    };
    WorkContractService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WorkContractService);
    return WorkContractService;
}());



/***/ }),

/***/ "./src/app/services/file.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/file.service.ts ***!
  \******************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var FileService = /** @class */ (function () {
    function FileService(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
        this.fileUrl = 'http://localhost:8080/file/';
    }
    FileService.prototype.uploadFile = function (file, id, kindOfContract) {
        var formdata = new FormData();
        formdata.append('file', file, file.name);
        return this.http.post(this.fileUrl + "upload/" + id + "?kind=" + kindOfContract, formdata, { reportProgress: true, observe: 'events' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                    var progress = Math.round(100 * event.loaded / event.total);
                    return { status: 'progress', message: progress };
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                    return event.body;
                default:
                    return "Unhandled event: " + event.type;
            }
        }));
    };
    FileService.prototype.downloadFile = function (filename, kindOfContract) {
        return this.http.get(this.fileUrl + "download/" + filename + "?kind=" + kindOfContract, { responseType: 'blob' });
    };
    FileService.prototype.deleteFile = function (filename, kindOfContract) {
        return this.http.delete(this.fileUrl + "delete/" + filename + "?kind=" + kindOfContract);
    };
    FileService.prototype.getEventMessage = function (event, file) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Sent:
                return 'Uploading file "${file.name}" of size ${file.size}.';
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                // Compute and show the % done:
                var percentDone = Math.round(100 * event.loaded / event.total);
                return 'File "${file.name}" is ${percentDone}% uploaded.';
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                return 'File "${file.name}" was completely uploaded!';
            default:
                return 'File "${file.name}" surprising upload event: ${event.type}.';
        }
    };
    FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/services/filter.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/filter.service.ts ***!
  \********************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterService = /** @class */ (function () {
    function FilterService() {
    }
    FilterService.prototype.viewPages = function (length, page, pages) {
        if (length > 7) {
            var totalPages = length;
            var pageNumber = page + 1;
            console.log(totalPages);
            var head = (pageNumber > 4) ? [1, -1] : [1, 2, 3];
            var tail = (pageNumber < totalPages - 3) ? [-1, totalPages] : [totalPages - 2, totalPages - 1, totalPages];
            var bodyBefore = (pageNumber > 4 && pageNumber < totalPages - 1) ? [pageNumber - 2, pageNumber - 1] : [];
            var bodyAfter = (pageNumber > 2 && pageNumber < totalPages - 3) ? [pageNumber + 1, pageNumber + 2] : [];
            var body = head.concat(bodyBefore).concat((pageNumber > 3 && pageNumber < totalPages - 2) ? [pageNumber] : []).concat(bodyAfter).concat(tail);
            return pages = body;
        }
        else {
            var body2 = [1];
            var i;
            for (i = 2; i < length + 1; i++) {
                body2.push(i);
            }
            return pages = body2;
        }
    };
    FilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "./src/app/services/pdf.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/pdf.service.ts ***!
  \*****************************************/
/*! exports provided: PDFService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDFService", function() { return PDFService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);



var PDFService = /** @class */ (function () {
    function PDFService() {
    }
    PDFService.prototype.saveAsPDFSale = function (title, clientFullName, clientAdress, creatorFullName, creatorAdress, dateOfCreation, otherInfo, saleObject, salingPrice, warrantyPeriod) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__();
        var pageHeight = doc.internal.pageSize.getHeight();
        var pageWidth = doc.internal.pageSize.getWidth();
        doc.setFont("Arial");
        doc.setFontSize(20);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("CONTRACT OF SALE", 170), 105, 20, 'center');
        doc.setFontStyle("");
        doc.setFontSize(14);
        doc.text(doc.splitTextToSize(dateOfCreation.toString(), 30), pageWidth - 50, 30);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("THE SUBJECT OF THE CONTRACT", 170), 105, 50, 'center');
        doc.setFontStyle("");
        var subText = "The Seller undertakes to transfer to the ownership of the Buyer " + saleObject
            + " and the Buyer undertakes to accept the goods and pay the Seller the sum of money, the procedure and amount established by this contract.";
        doc.text(doc.splitTextToSize(subText, 170), 20, 60);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("CALCULATION PROCEDURE AND AMOUNT OF THE CONTRACT", 170), 105, 90, 'center');
        doc.setFontStyle("");
        var calc = "The amount of the contract is " + salingPrice + "$.";
        doc.text(doc.splitTextToSize(calc, 170), 20, 100);
        var calc2 = "All payments under this contract are made in rubles in accordance with the norms of current low.";
        doc.text(doc.splitTextToSize(calc2, 170), 20, 110);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("WARRANTY PERIOD", 170), 105, 130, 'center');
        doc.setFontStyle("");
        var warrantytext = "The warranty period for the goods " + warrantyPeriod + " days.";
        doc.text(doc.splitTextToSize(warrantytext, 170), 20, 140);
        var details = 155;
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("DETAILS OF THE PARTIES", 170), 105, details, 'center');
        doc.setFontStyle("");
        doc.text(doc.splitTextToSize("Buyer details:", 80), 20, details + 10);
        doc.text(doc.splitTextToSize("Full name: " + clientFullName, 80), 20, details + 20);
        doc.text(doc.splitTextToSize("Adress: " + clientAdress, 80), 20, details + 30);
        doc.text(doc.splitTextToSize("Signature ____________________", 80), 20, 200);
        doc.text(doc.splitTextToSize("Seller details:", 80), 110, details + 10);
        doc.text(doc.splitTextToSize("Full name: " + creatorFullName, 80), 110, details + 20);
        doc.text(doc.splitTextToSize("Adress: " + creatorAdress, 80), 110, details + 30);
        doc.text(doc.splitTextToSize("Signature ____________________", 80), 110, 200);
        doc.save(title + ".pdf");
    };
    PDFService.prototype.saveAsPDFWork = function (title, clientFullName, clientAdress, creatorFullName, creatorAdress, dateOfCreation, otherInfo, startWork, position, placeOfWork, operationMode, workingHours, holiday, salary, term) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__();
        var pageHeight = doc.internal.pageSize.getHeight();
        var pageWidth = doc.internal.pageSize.getWidth();
        doc.setFont("Arial");
        doc.setFontSize(20);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("WORK CONTRACT", 170), 105, 20, 'center');
        doc.setFontStyle("");
        doc.setFontSize(14);
        doc.text(doc.splitTextToSize(dateOfCreation.toString(), 30), pageWidth - 50, 30);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("THE SUBJECT OF THE CONTRACT", 170), 105, 50, 'center');
        doc.setFontStyle("");
        var subText = "Employee is accepted to perform work in the position " + position;
        doc.text(doc.splitTextToSize(subText, 170), 20, 60);
        var subText2 = "The Employee is obliged to start work from " + startWork;
        doc.text(doc.splitTextToSize(subText2, 170), 20, 70);
        var subText3 = "The place of work is '" + placeOfWork + "'";
        doc.text(doc.splitTextToSize(subText3, 170), 20, 80);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("WORK PAYMENT CONDITIONS", 170), 105, 95, 'center');
        doc.setFontStyle("");
        var workText = "For the performance of job duties, an Employee is determined by the salary of " + salary + "$ per month.";
        doc.text(doc.splitTextToSize(workText, 170), 20, 105);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("MODE OF WORKING TIME AND REST TIME", 170), 105, 120, 'center');
        doc.setFontStyle("");
        var modeText = "The Employee is set to the following mode: " + operationMode.operationMode + " (" + workingHours + " hours a week).";
        doc.text(doc.splitTextToSize(modeText, 170), 20, 130);
        var modeText2 = "During the working day, the Employee is given a break for rest and meals for 1 hour, which is not included in the working time.";
        doc.text(doc.splitTextToSize(modeText2, 170), 20, 140);
        var modeText3 = "The Employee is granted an annual leave of " + holiday + " calendar days.";
        doc.text(doc.splitTextToSize(modeText3, 170), 20, 155);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("SOCIAL INSURANCE OF EMPLOYEE", 170), 105, 165, 'center');
        doc.setFontStyle("");
        var socText = "The Employee is subject to social insurance in the manner and under the conditions established by applicable law.";
        doc.text(doc.splitTextToSize(socText, 170), 20, 175);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("DUTIES OF THE PARTIES", 170), 105, 195, 'center');
        doc.setFontStyle("");
        var dutiesText = "In case of non-fulfillment or improper fulfillment of duties by the Employee, he bears disciplinary,"
            + " material and other responsibility in accordance with labor legislation.";
        doc.text(doc.splitTextToSize(dutiesText, 170), 20, 205);
        var details = 225;
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("DETAILS OF THE PARTIES", 170), 105, details, 'center');
        doc.setFontStyle("");
        doc.text(doc.splitTextToSize("Employee details:", 80), 20, details + 10);
        doc.text(doc.splitTextToSize("Full name: " + clientFullName, 80), 20, details + 20);
        doc.text(doc.splitTextToSize("Adress: " + clientAdress, 80), 20, details + 30);
        doc.text(doc.splitTextToSize("Signature ____________________", 80), 20, 275);
        doc.text(doc.splitTextToSize("Emloyeer details:", 80), 110, details + 10);
        doc.text(doc.splitTextToSize("Full name: " + creatorFullName, 80), 110, details + 20);
        doc.text(doc.splitTextToSize("Adress: " + creatorAdress, 80), 110, details + 30);
        doc.text(doc.splitTextToSize("Signature ____________________", 80), 110, 275);
        doc.save(title + ".pdf");
    };
    PDFService.prototype.saveAsPDFRental = function (title, clientFullName, clientAdress, creatorFullName, creatorAdress, dateOfCreation, otherInfo, rentalObject, startRental, endRental, rentalPrice) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__();
        var pageHeight = doc.internal.pageSize.getHeight();
        var pageWidth = doc.internal.pageSize.getWidth();
        doc.setFont("Arial");
        doc.setFontSize(20);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("LEASE CONTRACT", 170), 105, 20, 'center');
        doc.setFontStyle("");
        doc.setFontSize(14);
        doc.text(doc.splitTextToSize(dateOfCreation.toString(), 30), pageWidth - 50, 30);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("THE SUBJECT OF THE CONTRACT", 170), 105, 50, 'center');
        doc.setFontStyle("");
        var subText = "In accordance with the Agreement, the Lessor rents out and the Lessee immediately acquires"
            + " and uses the following property: " + rentalObject;
        var startText = "The lease starts on " + startRental;
        var endText = "The lease expires on " + endRental;
        doc.text(doc.splitTextToSize(subText, 170), 20, 60);
        doc.text(doc.splitTextToSize(startText, 170), 20, 75);
        doc.text(doc.splitTextToSize(endText, 170), 20, 85);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("RENT SIZE AND CALCULATION UNDER CONTRACT", 170), 105, 100, 'center');
        doc.setFontStyle("");
        var rentText = "The Lessee undertakes to pay the Lessor for the use of the property a fee in the amount of " + rentalPrice + "$ a day.";
        doc.text(doc.splitTextToSize(rentText, 170), 20, 110);
        var rentText2 = "The Lessee makes monthly rental payments no later than the 25th day.";
        doc.text(doc.splitTextToSize(rentText2, 170), 20, 125);
        var rentText3 = "If the rent is not received within the specified period, the Landlord charges it in the prescribed manner with interest charges for the overdue payment.";
        doc.text(doc.splitTextToSize(rentText3, 170), 20, 135);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("RIGHTS AND DUTIES OF THE PARTIES", 170), 105, 155, 'center');
        doc.setFontStyle("");
        var rightsText = "The Lessor must, within 5 days after signing the contract, provide the property to the Lessee.";
        doc.text(doc.splitTextToSize(rightsText, 170), 20, 165);
        var rightsText2 = "The Lessee is obliged to use the property only for its intended purpose.";
        doc.text(doc.splitTextToSize(rightsText2, 170), 20, 180);
        var rightsText3 = "The Lessee is obliged to return the property in the condition in the condition in which it was received.";
        doc.text(doc.splitTextToSize(rightsText3, 170), 20, 190);
        var rightsText4 = "If the law allows the sublease of property, the Lessee has the right to sublet the property only with the written consent of the Lessor.";
        doc.text(doc.splitTextToSize(rightsText4, 170), 20, 205);
        var details = 225;
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("DETAILS OF THE PARTIES", 170), 105, details, 'center');
        doc.setFontStyle("");
        doc.text(doc.splitTextToSize("Lessee details:", 80), 20, details + 10);
        doc.text(doc.splitTextToSize("Full name: " + clientFullName, 80), 20, details + 20);
        doc.text(doc.splitTextToSize("Adress: " + clientAdress, 80), 20, details + 30);
        doc.text(doc.splitTextToSize("Signature ____________________", 80), 20, 275);
        doc.text(doc.splitTextToSize("Lessor details:", 80), 110, details + 10);
        doc.text(doc.splitTextToSize("Full name: " + creatorFullName, 80), 110, details + 20);
        doc.text(doc.splitTextToSize("Adress: " + creatorAdress, 80), 110, details + 30);
        doc.text(doc.splitTextToSize("Signature ____________________", 80), 110, 275);
        doc.save(title + ".pdf");
    };
    PDFService.prototype.saveAsPDFCredit = function (title, clientFullName, clientAdress, creatorFullName, creatorAdress, dateOfCreation, otherInfo, creditAmount, annualInterest, term) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__();
        var pageHeight = doc.internal.pageSize.getHeight();
        var pageWidth = doc.internal.pageSize.getWidth();
        doc.setFont("Arial");
        doc.setFontSize(20);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("LOAN CONTRACT", 170), 105, 20, 'center');
        doc.setFontStyle("");
        doc.setFontSize(14);
        doc.text(doc.splitTextToSize(dateOfCreation.toString(), 30), pageWidth - 50, 30);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("THE SUBJECT OF THE CONTRACT", 170), 105, 50, 'center');
        doc.setFontStyle("");
        var subText = "Under this contract, the Lender provides a loan in the amount of " + creditAmount + "$,"
            + " and the Borrower undertakes to return the loan amount to the Lender and pay initial"
            + " interest for using the loan in accordance with the terms and conditions.";
        var subText2 = "The interest rate for this contract is " + annualInterest + "% per annum.";
        var ysubText2 = 55 + 10 * (subText.length / 90);
        doc.text(doc.splitTextToSize(subText, 170), 20, 60);
        doc.text(doc.splitTextToSize(subText2, 170), 20, ysubText2);
        var yCond = ysubText2 + 10 * (subText2.length / 90);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("CONDITIONS OF ISSUANCE AND LOAN PAYMENT ORDER", 170), 105, yCond + 5, 'center');
        doc.setFontStyle("");
        var condText = "The loan is granted by issuing the loan amount at the Lender’s cash desk or by transferring the loan amount to the indicated account of the Borrower."
            + " The Borrower has the right to repay the loan under the loan and (or) interest for its use by depositing cash in the cashier’s cash desk or transferring the amount of the debt to the Lender’s current account in a non-cash form;";
        doc.text(doc.splitTextToSize(condText, 170), 20, yCond + 15);
        var yRights = yCond + 10 + 10 * (condText.length / 90);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("RIGHTS AND DUTIES OF THE PARTIES", 170), 105, yRights, 'center');
        doc.setFontStyle("");
        var rigths1 = "The Lender undertakes to ensure the provision of a loan within 5 business days from the date of signing by the parties of this contract.";
        var rigths2 = "The Lender undertakes to provide the Borrower with a loan under the terms of this contract.";
        var rigths3 = "The Lender undertakes to advise the Borrower on all matters related to the execution of this contract.";
        var rigths4 = "The Borrower undertakes to repay the loan and pay interest for its use within the time period specified in this contract in full.";
        doc.text(doc.splitTextToSize(rigths1, 170), 20, yRights + 10);
        doc.text(doc.splitTextToSize(rigths2, 170), 20, yRights + 25);
        doc.text(doc.splitTextToSize(rigths3, 170), 20, yRights + 40);
        doc.text(doc.splitTextToSize(rigths4, 170), 20, yRights + 55);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("TERM OF CONTRACT", 170), 105, yRights + 75, 'center');
        doc.setFontStyle("");
        var termText = "The term of the loan is " + term + " days from the date of the actual issuance by the Lender of the loan amount to the Borrower or the transfer of the loan amount to the specified account of the Borrower."
            + " The Borrower undertakes to make the final payment of the loan amount and initial interest for using the loan to the Lender before the deadline.";
        doc.text(doc.splitTextToSize(termText, 170), 20, yRights + 85);
        var yEarly = yRights + 80 + 10 * (termText.length / 90);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("EARLY EXECUTION OF DUTIES", 170), 105, yEarly, 'center');
        doc.setFontStyle("");
        var erlyText1 = "In case of early repayment of the loan, the Borrower shall notify the Lender of the early repayment no later than 5 business days.";
        var erlyText2 = "In case of early repayment of the loan, interest on the use of the loan is paid by the Borrower for the actual period of use of the loan.";
        doc.text(doc.splitTextToSize(erlyText1, 170), 20, yEarly + 10);
        doc.text(doc.splitTextToSize(erlyText2, 170), 20, yEarly + 25);
        doc.addPage();
        var details = 20;
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("DETAILS OF THE PARTIES", 170), 105, details, 'center');
        doc.setFontStyle("");
        doc.text(doc.splitTextToSize("Borrower details:", 80), 20, details + 10);
        doc.text(doc.splitTextToSize("Full name: " + clientFullName, 80), 20, details + 20);
        doc.text(doc.splitTextToSize("Adress: " + clientAdress, 80), 20, details + 35);
        var sign1 = details + 40 + 9 * (clientAdress.length / 25);
        doc.text(doc.splitTextToSize("Signature ____________________", 80), 20, sign1);
        doc.text(doc.splitTextToSize("Lender details:", 80), 110, details + 10);
        doc.text(doc.splitTextToSize("Full name: " + creatorFullName, 80), 110, details + 20);
        doc.text(doc.splitTextToSize("Adress: " + creatorAdress, 80), 110, details + 35);
        var sign2 = details + 40 + 9 * (creatorAdress.length / 25);
        doc.text(doc.splitTextToSize("Signature ____________________", 80), 110, sign2);
        doc.save(title + ".pdf");
    };
    PDFService.prototype.saveAsPDFCooperation = function (kindOfActivity, dateOfCreation, clientResponsibility, creatorResponsibility, term, terminationConditions, title, clientFullName, clientAdress, creatorFullName, creatorAdress, otherInfo) {
        console.log("save as pdf");
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__();
        var pageHeight = doc.internal.pageSize.getHeight();
        var pageWidth = doc.internal.pageSize.getWidth();
        doc.setFont("Arial");
        doc.setFontSize(20);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("JOINT ACTIVITY CONTRACT", 170), 105, 20, 'center');
        doc.setFontStyle("");
        doc.setFontSize(14);
        doc.text(doc.splitTextToSize(dateOfCreation.toString(), 30), pageWidth - 50, 30);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("THE SUBJECT OF THE CONTRACT", 170), 105, 50, 'center');
        doc.setFontStyle("");
        doc.text(doc.splitTextToSize("The parties undertake, by joining efforts, to act together on a mutually beneficial basis of the following: " + kindOfActivity, 170), 20, 60);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("DUTIES OF THE PARTIES", 170), 105, 80, 'center');
        doc.setFontStyle("");
        doc.text(doc.splitTextToSize("Party 1 duties:", 170), 20, 90);
        doc.text(doc.splitTextToSize(clientResponsibility, 160), 30, 100);
        var yParty2 = 105 + 9 * (clientResponsibility.length / 100);
        doc.text(doc.splitTextToSize("Party 2 duties:", 170), 20, yParty2);
        var yParty2Dut = yParty2 + 10;
        doc.text(doc.splitTextToSize(creatorResponsibility, 160), 30, yParty2Dut);
        var yRes = yParty2Dut + 10 + 9 * (creatorResponsibility.length / 100);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("RESPONSIBILITIES OF THE PARTIES", 170), 105, yRes, 'center');
        doc.setFontStyle("");
        var resText = "In the event of non-performance or improper performance of an obligation, the Contracting Party shall indemnify the other party for the losses caused by it."
            + " Under the loss means the costs incurred by the other party in the execution of the agrement, the loss or damage to its property.";
        doc.text(doc.splitTextToSize(resText, 170), 20, yRes + 10);
        var yTime = yRes + 10 + 9 * (resText.length / 90);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("TERM OF CONTRACT", 170), 105, yTime, 'center');
        doc.setFontStyle("");
        var timeText = "This contract is valid for " + term + " days and is valid from the moment of signing.";
        " The contract may be extended by the parties, which is an additional contract.";
        doc.text(doc.splitTextToSize(timeText, 170), 20, yTime + 10);
        var yTermination = yTime + 15 + 9 * (timeText.length / 90);
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("TERMINATION OF THE CONTRACT", 170), 105, yTermination, 'center');
        doc.setFontStyle("");
        doc.text(doc.splitTextToSize("This contract will be terminated upon expiration.", 170), 20, yTermination + 10);
        doc.text(doc.splitTextToSize("The contract may be terminated in the following cases:", 170), 20, yTermination + 20);
        doc.text(doc.splitTextToSize(terminationConditions, 160), 30, yTermination + 30);
        doc.addPage();
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("DISPUTE RESOLUTION", 170), 105, 20, 'center');
        doc.setFontStyle("");
        var dispResText = "All disputes and controversies that may arise in connection with this contract will, if possible, be resolved through negotiations between the parties."
            + " In case of non-settlement of disputes and disagreements through negotiations, the resolution of disputes is made in court in accordance with the current legislation.";
        doc.text(doc.splitTextToSize(dispResText, 170), 20, 30);
        var other = 25 + 10 * (dispResText.length / 90);
        var details = other;
        doc.setFontStyle("bold");
        doc.text(doc.splitTextToSize("DETAILS OF THE PARTIES", 170), 105, details, 'center');
        doc.setFontStyle("");
        doc.text(doc.splitTextToSize("Party 1 details:", 80), 20, details + 10);
        doc.text(doc.splitTextToSize("Full name: " + clientFullName, 80), 20, details + 20);
        doc.text(doc.splitTextToSize("Adress: " + clientAdress, 80), 20, details + 30);
        doc.text(doc.splitTextToSize("Signature ____________________", 80), 20, 110);
        doc.text(doc.splitTextToSize("Party 2 details:", 80), 110, details + 10);
        doc.text(doc.splitTextToSize("Full name: " + creatorFullName, 80), 110, details + 20);
        doc.text(doc.splitTextToSize("Adress: " + creatorAdress, 80), 110, details + 30);
        doc.text(doc.splitTextToSize("Signature ____________________", 80), 110, 110);
        doc.save(title + ".pdf");
    };
    PDFService.prototype.addDay = function (date, days) {
        date.setDate(date.getDate() + days);
        return date;
    };
    PDFService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PDFService);
    return PDFService;
}());



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var ToastService = /** @class */ (function () {
    function ToastService(toastrService) {
        this.toastrService = toastrService;
    }
    ToastService.prototype.showSuccess = function (head, body) {
        this.toastrService.success(body, head);
    };
    ToastService.prototype.showError = function (head, body) {
        this.toastrService.error(body, head);
    };
    ToastService.prototype.showInfo = function (head, body) {
        this.toastrService.info(body, head);
    };
    ToastService.prototype.showWarning = function (head, body) {
        this.toastrService.warning(body, head);
    };
    ToastService.prototype.deleteToast = function (toastId) {
        this.toastrService.clear(toastId);
    };
    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");




var KIND_OF_CONTRACT = 'KIND_OF_CONTRACT';
var UserService = /** @class */ (function () {
    function UserService(http, token) {
        this.http = http;
        this.token = token;
        this.userUrl = 'http://localhost:8080/user/';
        this.today = "";
    }
    UserService.prototype.getById = function (id) {
        return this.http.get(this.userUrl + "get/" + id);
    };
    UserService.prototype.getByUsername = function (username) {
        return this.http.get(this.userUrl + "username/" + username);
    };
    UserService.prototype.getAll = function () {
        return this.http.get(this.userUrl + "getall");
    };
    UserService.prototype.getUsersByFilter = function (page, size, filter) {
        return this.http.post(this.userUrl + "users-all?" + "page=" + page + "&size=" + size, filter);
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.put(this.userUrl + "update", user);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.userUrl + "delete/" + id);
    };
    UserService.prototype.deleteAll = function () {
        return this.http.delete(this.userUrl + "deleteall");
    };
    UserService.prototype.initToday = function () {
        this.day = new Date().getDate();
        this.month = new Date().getMonth() + 1;
        this.year = new Date().getFullYear();
        if (this.day < 10) {
            this.day = '0' + this.day;
        }
        if (this.month < 10) {
            this.month = '0' + this.month;
        }
        this.today = this.year + "-" + this.month + "-" + this.day;
        return this.today;
    };
    UserService.prototype.saveKindOfContract = function (kind) {
        window.sessionStorage.removeItem(KIND_OF_CONTRACT);
        window.sessionStorage.setItem(KIND_OF_CONTRACT, kind);
    };
    UserService.prototype.getKindOfContract = function () {
        return sessionStorage.getItem(KIND_OF_CONTRACT);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    position: fixed;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0.356);\n    -webkit-filter: blur(10px);\n            filter: blur(10px);\n}\n\n.forward {\n    bottom: 0;\n    background: inherit;\n    position: fixed;\n}\n\n.filter {\n    max-width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULHNDQUFzQztJQUN0QywwQkFBa0I7WUFBbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzU2KTtcbiAgICBmaWx0ZXI6IGJsdXIoMTBweCk7XG59XG5cbi5mb3J3YXJkIHtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5maWx0ZXIge1xuICAgIG1heC13aWR0aDogMjUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLogin; else notLogin\" class=\"mt-5 ml-2 mr-3 mb-5\">\n  <div *ngIf=\"role === 'ROLE_ADMIN';else notAdmin\">\n    <div class=\"row \">\n      <div @fadeFilter class=\"col mr-3 mt-5 filter\" (change)=\"setPage(0)\" >\n          <div style=\"position: fixed;max-width: 250px;\">\n          <div class=\"text-center\">\n            <h4>Filter</h4>\n          </div>\n          <hr>\n          <input type=\"text\" placeholder=\"Filter by username\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\">\n          <br>\n          <input type=\"text\" placeholder=\"Filter by name\" class=\"form-control\" name=\"name\" [(ngModel)]=\"form.name\" #name=\"ngModel\">\n          <br>\n          <input type=\"text\" placeholder=\"Filter by email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"form.email\" #email=\"ngModel\">\n          <br>\n          <div class=\"btn-group \" style=\"width: 100%\" (click)=\"setPage(0)\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.activationCode=''\"\n              [ngClass]=\"{'active':form.activationCode==''}\">All</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.activationCode='confirm'\"\n              [ngClass]=\"{'active':form.activationCode=='confirm'}\">Confirm</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"form.activationCode='notconfirm'\"\n              [ngClass]=\"{'active':form.activationCode=='notconfirm'}\">Not confirm</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col \">\n        <div @fadeNameTable class=\"row align-items-end mb-1\">          \n            <h1 class=\"display-4\">Users ({{totalElements}})</h1>\n          </div>\n          <div class=\"row\">\n          <div class=\"col\" style=\"margin-left:30%\">\n              <div *ngIf=\"showSpinner\" class=\"spinner-grow \" role=\"status\">\n                  <span class=\"sr-only\">Loading...</span>\n                </div>\n            </div>\n          <div @fadeTable *ngIf=\"listUsers.length > 0\" class=\"col-6\">\n            <button *ngIf=\"role === 'ROLE_ADMIN'\" data-toggle=\"modal\" data-target=\"#deleteall\"\n              class=\"btn btn-danger float-right\">Delete all</button>\n\n            <div class=\"btn-group float-right mr-3\" role=\"group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"basic-addon1\">Sort by:</span>\n              </div>\n              <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\"\n                style=\"width: 200px\">{{form.sortField}} : {{form.sortOrder}}</button>\n              <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\" (click)=\"getAllUsers()\">\n                <a class=\"dropdown-item\" (click)=\"form.sortField='username'\" (click)=\" form.sortOrder='ASC'\">Username: a\n                  -> z</a>\n                <a class=\"dropdown-item\" (click)=\"form.sortField='username'\" (click)=\"form.sortOrder='DESC'\">Username: z\n                  -> a</a>\n                <a class=\"dropdown-item\" (click)=\"form.sortField='name' \" (click)=\" form.sortOrder='ASC'\">Name: a ->\n                  z</a>\n                <a class=\"dropdown-item\" (click)=\"form.sortField='name' \" (click)=\" form.sortOrder='DESC'\">Name: z ->\n                  a</a>\n                <a class=\"dropdown-item\" (click)=\"form.sortField='email' \" (click)=\" form.sortOrder='ASC'\">Email: a ->\n                  z</a>\n                <a class=\"dropdown-item\" (click)=\"form.sortField='email' \" (click)=\" form.sortOrder='DESC'\">Email: z ->\n                  a</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      \n      \n        <div @fadeTable *ngIf=\"listUsers.length > 0; else falseLength\">\n          <table  class=\"table table-hover table-sm\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th scope=\"col\">Full name</th>\n                <th scope=\"col\">Username</th>\n                <th scope=\"col\">Email</th>\n                <th scope=\"col\">Adress</th>\n                <th scope=\"col\">Account</th>\n                <th scope=\"col\">Option</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr @fadeTableItem *ngFor=\"let user of listUsers; let i = index\">\n                <td>{{user.name}}</td>\n                <td>{{user.username}}</td>\n                <td>{{user.email}}</td>\n                <td>{{user.adress}}</td>\n                <td *ngIf=\"user.activationCode\" style=\"color: red\">Not confirm</td>\n                <td *ngIf=\"!user.activationCode\" style=\"color: green\">Confirm</td>\n                <td style=\"width: 10%\">\n                  <button (click)=\"deleteUser(user)\" class=\"btn btn-danger\">Delete</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n          <div class=\"row container back\"> \n              <div class=\"col \" style=\"height: 70px\"></div>\n          </div>\n          <div @fadePaginator *ngIf=\"listUsers.length > 0\" class=\"row container forward\">\n            <div class=\"col\">\n              <nav aria-label=\"Page navigation example\">\n                <ul class=\"pagination \">\n                  <li class=\"page-item\" [ngClass]=\"{'disabled':page==0}\">\n                    <a class=\"page-link \" aria-disabled=\"true\" (click)=nextPage(false)>Previous</a>\n                  </li>\n                  <li class=\"page-item\" *ngFor=\"let p of pages; let i = index\" [ngClass]=\"{'active':page==i}\">\n                    <a class=\"page-link\" (click)=setPage(i)>{{i+1}}</a>\n                  </li>\n                  <li class=\"page-item\" [ngClass]=\"{'disabled':page==length-1}\">\n                    <a class=\"page-link\" (click)=nextPage(true)>Next</a>\n                  </li>\n                </ul>\n              </nav>\n            </div>\n            <div class=\"col\">\n              <nav aria-label=\"Page navigation example\">\n                <ul class=\"pagination \">\n                  <li class=\"page-item disabled\">\n                    <a class=\"page-link \" aria-disabled=\"true\">Show by </a>\n                  </li>\n                  <li class=\"page-item\" *ngFor=\"let s of sizes\" [ngClass]=\"{'active':size==s}\">\n                    <a class=\"page-link\" (click)=setSize(s)>{{s}}</a>\n                  </li>\n                </ul>\n              </nav>\n            </div>\n          </div>\n        \n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #falseLength>\n    <div @fadeTable *ngIf=\"showData\" class=\"text-center \">\n        <br><br><br>\n        <h3 >Empty list of users</h3>    \n      </div>\n</ng-template>\n\n<ng-template #notLogin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Unauthorized users are denied access. Please <a routerLink=\"/\" class=\"alert-link\">login</a>!\n    </h5>\n  </div>\n</ng-template>\n\n<ng-template #notAdmin>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    <h2 class=\"alert-heading\">Oops...</h2>\n    <hr>\n    <h5 class=\"mb-0\">Sorry, error: access denied</h5>\n  </div>\n</ng-template>\n\n<div class=\"modal fade\" id=\"deleteall\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalCenterTitle\">Confirm the action</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h6>Are you sure you want to delete all users?</h6>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" data-dismiss=\"modal\" (click)=\"deleteAll()\" class=\"btn btn-success\">Confirm delete</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var _models_filterObj_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/filterObj.model */ "./src/app/models/filterObj.model.ts");








var UserComponent = /** @class */ (function () {
    function UserComponent(userService, tokenStorage, router, toast) {
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.toast = toast;
        this.form = {};
        this.listUsers = [];
        this.isLogin = false;
        this.errorMessage = '';
        this.size = 5;
        this.page = 0;
        this.filter = new _models_filterObj_model__WEBPACK_IMPORTED_MODULE_7__["FilterObject"]();
    }
    UserComponent.prototype.ngOnInit = function () {
        if (!this.tokenStorage.isLogin()) {
            this.router.navigate(['/login']);
        }
        else {
            this.role = this.tokenStorage.getAuthorities()[0];
            this.init();
            this.getAllUsers();
            this.isLogin = this.tokenStorage.isLogin();
        }
    };
    UserComponent.prototype.init = function () {
        this.role = this.tokenStorage.getAuthorities()[0];
        this.isLogin = this.tokenStorage.isLogin();
        this.sizes = [5, 10, 25, 50];
        this.form.username = "";
        this.form.name = "";
        this.form.email = "";
        this.form.sortOrder = "ASC";
        this.form.sortField = "username";
        this.form.activationCode = "";
    };
    UserComponent.prototype.setSize = function (s) {
        this.size = s;
        this.setPage(0);
        console.log("page " + this.page);
    };
    UserComponent.prototype.setPage = function (i) {
        this.page = i;
        this.getAllUsers();
        console.log("set page " + this.page);
    };
    UserComponent.prototype.nextPage = function (value) {
        if (value) {
            this.page = this.page + 1;
        }
        else {
            this.page = this.page - 1;
        }
        this.getAllUsers();
        console.log(this.page);
    };
    UserComponent.prototype.initFilter = function () {
        this.filter.name = this.form.name;
        this.filter.email = this.form.email;
        this.filter.username = this.form.username;
        this.filter.activationCode = this.form.activationCode;
        this.filter.sortOrder = this.form.sortOrder;
        this.filter.sortField = this.form.sortField;
    };
    UserComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.showSpinner = true;
        this.showData = false;
        this.initFilter();
        console.log(this.filter);
        this.userService.getUsersByFilter(this.page, this.size, this.filter)
            .subscribe(function (data) {
            _this.showSpinner = false;
            _this.showData = true;
            _this.listUsers = data['content'];
            _this.pages = new Array(data['totalPages']);
            _this.length = _this.pages.length;
            _this.totalElements = data['totalElements'];
        }, function (error) {
            console.log(error.error.message);
        });
    };
    UserComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.deleteUser(user.id).subscribe(function (data) {
            _this.getAllUsers();
            _this.toast.showSuccess('', 'User ' + user.username + ' deleted successfully');
        });
        console.log(user.username);
    };
    UserComponent.prototype.deleteAll = function () {
        var _this = this;
        this.userService.deleteAll().subscribe(function (data) {
            _this.getAllUsers();
            _this.toast.showSuccess('', 'All users deleted successfully');
        });
        console.log("all");
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            animations: [
                _animations_animation__WEBPACK_IMPORTED_MODULE_6__["fadeFilter"], _animations_animation__WEBPACK_IMPORTED_MODULE_6__["fadeTableItem"], _animations_animation__WEBPACK_IMPORTED_MODULE_6__["fadePaginator"], _animations_animation__WEBPACK_IMPORTED_MODULE_6__["fadeTable"], _animations_animation__WEBPACK_IMPORTED_MODULE_6__["fadeNameTable"]
            ],
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
    ], UserComponent);
    return UserComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/zahed/Angular-DocumentManagementSystem/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map