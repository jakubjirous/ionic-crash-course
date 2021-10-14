(self["webpackChunkionic_crash_course"] = self["webpackChunkionic_crash_course"] || []).push([["src_app_pages_planets-details_planets-details_module_ts"],{

/***/ 6360:
/*!*************************************************************************!*\
  !*** ./src/app/pages/planets-details/planets-details-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanetsDetailsPageRoutingModule": () => (/* binding */ PlanetsDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _planets_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planets-details.page */ 9798);




const routes = [
    {
        path: '',
        component: _planets_details_page__WEBPACK_IMPORTED_MODULE_0__.PlanetsDetailsPage
    }
];
let PlanetsDetailsPageRoutingModule = class PlanetsDetailsPageRoutingModule {
};
PlanetsDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlanetsDetailsPageRoutingModule);



/***/ }),

/***/ 5149:
/*!*****************************************************************!*\
  !*** ./src/app/pages/planets-details/planets-details.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanetsDetailsPageModule": () => (/* binding */ PlanetsDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _planets_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planets-details-routing.module */ 6360);
/* harmony import */ var _planets_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planets-details.page */ 9798);







let PlanetsDetailsPageModule = class PlanetsDetailsPageModule {
};
PlanetsDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _planets_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlanetsDetailsPageRoutingModule
        ],
        declarations: [_planets_details_page__WEBPACK_IMPORTED_MODULE_1__.PlanetsDetailsPage]
    })
], PlanetsDetailsPageModule);



/***/ }),

/***/ 9798:
/*!***************************************************************!*\
  !*** ./src/app/pages/planets-details/planets-details.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanetsDetailsPage": () => (/* binding */ PlanetsDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_planets_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./planets-details.page.html */ 4253);
/* harmony import */ var _planets_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planets-details.page.scss */ 804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/api.service */ 4429);






let PlanetsDetailsPage = class PlanetsDetailsPage {
    constructor(activatedRoute, api) {
        this.activatedRoute = activatedRoute;
        this.api = api;
    }
    ngOnInit() {
        const planetId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getPlanet(planetId).subscribe(response => {
            this.planet = response;
        });
    }
};
PlanetsDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
PlanetsDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-planets-details',
        template: _raw_loader_planets_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_planets_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PlanetsDetailsPage);



/***/ }),

/***/ 804:
/*!*****************************************************************!*\
  !*** ./src/app/pages/planets-details/planets-details.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuZXRzLWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 4253:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/planets-details/planets-details.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/tabs/planets\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ planet?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" *ngIf=\"planet\">\n    <ion-card *ngIf=\"planet?.rotation_period\">\n        <ion-card-header>\n            <ion-card-title>Rotation period</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ planet?.rotation_period }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"planet?.orbital_period\">\n        <ion-card-header>\n            <ion-card-title>Orbital period</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ planet?.orbital_period }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"planet?.diameter\">\n        <ion-card-header>\n            <ion-card-title>Diameter</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ planet?.diameter }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"planet?.climate\">\n        <ion-card-header>\n            <ion-card-title>Climate</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ planet?.climate }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"planet?.gravity\">\n        <ion-card-header>\n            <ion-card-title>Gravity</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ planet?.gravity }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"planet?.terrain\">\n        <ion-card-header>\n            <ion-card-title>Terrain</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ planet?.terrain }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"planet?.surface_water\">\n        <ion-card-header>\n            <ion-card-title>Surface water</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ planet?.surface_water }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"planet?.population\">\n        <ion-card-header>\n            <ion-card-title>Population</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ planet?.population }}\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_planets-details_planets-details_module_ts.js.map