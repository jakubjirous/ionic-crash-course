(self["webpackChunkionic_crash_course"] = self["webpackChunkionic_crash_course"] || []).push([["src_app_pages_people_people_module_ts"],{

/***/ 1141:
/*!*******************************************************!*\
  !*** ./src/app/pages/people/people-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeoplePageRoutingModule": () => (/* binding */ PeoplePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _people_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people.page */ 6338);




const routes = [
    {
        path: '',
        component: _people_page__WEBPACK_IMPORTED_MODULE_0__.PeoplePage
    }
];
let PeoplePageRoutingModule = class PeoplePageRoutingModule {
};
PeoplePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PeoplePageRoutingModule);



/***/ }),

/***/ 792:
/*!***********************************************!*\
  !*** ./src/app/pages/people/people.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeoplePageModule": () => (/* binding */ PeoplePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _people_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people-routing.module */ 1141);
/* harmony import */ var _people_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./people.page */ 6338);







let PeoplePageModule = class PeoplePageModule {
};
PeoplePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _people_routing_module__WEBPACK_IMPORTED_MODULE_0__.PeoplePageRoutingModule
        ],
        declarations: [_people_page__WEBPACK_IMPORTED_MODULE_1__.PeoplePage]
    })
], PeoplePageModule);



/***/ }),

/***/ 6338:
/*!*********************************************!*\
  !*** ./src/app/pages/people/people.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeoplePage": () => (/* binding */ PeoplePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_people_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./people.page.html */ 7131);
/* harmony import */ var _people_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./people.page.scss */ 1528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/api.service */ 4429);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils/utils.service */ 7537);







let PeoplePage = class PeoplePage {
    constructor(router, api, utils) {
        this.router = router;
        this.api = api;
        this.utils = utils;
    }
    ngOnInit() {
        this.people = this.api.getAllPeople();
    }
    openDetails(people) {
        const peopleId = this.utils.getIdFromUrl(people === null || people === void 0 ? void 0 : people.url);
        this.router.navigateByUrl(`/tabs/people/${peopleId}`);
    }
};
PeoplePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService }
];
PeoplePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-people',
        template: _raw_loader_people_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_people_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PeoplePage);



/***/ }),

/***/ 1528:
/*!***********************************************!*\
  !*** ./src/app/pages/people/people.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW9wbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 7131:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/people/people.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>People</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-list>\n        <ion-item\n            button\n            detail\n            lines=\"inset\"\n            *ngFor=\"let person of (people | async)?.results\"\n            (click)=\"openDetails(person)\"\n        >\n            {{ person?.name }}\n        </ion-item>\n    </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_people_people_module_ts.js.map