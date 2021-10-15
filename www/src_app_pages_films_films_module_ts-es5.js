(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkionic_crash_course"] = self["webpackChunkionic_crash_course"] || []).push([["src_app_pages_films_films_module_ts"], {
    /***/
    92448:
    /*!*****************************************************!*\
      !*** ./src/app/pages/films/films-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FilmsPageRoutingModule": function FilmsPageRoutingModule() {
          return (
            /* binding */
            _FilmsPageRoutingModule
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


      var _films_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./films.page */
      98500);

      var routes = [{
        path: '',
        component: _films_page__WEBPACK_IMPORTED_MODULE_0__.FilmsPage
      }];

      var _FilmsPageRoutingModule = function FilmsPageRoutingModule() {
        _classCallCheck(this, FilmsPageRoutingModule);
      };

      _FilmsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FilmsPageRoutingModule);
      /***/
    },

    /***/
    76530:
    /*!*********************************************!*\
      !*** ./src/app/pages/films/films.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FilmsPageModule": function FilmsPageModule() {
          return (
            /* binding */
            _FilmsPageModule
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


      var _films_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./films-routing.module */
      92448);
      /* harmony import */


      var _films_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./films.page */
      98500);

      var _FilmsPageModule = function FilmsPageModule() {
        _classCallCheck(this, FilmsPageModule);
      };

      _FilmsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _films_routing_module__WEBPACK_IMPORTED_MODULE_0__.FilmsPageRoutingModule],
        declarations: [_films_page__WEBPACK_IMPORTED_MODULE_1__.FilmsPage]
      })], _FilmsPageModule);
      /***/
    },

    /***/
    98500:
    /*!*******************************************!*\
      !*** ./src/app/pages/films/films.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FilmsPage": function FilmsPage() {
          return (
            /* binding */
            _FilmsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_films_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./films.page.html */
      16764);
      /* harmony import */


      var _films_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./films.page.scss */
      3069);
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

      var _FilmsPage = /*#__PURE__*/function () {
        function FilmsPage(router, api, utils) {
          _classCallCheck(this, FilmsPage);

          this.router = router;
          this.api = api;
          this.utils = utils;
        }

        _createClass(FilmsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.films = this.api.getAllFilms();
          }
        }, {
          key: "openDetails",
          value: function openDetails(film) {
            var filmId = this.utils.getIdFromUrl(film === null || film === void 0 ? void 0 : film.url);
            this.router.navigateByUrl("/tabs/films/".concat(filmId));
          }
        }, {
          key: "goToPlanets",
          value: function goToPlanets() {
            this.router.navigateByUrl("/tabs/planets");
          }
        }]);

        return FilmsPage;
      }();

      _FilmsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService
        }];
      };

      _FilmsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-films',
        template: _raw_loader_films_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_films_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FilmsPage);
      /***/
    },

    /***/
    3069:
    /*!*********************************************!*\
      !*** ./src/app/pages/films/films.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxtcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    16764:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/films/films.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Films</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-list>\n        <ion-item button detail lines=\"inset\" *ngFor=\"let film of (films | async)?.results\" (click)=\"openDetails(film)\">\n            {{ film?.title }}\n        </ion-item>\n    </ion-list>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_films_films_module_ts-es5.js.map