(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./contenido-interactivo/contenido-interactivo.module": ["./src/app/contenido-interactivo/contenido-interactivo.module.ts", "common", "contenido-interactivo-contenido-interactivo-module"],
      "./cursos/cursos.module": ["./src/app/cursos/cursos.module.ts", "common", "cursos-cursos-module"],
      "./pages/pages.module": ["./src/app/pages/pages.module.ts", "pages-pages-module"],
      "./video-alumno/video-alumno.module": ["./src/app/video-alumno/video-alumno.module.ts"],
      "./video-modal/video-modal.module": ["./src/app/video-modal/video-modal.module.ts"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/question-modal/question-modal.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/question-modal/question-modal.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContenidoInteractivoQuestionModalQuestionModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"hasQuestionsToShow\">\r\n    <div mat-dialog-title class=\"font-title\">{{questionInformation.enunciado}}</div>\r\n    <div mat-dialog-content>\r\n        <div class=\"row\" *ngFor=\"let optionAnswer of optionsArray, let i=index\">\r\n            <div class=\"col-3\">\r\n                <mat-checkbox class=\"margin-left-25\" (change)=\"checkOptionAnswer($event.checked, optionAnswer.idOption)\"\r\n                    [checked]=\"optionAnswer.answerOption\" [disabled]=\"hasFeedBack\"> {{optionAnswer.titleOption}}\r\n                </mat-checkbox>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"hasFeedBack\">\r\n            <div class=\"font-title\">Las respuestas correctas son : </div>\r\n            <div class=\"row\" *ngFor=\"let option of arrayCorrectAnswers, let i=index\">\r\n                <div class=\"col-3 display-flex green-color\">\r\n                    <i class=\"material-icons\"> check_circle_outline</i>{{option.titleAnswer}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-3\" *ngIf=\"!hasFeedBack\" mat-dialog-actions>\r\n            <button mat-button (click)=\"saveAnswer()\">Enviar respuestas</button>\r\n        </div>\r\n        <div class=\"col-3\" mat-dialog-actions>\r\n            <button mat-button (click)=\"continue()\">Continuar</button>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<section id=\"wrapper\" class=\"login-register login-sidebar\"\r\n  style=\"background-image:url(../assets/images/background/blue-waves-background.jpg);\">\r\n  <div class=\"login-box card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"login-box card\">\r\n        <div class=\"card-body\">\r\n          <form ngNativeValidate #f=\"ngForm\" class=\"form-horizontal form-material\" (ngSubmit)=\"ingresar( f )\">\r\n            <img *ngIf=\"true\" class=\"logo\" src=\"../assets/images/logo-5-conectate.png\" alt=\"logo\" />\r\n            <p *ngIf=\"false\" class=\"logo principal\"><b>Conecta-TE</b></p>\r\n            <div>\r\n              <table class=\"login-container\" cellspacing=\"0\">\r\n                <tr>\r\n                  <td>\r\n                    <mat-form-field class=\"col-xs-12\">\r\n                      <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required\r\n                        placeholder=\"Usuario\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Contraseña\" [(ngModel)]=\"password\" type=\"password\" name=\"password\"\r\n                        required>\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n            <!-- <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner> -->\r\n\r\n            <!-- <div class=\"form-group m-t-40\">\r\n          <div class=\"col-xs-12\">\r\n            <input [ngModel]=\"email\" name=\"email\" class=\"form-control\" type=\"email\" required placeholder=\"Correo del usuario\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-xs-12\">\r\n            <input ngModel name=\"password\" class=\"form-control\" type=\"password\" required placeholder=\"Contraseña\">\r\n          </div>\r\n        </div> -->\r\n\r\n\r\n            <!-- <div class=\"form-group row login-container\">\r\n          <div>\r\n            <input [(ngModel)]=\"recuerdame\" name=\"recuerdame\" id=\"checkbox-signup\" type=\"checkbox\" class=\"filled-in chk-col-light-blue\">\r\n            <span for=\"checkbox-signup\"> Recuérdame </span>\r\n            <a *ngIf=\"false\" href=\"#/cursos\" id=\"to-recover\"> Olvide contraseña?</a>\r\n          </div>\r\n        </div> -->\r\n            <div class=\"button-container\">\r\n              <button mat-raised-button color=\"primary\" type=\"submit\"> Ingresar </button>\r\n              <!-- <button class=\"btn-izq\" mat-raised-button>Registrarme</button> -->\r\n            </div>\r\n            <!-- <div class=\"button-container\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            No tienes cuenta? <a routerLink=\"/register\" class=\"text-primary m-l-5\"><b>Crear cuenta</b></a>\r\n          </div>\r\n        </div> -->\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- ============================================================== -->\r\n<!-- End Wrapper -->\r\n<!-- ============================================================== -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/register.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/register.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<section id=\"wrapper\" class=\"login-register login-sidebar\" style=\"background-image:url(../assets/images/background/login-register.jpg);\">\r\n    <div class=\"login-box card\">\r\n        <div class=\"card-body\">\r\n\r\n            <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal form-material\" id=\"loginform\" action=\"index.html\">\r\n                <a href=\"javascript:void(0)\" class=\"text-center db\"><img src=\"../assets/images/logo-icon.png\" alt=\"Home\" /><br/><img src=\"../assets/images/logo-text.png\" alt=\"Home\" /></a>\r\n                <h3 class=\"box-title m-t-40 m-b-0\">Registrate ahora</h3><small> Crea una cuenta y disfruta</small>\r\n                <div class=\"form-group m-t-20\">\r\n                    <div class=\"col-xs-12\">\r\n                        <input formControlName=\"nombre\" name=\"nombre\" class=\"form-control\" type=\"text\" required placeholder=\"Nombre\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group \">\r\n                    <div class=\"col-xs-12\">\r\n                        <input formControlName=\"correo\" name=\"correo\" class=\"form-control\" type=\"email\" required placeholder=\"Correo\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group \">\r\n                    <div class=\"col-xs-12\">\r\n                        <input formControlName=\"password\" name=\"password\" class=\"form-control\" type=\"password\" required placeholder=\"Contraseña\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-xs-12\">\r\n                        <input formControlName=\"password2\" name=\"password2\" class=\"form-control\" type=\"password\" required placeholder=\"Confirma contraseña\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" *ngIf=\"forma.errors?.sonIguales && !forma.pristine\">\r\n                    <p class=\"text-danger\">\r\n                        Las contraseñas deben de se iguales\r\n                    </p>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"checkbox checkbox-primary p-t-0\">\r\n                            <input formControlName=\"condiciones\" name=\"condiciones\" id=\"checkbox-signup\" type=\"checkbox\">\r\n                            <label for=\"checkbox-signup\"> Estoy de acuerdo con los <a href=\"#\">términos</a></label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group text-center m-t-20\">\r\n                    <div class=\"col-xs-12\">\r\n                        <button class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\">Registrarme</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group m-b-0\">\r\n                    <div class=\"col-sm-12 text-center\">\r\n                        <p>¿Tienes una cuenta? <a routerLink=\"/login\" class=\"text-info m-l-5\"><b>Ingresa ahora</b></a></p>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- ============================================================== -->\r\n<!-- End Wrapper -->\r\n<!-- ============================================================== -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === false\">\r\n    <mat-toolbar>Menú</mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item routerLink=\"/cursos\">\r\n        <mat-icon>library_books</mat-icon>Ver Cursos\r\n      </a>\r\n      <!-- <a mat-list-item routerLink=\"/contenido-interactivo\"><mat-icon>apps</mat-icon>Manejar Contenido Interactivo</a> -->\r\n      <a mat-list-item routerLink=\"/contenido-interactivo\"><mat-icon>apps</mat-icon>Contenido Interactivo</a>\r\n      <a mat-list-item routerLink=\"/load-videos\"><mat-icon>library_add</mat-icon>Crear contenido</a>\r\n      <!--\r\n      <mat-tree class=\"tree\" mat-list-item [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n        This is the tree node template for leaf nodes\r\n        <mat-tree-node matTreeNodePaddingIndent=\"15\" class=\"tree\" *matTreeNodeDef=\"let node\" matTreeNodePadding>\r\n          use a disabled button to provide padding for tree leaf\r\n          <button mat-icon-button disabled></button>\r\n          <span *ngIf=\"{{node.name}} === 'Subir Video'\">\r\n\r\n          </span>\r\n          <a href=\"javascript:void(0);\" (click)=\"navNodeLinks(node.name)\">\r\n            <mat-icon *ngIf=\"node.name === 'Subir Video' \">video_library</mat-icon>\r\n            <mat-icon *ngIf=\"node.name === 'Ver Contenido Interactivo' \">dynamic_feed</mat-icon>\r\n            {{node.name}}\r\n          </a>\r\n        </mat-tree-node>\r\n\r\n\r\n        This is the tree node template for expandable nodes\r\n        <mat-tree-node class=\"tree\" *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\r\n          <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\r\n            <mat-icon class=\"mat-icon-rtl-mirror\">\r\n              {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n            </mat-icon>\r\n          </button>\r\n          {{node.name}}\r\n        </mat-tree-node>\r\n      </mat-tree>\r\n      -->\r\n      <!--<a mat-list-item routerLink=\"/video\"><mat-icon>apps</mat-icon>Crear marcas sobre video</a>-->\r\n      <!--<a mat-list-item routerLink=\"/video-alumno\"><mat-icon>apps</mat-icon>ver contenido interactivo estudiante</a>-->\r\n\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\" *ngIf=\"isHandset$ | async\">\r\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span></span>\r\n    </mat-toolbar>\r\n    <!-- Add Content Here -->\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nopagefound/nopagefound.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nopagefound/nopagefound.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNopagefoundNopagefoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"wrapper\" class=\"error-page\">\r\n    <div class=\"error-box\">\r\n        <div class=\"error-body text-center\">\r\n            <h1>404</h1>\r\n            <h3 class=\"text-uppercase\">Page Not Found !</h3>\r\n            <p class=\"text-muted m-t-30 m-b-30\">Parece que encontraste un ratón</p>\r\n            <a routerLink=\"/login\" class=\"btn btn-info btn-rounded waves-effect waves-light m-b-40\">Regresar al login</a> </div>\r\n        <footer class=\"footer text-center\">© {{ anio }} Admin Pro.</footer>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/video-alumno/video-alumno.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video-alumno/video-alumno.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVideoAlumnoVideoAlumnoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"margin: 4%;\"></div>\r\n<div style=\"margin-left: 13%;\" >\r\n    <youtube-player [videoId]=\"id\" [height]=\"480\" [width]=\"852\" (ready)=\"savePlayer($event)\"\r\n    (change)=\"onStateChange($event)\"></youtube-player>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/video-modal/video-modal.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video-modal/video-modal.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVideoModalVideoModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<youtube-player\r\n [videoId]=\"id\"\r\n [height]=\"480\"\r\n [width]=\"854\"\r\n (ready)=\"savePlayer($event)\"\r\n (change)=\"onStateChange($event)\"\r\n ></youtube-player>\r\n<div><button class=\"btn btn-lg btn-outline-primary\" (click)=\"open()\">Agregar marca</button></div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _login_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/register.component */
    "./src/app/login/register.component.ts");
    /* harmony import */


    var _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/nopagefound/nopagefound.component */
    "./src/app/shared/nopagefound/nopagefound.component.ts");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _services_usuario_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/usuario/auth.service */
    "./src/app/services/usuario/auth.service.ts");

    var routes = [{
      path: '',
      component: _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
      canActivate: [_services_usuario_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]],
      children: [{
        path: 'cursos',
        loadChildren: './cursos/cursos.module#CursosModule',
        data: {
          preload: true
        }
      }, {
        path: 'contenido-interactivo',
        loadChildren: './contenido-interactivo/contenido-interactivo.module#ContenidoInteractivoModule',
        data: {
          preload: true
        }
      }, {
        path: 'load-videos',
        loadChildren: './pages/pages.module#PagesModule'
      }, {
        path: 'video',
        loadChildren: './video-modal/video-modal.module#VideoModalModule',
        data: {
          preload: true
        }
      }, {
        path: 'video-alumno',
        loadChildren: './video-alumno/video-alumno.module#VideoAlumnoModule',
        data: {
          preload: true
        }
      }]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _login_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: 'cursos',
      component: _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_5__["NopagefoundComponent"]
    }, {
      path: 'contenido',
      component: _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_5__["NopagefoundComponent"]
    }, {
      path: 'pruebita',
      component: _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_5__["NopagefoundComponent"]
    }, {
      path: 'video',
      component: _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_5__["NopagefoundComponent"]
    }, {
      path: '**',
      component: _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_5__["NopagefoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {};

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        this.id = 'qDuKsiwS5xw';
      }

      var _proto = AppComponent.prototype;

      _proto.savePlayer = function savePlayer(player) {
        this.player = player;
        console.log('player instance', player);
      };

      _proto.onStateChange = function onStateChange(event) {
        console.log('player state', event.data);
      };

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../material.module */
    "./src/material.module.ts");
    /* harmony import */


    var ng2_youtube_player__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng2-youtube-player */
    "./node_modules/ng2-youtube-player/modules/ng2-youtube-player.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _login_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./login/register.component */
    "./src/app/login/register.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./interceptors/auth.interceptor */
    "./src/app/interceptors/auth.interceptor.ts");
    /* harmony import */


    var _video_modal_video_modal_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./video-modal/video-modal.module */
    "./src/app/video-modal/video-modal.module.ts");
    /* harmony import */


    var _video_alumno_video_alumno_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./video-alumno/video-alumno.module */
    "./src/app/video-alumno/video-alumno.module.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js"); // Modulos
    // Modulos


    var AppModule = function AppModule() {};

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _login_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"]],
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"], _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], ng2_youtube_player__WEBPACK_IMPORTED_MODULE_10__["YoutubePlayerModule"], _video_modal_video_modal_module__WEBPACK_IMPORTED_MODULE_16__["VideoModalModule"], _video_alumno_video_alumno_module__WEBPACK_IMPORTED_MODULE_17__["VideoAlumnoModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot(), angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_18__["MDBBootstrapModule"].forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot()],
      providers: [{
        provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogRef"],
        useValue: {}
      }, {
        provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MAT_DIALOG_DATA"],
        useValue: {}
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/contenido-interactivo/question-modal/question-modal.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/contenido-interactivo/question-modal/question-modal.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContenidoInteractivoQuestionModalQuestionModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-dialog-content {\r\n    max-height: -webkit-max-content;\r\n    max-height: -moz-max-content;\r\n    max-height: max-content;\r\n    overflow: initial;\r\n}\r\n\r\nbutton {\r\n    background-color:#43425d;\r\n    color:white;\r\n    margin-top: auto;\r\n    height: 35px;\r\n    width: 90%;\r\n    border-radius: 5px;\r\n    border: none;\r\n    margin-top: 15px;\r\n}\r\n\r\n.display-flex {\r\n    display: flex;\r\n}\r\n\r\n.green-color {\r\n    color: #0aa61b;\r\n}\r\n\r\n.font-title {\r\n    font-size: 25px;\r\n    margin-bottom: 17px;\r\n    border-bottom: solid 1px gray;\r\n    color:#4d4949;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVuaWRvLWludGVyYWN0aXZvL3F1ZXN0aW9uLW1vZGFsL3F1ZXN0aW9uLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBdUI7SUFBdkIsNEJBQXVCO0lBQXZCLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29udGVuaWRvLWludGVyYWN0aXZvL3F1ZXN0aW9uLW1vZGFsL3F1ZXN0aW9uLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0MzQyNWQ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmRpc3BsYXktZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZ3JlZW4tY29sb3Ige1xyXG4gICAgY29sb3I6ICMwYWE2MWI7XHJcbn1cclxuXHJcbi5mb250LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JheTtcclxuICAgIGNvbG9yOiM0ZDQ5NDk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/contenido-interactivo/question-modal/question-modal.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/contenido-interactivo/question-modal/question-modal.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: QuestionModalComponent */

  /***/
  function srcAppContenidoInteractivoQuestionModalQuestionModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionModalComponent", function () {
      return QuestionModalComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_services_activities_service_activities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/activities-service/activities.service */
    "./src/app/services/activities-service/activities.service.ts");
    /* harmony import */


    var src_app_models_mark_questionMultiple_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/mark/questionMultiple.model */
    "./src/app/models/mark/questionMultiple.model.ts");
    /* harmony import */


    var src_app_models_mark_answerQuestion_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/mark/answerQuestion.model */
    "./src/app/models/mark/answerQuestion.model.ts");

    var QuestionModalComponent =
    /*#__PURE__*/
    function () {
      function QuestionModalComponent(dialogRef, data, activityService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.activityService = activityService;
        this.showRetroAlimentation = false;
        this.arrayQuestionsForMark = new Array();
        this.hasQuestionsToShow = false;
        this.hasManyOptions = false;
        this.optionsArray = new Array();
        this.hasFeedBack = false;
        this.arrayCorrectAnswers = new Array();
        this.indexToShow = 0;
        this.studentId = 3;
        this.idGroup = null;
        dialogRef.disableClose = true;
      }

      var _proto2 = QuestionModalComponent.prototype;

      _proto2.ngOnInit = function ngOnInit() {
        this.getQuestion();
      };

      _proto2.saveAnswer = function saveAnswer() {
        this.hasFeedBack = this.arrayQuestionsForMark[this.indexToShow].tieneRetroalimentacion;
        this.callServiceSaveAnswer();

        if (!this.hasFeedBack) {
          this.continue();
        }
      };

      _proto2.continue = function _continue() {
        this.hasFeedBack = false;
        this.indexToShow++;

        if (this.indexToShow <= this.arrayQuestionsForMark.length - 1) {
          this.getQuestionToShow();
        } else {
          this.dialogRef.close();
        }
      };

      _proto2.getQuestion = function getQuestion() {
        var _this = this;

        if (this.data.idMarca !== undefined) {
          console.log('ID MARCA A CONSULTAR ', this.data.idMarca);
          this.activityService.getActivityById(this.data.idMarca).subscribe(function (data) {
            _this.arrayQuestionsForMark = data.body;

            _this.getQuestionToShow();
          }, function (error) {
            console.log('Error getting question information -> ', error);
          });
        }
      };

      _proto2.checkOptionAnswer = function checkOptionAnswer(value, idOptionSelected) {
        var _this2 = this;

        this.optionsArray.forEach(function (answer) {
          if (answer.idOption === idOptionSelected) {
            answer.answerOption = value;
          } else if (!_this2.hasManyOptions) {
            answer.answerOption = false;
          }
        });
      };

      _proto2.generateArrayOptions = function generateArrayOptions(arrayOptions, idQ) {
        var _this3 = this;

        this.optionsArray = new Array();
        arrayOptions.forEach(function (option) {
          _this3.optionsArray.push({
            idOption: option.id,
            idQuestion: idQ,
            answerOption: false,
            titleOption: option.opcion
          });
        });
      };

      _proto2.generateArrayCorrectAnswers = function generateArrayCorrectAnswers(arrayOptions) {
        var _this4 = this;

        this.arrayCorrectAnswers = new Array();
        arrayOptions.forEach(function (option) {
          if (option.esCorrecta) {
            _this4.arrayCorrectAnswers.push({
              titleAnswer: option.opcion
            });
          }
        });
      };

      _proto2.getQuestionToShow = function getQuestionToShow() {
        var _this5 = this;

        this.arrayQuestionsForMark.forEach(function (element, index) {
          if (_this5.indexToShow === index) {
            _this5.questionInformation = new src_app_models_mark_questionMultiple_model__WEBPACK_IMPORTED_MODULE_4__["PreguntaOpcionMultiple"](null, element.enunciado, element.esMultipleResp, element.opciones, element.tieneRetroalimentacion);
            _this5.hasManyOptions = element.esMultipleResp;

            _this5.generateArrayOptions(_this5.questionInformation.opciones, element.id);

            _this5.generateArrayCorrectAnswers(_this5.questionInformation.opciones);
          }
        });

        if (this.questionInformation !== undefined) {
          this.hasQuestionsToShow = true;
        } else {
          this.dialogRef.close();
        }
      };

      _proto2.callServiceSaveAnswer = function callServiceSaveAnswer() {
        var _this6 = this;

        this.activityService.getLastTryByQuestion(this.optionsArray[0].idQuestion, this.studentId).subscribe(function (answerTries) {
          _this6.numberTry = answerTries.body.ultimo_intento + 1;

          _this6.optionsArray.forEach(function (option) {
            if (option.answerOption) {
              var request = new src_app_models_mark_answerQuestion_model__WEBPACK_IMPORTED_MODULE_5__["AnswerQuestion"](option.idOption, _this6.studentId, _this6.numberTry, _this6.idGroup);

              _this6.activityService.postSaveAnswerQuestion(request).subscribe(function (data) {
                console.log('success save answer ', data);
              }, function (error) {
                console.log('Error save answer-> ', error);
              });
            }
          });
        }, function (error) {
          console.log('Error getting question information -> ', error);
        });
      };

      return QuestionModalComponent;
    }();

    QuestionModalComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: src_app_services_activities_service_activities_service__WEBPACK_IMPORTED_MODULE_3__["ActivitiesService"]
      }];
    };

    QuestionModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-question-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./question-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/question-modal/question-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./question-modal.component.css */
      "./src/app/contenido-interactivo/question-modal/question-modal.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], QuestionModalComponent);
    /***/
  },

  /***/
  "./src/app/interaccion-alumno.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/interaccion-alumno.service.ts ***!
    \***********************************************/

  /*! exports provided: InteraccionAlumnoService */

  /***/
  function srcAppInteraccionAlumnoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InteraccionAlumnoService", function () {
      return InteraccionAlumnoService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var InteraccionAlumnoService =
    /*#__PURE__*/
    function () {
      function InteraccionAlumnoService(http) {
        this.http = http;
        this.loadSendUrl = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
      }
      /*   getActividad(marca: number) {
       return this.http.get(this.api_base_url + 'activities/actividad?marca=1' + marca);
      }
          getPregunta(actividad: number) {
       return this.http.get(this.api_base_url + '/activities/resp_op_multiple?esCorrecta=true&preguntaSeleccionMultiple=' + pregunta);
      }*/


      var _proto3 = InteraccionAlumnoService.prototype;

      _proto3.getRetroOpMultiple = function getRetroOpMultiple(pregunta) {
        return this.http.get(this.loadSendUrl + '/activities/resp_op_multiple?esCorrecta=true&preguntaSeleccionMultiple=' + pregunta);
      };

      _proto3.getMarcasXacontenido = function getMarcasXacontenido(idcontenido) {
        return this.http.get(this.loadSendUrl + '/activities/marca?contenido=' + idcontenido);
      };

      return InteraccionAlumnoService;
    }();

    InteraccionAlumnoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    InteraccionAlumnoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InteraccionAlumnoService);
    /***/
  },

  /***/
  "./src/app/interceptors/auth.interceptor.ts":
  /*!**************************************************!*\
    !*** ./src/app/interceptors/auth.interceptor.ts ***!
    \**************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppInterceptorsAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
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


    var _services_usuario_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/usuario/auth.service */
    "./src/app/services/usuario/auth.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(authService) {
        this.authService = authService;
        this.authUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/api-token-auth";
      }

      var _proto4 = AuthInterceptor.prototype;

      _proto4.intercept = function intercept(req, next) {
        if (req.url !== this.authUrl) {
          req = req.clone({
            setHeaders: {
              Authorization: "Token " + this.authService.userToken
            }
          });
        }

        return next.handle(req);
      };

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _services_usuario_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\r\nTemplate Name: Admin pro Admin\r\nAuthor: Wrappixel\r\nEmail: niravjoshi87@gmail.com\r\nFile: scss\r\n*/\r\n\r\n/*\r\nTemplate Name: Admin Pro Admin\r\nAuthor: Wrappixel\r\nEmail: niravjoshi87@gmail.com\r\nFile: scss\r\n*/\r\n\r\n/*Theme Colors*/\r\n\r\n/*bootstrap Color*/\r\n\r\n/*Light colors*/\r\n\r\n/*Normal Color*/\r\n\r\n/*Extra Variable*/\r\n\r\n/*******************\r\nLogin register and recover password Page\r\n******************/\r\n\r\n.login-register {\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 10% 0;\r\n  position: fixed;\r\n}\r\n\r\n.login-box {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.login-box .footer {\r\n  width: 100%;\r\n  left: 0px;\r\n  right: 0px;\r\n}\r\n\r\n.login-box .social {\r\n  display: block;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#recoverform {\r\n  display: none;\r\n}\r\n\r\n.login-sidebar {\r\n  padding: 0px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.login-sidebar .login-box {\r\n  right: 0px;\r\n  position: absolute;\r\n  height: 100%;\r\n}\r\n\r\n.card-body {\r\n  flex: 1 1 auto;\r\n  padding: 1.25rem;\r\n}\r\n\r\n.card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  background-color: #fff;\r\n  background-clip: border-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.logo {\r\n  width: 50%;\r\n  text-align: center;\r\n  margin: 10% 0px 30px 25%;\r\n}\r\n\r\n.principal {\r\n  color: rgba(37, 40, 80, 0.5);\r\n  font-size: 200%;\r\n}\r\n\r\n.login-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  margin-left: 4%;\r\n}\r\n\r\n.button-container {\r\n  margin-left: 4%;\r\n  margin-top: 20px;\r\n}\r\n\r\n.btn-izq {\r\n  margin-left: 30px;\r\n}\r\n\r\n.col-md-6 {\r\n  flex: 0 0 49%;\r\n  max-width: 49%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Q0FLQzs7QUFFRDs7Ozs7Q0FLQzs7QUFFRCxlQUFlOztBQUVmLGtCQUFrQjs7QUFFbEIsZUFBZTs7QUFFZixlQUFlOztBQUVmLGlCQUFpQjs7QUFFakI7O2tCQUVrQjs7QUFFbEI7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBRUUsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUVsQixhQUFhO0VBRWIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBRUUsYUFBYTtFQUNiLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogQWRtaW4gcHJvIEFkbWluXHJcbkF1dGhvcjogV3JhcHBpeGVsXHJcbkVtYWlsOiBuaXJhdmpvc2hpODdAZ21haWwuY29tXHJcbkZpbGU6IHNjc3NcclxuKi9cclxuXHJcbi8qXHJcblRlbXBsYXRlIE5hbWU6IEFkbWluIFBybyBBZG1pblxyXG5BdXRob3I6IFdyYXBwaXhlbFxyXG5FbWFpbDogbmlyYXZqb3NoaTg3QGdtYWlsLmNvbVxyXG5GaWxlOiBzY3NzXHJcbiovXHJcblxyXG4vKlRoZW1lIENvbG9ycyovXHJcblxyXG4vKmJvb3RzdHJhcCBDb2xvciovXHJcblxyXG4vKkxpZ2h0IGNvbG9ycyovXHJcblxyXG4vKk5vcm1hbCBDb2xvciovXHJcblxyXG4vKkV4dHJhIFZhcmlhYmxlKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqXHJcbkxvZ2luIHJlZ2lzdGVyIGFuZCByZWNvdmVyIHBhc3N3b3JkIFBhZ2VcclxuKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmxvZ2luLXJlZ2lzdGVyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTAlIDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4ubG9naW4tYm94IHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5sb2dpbi1ib3ggLmZvb3RlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1ib3ggLnNvY2lhbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI3JlY292ZXJmb3JtIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubG9naW4tc2lkZWJhciB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmxvZ2luLXNpZGViYXIgLmxvZ2luLWJveCB7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAtbXMtZmxleDogMSAxIGF1dG87XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgcGFkZGluZzogMS4yNXJlbTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMCUgMHB4IDMwcHggMjUlO1xyXG59XHJcbi5wcmluY2lwYWwge1xyXG4gIGNvbG9yOiByZ2JhKDM3LCA0MCwgODAsIDAuNSk7XHJcbiAgZm9udC1zaXplOiAyMDAlO1xyXG59XHJcbi5sb2dpbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogNCU7XHJcbn1cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiA0JTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5idG4taXpxIHtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLmNvbC1tZC02IHtcclxuICAtbXMtZmxleDogMCAwIDUwJTtcclxuICBmbGV4OiAwIDAgNDklO1xyXG4gIG1heC13aWR0aDogNDklO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_usuario_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/usuario/auth.service */
    "./src/app/services/usuario/auth.service.ts");
    /* harmony import */


    var _models_login_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/login.model */
    "./src/app/models/login.model.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.recuerdame = false;
      }

      var _proto5 = LoginComponent.prototype;

      _proto5.ngOnInit = function ngOnInit() {} // this.usuario
      ;

      _proto5.ingresar = function ingresar(forma) {
        var _this7 = this;

        console.log(forma);

        if (forma.invalid) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Oops...', 'revisa los datos ingresados', 'error');
          return;
        }

        var userLogin = new _models_login_model__WEBPACK_IMPORTED_MODULE_4__["Login"](forma.value.username, forma.value.password);
        this.authService.login(userLogin).subscribe(function (result) {
          console.log(result);
        }, function (error) {
          console.log(error);
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Oops...', 'revisa los datos ingresados', 'error');
        }, function () {
          _this7.router.navigate(['/cursos']);
        });
      };

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_usuario_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/login/register.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/login/register.component.ts ***!
    \*********************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppLoginRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(router) {
        this.router = router;
      }

      var _proto6 = RegisterComponent.prototype;

      _proto6.sonIguales = function sonIguales(campo1, campo2) {
        return function (group) {
          var pass1 = group.controls[campo1].value;
          var pass2 = group.controls[campo2].value;

          if (pass1 === pass2) {
            return null;
          }

          return {
            sonIguales: true
          };
        };
      };

      _proto6.ngOnInit = function ngOnInit() {};

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/models/login.model.ts":
  /*!***************************************!*\
    !*** ./src/app/models/login.model.ts ***!
    \***************************************/

  /*! exports provided: Login */

  /***/
  function srcAppModelsLoginModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Login", function () {
      return Login;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Login = function Login(username, password) {
      this.username = username;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/models/mark/answerQuestion.model.ts":
  /*!*****************************************************!*\
    !*** ./src/app/models/mark/answerQuestion.model.ts ***!
    \*****************************************************/

  /*! exports provided: AnswerQuestion */

  /***/
  function srcAppModelsMarkAnswerQuestionModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnswerQuestion", function () {
      return AnswerQuestion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AnswerQuestion = function AnswerQuestion(respuestmultiple, estudiante, intento, grupo) {
      this.respuestmultiple = respuestmultiple;
      this.estudiante = estudiante;
      this.intento = intento;
      this.grupo = grupo;
    };
    /***/

  },

  /***/
  "./src/app/models/mark/questionMultiple.model.ts":
  /*!*******************************************************!*\
    !*** ./src/app/models/mark/questionMultiple.model.ts ***!
    \*******************************************************/

  /*! exports provided: PreguntaOpcionMultiple */

  /***/
  function srcAppModelsMarkQuestionMultipleModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreguntaOpcionMultiple", function () {
      return PreguntaOpcionMultiple;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PreguntaOpcionMultiple = function PreguntaOpcionMultiple(id, enunciado, esMultipleResp, opciones, tieneRetroalimentacion) {
      this.id = id;
      this.enunciado = enunciado;
      this.esMultipleResp = esMultipleResp;
      this.opciones = opciones;
      this.tieneRetroalimentacion = tieneRetroalimentacion;
    };
    /***/

  },

  /***/
  "./src/app/pipes/pipes.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/pipes.module.ts ***!
    \***************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PipesModule = function PipesModule() {};

    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [],
      declarations: [],
      exports: []
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/services/activities-service/activities.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/services/activities-service/activities.service.ts ***!
    \*******************************************************************/

  /*! exports provided: ActivitiesService */

  /***/
  function srcAppServicesActivitiesServiceActivitiesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivitiesService", function () {
      return ActivitiesService;
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


    var src_app_services_http_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/http-service/http.service */
    "./src/app/services/http-service/http.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var ActivitiesService =
    /*#__PURE__*/
    function () {
      function ActivitiesService(httpService) {
        this.httpService = httpService;
        this.activitiesUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/activities/";
      }

      var _proto7 = ActivitiesService.prototype;

      _proto7.getActivityById = function getActivityById(id) {
        var url = this.activitiesUrl + 'preguntaOpcionMultiple/' + id + '/';
        return this.httpService.getRequestWithoutParams(url).map(function (response) {
          return response;
        }, function (error) {
          return error;
        });
      };

      _proto7.getMarcaById = function getMarcaById(id) {
        var url = this.activitiesUrl + 'marca';
        var data = {
          contenido: id
        };
        return this.httpService.getRequestWithParams(url, data).map(function (response) {
          return response;
        }, function (error) {
          return error;
        });
      };

      _proto7.postSaveAnswerQuestion = function postSaveAnswerQuestion(answer) {
        var url = this.activitiesUrl + 'respuestaOpcionMultiple/';
        return this.httpService.postJSON(url, answer).map(function (response) {
          return response;
        }, function (error) {
          return error;
        });
      };

      _proto7.getLastTryByQuestion = function getLastTryByQuestion(idQuestion, idStudent) {
        var url = this.activitiesUrl + 'ultimo_intento';
        var data = {
          id_pregunta: idQuestion,
          id_estudiante: idStudent
        };
        return this.httpService.getRequestWithParams(url, data).map(function (response) {
          return response;
        }, function (error) {
          return error;
        });
      };

      return ActivitiesService;
    }();

    ActivitiesService.ctorParameters = function () {
      return [{
        type: src_app_services_http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }];
    };

    ActivitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ActivitiesService);
    /***/
  },

  /***/
  "./src/app/services/contenidoInter/load-video.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/contenidoInter/load-video.service.ts ***!
    \***************************************************************/

  /*! exports provided: LoadVideoService */

  /***/
  function srcAppServicesContenidoInterLoadVideoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadVideoService", function () {
      return LoadVideoService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _usuario_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../usuario/auth.service */
    "./src/app/services/usuario/auth.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _http_service_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../http-service/http.service */
    "./src/app/services/http-service/http.service.ts");

    var LoadVideoService =
    /*#__PURE__*/
    function () {
      function LoadVideoService(http, _authService, httpService) {
        this.http = http;
        this._authService = _authService;
        this.httpService = httpService; // loadSendUrl = `${URL_SERVICIOS}/content/generate-content/`;

        this.loadSendUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/content/generate-content/";
      }

      var _proto8 = LoadVideoService.prototype;

      _proto8.loadUrl = function loadUrl(loadVideo) {
        // Http Headers
        var httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
        console.log(JSON.stringify(loadVideo)); // console.log(this._authService.getDatos().token);

        console.log(httpOptions.headers); // this.httpOptions.headers.set("Authorization", this._authService.getDatos().token);

        return this.http.post(this.loadSendUrl, JSON.stringify(loadVideo), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
          return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
          console.log('Error subiendo url video', err);
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err);
        }));
      };

      _proto8.getInteractiveContentById = function getInteractiveContentById(idContent) {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/content/cont_interactivo";
        console.log('URL TO GET INTERACTIVE CONTENT', url);
        var data = {
          id: idContent
        };
        return this.httpService.getRequestWithParams(url, data).map(function (response) {
          return response;
        }, function (error) {
          return error;
        });
      };

      return LoadVideoService;
    }();

    LoadVideoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _usuario_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _http_service_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]
      }];
    };

    LoadVideoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoadVideoService);
    /***/
  },

  /***/
  "./src/app/services/http-service/http.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/http-service/http.service.ts ***!
    \*******************************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppServicesHttpServiceHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
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


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/catch */
    "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var HttpService =
    /*#__PURE__*/
    function () {
      function HttpService(http) {
        this.http = http;
      }

      var _proto9 = HttpService.prototype;

      _proto9.getHeaders = function getHeaders(contentType, typeMethod) {
        if (typeMethod === 'post') {
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': contentType
          });
        } else {
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        }
      };

      _proto9.postJSON = function postJSON(url, data) {
        return this.http.post(url, data, {
          headers: this.getHeaders('application/json', 'post'),
          observe: 'response'
        });
      };

      _proto9.getRequestWithoutParams = function getRequestWithoutParams(url) {
        return this.http.get(url, {
          headers: this.getHeaders('application/json', 'get'),
          observe: 'response'
        });
      };

      _proto9.getRequestWithParams = function getRequestWithParams(url, data) {
        return this.http.get(url + '?' + this.listParams(data), {
          headers: this.getHeaders('application/json', 'get'),
          observe: 'response'
        });
      };

      _proto9.listParams = function listParams(data) {
        if (data === '') {
          return '';
        } else {
          return Object.keys(data).map(function (key) {
            return key + "=" + encodeURIComponent(data[key]);
          }).join('&');
        }
      };

      return HttpService;
    }();

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HttpService);
    /***/
  },

  /***/
  "./src/app/services/usuario/auth.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/usuario/auth.service.ts ***!
    \**************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesUsuarioAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.authUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/users/api-token-auth/"; // Http Headers

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
        this.dataLog = {
          isAlumno: false,
          dataAlumno: null,
          dataProfesor: null
        };
        console.log('se llamo el servicio');
      }

      var _proto10 = AuthService.prototype;

      _proto10.login = function login(usuario) {
        var _this8 = this;

        return this.http.post(this.authUrl, JSON.stringify(usuario), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
          _this8.userToken = response.token;

          if (response.user.codigo_de_estudiante != undefined) {
            _this8.dataLog.isAlumno = true;
            _this8.dataLog.dataAlumno = response.user;
          } else {
            _this8.dataLog.isAlumno = false;
            _this8.dataLog.dataProfesor = response.user;
          }

          return _this8.dataLog;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
          console.log('Error en el login', err);
          return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(err);
        }));
      };

      _proto10.getDatos = function getDatos() {
        return this.dataLog;
      };

      _proto10.canActivate = function canActivate() {
        var signedIn = !!this.userToken;

        if (!signedIn) {
          this.router.navigateByUrl('/login');
        }

        return signedIn;
      };

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.css":
  /*!****************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 230px;\r\n  background-color: #43425d;\r\n}\r\n\r\n.mat-list-item{\r\n  color: #ffffff;\r\n}\r\n\r\nmat-icon {\r\n  margin-right: 5%;\r\n}\r\n\r\nmat-toolbar {\r\n  color: #ffffff;\r\n}\r\n\r\n.sidenav .mat-toolbar {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.tree {\r\n  background: inherit;\r\n  color: #FFFFFF;\r\n  margin-right: 5%;\r\n  margin-left: 2%;\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  /* font-size: 12px;  */\r\n  /* background-color: #43425d; */\r\n  /* font-weight: bold; */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpREFBaUQ7RUFDakQsc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNDI1ZDtcclxufVxyXG4ubWF0LWxpc3QtaXRlbXtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5tYXQtaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5tYXQtdG9vbGJhciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi50cmVlIHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAvKiBmb250LXNpemU6IDEycHg7ICAqL1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM0MzQyNWQ7ICovXHJcbiAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.ts ***!
    \***************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
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


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TREE_DATA = [{
      name: 'Contenido Interactivo',
      children: [{
        name: 'Subir Video'
      }, {
        name: 'Ver Contenido Interactivo'
      }]
    }];

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(breakpointObserver, router) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
          return result.matches;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());

        this._transformer = function (node, level) {
          return {
            expandable: !!node.children && node.children.length > 0,
            name: node.name,
            level: level
          };
        };

        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["FlatTreeControl"](function (node) {
          return node.level;
        }, function (node) {
          return node.expandable;
        });
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeFlattener"](this._transformer, function (node) {
          return node.level;
        }, function (node) {
          return node.expandable;
        }, function (node) {
          return node.children;
        });
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);

        this.hasChild = function (_, node) {
          return node.expandable;
        };

        this.dataSource.data = TREE_DATA;
      }

      var _proto11 = NavbarComponent.prototype;

      _proto11.navNodeLinks = function navNodeLinks(pag) {
        switch (pag) {
          case 'Subir Video':
            {
              this.router.navigate(['/load-videos']);
              break;
            }

          case 'Ver Contenido Interactivo':
            {
              this.router.navigate(['/contenido-interactivo']);
              break;
            }

          default:
            {
              console.log('Ruta no encontrada para la entrada: ', pag);
              break;
            }
        }
      };

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/shared/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/shared/nopagefound/nopagefound.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/nopagefound/nopagefound.component.ts ***!
    \*************************************************************/

  /*! exports provided: NopagefoundComponent */

  /***/
  function srcAppSharedNopagefoundNopagefoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NopagefoundComponent", function () {
      return NopagefoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NopagefoundComponent =
    /*#__PURE__*/
    function () {
      function NopagefoundComponent() {
        this.anio = new Date().getFullYear();
      }

      var _proto12 = NopagefoundComponent.prototype;

      _proto12.ngOnInit = function ngOnInit() {};

      return NopagefoundComponent;
    }();

    NopagefoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nopagefound',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nopagefound.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nopagefound/nopagefound.component.html")).default,
      styles: ["\n  .error-box {\n    height: 100%;\n    position: fixed;\n    background: url(../../../assets/images/background/error-bg.jpg) no-repeat center center #fff;\n    width: 100%; }\n    .error-box .footer {\n      width: 100%;\n      left: 0px;\n      right: 0px;\n    }\n  .error-body {\n    padding-top: 5%; }\n    .error-body h1 {\n      font-size: 210px;\n      font-weight: 900;\n      text-shadow: 4px 4px 0 #ffffff, 6px 6px 0 #263238;\n      line-height: 210px; }\n  "]
    })], NopagefoundComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nopagefound/nopagefound.component */
    "./src/app/shared/nopagefound/nopagefound.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../material.module */
    "./src/material.module.ts"); // Pipes


    var SharedModule = function SharedModule() {};

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"]],
      declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_6__["NopagefoundComponent"], _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_6__["NopagefoundComponent"]],
      exports: [_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_6__["NopagefoundComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_6__["NopagefoundComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/video-alumno/video-alumno.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/video-alumno/video-alumno.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVideoAlumnoVideoAlumnoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWFsdW1uby92aWRlby1hbHVtbm8uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/video-alumno/video-alumno.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/video-alumno/video-alumno.component.ts ***!
    \********************************************************/

  /*! exports provided: VideoAlumnoComponent */

  /***/
  function srcAppVideoAlumnoVideoAlumnoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoAlumnoComponent", function () {
      return VideoAlumnoComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _interaccion_alumno_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../interaccion-alumno.service */
    "./src/app/interaccion-alumno.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_contenidoInter_load_video_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/contenidoInter/load-video.service */
    "./src/app/services/contenidoInter/load-video.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_contenido_interactivo_question_modal_question_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/contenido-interactivo/question-modal/question-modal.component */
    "./src/app/contenido-interactivo/question-modal/question-modal.component.ts");

    var VideoAlumnoComponent =
    /*#__PURE__*/
    function () {
      function VideoAlumnoComponent(activatedRoute, modalService, retroalimentacionService, dialog, contentService) {
        var _this9 = this;

        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.retroalimentacionService = retroalimentacionService;
        this.dialog = dialog;
        this.contentService = contentService;
        this.idContent = '';
        this.id = '';
        this.activatedRoute.params.subscribe(function (params) {
          console.log('params', params['id']);
          _this9.idContent = params['id'] ? params['id'] : '';
        });
      }

      var _proto13 = VideoAlumnoComponent.prototype;

      _proto13.ngOnInit = function ngOnInit() {
        var _this10 = this;

        console.log('POST call successful value returned in body on init');
        var idPregunta = 1;
        this.retroalimentacionService.getRetroOpMultiple(idPregunta).subscribe(function (data) {
          console.log(data);
          _this10.retroalimentacion = data[0].respuesta;
        });
      };

      _proto13.savePlayer = function savePlayer(player) {
        this.player = player;
        console.log('player instance', player);
        this.getContentInteractive(this.idContent);
        this.getContentMark();
      };

      _proto13.delay = function delay(ms) {
        return new Promise(function (resolve) {
          return setTimeout(resolve, ms);
        });
      };

      _proto13.onStateChange = function onStateChange(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var bol, sleep, i;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  bol = false;

                  sleep = function sleep(milliseconds) {
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, milliseconds);
                    });
                  }; // tslint:disable-next-line:prefer-for-of


                  console.log('player currenttime', this.player.getCurrentTime());
                  i = 0;

                case 4:
                  if (!(i < this.marcas.length)) {
                    _context.next = 17;
                    break;
                  }

                  console.log('player nnn', this.marcas[i].punto);

                  if (!(event.data === YT.PlayerState.PLAYING)) {
                    _context.next = 14;
                    break;
                  }

                case 7:
                  if (!(bol === false)) {
                    _context.next = 14;
                    break;
                  }

                  _context.next = 10;
                  return this.delay(1000);

                case 10:
                  console.log('player currenttime', Math.round(this.player.getCurrentTime()));

                  if (Math.round(this.player.getCurrentTime()) === this.marcas[i].punto) {
                    this.player.pauseVideo();
                    this.open(this.marcas[i]);
                    bol = true;
                    this.marcas.shift();
                    console.log('player marca', this.marcas[i].punto);
                  }

                  _context.next = 7;
                  break;

                case 14:
                  i++;
                  _context.next = 4;
                  break;

                case 17:
                  console.log('player state', event.data);

                case 18:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
      };

      _proto13.open = function open(marca) {
        var _this11 = this;

        var dialogRef = this.dialog.open(src_app_contenido_interactivo_question_modal_question_modal_component__WEBPACK_IMPORTED_MODULE_7__["QuestionModalComponent"], {
          width: '70%',
          data: {
            idActivity: '1',
            idMarca: marca.id
          }
        });
        dialogRef.afterClosed().subscribe(function (result) {
          _this11.player.playVideo();
        });
      };

      _proto13.getContentMark = function getContentMark() {
        var _this12 = this;

        this.retroalimentacionService.getMarcasXacontenido(parseInt(this.idContent, 10)).subscribe(function (val) {
          _this12.marcas = val;
          console.log('POST call successful value returned in body', val);
        }, function (response) {
          console.log('POST call in error', response);
        }, function () {
          console.log('The POST observable is now completed.');
        });
      };

      _proto13.getContentInteractive = function getContentInteractive(idContent) {
        var _this13 = this;

        if (idContent !== undefined) {
          this.contentService.getInteractiveContentById(idContent).subscribe(function (data) {
            _this13.id = data.body[0].contenido.url;
            _this13.id = _this13.id.substr(_this13.id.indexOf('v=') + 2);

            _this13.player.loadVideoById(_this13.id, 0, 'large');
          }, function (error) {
            console.log('Error getting question information -> ', error);
          });
        }
      };

      return VideoAlumnoComponent;
    }();

    VideoAlumnoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _interaccion_alumno_service__WEBPACK_IMPORTED_MODULE_3__["InteraccionAlumnoService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _services_contenidoInter_load_video_service__WEBPACK_IMPORTED_MODULE_5__["LoadVideoService"]
      }];
    };

    VideoAlumnoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-video-alumno',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video-alumno.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/video-alumno/video-alumno.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video-alumno.component.css */
      "./src/app/video-alumno/video-alumno.component.css")).default]
    })], VideoAlumnoComponent);
    /***/
  },

  /***/
  "./src/app/video-alumno/video-alumno.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/video-alumno/video-alumno.module.ts ***!
    \*****************************************************/

  /*! exports provided: VideoAlumnoModule */

  /***/
  function srcAppVideoAlumnoVideoAlumnoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoAlumnoModule", function () {
      return VideoAlumnoModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _video_alumno_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./video-alumno.component */
    "./src/app/video-alumno/video-alumno.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng2_youtube_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-youtube-player */
    "./node_modules/ng2-youtube-player/modules/ng2-youtube-player.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_contenido_interactivo_question_modal_question_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/contenido-interactivo/question-modal/question-modal.component */
    "./src/app/contenido-interactivo/question-modal/question-modal.component.ts");

    var routes = [{
      path: ':id',
      component: _video_alumno_component__WEBPACK_IMPORTED_MODULE_3__["VideoAlumnoComponent"]
    }];

    var VideoAlumnoModule = function VideoAlumnoModule() {};

    VideoAlumnoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [src_app_contenido_interactivo_question_modal_question_modal_component__WEBPACK_IMPORTED_MODULE_9__["QuestionModalComponent"], _video_alumno_component__WEBPACK_IMPORTED_MODULE_3__["VideoAlumnoComponent"]],
      imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ng2_youtube_player__WEBPACK_IMPORTED_MODULE_5__["YoutubePlayerModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      entryComponents: [src_app_contenido_interactivo_question_modal_question_modal_component__WEBPACK_IMPORTED_MODULE_9__["QuestionModalComponent"]],
      providers: [{
        provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"],
        useValue: {}
      }, {
        provide: _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        useValue: {}
      }, {
        provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"],
        useValue: {}
      }],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _video_alumno_component__WEBPACK_IMPORTED_MODULE_3__["VideoAlumnoComponent"]]
    })], VideoAlumnoModule);
    /***/
  },

  /***/
  "./src/app/video-modal/video-modal.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/video-modal/video-modal.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVideoModalVideoModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLW1vZGFsL3ZpZGVvLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/video-modal/video-modal.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/video-modal/video-modal.component.ts ***!
    \******************************************************/

  /*! exports provided: NgbdModal3Content, NgbdModal2Content, NgbdModal1Content, NgbdModalContent, VideoModalComponent */

  /***/
  function srcAppVideoModalVideoModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdModal3Content", function () {
      return NgbdModal3Content;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdModal2Content", function () {
      return NgbdModal2Content;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdModal1Content", function () {
      return NgbdModal1Content;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function () {
      return NgbdModalContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoModalComponent", function () {
      return VideoModalComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-richtexteditor */
    "./node_modules/@syncfusion/ej2-angular-richtexteditor/@syncfusion/ej2-angular-richtexteditor.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var NgbdModal3Content =
    /*#__PURE__*/
    // tslint:disable-next-line:component-class-suffix
    function () {
      function NgbdModal3Content(modalService, activeModal, http, toastr) {
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.http = http;
        this.toastr = toastr;
        this.dynamicArray = [];
        this.newDynamic = {};
      }

      var _proto14 = NgbdModal3Content.prototype;

      _proto14.ngOnInit = function ngOnInit() {
        this.newDynamic = {
          respuesta: "",
          esCorrecta: false,
          preguntaSeleccionMultiple: this.preguntaid
        };
        this.dynamicArray.push(this.newDynamic);
      };

      _proto14.addRow = function addRow(index) {
        this.newDynamic = {
          respuesta: "",
          esCorrecta: false,
          preguntaSeleccionMultiple: this.preguntaid
        };
        this.dynamicArray.push(this.newDynamic);
        this.toastr.success('New row added successfully', 'New Row');
        console.log(this.dynamicArray);
        return true;
      };

      _proto14.deleteRow = function deleteRow(index) {
        if (this.dynamicArray.length == 1) {
          this.toastr.error('Cant delete the row when there is only one row', 'Warning');
          return false;
        } else {
          this.dynamicArray.splice(index, 1);
          this.toastr.warning('Row deleted successfully', 'Delete row');
          return true;
        }
      };

      _proto14.httpPostExample = function httpPostExample() {
        for (var i = 0; i < this.dynamicArray.length; i++) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
          this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/activities/resp_op_multiple", {
            respuesta: this.dynamicArray[i].respuesta,
            esCorrecta: this.dynamicArray[i].esCorrecta,
            preguntaSeleccionMultiple: this.preguntaid
          }, {
            headers: headers
          }).subscribe(function (val) {
            console.log('POST call successful value returned in body', val);
          }, function (response) {
            console.log('POST call in error', response);
          }, function () {
            console.log('The POST observable is now completed.');
          });
        }
      };

      return NgbdModal3Content;
    }();

    NgbdModal3Content.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgbdModal3Content.prototype, "preguntaid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgbdModal3Content.prototype, "respuesta", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgbdModal3Content.prototype, "esCorrecta", void 0);
    NgbdModal3Content = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Agregar Respuestas</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n <br>\n\n  <div class=\"container\" style=\"margin-top: 5%\">    \n    <table class=\"table table-striped table-bordered\">    \n        <thead>    \n            <tr>    \n                <th>Action</th>    \n                <th>Respuesta</th>    \n                <th>Es correcta</th>    \n                <th style=\"display:none;\">Title 3</th>    \n            </tr>    \n        </thead>    \n        <tbody>    \n             <tr *ngFor=\"let dynamic of dynamicArray; let i = index;\">    \n              <td (click)=\"deleteRow(i)\">    \n                <i class=\"fa fa-trash fa-2x\"></i>    \n              </td>    \n                <td>    \n                  <input [(ngModel)]=\"dynamicArray[i].respuesta\" class=\"form-control\" type=\"text\" />    \n                </td>    \n                <td>    \n                  <input [(ngModel)]=\"dynamicArray[i].esCorrecta\" type=\"checkbox\" name=\"vehicle\" value=\"Car\" checked>  \n                </td>    \n                <td style=\"display:none;\">\n                  <input [(ngModel)]=\"dynamicArray[i].preguntaSeleccionMultiple\" class=\"form-control\" type=\"text\"/>    \n                </td>    \n                <td (click)=\"addRow(i)\">    \n                <i class=\"fa fa-plus fa-2x\"></i>    \n              </td>   \n            </tr>       \n        </tbody>    \n    </table>    \n  </div>    \n    </div>\n\n   <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"httpPostExample();activeModal.close('Close click');\">Guardar respuestas</button>\n    </div>\n  ",
      providers: [_syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_5__["ToolbarService"], _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_5__["LinkService"], _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_5__["ImageService"], _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_5__["HtmlEditorService"], _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_5__["TableService"]]
    }) // tslint:disable-next-line:component-class-suffix
    ], NgbdModal3Content);

    var NgbdModal2Content =
    /*#__PURE__*/
    // tslint:disable-next-line:component-class-suffix
    function () {
      function NgbdModal2Content(modalService, activeModal, http) {
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.http = http;
      }

      var _proto15 = NgbdModal2Content.prototype;

      _proto15.httpPostExample = function httpPostExample() {
        var _this14 = this;

        console.log('POST call successful value returned in body', this.pregunta);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/activities/pregunta", {
          Pregunta: this.pregunta,
          actividad: this.actividadid
        }, {
          headers: headers
        }).subscribe(function (val) {
          console.log('POST call successful value returned in body', val);

          var modalRef = _this14.modalService.open(NgbdModal3Content, {
            size: 'lg'
          });

          modalRef.componentInstance.preguntaid = val.id;
        }, function (response) {
          console.log('POST call in error', response);
        }, function () {
          console.log('The POST observable is now completed.');
        });
      };

      return NgbdModal2Content;
    }();

    NgbdModal2Content.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgbdModal2Content.prototype, "actividadid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgbdModal2Content.prototype, "pregunta", void 0);
    NgbdModal2Content = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Agregar pregunta</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p></p>\n        <textarea name=\"comentarios\" rows=\"10\" cols=\"40\"  placeholder=\"Escriba aca su pregunta\" [(ngModel)]=\"pregunta\"></textarea>\n            </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"httpPostExample();activeModal.close('Close click');\">Crear pregunta</button>\n    </div>\n  "
    }) // tslint:disable-next-line:component-class-suffix
    ], NgbdModal2Content);

    var NgbdModal1Content =
    /*#__PURE__*/
    // tslint:disable-next-line:component-class-suffix
    function () {
      function NgbdModal1Content(modalService, activeModal, http) {
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.http = http;
      }

      var _proto16 = NgbdModal1Content.prototype;

      _proto16.httpPostExample = function httpPostExample() {
        var _this15 = this;

        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/activities/actividad", {
          nombre: this.nombre,
          numeroDeIntentos: this.intentos,
          tieneRetroalimentacion: false,
          marca: this.marcaid
        }, {
          headers: headers
        }).subscribe(function (val) {
          console.log('POST call successful value returned in body', val);

          var modalRef = _this15.modalService.open(NgbdModal2Content, {
            size: 'lg'
          });

          modalRef.componentInstance.actividadid = val.id;
        }, function (response) {
          console.log('POST call in error', response);
        }, function () {
          console.log('The POST observable is now completed.');
        });
      };

      return NgbdModal1Content;
    }();

    NgbdModal1Content.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgbdModal1Content.prototype, "marcaid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgbdModal1Content.prototype, "nombre", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgbdModal1Content.prototype, "intentos", void 0);
    NgbdModal1Content = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Agregar Actividad</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p></p>\n        <input type=\"text\" name=\"nombre de marca\" placeholder=\"Nombre de actividad\" [(ngModel)]=\"nombre\" required>\n         <br><br>\n        <input type=\"text\" name=\"nombre de marca\"  placeholder=\"Numero de intentos\" [(ngModel)]=\"intentos\" required>\n\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"httpPostExample();activeModal.close('Close click');\">Crear Actividad</button>\n    </div>\n  "
    }) // tslint:disable-next-line:component-class-suffix
    ], NgbdModal1Content);

    var NgbdModalContent =
    /*#__PURE__*/
    // tslint:disable-next-line:component-class-suffix
    function () {
      function NgbdModalContent(activeModal, http, modalService) {
        this.activeModal = activeModal;
        this.http = http;
        this.modalService = modalService;
      }

      var _proto17 = NgbdModalContent.prototype;

      _proto17.httpPostExample = function httpPostExample() {
        var _this16 = this;

        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/activities/marca", {
          nombre: this.marcaNombre,
          punto: Math.round(this.tiempo),
          contenido: this.idcontenido
        }, {
          headers: headers
        }).subscribe(function (val) {
          console.log('POST call successful value returned in body', val);

          var modalRef = _this16.modalService.open(NgbdModal1Content);

          modalRef.componentInstance.marcaid = val.id;
        }, function (response) {
          console.log('POST call in error', response);
        }, function () {
          console.log('The POST observable is now completed.');
        });
      };

      return NgbdModalContent;
    }();

    NgbdModalContent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgbdModalContent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgbdModalContent.prototype, "tiempo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgbdModalContent.prototype, "idcontenido", void 0);
    NgbdModalContent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      // tslint:disable-next-line:component-selector
      selector: 'ngbd-modal-content',
      template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hola, deseas crear marca en , {{tiempo}}!</p>\n        <input type=\"text\" name=\"nombre de marca\" placeholder=\"Nombre de Marca\" [(ngModel)]=\"marcaNombre\" required>\n\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"httpPostExample();activeModal.close('Close click')\">Crear Marca</button>\n    </div>\n  "
    }) // tslint:disable-next-line:component-class-suffix
    ], NgbdModalContent);

    var VideoModalComponent =
    /*#__PURE__*/
    function () {
      function VideoModalComponent(modalService, http) {
        this.modalService = modalService;
        this.http = http;
        this.idcontenido = 6;
        this.pauseTime = 0;
        this.id = 'qDuKsiwS5xw';
      }

      var _proto18 = VideoModalComponent.prototype;

      _proto18.savePlayer = function savePlayer(player) {
        this.player = player;
        console.log('player instance', player);
      };

      _proto18.onStateChange = function onStateChange(event) {
        /* if (event.data == YT.PlayerState.PAUSED) {
               alert('Me detuve en el segundo  dasd' + this.player.getCurrentTime());
             }
         console.log('player state', event.data);
        */
      };

      _proto18.open = function open() {
        var modalRef = this.modalService.open(NgbdModalContent, {
          size: 'lg'
        });
        modalRef.componentInstance.name = 'World';
        modalRef.componentInstance.tiempo = this.player.getCurrentTime();
        modalRef.componentInstance.idcontenido = this.idcontenido;
        this.tiempo = this.player.getCurrentTime();
      };

      _proto18.ngOnInit = function ngOnInit() {};

      return VideoModalComponent;
    }();

    VideoModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], VideoModalComponent.prototype, "tiempo", void 0);
    VideoModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-video-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/video-modal/video-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video-modal.component.css */
      "./src/app/video-modal/video-modal.component.css")).default]
    })], VideoModalComponent);
    /***/
  },

  /***/
  "./src/app/video-modal/video-modal.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/video-modal/video-modal.module.ts ***!
    \***************************************************/

  /*! exports provided: VideoModalModule */

  /***/
  function srcAppVideoModalVideoModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoModalModule", function () {
      return VideoModalModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _video_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./video-modal.component */
    "./src/app/video-modal/video-modal.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng2_youtube_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-youtube-player */
    "./node_modules/ng2-youtube-player/modules/ng2-youtube-player.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../material.module */
    "./src/material.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var routes = [{
      path: '',
      component: _video_modal_component__WEBPACK_IMPORTED_MODULE_3__["VideoModalComponent"]
    }];

    var VideoModalModule = function VideoModalModule() {};

    VideoModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_video_modal_component__WEBPACK_IMPORTED_MODULE_3__["VideoModalComponent"], _video_modal_component__WEBPACK_IMPORTED_MODULE_3__["NgbdModalContent"], _video_modal_component__WEBPACK_IMPORTED_MODULE_3__["NgbdModal1Content"], _video_modal_component__WEBPACK_IMPORTED_MODULE_3__["NgbdModal2Content"], _video_modal_component__WEBPACK_IMPORTED_MODULE_3__["NgbdModal3Content"]],
      imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ng2_youtube_player__WEBPACK_IMPORTED_MODULE_5__["YoutubePlayerModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _video_modal_component__WEBPACK_IMPORTED_MODULE_3__["VideoModalComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]],
      entryComponents: [_video_modal_component__WEBPACK_IMPORTED_MODULE_3__["NgbdModalContent"], _video_modal_component__WEBPACK_IMPORTED_MODULE_3__["NgbdModal1Content"], _video_modal_component__WEBPACK_IMPORTED_MODULE_3__["NgbdModal2Content"], _video_modal_component__WEBPACK_IMPORTED_MODULE_3__["NgbdModal3Content"]]
    })], VideoModalModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:8000'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/material.module.ts":
  /*!********************************!*\
    !*** ./src/material.module.ts ***!
    \********************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
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


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MaterialModule = function MaterialModule() {};

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_43__["MatFormFieldModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\home\Documents\Universidad Andes\Procesos Agiles\fuentes\Proyecto Final\Sprint 1\Proyecto-Frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map