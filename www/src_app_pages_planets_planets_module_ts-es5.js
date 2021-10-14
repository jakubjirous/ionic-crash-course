(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkionic_crash_course"] = self["webpackChunkionic_crash_course"] || []).push([["src_app_pages_planets_planets_module_ts"], {
    /***/
    27134:
    /*!*********************************************************!*\
      !*** ./src/app/pages/planets/planets-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlanetsPageRoutingModule": function PlanetsPageRoutingModule() {
          return (
            /* binding */
            _PlanetsPageRoutingModule
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


      var _planets_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./planets.page */
      42017);

      var routes = [{
        path: '',
        component: _planets_page__WEBPACK_IMPORTED_MODULE_0__.PlanetsPage
      }];

      var _PlanetsPageRoutingModule = function PlanetsPageRoutingModule() {
        _classCallCheck(this, PlanetsPageRoutingModule);
      };

      _PlanetsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PlanetsPageRoutingModule);
      /***/
    },

    /***/
    90861:
    /*!*************************************************!*\
      !*** ./src/app/pages/planets/planets.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlanetsPageModule": function PlanetsPageModule() {
          return (
            /* binding */
            _PlanetsPageModule
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


      var _planets_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./planets-routing.module */
      27134);
      /* harmony import */


      var _planets_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./planets.page */
      42017);

      var _PlanetsPageModule = function PlanetsPageModule() {
        _classCallCheck(this, PlanetsPageModule);
      };

      _PlanetsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _planets_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlanetsPageRoutingModule],
        declarations: [_planets_page__WEBPACK_IMPORTED_MODULE_1__.PlanetsPage]
      })], _PlanetsPageModule);
      /***/
    },

    /***/
    42017:
    /*!***********************************************!*\
      !*** ./src/app/pages/planets/planets.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlanetsPage": function PlanetsPage() {
          return (
            /* binding */
            _PlanetsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_planets_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./planets.page.html */
      20314);
      /* harmony import */


      var _planets_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./planets.page.scss */
      66416);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/api/api.service */
      84429);
      /* harmony import */


      var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/utils/utils.service */
      37537);

      var _PlanetsPage = /*#__PURE__*/function () {
        function PlanetsPage(router, api, utils) {
          _classCallCheck(this, PlanetsPage);

          this.router = router;
          this.api = api;
          this.utils = utils;
        }

        _createClass(PlanetsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.planets = this.api.getAllPlanets();
          }
        }, {
          key: "openDetails",
          value: function openDetails(planet) {
            var planetId = this.utils.getIdFromUrl(planet === null || planet === void 0 ? void 0 : planet.url);
            this.router.navigateByUrl("/tabs/planets/".concat(planetId));
          }
        }]);

        return PlanetsPage;
      }();

      _PlanetsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService
        }];
      };

      _PlanetsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-planets',
        template: _raw_loader_planets_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_planets_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PlanetsPage);
      /***/
    },

    /***/
    66416:
    /*!*************************************************!*\
      !*** ./src/app/pages/planets/planets.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuZXRzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    20314:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/planets/planets.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Planets</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-list>\n        <ion-item\n            button\n            detail\n            lines=\"inset\"\n            *ngFor=\"let planet of (planets | async)?.results\"\n            (click)=\"openDetails(planet)\"\n        >\n            {{ planet?.name }}\n        </ion-item>\n    </ion-list>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_planets_planets_module_ts-es5.js.map