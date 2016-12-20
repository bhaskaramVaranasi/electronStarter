/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
	var electron_1 = __webpack_require__(1);
	var path_1 = __webpack_require__(2);
	var url_1 = __webpack_require__(3);
	var ElectronApplication = (function () {
	    function ElectronApplication() {
	        this.activateFunction = this.activateFunction.bind(this);
	        this.windowAllClosedFunction = this.windowAllClosedFunction.bind(this);
	        this.attachEventListeners();
	    }
	    ElectronApplication.prototype.createWindow = function () {
	        var _this = this;
	        this.mainWindow = new electron_1.BrowserWindow({ width: 800, height: 900 });
	        this.mainWindow.loadURL(url_1.format({
	            pathname: path_1.join(__dirname, 'index.html'),
	            protocol: 'file',
	            slashes: true
	        }));
	        this.mainWindow.webContents.openDevTools();
	        this.mainWindow.on('closed', function () {
	            _this.mainWindow = null;
	        });
	    };
	    ElectronApplication.prototype.windowAllClosedFunction = function () {
	        if (process.platform !== 'darwin') {
	            electron_1.app.quit();
	        }
	    };
	    ElectronApplication.prototype.activateFunction = function () {
	        if (this.mainWindow === null) {
	            this.createWindow();
	        }
	    };
	    ElectronApplication.prototype.attachEventListeners = function () {
	        electron_1.app.on('ready', this.createWindow);
	        electron_1.app.on('window-all-closed', this.windowAllClosedFunction);
	        electron_1.app.on('activate', this.activateFunction);
	    };
	    return ElectronApplication;
	}());
	var main = function () {
	    console.log('Main function is called');
	    var application = new ElectronApplication();
	};
	main();

	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("url");

/***/ }
/******/ ]);