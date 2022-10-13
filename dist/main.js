/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/button.css":
/*!************************!*\
  !*** ./src/button.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"normal":"bfB8zGI5tZ2D9C_8UG_n PVZMFJohFDndqvnUFKnh","disabled":"kKfpfOcdRkbyLo_hlRkr PVZMFJohFDndqvnUFKnh"});

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"common":"PVZMFJohFDndqvnUFKnh","table":"mS2be8C6Md4IbCZzmEaE","lds":"LtlPeFzGmBquz6P51QgT","lds-ellipsis1":"oF2qvXot9ltGpFKg1f7c","lds-ellipsis2":"njbyQzAMkBEBA01mL8On","lds-ellipsis3":"E_VyDtCepHQH5Rov9RUT"});

/***/ }),

/***/ "./src/index2.js":
/*!***********************!*\
  !*** ./src/index2.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xyz": () => (/* binding */ xyz)
/* harmony export */ });
const xyz = 'hi';


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index2 */ "./src/index2.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.css */ "./src/button.css");




document.write('Hello - :)');


let butt = document.querySelector('button');

butt.outerHTML = `<button class="${_button_css__WEBPACK_IMPORTED_MODULE_2__["default"].normal}">Кнопка</button>`;

window.onClickHandler = () => {
    let button = document.querySelector('button');
    button.addEventListener('click', () => {
    if (button.attributes.class.value === _button_css__WEBPACK_IMPORTED_MODULE_2__["default"].normal) {
        button.attributes.class.value = _button_css__WEBPACK_IMPORTED_MODULE_2__["default"].disabled
    } else {
        button.attributes.class.value = _button_css__WEBPACK_IMPORTED_MODULE_2__["default"].normal
    }});
};

onClickHandler();

// document.write('<p>Test hot reload</p>')


async function getPosts(url) {
    let postsDiv = document.getElementById('posts')
    postsDiv.innerHTML = '<div id="loading"><div></div><div></div><div></div><div></div></div><p>Загрузка постов</p>';
    document.getElementById('loading').setAttribute('class', _style_css__WEBPACK_IMPORTED_MODULE_1__["default"].lds)
    let resp = await fetch(url)
    if (resp.ok) {
        let content = await resp.json();
        console.log(content)
        // let postsDiv = document.getElementById('posts');
        postsDiv.innerHTML += `<table id="posts-table"></table>`;
        let table = document.getElementById('posts-table');
        table.setAttribute('class', _style_css__WEBPACK_IMPORTED_MODULE_1__["default"].table);
        table.innerHTML += `<tr><th>ID</th><th>Текст</th><th>Автор</th></tr>`;

        for (let key in content) {
            table.innerHTML += `<tr>
                <td>${content[key]['id']}</td>
                <td>${content[key]['title']}</td>
                <td>${content[key]['author']}</td>
                </tr>`
        }
    } else {
        console.log(`Error ${resp.statusText}`)
    }
    
}

getPosts('http://localhost:3000/posts');


// document.write('<table>1</table>')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsaUVBQWUsQ0FBQyw0R0FBNEc7Ozs7Ozs7Ozs7Ozs7O0FDRDVIO0FBQ0EsaUVBQWUsQ0FBQyxpTkFBaU47Ozs7Ozs7Ozs7Ozs7O0FDRDFOOzs7Ozs7O1VDQVA7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQ0M7QUFDSztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMERBQWlCLENBQUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsMERBQWlCO0FBQzNELHdDQUF3Qyw0REFBbUI7QUFDM0QsTUFBTTtBQUNOLHdDQUF3QywwREFBaUI7QUFDekQsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELHNEQUFVO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHdEQUFZO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6QyxzQkFBc0Isc0JBQXNCO0FBQzVDLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTtBQUNBLE1BQU07QUFDTiw2QkFBNkIsZ0JBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2J1dHRvbi5jc3M/NzdjNCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz9mMTk1Iiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvaW5kZXgyLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wibm9ybWFsXCI6XCJiZkI4ekdJNXRaMkQ5Q184VUdfbiBQVlpNRkpvaEZEbmRxdm5VRktuaFwiLFwiZGlzYWJsZWRcIjpcImtLZnBmT2NkUmtieUxvX2hsUmtyIFBWWk1GSm9oRkRuZHF2blVGS25oXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiY29tbW9uXCI6XCJQVlpNRkpvaEZEbmRxdm5VRktuaFwiLFwidGFibGVcIjpcIm1TMmJlOEM2TWQ0SWJDWnptRWFFXCIsXCJsZHNcIjpcIkx0bFBlRnpHbUJxdXo2UDUxUWdUXCIsXCJsZHMtZWxsaXBzaXMxXCI6XCJvRjJxdlhvdDlsdEdwRktnMWY3Y1wiLFwibGRzLWVsbGlwc2lzMlwiOlwibmpieVF6QU1rQkVCQTAxbUw4T25cIixcImxkcy1lbGxpcHNpczNcIjpcIkVfVnlEdENlcEhRSDVSb3Y5UlVUXCJ9OyIsImV4cG9ydCBjb25zdCB4eXogPSAnaGknO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHh5eiB9IGZyb20gJy4vaW5kZXgyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IGJ1dF9zdHlsZXMgZnJvbSAnLi9idXR0b24uY3NzJ1xyXG5cclxuZG9jdW1lbnQud3JpdGUoJ0hlbGxvIC0gOiknKTtcclxuXHJcblxyXG5sZXQgYnV0dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG5cclxuYnV0dC5vdXRlckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz1cIiR7YnV0X3N0eWxlcy5ub3JtYWx9XCI+0JrQvdC+0L/QutCwPC9idXR0b24+YDtcclxuXHJcbndpbmRvdy5vbkNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChidXR0b24uYXR0cmlidXRlcy5jbGFzcy52YWx1ZSA9PT0gYnV0X3N0eWxlcy5ub3JtYWwpIHtcclxuICAgICAgICBidXR0b24uYXR0cmlidXRlcy5jbGFzcy52YWx1ZSA9IGJ1dF9zdHlsZXMuZGlzYWJsZWRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnV0dG9uLmF0dHJpYnV0ZXMuY2xhc3MudmFsdWUgPSBidXRfc3R5bGVzLm5vcm1hbFxyXG4gICAgfX0pO1xyXG59O1xyXG5cclxub25DbGlja0hhbmRsZXIoKTtcclxuXHJcbi8vIGRvY3VtZW50LndyaXRlKCc8cD5UZXN0IGhvdCByZWxvYWQ8L3A+JylcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRQb3N0cyh1cmwpIHtcclxuICAgIGxldCBwb3N0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3N0cycpXHJcbiAgICBwb3N0c0Rpdi5pbm5lckhUTUwgPSAnPGRpdiBpZD1cImxvYWRpbmdcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PjxwPtCX0LDQs9GA0YPQt9C60LAg0L/QvtGB0YLQvtCyPC9wPic7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZycpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBzdHlsZXMubGRzKVxyXG4gICAgbGV0IHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwpXHJcbiAgICBpZiAocmVzcC5vaykge1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gYXdhaXQgcmVzcC5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29udGVudClcclxuICAgICAgICAvLyBsZXQgcG9zdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9zdHMnKTtcclxuICAgICAgICBwb3N0c0Rpdi5pbm5lckhUTUwgKz0gYDx0YWJsZSBpZD1cInBvc3RzLXRhYmxlXCI+PC90YWJsZT5gO1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3N0cy10YWJsZScpO1xyXG4gICAgICAgIHRhYmxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBzdHlsZXMudGFibGUpO1xyXG4gICAgICAgIHRhYmxlLmlubmVySFRNTCArPSBgPHRyPjx0aD5JRDwvdGg+PHRoPtCi0LXQutGB0YI8L3RoPjx0aD7QkNCy0YLQvtGAPC90aD48L3RyPmA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmlubmVySFRNTCArPSBgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7Y29udGVudFtrZXldWydpZCddfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtjb250ZW50W2tleV1bJ3RpdGxlJ119PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2NvbnRlbnRba2V5XVsnYXV0aG9yJ119PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+YFxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yICR7cmVzcC5zdGF0dXNUZXh0fWApXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZ2V0UG9zdHMoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0cycpO1xyXG5cclxuXHJcbi8vIGRvY3VtZW50LndyaXRlKCc8dGFibGU+MTwvdGFibGU+JykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=