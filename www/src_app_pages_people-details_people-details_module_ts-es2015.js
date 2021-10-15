(self["webpackChunkionic_crash_course"] = self["webpackChunkionic_crash_course"] || []).push([["src_app_pages_people-details_people-details_module_ts"],{

/***/ 8836:
/*!***********************************************************************!*\
  !*** ./src/app/pages/people-details/people-details-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeopleDetailsPageRoutingModule": function() { return /* binding */ PeopleDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _people_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people-details.page */ 40483);




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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeopleDetailsPageModule": function() { return /* binding */ PeopleDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _people_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people-details-routing.module */ 8836);
/* harmony import */ var _people_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./people-details.page */ 40483);







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

/***/ 40483:
/*!*************************************************************!*\
  !*** ./src/app/pages/people-details/people-details.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeopleDetailsPage": function() { return /* binding */ PeopleDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_people_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./people-details.page.html */ 52437);
/* harmony import */ var _people_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./people-details.page.scss */ 86924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/api.service */ 84429);






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

/***/ 86924:
/*!***************************************************************!*\
  !*** ./src/app/pages/people-details/people-details.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW9wbGUtZGV0YWlscy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 52437:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/people-details/people-details.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/tabs/people\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ people?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" *ngIf=\"people\">\n    <ion-card *ngIf=\"people?.name\" class=\"card ion-margin\">\n        <ion-card-header>\n            <ion-card-title>{{ people?.name }}</ion-card-title>\n        </ion-card-header>\n\n        <ion-item lines=\"none\" class=\"card__info\" *ngIf=\"people?.height\">\n            <ion-icon name=\"resize-outline\" slot=\"start\"></ion-icon>\n            Height: {{ people?.height }}\n        </ion-item>\n        <ion-item lines=\"none\" class=\"card__info\" *ngIf=\"people?.mass\">\n            <ion-icon name=\"barbell-outline\" slot=\"start\"></ion-icon>\n            Mass: {{ people?.mass }}\n        </ion-item>\n        <ion-item lines=\"none\" class=\"card__info\" *ngIf=\"people?.hair_color\">\n            <ion-icon name=\"color-palette-outline\" slot=\"start\"></ion-icon>\n            Hair Color: {{ people?.hair_color }}\n        </ion-item>\n        <ion-item lines=\"none\" class=\"card__info\" *ngIf=\"people?.skin_color\">\n            <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n            Skin Color: {{ people?.skin_color }}\n        </ion-item>\n        <ion-item lines=\"none\" class=\"card__info\" *ngIf=\"people?.eye_color\">\n            <ion-icon name=\"eye-outline\" slot=\"start\"></ion-icon>\n            Eye Color: {{ people?.eye_color }}\n        </ion-item>\n        <ion-item lines=\"none\" class=\"card__info\" *ngIf=\"people?.birth_year\">\n            <ion-icon name=\"medical-outline\" slot=\"start\"></ion-icon>\n            Birth Year: {{ people?.birth_year }}\n        </ion-item>\n        <ion-item lines=\"none\" class=\"card__info\" *ngIf=\"people?.gender\">\n            <ion-icon name=\"transgender-outline\" slot=\"start\"></ion-icon>\n            Gender: {{ people?.gender }}\n        </ion-item>\n    </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_people-details_people-details_module_ts-es2015.js.map