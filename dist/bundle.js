webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var browser_1 = __webpack_require__(1);
	var app_1 = __webpack_require__(223);
	browser_1.bootstrap(app_1.App);


/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(22);
	var App = (function () {
	    function App() {
	        console.log('TEST');
	    }
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: '<h1>Hello Angular2</h1>'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	})();
	exports.App = App;


/***/ }

});