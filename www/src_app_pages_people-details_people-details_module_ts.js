(self["webpackChunkionic_crash_course"] = self["webpackChunkionic_crash_course"] || []).push([["src_app_pages_people-details_people-details_module_ts"],{

/***/ 8836:
/*!***********************************************************************!*\
  !*** ./src/app/pages/people-details/people-details-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeopleDetailsPageRoutingModule": () => (/* binding */ PeopleDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _people_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people-details.page */ 483);




const routes = [
    {
        path: '',
        component: _people_details_page__WEBPACK_IMPORTED_MODULE_0__.PeopleDetailsPage
    }
];
let PeopleDetailsPageRoutingModule = class PeopleDetailsPageRoutingModule {
};
PeopleDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PeopleDetailsPageRoutingModule);



/***/ }),

/***/ 7197:
/*!***************************************************************!*\
  !*** ./src/app/pages/people-details/people-details.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeopleDetailsPageModule": () => (/* binding */ PeopleDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _people_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people-details-routing.module */ 8836);
/* harmony import */ var _people_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./people-details.page */ 483);







let PeopleDetailsPageModule = class PeopleDetailsPageModule {
};
PeopleDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _people_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PeopleDetailsPageRoutingModule
        ],
        declarations: [_people_details_page__WEBPACK_IMPORTED_MODULE_1__.PeopleDetailsPage]
    })
], PeopleDetailsPageModule);



/***/ }),

/***/ 483:
/*!*************************************************************!*\
  !*** ./src/app/pages/people-details/people-details.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeopleDetailsPage": () => (/* binding */ PeopleDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_people_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./people-details.page.html */ 2437);
/* harmony import */ var _people_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./people-details.page.scss */ 6924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/api.service */ 4429);






let PeopleDetailsPage = class PeopleDetailsPage {
    constructor(activatedRoute, api) {
        this.activatedRoute = activatedRoute;
        this.api = api;
    }
    ngOnInit() {
        const peopleId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getPeople(peopleId).subscribe(response => {
            this.people = response;
        });
    }
};
PeopleDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
PeopleDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-people-details',
        template: _raw_loader_people_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_people_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PeopleDetailsPage);



/***/ }),

/***/ 6924:
/*!***************************************************************!*\
  !*** ./src/app/pages/people-details/people-details.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW9wbGUtZGV0YWlscy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 2437:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/people-details/people-details.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/tabs/people\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ people?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" *ngIf=\"people\">\n    <ion-card *ngIf=\"people?.height\">\n        <ion-card-header>\n            <ion-card-title>Height</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ people?.height }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"people?.mass\">\n        <ion-card-header>\n            <ion-card-title>Mass</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ people?.mass }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"people?.hair_color\">\n        <ion-card-header>\n            <ion-card-title>Hair color</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ people?.hair_color }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"people?.skin_color\">\n        <ion-card-header>\n            <ion-card-title>Skin color</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ people?.skin_color }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"people?.eye_color\">\n        <ion-card-header>\n            <ion-card-title>Eye color</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ people?.eye_color }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"people?.birth_year\">\n        <ion-card-header>\n            <ion-card-title>Birth year</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ people?.birth_year }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"people?.gender\">\n        <ion-card-header>\n            <ion-card-title>Gender</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ people?.gender }}\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_people-details_people-details_module_ts.js.map