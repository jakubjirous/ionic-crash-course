(self["webpackChunkionic_crash_course"] = self["webpackChunkionic_crash_course"] || []).push([["src_app_pages_films_films_module_ts"],{

/***/ 2448:
/*!*****************************************************!*\
  !*** ./src/app/pages/films/films-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmsPageRoutingModule": () => (/* binding */ FilmsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _films_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./films.page */ 8500);




const routes = [
    {
        path: '',
        component: _films_page__WEBPACK_IMPORTED_MODULE_0__.FilmsPage
    }
];
let FilmsPageRoutingModule = class FilmsPageRoutingModule {
};
FilmsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FilmsPageRoutingModule);



/***/ }),

/***/ 6530:
/*!*********************************************!*\
  !*** ./src/app/pages/films/films.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmsPageModule": () => (/* binding */ FilmsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _films_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./films-routing.module */ 2448);
/* harmony import */ var _films_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./films.page */ 8500);







let FilmsPageModule = class FilmsPageModule {
};
FilmsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _films_routing_module__WEBPACK_IMPORTED_MODULE_0__.FilmsPageRoutingModule
        ],
        declarations: [_films_page__WEBPACK_IMPORTED_MODULE_1__.FilmsPage]
    })
], FilmsPageModule);



/***/ }),

/***/ 8500:
/*!*******************************************!*\
  !*** ./src/app/pages/films/films.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmsPage": () => (/* binding */ FilmsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_films_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./films.page.html */ 6764);
/* harmony import */ var _films_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./films.page.scss */ 222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/api.service */ 4429);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils/utils.service */ 7537);







let FilmsPage = class FilmsPage {
    constructor(router, api, utils) {
        this.router = router;
        this.api = api;
        this.utils = utils;
    }
    ngOnInit() {
        this.films = this.api.getAllFilms();
    }
    openDetails(film) {
        const filmId = this.utils.getIdFromUrl(film === null || film === void 0 ? void 0 : film.url);
        this.router.navigateByUrl(`/tabs/films/${filmId}`);
    }
    goToPlanets() {
        this.router.navigateByUrl(`/tabs/planets`);
    }
};
FilmsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService }
];
FilmsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-films',
        template: _raw_loader_films_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_films_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FilmsPage);



/***/ }),

/***/ 222:
/*!*********************************************!*\
  !*** ./src/app/pages/films/films.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxtcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 6764:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/films/films.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Films</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-list>\n        <ion-item button detail lines=\"inset\" *ngFor=\"let film of (films | async)?.results\" (click)=\"openDetails(film)\">\n            {{ film.title }}\n        </ion-item>\n    </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_films_films_module_ts.js.map