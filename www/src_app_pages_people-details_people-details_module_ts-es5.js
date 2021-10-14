(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkionic_crash_course"] = self["webpackChunkionic_crash_course"] || []).push([["src_app_pages_people-details_people-details_module_ts"], {
    /***/
    8836:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/people-details/people-details-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PeopleDetailsPageRoutingModule": function PeopleDetailsPageRoutingModule() {
          return (
            /* binding */
            _PeopleDetailsPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _people_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./people-details.page */
      40483);

      var routes = [{
        path: '',
        component: _people_details_page__WEBPACK_IMPORTED_MODULE_0__.PeopleDetailsPage
      }];

      var _PeopleDetailsPageRoutingModule = function PeopleDetailsPageRoutingModule() {
        _classCallCheck(this, PeopleDetailsPageRoutingModule);
      };

      _PeopleDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PeopleDetailsPageRoutingModule);
      /***/
    },

    /***/
    7197:
    /*!***************************************************************!*\
      !*** ./src/app/pages/people-details/people-details.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PeopleDetailsPageModule": function PeopleDetailsPageModule() {
          return (
            /* binding */
            _PeopleDetailsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _people_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./people-details-routing.module */
      8836);
      /* harmony import */


      var _people_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./people-details.page */
      40483);

      var _PeopleDetailsPageModule = function PeopleDetailsPageModule() {
        _classCallCheck(this, PeopleDetailsPageModule);
      };

      _PeopleDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _people_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PeopleDetailsPageRoutingModule],
        declarations: [_people_details_page__WEBPACK_IMPORTED_MODULE_1__.PeopleDetailsPage]
      })], _PeopleDetailsPageModule);
      /***/
    },

    /***/
    40483:
    /*!*************************************************************!*\
      !*** ./src/app/pages/people-details/people-details.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PeopleDetailsPage": function PeopleDetailsPage() {
          return (
            /* binding */
            _PeopleDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_people_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./people-details.page.html */
      52437);
      /* harmony import */


      var _people_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./people-details.page.scss */
      86924);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/api/api.service */
      84429);

      var _PeopleDetailsPage = /*#__PURE__*/function () {
        function PeopleDetailsPage(activatedRoute, api) {
          _classCallCheck(this, PeopleDetailsPage);

          this.activatedRoute = activatedRoute;
          this.api = api;
        }

        _createClass(PeopleDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var peopleId = this.activatedRoute.snapshot.paramMap.get('id');
            this.api.getPeople(peopleId).subscribe(function (response) {
              _this.people = response;
            });
          }
        }]);

        return PeopleDetailsPage;
      }();

      _PeopleDetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }, {
          type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }];
      };

      _PeopleDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-people-details',
        template: _raw_loader_people_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_people_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PeopleDetailsPage);
      /***/
    },

    /***/
    86924:
    /*!***************************************************************!*\
      !*** ./src/app/pages/people-details/people-details.page.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW9wbGUtZGV0YWlscy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    52437:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/people-details/people-details.page.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/tabs/people\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ people?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" *ngIf=\"people\">\n    <ion-card *ngIf=\"people?.height\">\n        <ion-card-header>\n            <ion-card-title>Height</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ people?.height }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"people?.mass\">\n        <ion-card-header>\n            <ion-card-title>Mass</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ people?.mass }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"people?.hair_color\">\n        <ion-card-header>\n            <ion-card-title>Hair color</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ people?.hair_color }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"people?.skin_color\">\n        <ion-card-header>\n            <ion-card-title>Skin color</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ people?.skin_color }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"people?.eye_color\">\n        <ion-card-header>\n            <ion-card-title>Eye color</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ people?.eye_color }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"people?.birth_year\">\n        <ion-card-header>\n            <ion-card-title>Birth year</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ people?.birth_year }}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"people?.gender\">\n        <ion-card-header>\n            <ion-card-title>Gender</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{ people?.gender }}\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_people-details_people-details_module_ts-es5.js.map