(self["webpackChunkionic_crash_course"] = self["webpackChunkionic_crash_course"] || []).push([["src_app_pages_film-details_film-details_module_ts"],{

/***/ 2681:
/*!*******************************************************************!*\
  !*** ./src/app/pages/film-details/film-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmDetailsPageRoutingModule": () => (/* binding */ FilmDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _film_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./film-details.page */ 7425);




const routes = [
    {
        path: '',
        component: _film_details_page__WEBPACK_IMPORTED_MODULE_0__.FilmDetailsPage
    }
];
let FilmDetailsPageRoutingModule = class FilmDetailsPageRoutingModule {
};
FilmDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FilmDetailsPageRoutingModule);



/***/ }),

/***/ 1408:
/*!***********************************************************!*\
  !*** ./src/app/pages/film-details/film-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmDetailsPageModule": () => (/* binding */ FilmDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _film_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./film-details-routing.module */ 2681);
/* harmony import */ var _film_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./film-details.page */ 7425);







let FilmDetailsPageModule = class FilmDetailsPageModule {
};
FilmDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _film_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.FilmDetailsPageRoutingModule
        ],
        declarations: [_film_details_page__WEBPACK_IMPORTED_MODULE_1__.FilmDetailsPage]
    })
], FilmDetailsPageModule);



/***/ }),

/***/ 7425:
/*!*********************************************************!*\
  !*** ./src/app/pages/film-details/film-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmDetailsPage": () => (/* binding */ FilmDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_film_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./film-details.page.html */ 4704);
/* harmony import */ var _film_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./film-details.page.scss */ 3270);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/api.service */ 4429);






let FilmDetailsPage = class FilmDetailsPage {
    constructor(activatedRoute, api) {
        this.activatedRoute = activatedRoute;
        this.api = api;
    }
    ngOnInit() {
        const filmId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getFilm(filmId).subscribe(response => {
            this.film = response;
        });
    }
};
FilmDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
FilmDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-film-details',
        template: _raw_loader_film_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_film_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FilmDetailsPage);



/***/ }),

/***/ 3270:
/*!***********************************************************!*\
  !*** ./src/app/pages/film-details/film-details.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxtLWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 4704:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/film-details/film-details.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/tabs/films\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ film?.title }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" *ngIf=\"film\">\n\n    <ion-card *ngIf=\"film?.opening_crawl\">\n        <ion-card-content>\n            {{ film?.opening_crawl }}\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"film?.director\">\n        <ion-card-header>\n            <ion-card-title>Director</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ film?.director }}\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"film?.producer\">\n        <ion-card-header>\n            <ion-card-title>Producer</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ film?.producer }}\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"film?.release_date\">\n        <ion-card-header>\n            <ion-card-title>Release date</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ film?.release_date }}\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"film?.episode_id\">\n        <ion-card-header>\n            <ion-card-title>Episode</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ film?.episode_id }}\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_film-details_film-details_module_ts.js.map