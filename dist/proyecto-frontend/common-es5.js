(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/services/curso.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/curso.service.ts ***!
    \*******************************************/

  /*! exports provided: CursoService */

  /***/
  function srcAppServicesCursoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CursoService", function () {
      return CursoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CursoService =
    /*#__PURE__*/
    function () {
      function CursoService(httpClient) {
        this.httpClient = httpClient;
        this.cursoUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/content/courses/";
      }

      var _proto = CursoService.prototype;

      _proto.getCursos = function getCursos() {
        return this.httpClient.get(this.cursoUrl);
      };

      _proto.getCursosDisponibles = function getCursosDisponibles(contenidoId) {
        return this.httpClient.get("" + this.cursoUrl + contenidoId);
      };

      return CursoService;
    }();

    CursoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    CursoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CursoService);
    /***/
  }
}]); //# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map