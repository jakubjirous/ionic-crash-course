(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkionic_crash_course"] = self["webpackChunkionic_crash_course"] || []).push([["src_app_pages_people_people_module_ts"], {
    /***/
    80955:
    /*!*******************************************************!*\
      !*** ./src/app/pages/people/people-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PeoplePageRoutingModule": function PeoplePageRoutingModule() {
          return (
            /* binding */
            _PeoplePageRoutingModule
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


      var _people_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./people.page */
      6338);

      var routes = [{
        path: '',
        component: _people_page__WEBPACK_IMPORTED_MODULE_0__.PeoplePage
      }];

      var _PeoplePageRoutingModule = function PeoplePageRoutingModule() {
        _classCallCheck(this, PeoplePageRoutingModule);
      };

      _PeoplePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PeoplePageRoutingModule);
      /***/
    },

    /***/
    70792:
    /*!***********************************************!*\
      !*** ./src/app/pages/people/people.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PeoplePageModule": function PeoplePageModule() {
          return (
            /* binding */
            _PeoplePageModule
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


      var _people_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./people-routing.module */
      80955);
      /* harmony import */


      var _people_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./people.page */
      6338);

      var _PeoplePageModule = function PeoplePageModule() {
        _classCallCheck(this, PeoplePageModule);
      };

      _PeoplePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _people_routing_module__WEBPACK_IMPORTED_MODULE_0__.PeoplePageRoutingModule],
        declarations: [_people_page__WEBPACK_IMPORTED_MODULE_1__.PeoplePage]
      })], _PeoplePageModule);
      /***/
    },

    /***/
    6338:
    /*!*********************************************!*\
      !*** ./src/app/pages/people/people.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PeoplePage": function PeoplePage() {
          return (
            /* binding */
            _PeoplePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_people_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./people.page.html */
      47131);
      /* harmony import */


      var _people_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./people.page.scss */
      73204);
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

      var _PeoplePage = /*#__PURE__*/function () {
        function PeoplePage(router, api, utils) {
          _classCallCheck(this, PeoplePage);

          this.router = router;
          this.api = api;
          this.utils = utils;
        }

        _createClass(PeoplePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.people = this.api.getAllPeople();
          }
        }, {
          key: "openDetails",
          value: function openDetails(people) {
            var peopleId = this.utils.getIdFromUrl(people === null || people === void 0 ? void 0 : people.url);
            this.router.navigateByUrl("/tabs/people/".concat(peopleId));
          }
        }]);

        return PeoplePage;
      }();

      _PeoplePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService
        }];
      };

      _PeoplePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-people',
        template: _raw_loader_people_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_people_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PeoplePage);
      /***/
    },

    /***/
    73204:
    /*!***********************************************!*\
      !*** ./src/app/pages/people/people.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW9wbGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    47131:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/people/people.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>People</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-list>\n        <ion-item\n            button\n            detail\n            lines=\"inset\"\n            *ngFor=\"let person of (people | async)?.results\"\n            (click)=\"openDetails(person)\"\n        >\n            {{ person?.name }}\n        </ion-item>\n    </ion-list>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_people_people_module_ts-es5.js.map