(self["webpackChunkionic_crash_course"] = self["webpackChunkionic_crash_course"] || []).push([["src_app_pages_planets-details_planets-details_module_ts"],{

/***/ 16360:
/*!*************************************************************************!*\
  !*** ./src/app/pages/planets-details/planets-details-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanetsDetailsPageRoutingModule": function() { return /* binding */ PlanetsDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _planets_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planets-details.page */ 39798);




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

/***/ 15149:
/*!*****************************************************************!*\
  !*** ./src/app/pages/planets-details/planets-details.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanetsDetailsPageModule": function() { return /* binding */ PlanetsDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _planets_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planets-details-routing.module */ 16360);
/* harmony import */ var _planets_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planets-details.page */ 39798);







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

/***/ 39798:
/*!***************************************************************!*\
  !*** ./src/app/pages/planets-details/planets-details.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanetsDetailsPage": function() { return /* binding */ PlanetsDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_planets_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./planets-details.page.html */ 94958);
/* harmony import */ var _planets_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planets-details.page.scss */ 20804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/api.service */ 84429);






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

/***/ 20804:
/*!*****************************************************************!*\
  !*** ./src/app/pages/planets-details/planets-details.page.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuZXRzLWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 94958:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/planets-details/planets-details.page.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/tabs/planets\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ planet?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" *ngIf=\"planet\">\n    <ion-card *ngIf=\"planet?.rotation_period\">\n        <ion-card-header>\n            <ion-card-title>Rotation period</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ planet?.rotation_period }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"planet?.orbital_period\">\n        <ion-card-header>\n            <ion-card-title>Orbital period</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ planet?.orbital_period }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"planet?.diameter\">\n        <ion-card-header>\n            <ion-card-title>Diameter</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ planet?.diameter }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"planet?.climate\">\n        <ion-card-header>\n            <ion-card-title>Climate</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ planet?.climate }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"planet?.gravity\">\n        <ion-card-header>\n            <ion-card-title>Gravity</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ planet?.gravity }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"planet?.terrain\">\n        <ion-card-header>\n            <ion-card-title>Terrain</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ planet?.terrain }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"planet?.surface_water\">\n        <ion-card-header>\n            <ion-card-title>Surface water</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ planet?.surface_water }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"planet?.population\">\n        <ion-card-header>\n            <ion-card-title>Population</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ planet?.population }}\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_planets-details_planets-details_module_ts-es2015.js.map