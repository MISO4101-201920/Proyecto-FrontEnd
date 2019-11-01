(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contenido-interactivo-contenido-interactivo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/add-contenido-a-curso/add-contenido-a-curso.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/add-contenido-a-curso/add-contenido-a-curso.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContenidoInteractivoAddContenidoACursoAddContenidoACursoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>Asignar contenido interactivo</h2>\r\n<div mat-dialog-content>\r\n    <p>\r\n        Seleccione los cursos a los cuales desea asignar el contenido interactivo \"{{data.nombreContenido}}\":\r\n    </p>\r\n    <mat-form-field>\r\n        <mat-label>Seleccione un curso</mat-label>\r\n        <mat-select [formControl]=\"cursosForm\" multiple>\r\n            <mat-option *ngFor=\"let curso of cursos\" [value]=\"curso.id\">{{curso.nombre}}</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <div mat-dialog-actions style=\"float:right;\">\r\n        <button id=\"cancel\" mat-button (click)=\"onNoClick()\">\r\n            Cancelar\r\n        </button>\r\n        <button id=\"submit\" mat-button (click)=\"asociarContenido()\" cdkFocusInitial>\r\n            Asignar contenido\r\n        </button>\r\n    </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/lista-contenido/lista-contenido.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/lista-contenido/lista-contenido.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContenidoInteractivoListaContenidoListaContenidoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <h1>Contenido Interactivo</h1>\r\n    <!--<div class=\"options-grid\">\r\n      <button mat-button [routerLink]=\"['/load-videos/']\" routerLinkActive=\"router-link-active\">Nuevo</button>\r\n    </div>-->\r\n    <div class=\"flex-grid\">\r\n      <div class=\"col\" *ngFor=\"let contenidoInt of contenidos\">\r\n        <mat-card>\r\n          <mat-card-header>\r\n            <mat-card-title>{{contenidoInt.contenido.nombre}}</mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <p>\r\n              Tipo de Contenido: Video \r\n            </p>\r\n            <p>\r\n              Fuente: Youtube\r\n            </p>\r\n            <p>\r\n              Cantidad de cursos: {{contenidoInt.curso.length}}\r\n            </p>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n            <button mat-button [routerLink]=\"['/contenido-interactivo/reporte/' + contenidoInt.contenido.id]\" routerLinkActive=\"router-link-active\">Ver Reporte</button>\r\n            <button mat-button (click)=\"addContenidoACurso(contenidoInt.contenido.id, contenidoInt.contenido.nombre)\">Asignar Cursos</button>\r\n            <button mat-button (click)=\"showVideo(contenidoInt.contenido.id)\">Ver video</button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/many-answers/many-answers.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/many-answers/many-answers.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContenidoInteractivoManyAnswersManyAnswersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n    <ejs-richtexteditor class=\"margin-top-10\" #toolsRTE id='alltoolRTE' [toolbarSettings]='tools' name=\"question\"  [(value)]=\"question\"></ejs-richtexteditor>\r\n    <div class=\"row margin-top-10\">\r\n        <div class=\"col-6\">\r\n            <input class=\"input-answer\" placeholder=\"Ingrese la respuesta\" name=\"answer\" (keyup)=\"onKeyAnswer($event.target.value)\"\r\n                value=\"{{answer}}\">\r\n        </div>\r\n        <div class=\"col-2\">\r\n            <mat-checkbox #checkbox (change)=\"checkStatusAnswer($event.checked)\" [checked]=\"statusAnswer\">Correcta ?</mat-checkbox>\r\n        </div>\r\n        <div class=\"col-4\">\r\n            <button class=\"button-generic button-purple\" (click)=\"addAnswer()\">Añadir Respuesta</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row margin-top-10\">\r\n        <div class=\"col-12 title-answers\">Opciones de Respuesta</div>\r\n        <div class=\"col-3\">Repuesta válida</div>\r\n        <div class=\"col-6\">Enunciado </div>\r\n    </div>\r\n    <div class=\"row\" *ngFor=\"let answer of listAnswers, let i=index\">\r\n            <div class=\"col-3\">\r\n                <mat-checkbox class=\"margin-left-25\" [checked]=\"answer.status\" [disabled]=\"true\"></mat-checkbox>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                {{answer.name}}\r\n            </div>\r\n        </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-6\"> </div>\r\n        <div class=\"col-3\">\r\n            <!--<button class=\"button-generic button-purple\" (click)=\"addQuestion()\">Añadir Pregunta</button>-->\r\n            <button class=\"button-generic button-purple\" (click)=\"addQuestion(); openModal(template)\">Añadir Pregunta</button>\r\n            <ng-template #template>\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title pull-left\">Seleccionar Marca</h4>\r\n                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body info-check\">\r\n                    <form #activityCreate=\"ngForm\" (ngSubmit)=\"onClickSubmit(activityCreate.value); modalRef.hide()\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"activityName\">Nombre Actividad:</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"activityName\" id=\"activityNameValue\" placeholder=\"Nombre actividad\" required ngModel>\r\n                            <label for=\"trysNumber\">N&uacute;mero de intentos:</label>\r\n                            <input type=\"number\" class=\"form-control\" name=\"trysNumber\" id=\"trysNumberValue\" placeholder=\"Número de intentos\" ngModel>\r\n                            <label for=\"trysNumber\">¿Tiene retroalimentaci&oacute;n?</label>\r\n                            <select name=\"retro\" class=\"browser-default custom-select\" ngModel>\r\n                                <option selected>Seleccione un valor...</option>\r\n                                <option value=\"true\">Si</option>\r\n                                <option value=\"false\">No</option>\r\n                            </select>\r\n                            <label for=\"periodValue\">Contenido:</label>\r\n                            <select name=\"content\" (change)=\"selectContentId($event.target.value)\" class=\"browser-default custom-select\" ngModel>\r\n                                <option selected>Seleccione un valor...</option>\r\n                                <ng-container *ngFor=\"let content of existingContent\">\r\n                                    <option [value]=\"content.id\">{{ content.contenido.nombre }}</option>\r\n                                </ng-container>\r\n                            </select>\r\n                            <label *ngIf=\"makersLoaded == true\" for=\"periodValue\">Marca:</label>\r\n                            <select *ngIf=\"makersLoaded == true\" name=\"marker\" class=\"browser-default custom-select\" ngModel>\r\n                                <option selected>Open this select menu</option>\r\n                                <ng-container *ngFor=\"let mark of existingMarkers\">\r\n                                    <option [value]=\"mark.id\">{{ mark.nombre }}</option>\r\n                                </ng-container>\r\n                            </select>\r\n                        </div>\r\n                        <button type=\"submit\" class=\"btn btn-primary\">A&ntilde;adir pregunta</button>\r\n                    </form>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"modalRef.hide()\">Cancelar</button>\r\n                </div>\r\n            </ng-template>\r\n        </div>\r\n        <div class=\"col-3\">\r\n            <button class=\"button-generic button-gray\" (click)=\"restartData()\">Cancelar</button>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/markers/markers.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/markers/markers.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContenidoInteractivoMarkersMarkersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <h1>Añadir Marcadores:</h1>\r\n    <div class=\"row container-markers\">\r\n        <div class=\"col-3 align-self-start gray-border padding-cero\">\r\n            <div>\r\n                <div class=\"contain-title-option\">\r\n                    <div class=\"font-25 font-gray margin-left-10\">Añadir Marcador </div>\r\n                </div>\r\n                <div *ngFor=\"let option of optionsMarkers, let i=index\">\r\n                    <button [ngClass]=\"option.active ? 'btnActive': ''\" class=\"button-generic  button-options font-gray\" (click)=\"redirectSpecificOption(option.id)\">{{option.name}}</button>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div class=\"contain-title-option\">\r\n                    <div class=\"font-25 font-gray margin-left-10\">Marcadores Añadidos</div>\r\n                </div>\r\n                <div *ngFor=\"let marker of markersAdded, let i=index\">\r\n                    <button class=\"button-generic button-options font-gray\">{{marker.name}}</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--control component to show for specific option marker-->\r\n        <div class=\"col-9 gray-border\">\r\n            <div *ngIf=\"showBasicMarker\">Basic</div>\r\n            <div *ngIf=\"showSpecificAnswer\">Pregunta abierta</div>\r\n            <div *ngIf=\"shwowAnswerTrueFalse\">Pregunta falso verdadero</div>\r\n            <app-many-answers *ngIf=\"showManyAnswers\"></app-many-answers>\r\n            <div *ngIf=\"showComment\">Comentario</div>\r\n            <div *ngIf=\"showForum\">Foro</div>\r\n            <div *ngIf=\"showQuestionnaire\">Cuestionario</div>\r\n            <div *ngIf=\"showLink\">Enlace</div>\r\n        </div>\r\n    </div>\r\n    <!--\r\n    <div class=\"row container-markers\">\r\n        <div class=\"col-6 padding-cero\"></div>\r\n        <div class=\"col-2 align-self-center padding-right-cero\">\r\n            <button class=\"button-generic button-blue\" (click)=\"addMark()\">Añadir Marca</button>\r\n        </div>\r\n        <div class=\"col-2 align-self-center padding-right-cero\">\r\n            <button class=\"button-generic button-purple\" (click)=\"preview()\">Vista Previa</button>\r\n        </div>\r\n        <div class=\"col-2 align-self-center padding-right-cero\">\r\n            <button class=\" button-generic button-orange\" (click)=\"deleteMark()\">Borrar Marca</button>\r\n        </div>\r\n    </div>\r\n    -->\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/reporte-contenido/reporte-contenido.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/reporte-contenido/reporte-contenido.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContenidoInteractivoReporteContenidoReporteContenidoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <h1>Reporte de distribución porcentual de respuestas</h1>\r\n    <ng-container *ngIf=dataSource>\r\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n            <ng-container matColumnDef=\"pregunta\">\r\n                <th mat-header-cell *matHeaderCellDef> Pregunta </th>\r\n                <td mat-cell *matCellDef=\"let actividad\">\r\n                    <p>{{actividad.preguntas[0].pregunta}} </p>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"posiblesRespuestas\">\r\n                <th mat-header-cell *matHeaderCellDef> Posibles Respuestas </th>\r\n                <td mat-cell *matCellDef=\"let actividad\"> \r\n                    <ng-container *ngIf=\"actividad.preguntas[0].tipo === 'multiple'\">\r\n                        <div *ngFor=\"let opcion of actividad.preguntas[0].opciones\">\r\n                            <p [class.correcta]=\"opcion.esCorrecta\"\r\n                            >{{opcion.respuesta}}</p>\r\n                        </div>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"actividad.preguntas[0].tipo === 'verdadero/falso'\">\r\n                        <p [class.correcta]=\"actividad.preguntas[0].respuestaCorrecta\" >Verdadero</p>\r\n                        <p [class.correcta]=\"!actividad.preguntas[0].respuestaCorrecta\">Falso</p>\r\n                    </ng-container>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"respuestasOpcion\">\r\n                <th mat-header-cell *matHeaderCellDef> % Respuestas por opcion </th>\r\n                <td mat-cell *matCellDef=\"let actividad\"> \r\n                    <ng-container *ngIf=\"actividad.preguntas[0].tipo === 'multiple'\">\r\n                        <div *ngFor=\"let opcion of actividad.preguntas[0].opciones\">\r\n                            <p>{{opcion.porcentajeRespuesta }}%</p>\r\n                        </div>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"actividad.preguntas[0].tipo === 'verdadero/falso'\">\r\n                        <p>{{actividad.preguntas[0].porcentajeVerdadero}}%</p>\r\n                        <p>{{actividad.preguntas[0].porcentajeFalso}}%</p>\r\n                    </ng-container>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"porcentajeRespuesta\">\r\n                <th mat-header-cell *matHeaderCellDef> Total Respuestas </th>\r\n                <td mat-cell *matCellDef=\"let actividad\"> {{actividad.preguntas[0].total_respuestas}} </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n    </ng-container>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/contenido-interactivo/add-contenido-a-curso/add-contenido-a-curso.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/contenido-interactivo/add-contenido-a-curso/add-contenido-a-curso.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContenidoInteractivoAddContenidoACursoAddContenidoACursoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n.mat-dialog-content {\r\n  height: 185px;\r\n}\r\n\r\n#submit {\r\n  background-color: #225c32;\r\n  color: white;\r\n}\r\n\r\n#cancel {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVuaWRvLWludGVyYWN0aXZvL2FkZC1jb250ZW5pZG8tYS1jdXJzby9hZGQtY29udGVuaWRvLWEtY3Vyc28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBQ0E7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbmlkby1pbnRlcmFjdGl2by9hZGQtY29udGVuaWRvLWEtY3Vyc28vYWRkLWNvbnRlbmlkby1hLWN1cnNvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gIGhlaWdodDogMTg1cHg7XHJcbn1cclxuXHJcbiNzdWJtaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjVjMzI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiNjYW5jZWwge1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contenido-interactivo/add-contenido-a-curso/add-contenido-a-curso.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/contenido-interactivo/add-contenido-a-curso/add-contenido-a-curso.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: AddContenidoACursoComponent */

  /***/
  function srcAppContenidoInteractivoAddContenidoACursoAddContenidoACursoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddContenidoACursoComponent", function () {
      return AddContenidoACursoComponent;
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


    var src_app_services_curso_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/curso.service */
    "./src/app/services/curso.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_contenido_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/contenido.service */
    "./src/app/services/contenido.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var AddContenidoACursoComponent =
    /*#__PURE__*/
    function () {
      function AddContenidoACursoComponent(data, snackBar, cursoService, contenidoService, dialogRef) {
        this.data = data;
        this.snackBar = snackBar;
        this.cursoService = cursoService;
        this.contenidoService = contenidoService;
        this.dialogRef = dialogRef;
        this.cursosForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
      }

      var _proto = AddContenidoACursoComponent.prototype;

      _proto.ngOnInit = function ngOnInit() {
        var _this = this;

        this.cursoService.getCursosDisponibles(this.data.contenidoId).subscribe(function (cursos) {
          console.log('data', cursos);
          _this.cursos = cursos;
        });
      };

      _proto.asociarContenido = function asociarContenido() {
        var _this2 = this;

        if (this.cursosForm.valid) {
          console.log('values', this.cursosForm.value, this.cursosForm);
          this.contenidoService.postContenidos(this.cursosForm.value, this.data.contenidoId).subscribe(function (result) {
            console.log(result);

            _this2.dialogRef.close(); // @ts-ignore


            if (result.status === 'success') {
              _this2.snackBar.open('El contenido interactivo se ha asignado correctamente', '', {
                duration: 3000
              });
            } else {
              _this2.snackBar.open('El contenido interactivo no se ha podido asignar', 'Error', {
                duration: 3000
              });
            }
          });
        }
      };

      _proto.onNoClick = function onNoClick() {
        this.dialogRef.close();
      };

      return AddContenidoACursoComponent;
    }();

    AddContenidoACursoComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
      }, {
        type: src_app_services_curso_service__WEBPACK_IMPORTED_MODULE_3__["CursoService"]
      }, {
        type: src_app_services_contenido_service__WEBPACK_IMPORTED_MODULE_5__["ContenidoService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    AddContenidoACursoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-contenido-a-curso',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-contenido-a-curso.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/add-contenido-a-curso/add-contenido-a-curso.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-contenido-a-curso.component.css */
      "./src/app/contenido-interactivo/add-contenido-a-curso/add-contenido-a-curso.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AddContenidoACursoComponent);
    /***/
  },

  /***/
  "./src/app/contenido-interactivo/contenido-interactivo.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/contenido-interactivo/contenido-interactivo.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ContenidoInteractivoModule */

  /***/
  function srcAppContenidoInteractivoContenidoInteractivoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContenidoInteractivoModule", function () {
      return ContenidoInteractivoModule;
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


    var _lista_contenido_lista_contenido_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lista-contenido/lista-contenido.component */
    "./src/app/contenido-interactivo/lista-contenido/lista-contenido.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/material.module */
    "./src/material.module.ts");
    /* harmony import */


    var _add_contenido_a_curso_add_contenido_a_curso_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-contenido-a-curso/add-contenido-a-curso.component */
    "./src/app/contenido-interactivo/add-contenido-a-curso/add-contenido-a-curso.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _reporte_contenido_reporte_contenido_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./reporte-contenido/reporte-contenido.component */
    "./src/app/contenido-interactivo/reporte-contenido/reporte-contenido.component.ts");
    /* harmony import */


    var _markers_markers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./markers/markers.component */
    "./src/app/contenido-interactivo/markers/markers.component.ts");
    /* harmony import */


    var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-richtexteditor */
    "./node_modules/@syncfusion/ej2-angular-richtexteditor/@syncfusion/ej2-angular-richtexteditor.js");
    /* harmony import */


    var _many_answers_many_answers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./many-answers/many-answers.component */
    "./src/app/contenido-interactivo/many-answers/many-answers.component.ts");

    var routes = [{
      path: '',
      component: _lista_contenido_lista_contenido_component__WEBPACK_IMPORTED_MODULE_3__["ListaContenidoComponent"]
    }, {
      path: 'reporte/:id',
      component: _reporte_contenido_reporte_contenido_component__WEBPACK_IMPORTED_MODULE_9__["ReporteContenidoComponent"]
    }, {
      path: 'manejar',
      component: _markers_markers_component__WEBPACK_IMPORTED_MODULE_10__["MarkersComponent"]
    }];

    var ContenidoInteractivoModule = function ContenidoInteractivoModule() {};

    ContenidoInteractivoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_lista_contenido_lista_contenido_component__WEBPACK_IMPORTED_MODULE_3__["ListaContenidoComponent"], _add_contenido_a_curso_add_contenido_a_curso_component__WEBPACK_IMPORTED_MODULE_6__["AddContenidoACursoComponent"], _reporte_contenido_reporte_contenido_component__WEBPACK_IMPORTED_MODULE_9__["ReporteContenidoComponent"], _markers_markers_component__WEBPACK_IMPORTED_MODULE_10__["MarkersComponent"], _many_answers_many_answers_component__WEBPACK_IMPORTED_MODULE_12__["ManyAnswersComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_11__["RichTextEditorAllModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
      entryComponents: [_add_contenido_a_curso_add_contenido_a_curso_component__WEBPACK_IMPORTED_MODULE_6__["AddContenidoACursoComponent"]],
      providers: [{
        provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"],
        useValue: {}
      }]
    })], ContenidoInteractivoModule);
    /***/
  },

  /***/
  "./src/app/contenido-interactivo/lista-contenido/lista-contenido.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/contenido-interactivo/lista-contenido/lista-contenido.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContenidoInteractivoListaContenidoListaContenidoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n    margin: 2%;\r\n}\r\n\r\nmat-card {\r\n  width: 95%;\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 5%;\r\n}\r\n\r\nmat-card-header {\r\n  flex-shrink: 0;\r\n}\r\n\r\nmat-card-content {\r\n  flex-grow: 1;\r\n  overflow: auto;\r\n  margin:30px;\r\n}\r\n\r\nbutton {\r\n  background-color: #225c32;\r\n  color: white;\r\n  margin-top: auto;\r\n}\r\n\r\n.flex-grid {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-top: 3%;\r\n}\r\n\r\n.col {\r\n  max-width: 33%;\r\n  min-width: 33%;\r\n  margin-bottom: 7%;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .flex-grid {\r\n    display: block;\r\n    justify-content: center;\r\n  }\r\n  .col {\r\n    width: 100%;\r\n    min-width: 100%;\r\n    max-width: 100%;\r\n    margin: 0 0 10px 0;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 801px) {\r\n  .flex-grid {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-top: 3%;\r\n  }\r\n  .col {\r\n    width: 100%;\r\n    min-width: 50%;\r\n    max-width: 50%;\r\n    margin: 0 0 10px 0;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1180px) {\r\n  .flex-grid {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-top: 3%;\r\n  }\r\n  .col {\r\n    width: 100%;\r\n    min-width: 33%;\r\n    max-width: 33%;\r\n    margin: 0 0 10px 0;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVuaWRvLWludGVyYWN0aXZvL2xpc3RhLWNvbnRlbmlkby9saXN0YS1jb250ZW5pZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRTtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGVuaWRvLWludGVyYWN0aXZvL2xpc3RhLWNvbnRlbmlkby9saXN0YS1jb250ZW5pZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyJTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxubWF0LWNhcmQtaGVhZGVyIHtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1hcmdpbjozMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjVjMzI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbi5mbGV4LWdyaWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcbi5jb2wge1xyXG4gIG1heC13aWR0aDogMzMlO1xyXG4gIG1pbi13aWR0aDogMzMlO1xyXG4gIG1hcmdpbi1ib3R0b206IDclO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmZsZXgtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuY29sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAxcHgpIHtcclxuICAuZmxleC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICB9XHJcbiAgLmNvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTgwcHgpIHtcclxuICAuZmxleC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICB9XHJcbiAgLmNvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMzMlO1xyXG4gICAgbWF4LXdpZHRoOiAzMyU7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contenido-interactivo/lista-contenido/lista-contenido.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/contenido-interactivo/lista-contenido/lista-contenido.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ListaContenidoComponent */

  /***/
  function srcAppContenidoInteractivoListaContenidoListaContenidoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaContenidoComponent", function () {
      return ListaContenidoComponent;
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


    var src_app_services_contenido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/contenido.service */
    "./src/app/services/contenido.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _add_contenido_a_curso_add_contenido_a_curso_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../add-contenido-a-curso/add-contenido-a-curso.component */
    "./src/app/contenido-interactivo/add-contenido-a-curso/add-contenido-a-curso.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ListaContenidoComponent =
    /*#__PURE__*/
    function () {
      function ListaContenidoComponent(contenidoService, dialog, router) {
        this.contenidoService = contenidoService;
        this.dialog = dialog;
        this.router = router;
        this.showAddMarker = false;
      }

      var _proto2 = ListaContenidoComponent.prototype;

      _proto2.ngOnInit = function ngOnInit() {
        this.getContenidos();
      };

      _proto2.getContenidos = function getContenidos() {
        var _this3 = this;

        this.contenidoService.getContenidos().subscribe(function (data) {
          console.log('data', data);
          _this3.contenidos = data;
        });
      };

      _proto2.addContenidoACurso = function addContenidoACurso(contenidoId, nombreContenido) {
        var _this4 = this;

        var dialogRef = this.dialog.open(_add_contenido_a_curso_add_contenido_a_curso_component__WEBPACK_IMPORTED_MODULE_4__["AddContenidoACursoComponent"], {
          width: '60%',
          data: {
            contenidoId: contenidoId,
            nombreContenido: nombreContenido
          }
        });
        dialogRef.afterClosed().subscribe(function (_) {
          _this4.getContenidos();
        });
      };

      _proto2.addMarker = function addMarker() {
        this.showAddMarker = true;
      };

      _proto2.showVideo = function showVideo(idVideo) {
        console.log('ir a ver video');
        this.router.navigate(['/video-alumno', idVideo]);
      };

      return ListaContenidoComponent;
    }();

    ListaContenidoComponent.ctorParameters = function () {
      return [{
        type: src_app_services_contenido_service__WEBPACK_IMPORTED_MODULE_2__["ContenidoService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ListaContenidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lista-contenido',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lista-contenido.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/lista-contenido/lista-contenido.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lista-contenido.component.css */
      "./src/app/contenido-interactivo/lista-contenido/lista-contenido.component.css")).default]
    })], ListaContenidoComponent);
    /***/
  },

  /***/
  "./src/app/contenido-interactivo/many-answers/many-answers.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/contenido-interactivo/many-answers/many-answers.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContenidoInteractivoManyAnswersManyAnswersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-answer{\r\n    width: 100%;\r\n    border: 0.5px solid #b7b4b4;  \r\n}\r\n\r\n.padding-right-cero {\r\n    padding-right: 0;\r\n}\r\n\r\n.button-generic {\r\n    height: 30px;\r\n    width: 100%;\r\n    border: none;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n.button-purple {\r\n    background-color: #413455;\r\n    color: white;\r\n}\r\n\r\n.button-gray {\r\n   border: 0.5px solid #413455;\r\n    color: #413455;\r\n}\r\n\r\n.margin-top-10 {\r\n    margin-top: 10px;\r\n}\r\n\r\n.title-answers {\r\n    margin: 10px 0px 10px 0px;\r\n    font-size: 18px;\r\n}\r\n\r\n.mat-checkbox-inner-container{\r\n    height: 25px;\r\n    width: 25px;\r\n}\r\n\r\n.margin-left-25 {\r\n    margin-left: 25%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVuaWRvLWludGVyYWN0aXZvL21hbnktYW5zd2Vycy9tYW55LWFuc3dlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7R0FDRywyQkFBMkI7SUFDMUIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbmlkby1pbnRlcmFjdGl2by9tYW55LWFuc3dlcnMvbWFueS1hbnN3ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtYW5zd2Vye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNiN2I0YjQ7ICBcclxufVxyXG5cclxuLnBhZGRpbmctcmlnaHQtY2VybyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uYnV0dG9uLWdlbmVyaWMge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24tcHVycGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTM0NTU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idXR0b24tZ3JheSB7XHJcbiAgIGJvcmRlcjogMC41cHggc29saWQgIzQxMzQ1NTtcclxuICAgIGNvbG9yOiAjNDEzNDU1O1xyXG59XHJcblxyXG4ubWFyZ2luLXRvcC0xMCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udGl0bGUtYW5zd2VycyB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbi5tYXJnaW4tbGVmdC0yNSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/contenido-interactivo/many-answers/many-answers.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/contenido-interactivo/many-answers/many-answers.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ManyAnswersComponent */

  /***/
  function srcAppContenidoInteractivoManyAnswersManyAnswersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManyAnswersComponent", function () {
      return ManyAnswersComponent;
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


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-richtexteditor */
    "./node_modules/@syncfusion/ej2-angular-richtexteditor/@syncfusion/ej2-angular-richtexteditor.js");
    /* harmony import */


    var _services_activity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/activity.service */
    "./src/app/services/activity.service.ts");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var _services_mark_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/mark.service */
    "./src/app/services/mark.service.ts");
    /* harmony import */


    var _services_content_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/content.service */
    "./src/app/services/content.service.ts");

    var ManyAnswersComponent =
    /*#__PURE__*/
    function () {
      function ManyAnswersComponent(modalService, contentService, markService, activityService, questionService) {
        this.modalService = modalService;
        this.contentService = contentService;
        this.markService = markService;
        this.activityService = activityService;
        this.questionService = questionService;
        this.statusAnswer = false;
        this.listAnswers = new Array();
        this.questionDto = new Array();
        this.tools = {
          items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', '|', 'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|', 'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|', 'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|', 'Indent', 'Outdent', '|', 'CreateLink', 'CreateTable', 'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
        };
      }

      var _proto3 = ManyAnswersComponent.prototype;

      _proto3.ngOnInit = function ngOnInit() {
        var _this5 = this;

        this.contentService.getAllContent().subscribe(function (data) {
          _this5.existingContent = data;
        });
      };

      _proto3.onKeyAnswer = function onKeyAnswer(value) {
        this.answer = value;
      };

      _proto3.checkStatusAnswer = function checkStatusAnswer(value) {
        this.statusAnswer = value;
      };

      _proto3.addAnswer = function addAnswer() {
        this.listAnswers.push({
          name: this.answer,
          status: this.statusAnswer
        });
        this.answer = '';
        this.statusAnswer = false;
      };

      _proto3.addQuestion = function addQuestion() {
        this.questionDto.push({
          question: this.question,
          answers: this.listAnswers
        });
      };

      _proto3.restartData = function restartData() {
        this.question = '';
        this.statusAnswer = false;
        this.answer = '';
        this.listAnswers = new Array();
        this.questionDto = new Array();
        this.makersLoaded = false;
        this.existingMarkers = [];
        this.contentSelectedOption = "";
      };

      _proto3.openModal = function openModal(template) {
        this.modalRef = this.modalService.show(template);
      };

      _proto3.selectContentId = function selectContentId(filterVal) {
        var _this6 = this;

        this.makersLoaded = false;
        console.log(filterVal);
        this.markService.getMarkersFromContent(parseInt(filterVal)).subscribe(function (data) {
          _this6.existingMarkers = [];
          _this6.existingMarkers = data;
          _this6.makersLoaded = true;
        });
      }
      /*
      selectMarkerId(markerId: any) {
        this.makersLoaded = false;
        console.log(markerId);
        this.selectMarkerId = markerId;
        this.makersLoaded = true;
        //this.markService.getMarkersFromContent(parseInt(filterVal)).subscribe( data => {
        //  this.existingContent = data;
        //  this.makersLoaded = true;
        //});
      }
      */
      ;

      _proto3.onClickSubmit = function onClickSubmit(formData) {
        var _this7 = this;

        this.questionDto.forEach(function (obj) {
          var questText = obj.question.replace('<p>', '').replace('</p>', '');

          _this7.activityService.createActivity(formData.activityName, formData.trysNumber, JSON.parse(formData.retro), parseInt(formData.marker)).subscribe(function (data) {
            _this7.questionService.createQuestion(questText, data.id).subscribe(function (res) {
              obj.answers.forEach(function (obj2) {
                _this7.questionService.createMultipleOptionAnswer(obj2.name, obj2.status, res.id).subscribe(function (data) {
                  console.log("Exito");
                });
              });

              _this7.restartData();
            });
          });
        });
      };

      return ManyAnswersComponent;
    }();

    ManyAnswersComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: _services_content_service__WEBPACK_IMPORTED_MODULE_7__["ContentService"]
      }, {
        type: _services_mark_service__WEBPACK_IMPORTED_MODULE_6__["MarkService"]
      }, {
        type: _services_activity_service__WEBPACK_IMPORTED_MODULE_4__["ActivityService"]
      }, {
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"]
      }];
    };

    ManyAnswersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-many-answers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./many-answers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/many-answers/many-answers.component.html")).default,
      providers: [_syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_3__["ToolbarService"], _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_3__["LinkService"], _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_3__["ImageService"], _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_3__["HtmlEditorService"], _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_3__["TableService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./many-answers.component.css */
      "./src/app/contenido-interactivo/many-answers/many-answers.component.css")).default]
    })], ManyAnswersComponent);
    /***/
  },

  /***/
  "./src/app/contenido-interactivo/markers/markers.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/contenido-interactivo/markers/markers.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContenidoInteractivoMarkersMarkersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n    margin: 2%;\r\n}\r\n.container-markers{\r\n    width: 98%;\r\n    background-color: white;\r\n}\r\n.gray-border {\r\n    border: 0.5px solid #b7b4b4;\r\n}\r\n.font-gray {\r\n    color: #3e3d3d;\r\n}\r\n.font-25 {\r\n    font-size: 25px;\r\n}\r\n.contain-title-option {\r\n    border-bottom: 0.5px solid #b7b4b4;\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: end;\r\n}\r\n.padding-cero {\r\n    padding: 0;\r\n}\r\n.padding-right-cero {\r\n    padding-right: 0;\r\n}\r\n.button-generic {\r\n    height: 35px;\r\n    width: 100%;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.button-options {\r\n    text-align: left;\r\n    background-color: transparent;\r\n}\r\n.button-options:hover {\r\n    background-color: rgb(189, 187, 187);\r\n}\r\n.margin-left-10 {\r\n    margin-left: 10px;\r\n}\r\n.button-blue {\r\n    text-align: center;\r\n    background-color: #157497;\r\n    color: white;\r\n}\r\n.button-purple {\r\n    text-align: center;\r\n    background-color: #413455;\r\n    color: white;\r\n}\r\n.button-orange {\r\n    text-align: center;\r\n    background-color: #9b5e3f;\r\n    color: white;\r\n}\r\n.text-center {\r\n    text-align: center;\r\n}\r\n.btnActive{\r\n    background-color: rgb(189, 187, 187);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVuaWRvLWludGVyYWN0aXZvL21hcmtlcnMvbWFya2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLG9DQUFvQztBQUN4QztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbmlkby1pbnRlcmFjdGl2by9tYXJrZXJzL21hcmtlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyJTtcclxufVxyXG4uY29udGFpbmVyLW1hcmtlcnN7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ncmF5LWJvcmRlciB7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNiN2I0YjQ7XHJcbn1cclxuXHJcbi5mb250LWdyYXkge1xyXG4gICAgY29sb3I6ICMzZTNkM2Q7XHJcbn1cclxuXHJcbi5mb250LTI1IHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmNvbnRhaW4tdGl0bGUtb3B0aW9uIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiN2I0YjQ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcclxufVxyXG4ucGFkZGluZy1jZXJvIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXJpZ2h0LWNlcm8ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuLmJ1dHRvbi1nZW5lcmljIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnV0dG9uLW9wdGlvbnMge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnV0dG9uLW9wdGlvbnM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgMTg3LCAxODcpO1xyXG59XHJcblxyXG4ubWFyZ2luLWxlZnQtMTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tYmx1ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU3NDk3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnV0dG9uLXB1cnBsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDEzNDU1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnV0dG9uLW9yYW5nZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWI1ZTNmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG5BY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAxODcsIDE4Nyk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/contenido-interactivo/markers/markers.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/contenido-interactivo/markers/markers.component.ts ***!
    \********************************************************************/

  /*! exports provided: MarkersComponent */

  /***/
  function srcAppContenidoInteractivoMarkersMarkersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkersComponent", function () {
      return MarkersComponent;
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


    var src_app_services_interactive_content_interative_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/interactive-content/interative-content.service */
    "./src/app/services/interactive-content/interative-content.service.ts");

    var MarkersComponent =
    /*#__PURE__*/
    function () {
      function MarkersComponent(interativeContentService) {
        this.interativeContentService = interativeContentService;
        this.optionsMarkers = new Array();
        this.markersAdded = new Array();
        this.showBasicMarker = true;
        this.showManyAnswers = false;
        this.showSpecificAnswer = false;
        this.showComment = false;
        this.showForum = false;
        this.showQuestionnaire = false;
        this.showLink = false;
        this.shwowAnswerTrueFalse = false;
      }

      var _proto4 = MarkersComponent.prototype;

      _proto4.ngOnInit = function ngOnInit() {
        this.setOptionsMarkers();
        this.getMarkersAdded();
      };

      _proto4.setOptionsMarkers = function setOptionsMarkers() {
        this.optionsMarkers.push({
          name: 'Pregunta Abierta',
          id: 'specificAnswer',
          active: false
        });
        this.optionsMarkers.push({
          name: 'Pregunta Falso o Verdadero',
          id: 'answerTrueFalse',
          active: false
        });
        this.optionsMarkers.push({
          name: 'Pregunta Selección Múltiple',
          id: 'manyAnswers',
          active: false
        });
        this.optionsMarkers.push({
          name: 'Comentario',
          id: 'comment',
          active: false
        });
        this.optionsMarkers.push({
          name: 'Foro',
          id: 'forum',
          active: false
        });
        this.optionsMarkers.push({
          name: 'Cuestionario',
          id: 'questionnaire',
          active: false
        });
        this.optionsMarkers.push({
          name: 'Enlace',
          id: 'link',
          active: false
        });
      };

      _proto4.getMarkersAdded = function getMarkersAdded() {
        this.markersAdded.push({
          name: 'Marcador 1'
        });
        this.markersAdded.push({
          name: 'Marcador 2'
        });
        this.markersAdded.push({
          name: 'Marcador 3'
        });
        this.markersAdded.push({
          name: 'Marcador 4'
        });
        this.markersAdded.push({
          name: 'Marcador 5'
        });
      };

      _proto4.addMark = function addMark() {
        alert('Añadir Marca');
      };

      _proto4.deleteMark = function deleteMark() {
        alert('Borrar Marca');
      };

      _proto4.preview = function preview() {
        alert('Vista previa');
      };

      _proto4.redirectSpecificOption = function redirectSpecificOption(idOption) {
        this.setFalseAllOptionsMarkers();

        switch (idOption) {
          case 'specificAnswer':
            this.showSpecificAnswer = true;
            break;

          case 'manyAnswers':
            this.showManyAnswers = true;
            break;

          case 'comment':
            this.showComment = true;
            break;

          case 'forum':
            this.showForum = true;
            break;

          case 'questionnaire':
            this.showQuestionnaire = true;
            break;

          case 'link':
            this.showLink = true;
            break;

          case 'answerTrueFalse':
            this.shwowAnswerTrueFalse = true;
            break;

          default:
            this.showBasicMarker = true;
            break;
        }

        this.optionsMarkers.forEach(function (element) {
          if (element.id === idOption) {
            element.active = true;
          } else {
            element.active = false;
          }
        });
      };

      _proto4.saveInteractiveContent = function saveInteractiveContent() {
        // contenido = models.ForeignKey(Contenido, blank=False, null=False, on_delete=models.CASCADE)
        // fecha_creacion = models.DateTimeField(null=False, auto_now_add=True)
        // tiempo_disponibilidad = models.DateTimeField(null=True, blank=True)
        // tiene_retroalimentacion = models.BooleanField()
        // curso = models.ForeignKey(Curso, blank=False, null=False, on_delete=models.CASCADE)
        var request = {
          contenido: 'algo',
          fecha_creacion: '',
          tiempo_disponibilidad: '',
          tiene_retroalimentacion: '',
          curso: ''
        };
        var url = 'http://127.0.0.1:8000/api/v1/cont_interactivo';
        this.interativeContentService.postGeneric(url, request).subscribe(function (response) {
          console.log('success');
        }, function (error) {
          console.log('fail');
        });
      };

      _proto4.saveMark = function saveMark() {
        var request = {
          nombre: 'algo',
          punto: 'algo',
          contenido: 'algo'
        }; // nombre = models.CharField(max_length=30)
        // punto = models.IntegerField(default=0)
        // contenido = models.ForeignKey(ContenidoInteractivo, on_delete=models.CASCADE, related_name='marcas')

        var url = ' http://127.0.0.1:8000/api/v1/marca';
        this.interativeContentService.postGeneric(url, request).subscribe(function (response) {
          console.log('success');
        }, function (error) {
          console.log('fail');
        });
      };

      _proto4.saveActivity = function saveActivity() {
        var request = {
          nombre: 'algo',
          numeroDeIntentos: 'algo',
          tieneRetroalimentacion: 'algo',
          marca: 'algo'
        }; // nombre = models.CharField(max_length=30)
        // numeroDeIntentos = models.IntegerField(default=0)
        // tieneRetroalimentacion = models.BooleanField()
        // marca = models.ForeignKey(Marca, on_delete=models.CASCADE)

        var url = ' http://127.0.0.1:8000/api/v1/actividad';
        this.interativeContentService.postGeneric(url, request).subscribe(function (response) {
          console.log('success');
        }, function (error) {
          console.log('fail');
        });
      };

      _proto4.setFalseAllOptionsMarkers = function setFalseAllOptionsMarkers() {
        this.showBasicMarker = false;
        this.showComment = false;
        this.showForum = false;
        this.showLink = false;
        this.showManyAnswers = false;
        this.showQuestionnaire = false;
        this.showSpecificAnswer = false;
        this.showBasicMarker = false;
        this.shwowAnswerTrueFalse = false;
      };

      return MarkersComponent;
    }();

    MarkersComponent.ctorParameters = function () {
      return [{
        type: src_app_services_interactive_content_interative_content_service__WEBPACK_IMPORTED_MODULE_2__["InterativeContentService"]
      }];
    };

    MarkersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-markers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./markers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/markers/markers.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./markers.component.css */
      "./src/app/contenido-interactivo/markers/markers.component.css")).default]
    })], MarkersComponent);
    /***/
  },

  /***/
  "./src/app/contenido-interactivo/reporte-contenido/reporte-contenido.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/contenido-interactivo/reporte-contenido/reporte-contenido.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContenidoInteractivoReporteContenidoReporteContenidoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n  margin: 2%;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.correcta {\r\n    color:green;\r\n    font:bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVuaWRvLWludGVyYWN0aXZvL3JlcG9ydGUtY29udGVuaWRvL3JlcG9ydGUtY29udGVuaWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29udGVuaWRvLWludGVyYWN0aXZvL3JlcG9ydGUtY29udGVuaWRvL3JlcG9ydGUtY29udGVuaWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb3JyZWN0YSB7XHJcbiAgICBjb2xvcjpncmVlbjtcclxuICAgIGZvbnQ6Ym9sZDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/contenido-interactivo/reporte-contenido/reporte-contenido.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/contenido-interactivo/reporte-contenido/reporte-contenido.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ReporteContenidoComponent */

  /***/
  function srcAppContenidoInteractivoReporteContenidoReporteContenidoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReporteContenidoComponent", function () {
      return ReporteContenidoComponent;
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


    var src_app_services_contenido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/contenido.service */
    "./src/app/services/contenido.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ReporteContenidoComponent =
    /*#__PURE__*/
    function () {
      function ReporteContenidoComponent(contenidoService, activeRoute) {
        this.contenidoService = contenidoService;
        this.activeRoute = activeRoute;
        this.displayedColumns = ['pregunta', 'posiblesRespuestas', 'respuestasOpcion', 'porcentajeRespuesta'];
      }

      var _proto5 = ReporteContenidoComponent.prototype;

      _proto5.ngOnInit = function ngOnInit() {
        var _this8 = this;

        this.activeRoute.params.subscribe(function (params) {
          if (params.id) {
            _this8.contenidoService.getReporteContenido(+params.id).subscribe(function (data) {
              _this8.dataSource = _this8.processData(data.marcas);
              console.log('dataSource', _this8.dataSource);
            });
          }
        });
      };

      _proto5.processData = function processData(data) {
        console.log(data); // Extrae solo las actividades de las marcas

        var activities = data.map(function (marca) {
          return marca.actividades;
        }); // Deja un array flat con todas las actividades

        var flatActivites = this.calculatePercentage(this.flatten(activities)); // calcula y retorna porcentaje de respuesta por cada pregunta

        return this.calculatePercentage(flatActivites);
      };

      _proto5.calculatePercentage = function calculatePercentage(actividades) {
        var actividadesPorcentaje = actividades.map(function (actividad) {
          actividad.preguntas.map(function (pregunta) {
            var total = pregunta.total_respuestas;

            if (pregunta.tipo === 'multiple') {
              pregunta.opciones.map(function (opcion) {
                opcion.porcentajeRespuesta = opcion.votos * 100 / total;
                return opcion;
              });
            } else if (pregunta.tipo === 'verdadero/falso') {
              pregunta.respuestaCorrecta = pregunta.opciones[0].respuesta;
              pregunta.porcentajeVerdadero = pregunta.opciones[0].numeroVerdadero * 100 / total;
              pregunta.porcentajeFalso = pregunta.opciones[0].numeroFalso * 100 / total;
            }

            return pregunta;
          });
          return actividad;
        });
        return actividadesPorcentaje;
      };

      _proto5.flatten = function flatten(arr) {
        var _this9 = this;

        return arr.reduce(function (flat, toFlatten) {
          return flat.concat(Array.isArray(toFlatten) ? _this9.flatten(toFlatten) : toFlatten);
        }, []);
      };

      return ReporteContenidoComponent;
    }();

    ReporteContenidoComponent.ctorParameters = function () {
      return [{
        type: src_app_services_contenido_service__WEBPACK_IMPORTED_MODULE_2__["ContenidoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ReporteContenidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reporte-contenido',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reporte-contenido.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contenido-interactivo/reporte-contenido/reporte-contenido.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reporte-contenido.component.css */
      "./src/app/contenido-interactivo/reporte-contenido/reporte-contenido.component.css")).default]
    })], ReporteContenidoComponent);
    /***/
  },

  /***/
  "./src/app/services/activity.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/activity.service.ts ***!
    \**********************************************/

  /*! exports provided: ActivityService */

  /***/
  function srcAppServicesActivityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivityService", function () {
      return ActivityService;
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

    var ActivityService =
    /*#__PURE__*/
    function () {
      function ActivityService(http) {
        this.http = http;
        this.URL_HOST = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain'
        });
      }

      var _proto6 = ActivityService.prototype;

      _proto6.createActivity = function createActivity(name, trys, retroActive, markerId) {
        return this.http.post(this.URL_HOST + 'activities/actividad', {
          nombre: name,
          numeroDeIntentos: trys,
          tieneRetroalimentacion: retroActive,
          marca: markerId
        });
      };

      return ActivityService;
    }();

    ActivityService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ActivityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ActivityService);
    /***/
  },

  /***/
  "./src/app/services/contenido.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/contenido.service.ts ***!
    \***********************************************/

  /*! exports provided: ContenidoService */

  /***/
  function srcAppServicesContenidoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContenidoService", function () {
      return ContenidoService;
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

    var ContenidoService =
    /*#__PURE__*/
    function () {
      function ContenidoService(httpClient) {
        this.httpClient = httpClient;
        this.contenidoUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/content/interactive_content/";
        this.reportesUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/activities/reports/";
      }

      var _proto7 = ContenidoService.prototype;

      _proto7.getContenidos = function getContenidos() {
        return this.httpClient.get(this.contenidoUrl);
      };

      _proto7.postContenidos = function postContenidos(cursoIds, contenidoId) {
        var body = {
          cursos: cursoIds,
          contenido: contenidoId
        };
        console.log('bodyy', body);
        return this.httpClient.post(this.contenidoUrl, body);
      };

      _proto7.getReporteContenido = function getReporteContenido(contentId) {
        return this.httpClient.get(this.reportesUrl + contentId); // const dataTest = {
        //   nombre: 'profesor1',
        //   marcas: [{
        //     nombre: 'marca1',
        //     actividades: [{
        //       nombre: 'actividad1',
        //       tipo: 'multiple',
        //       opciones: [
        //         {
        //           respuesta: 'posible respuesta 1',
        //           esCorrecta: true,
        //           votos: 5
        //         },
        //         {
        //           respuesta: 'posible respuesta 2',
        //           esCorrecta: false,
        //           votos: 5
        //         },
        //         {
        //           respuesta: 'posible respuesta 3',
        //           esCorrecta: false,
        //           votos: 5
        //         }
        //       ]
        //     },
        //     {
        //       nombre: 'actividad2',
        //       tipo: 'verdadero/falso',
        //       opciones: [
        //         {
        //           respuesta: 'posible respuesta 1',
        //           esCorrecta: true,
        //           votos: 5
        //         },
        //         {
        //           respuesta: 'posible respuesta 2',
        //           esCorrecta: false,
        //           votos: 5
        //         },
        //       ]
        //     }
        //     ]
        //   }]
        // };
        // return dataTest;
      };

      return ContenidoService;
    }();

    ContenidoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ContenidoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ContenidoService);
    /***/
  },

  /***/
  "./src/app/services/content.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/content.service.ts ***!
    \*********************************************/

  /*! exports provided: ContentService */

  /***/
  function srcAppServicesContentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentService", function () {
      return ContentService;
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

    var ContentService =
    /*#__PURE__*/
    function () {
      function ContentService(http) {
        this.http = http;
        this.URL_HOST = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain'
        });
      }

      var _proto8 = ContentService.prototype;

      _proto8.getAllContent = function getAllContent() {
        return this.http.get(this.URL_HOST + '/content/cont_interactivo');
      };

      return ContentService;
    }();

    ContentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ContentService);
    /***/
  },

  /***/
  "./src/app/services/interactive-content/interative-content.service.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/services/interactive-content/interative-content.service.ts ***!
    \****************************************************************************/

  /*! exports provided: InterativeContentService */

  /***/
  function srcAppServicesInteractiveContentInterativeContentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterativeContentService", function () {
      return InterativeContentService;
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

    var InterativeContentService =
    /*#__PURE__*/
    function () {
      function InterativeContentService(httpService) {
        this.httpService = httpService;
      }

      var _proto9 = InterativeContentService.prototype;

      _proto9.postGeneric = function postGeneric(url, data) {
        return this.httpService.postJSON(url, data).map(function (response) {
          return response;
        }, function (error) {
          return error;
        });
      };

      _proto9.getGeneric = function getGeneric(url, data) {
        return this.httpService.getRequestWithParams(url, data).map(function (response) {
          return response;
        }, function (error) {
          return error;
        });
      };

      return InterativeContentService;
    }();

    InterativeContentService.ctorParameters = function () {
      return [{
        type: src_app_services_http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }];
    };

    InterativeContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InterativeContentService);
    /***/
  },

  /***/
  "./src/app/services/mark.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/mark.service.ts ***!
    \******************************************/

  /*! exports provided: MarkService */

  /***/
  function srcAppServicesMarkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkService", function () {
      return MarkService;
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

    var MarkService =
    /*#__PURE__*/
    function () {
      function MarkService(http) {
        this.http = http;
        this.URL_HOST = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain'
        });
      }

      var _proto10 = MarkService.prototype;

      _proto10.getAllMarkers = function getAllMarkers() {
        // Cuando se implemente login validar aquí el token para que se hagala redirección correctamente
        // const signedIn = !!this.userToken;
        return this.http.get(this.URL_HOST + '/activities/marca');
      };

      _proto10.getMarkersFromContent = function getMarkersFromContent(contentId) {
        return this.http.get(this.URL_HOST + '/activities/marca?contenido=' + contentId);
      };

      return MarkService;
    }();

    MarkService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MarkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MarkService);
    /***/
  },

  /***/
  "./src/app/services/question.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/question.service.ts ***!
    \**********************************************/

  /*! exports provided: QuestionService */

  /***/
  function srcAppServicesQuestionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionService", function () {
      return QuestionService;
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

    var QuestionService =
    /*#__PURE__*/
    function () {
      function QuestionService(http) {
        this.http = http;
        this.URL_HOST = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain'
        });
      }

      var _proto11 = QuestionService.prototype;

      _proto11.createQuestion = function createQuestion(question, activityId) {
        return this.http.post(this.URL_HOST + '/activities/pregunta', {
          Pregunta: question,
          actividad: activityId
        });
      };

      _proto11.createMultipleOptionAnswer = function createMultipleOptionAnswer(answer, correctAnswer, questionId) {
        return this.http.post(this.URL_HOST + '/activities/resp_op_multiple', {
          respuesta: answer,
          esCorrecta: correctAnswer,
          preguntaSeleccionMultiple: questionId
        });
      };

      return QuestionService;
    }();

    QuestionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuestionService);
    /***/
  }
}]); //# sourceMappingURL=contenido-interactivo-contenido-interactivo-module-es2015.js.map
//# sourceMappingURL=contenido-interactivo-contenido-interactivo-module-es5.js.map