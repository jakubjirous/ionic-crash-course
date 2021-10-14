(self["webpackChunkionic_crash_course"] = self["webpackChunkionic_crash_course"] || []).push([["src_app_pages_planets_planets_module_ts"],{

/***/ 7134:
/*!*********************************************************!*\
  !*** ./src/app/pages/planets/planets-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanetsPageRoutingModule": () => (/* binding */ PlanetsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _planets_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planets.page */ 2017);




const routes = [
    {
        path: '',
        component: _planets_page__WEBPACK_IMPORTED_MODULE_0__.PlanetsPage
    }
];
let PlanetsPageRoutingModule = class PlanetsPageRoutingModule {
};
PlanetsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlanetsPageRoutingModule);



/***/ }),

/***/ 861:
/*!*************************************************!*\
  !*** ./src/app/pages/planets/planets.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanetsPageModule": () => (/* binding */ PlanetsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _planets_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planets-routing.module */ 7134);
/* harmony import */ var _planets_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planets.page */ 2017);







let PlanetsPageModule = class PlanetsPageModule {
};
PlanetsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _planets_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlanetsPageRoutingModule
        ],
        declarations: [_planets_page__WEBPACK_IMPORTED_MODULE_1__.PlanetsPage]
    })
], PlanetsPageModule);



/***/ }),

/***/ 2017:
/*!***********************************************!*\
  !*** ./src/app/pages/planets/planets.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanetsPage": () => (/* binding */ PlanetsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_planets_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./planets.page.html */ 314);
/* harmony import */ var _planets_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planets.page.scss */ 6416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/api.service */ 4429);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils/utils.service */ 7537);







let PlanetsPage = class PlanetsPage {
    constructor(router, api, utils) {
        this.router = router;
        this.api = api;
        this.utils = utils;
    }
    ngOnInit() {
        this.planets = this.api.getAllPlanets();
    }
    openDetails(planet) {
        const planetId = this.utils.getIdFromUrl(planet === null || planet === void 0 ? void 0 : planet.url);
        this.router.navigateByUrl(`/tabs/planets/${planetId}`);
    }
};
PlanetsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService }
];
PlanetsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-planets',
        template: _raw_loader_planets_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_planets_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PlanetsPage);



/***/ }),

/***/ 6416:
/*!*************************************************!*\
  !*** ./src/app/pages/planets/planets.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuZXRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 314:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/planets/planets.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Planets</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-list>\n        <ion-item\n            button\n            detail\n            lines=\"inset\"\n            *ngFor=\"let planet of (planets | async)?.results\"\n            (click)=\"openDetails(planet)\"\n        >\n            {{ planet?.name }}\n        </ion-item>\n    </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_planets_planets_module_ts.js.map