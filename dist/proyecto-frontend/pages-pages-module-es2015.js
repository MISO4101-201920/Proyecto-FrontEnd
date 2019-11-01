(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loadVideo/load-video.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loadVideo/load-video.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contenedor\">\r\n  <br>\r\n  <h2>Subir Video</h2>\r\n\r\n  <!-- <h4 style=\"color:#b3b3cc\">Para Subir un video solo debes copiar la url desde youtube y pegarlo abajo</h4> -->\r\n  <h4>Para Subir un video solo debes copiar la url desde youtube y pegarlo abajo</h4>\r\n\r\n  <!-- <input style=\"margin-bottom:2%;\" type=\"text\" name=\"urlVideo\" value=\"\"> -->\r\n\r\n  <div class=\"\" width='60%'>\r\n    <mat-form-field class=\"anchoNombre\" width='100%' [floatLabel]=\"options.value.floatLabel\">\r\n      <mat-label>Nombre Video Youtube</mat-label>\r\n      <input #n matInput required minlength=\"4\" placeholder=\"Nobre de tu video\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field  class=\"anchoUrl\" [floatLabel]=\"options.value.floatLabel\">\r\n      <mat-label>Url Video Youtube</mat-label>\r\n      <input matInput #v required minlength=\"10\" placeholder=\"https://www.youtube.com/Ejemplo?v=rGI-kGC-OXg\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n\r\n  <br>\r\n  <button (click)=\"guardarVideo(n,v)\" class=\"btn btn-success\" mat-raised-button color=\"primary\">Subir Video</button>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/loadVideo/load-video.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/loadVideo/load-video.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadVideoComponent", function() { return LoadVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_contenidoInter_load_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contenidoInter/load-video.service */ "./src/app/services/contenidoInter/load-video.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let LoadVideoComponent = class LoadVideoComponent {
    constructor(fb, _loadVideoService) {
        this._loadVideoService = _loadVideoService;
        this.loadVideo = {
            url: '',
            nombre: '',
        };
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
    ngOnInit() {
    }
    guardarVideo(n, v) {
        this.loadVideo.url = v.value;
        this.loadVideo.nombre = n.value;
        // this.loadVideo.url = "https://www.youtube.com/watch?v=3JuYkJyJh7c";
        // this.loadVideo.nombre = "Entender a Supergirl";
        // this.loadVideo.cursos_seleccionados = [{ "id": 1 }];
        this._loadVideoService.loadUrl(this.loadVideo)
            .subscribe(result => {
            console.log(result);
        }, error => {
            console.log(error);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Oops...', 'revisa los datos ingresados', 'error');
        }, () => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Cargado!', 'Tu video ha sido cargado con Exito a contenido interactivo.', 'success');
            // this.router.navigate(['/']);
        });
    }
};
LoadVideoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_contenidoInter_load_video_service__WEBPACK_IMPORTED_MODULE_2__["LoadVideoService"] }
];
LoadVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-load-video',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./load-video.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loadVideo/load-video.component.html")).default,
        styles: ["\n    .contenedor {\n      margin: 40px 0px 0px 50px;\n    }\n    h2 {\n    //  color: #00008B;\n      margin-bottom: 5%;\n      font-weight: bold;\n    }\n    .anchoNombre {\n      width: 30%;\n    }\n    .anchoUrl {\n      width: 65%;\n    }\n"]
    })
], LoadVideoComponent);



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material.module */ "./src/material.module.ts");
/* harmony import */ var _loadVideo_load_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadVideo/load-video.component */ "./src/app/pages/loadVideo/load-video.component.ts");





//Components of Pages

const routes = [
    { path: '', component: _loadVideo_load_video_component__WEBPACK_IMPORTED_MODULE_5__["LoadVideoComponent"] },
];
let PagesModule = class PagesModule {
};
PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _loadVideo_load_video_component__WEBPACK_IMPORTED_MODULE_5__["LoadVideoComponent"],
        ],
        imports: [
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], PagesModule);



/***/ })

}]);
//# sourceMappingURL=pages-pages-module-es2015.js.map