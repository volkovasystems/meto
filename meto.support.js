"use strict";var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
                                                                                                                                                                                                                                                                                                  	@module-license:
                                                                                                                                                                                                                                                                                                  		The MIT License (MIT)
                                                                                                                                                                                                                                                                                                  		@mit-license
                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                  		Copyright (@c) 2017 Richeve Siodina Bebedor
                                                                                                                                                                                                                                                                                                  		@email: richeve.bebedor@gmail.com
                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                  		Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                  		of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                  		in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                  		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                  		copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                  		furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                  		The above copyright notice and this permission notice shall be included in all
                                                                                                                                                                                                                                                                                                  		copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                  		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                  		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                  		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                  		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                  		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                  		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                                                                                                                                                                                                                                                                                  		SOFTWARE.
                                                                                                                                                                                                                                                                                                  	@end-module-license
                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                  	@module-configuration:
                                                                                                                                                                                                                                                                                                  		{
                                                                                                                                                                                                                                                                                                  			"package": "meto",
                                                                                                                                                                                                                                                                                                  			"path": "meto/meto.js",
                                                                                                                                                                                                                                                                                                  			"file": "meto.js",
                                                                                                                                                                                                                                                                                                  			"module": "meto",
                                                                                                                                                                                                                                                                                                  			"author": "Richeve S. Bebedor",
                                                                                                                                                                                                                                                                                                  			"eMail": "richeve.bebedor@gmail.com",
                                                                                                                                                                                                                                                                                                  			"contributors": [
                                                                                                                                                                                                                                                                                                  				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
                                                                                                                                                                                                                                                                                                  				"Vinse Vinalon <vinsevinalon@gmail.com>"
                                                                                                                                                                                                                                                                                                  			],
                                                                                                                                                                                                                                                                                                  			"repository": "https://github.com/volkovasystems/meto.git",
                                                                                                                                                                                                                                                                                                  			"test": "meto-test.js",
                                                                                                                                                                                                                                                                                                  			"global": true
                                                                                                                                                                                                                                                                                                  		}
                                                                                                                                                                                                                                                                                                  	@end-module-configuration
                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                  	@module-documentation:
                                                                                                                                                                                                                                                                                                  		Standard conventional object meta description.
                                                                                                                                                                                                                                                                                                  	@end-module-documentation
                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                  	@include:
                                                                                                                                                                                                                                                                                                  		{
                                                                                                                                                                                                                                                                                                  			"falzy": "falzy",
                                                                                                                                                                                                                                                                                                  			"kein": "kein",
                                                                                                                                                                                                                                                                                                  			"protype": "protype",
                                                                                                                                                                                                                                                                                                  			"wichevr": "wichevr",
                                                                                                                                                                                                                                                                                                  			"zelf": "zelf"
                                                                                                                                                                                                                                                                                                  		}
                                                                                                                                                                                                                                                                                                  	@end-include
                                                                                                                                                                                                                                                                                                  */

var falzy = require("falzy");
var kein = require("kein");
var protype = require("protype");
var wichevr = require("wichevr");
var zelf = require("zelf");

var Meta = require('./meta.js');

var meto = function meto(property, entity) {
	/*;
                                            	@meta-configuration:
                                            		{
                                            			"property:required": [
                                            				"string"
                                            			],
                                            			"entity:required": "*"
                                            		}
                                            	@end-meta-configuration
                                            */

	if (falzy(property) || !protype(property, NUMBER + STRING + SYMBOL)) {
		throw new Error("invalid property");
	}

	entity = wichevr(entity, zelf(this));

	if (!kein(property, entity)) {
		return {};
	}

	var descriptor = (0, _getOwnPropertyDescriptor2.default)(entity, property);

	if (falzy(descriptor)) {
		return {};
	}

	var value = descriptor.value;

	var name = wichevr(entity.name, entity.constructor.name);

	return Meta(name, entity, property, descriptor, value);
};

module.exports = meto;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldG8uc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJrZWluIiwicHJvdHlwZSIsIndpY2hldnIiLCJ6ZWxmIiwiTWV0YSIsIm1ldG8iLCJwcm9wZXJ0eSIsImVudGl0eSIsIk5VTUJFUiIsIlNUUklORyIsIlNZTUJPTCIsIkVycm9yIiwiZGVzY3JpcHRvciIsInZhbHVlIiwibmFtZSIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImtTQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1HLFVBQVVILFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1JLE9BQU9KLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1LLE9BQU9MLFFBQVMsV0FBVCxDQUFiOztBQUVBLElBQU1NLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxRQUFmLEVBQXlCQyxNQUF6QixFQUFpQztBQUM3Qzs7Ozs7Ozs7Ozs7QUFXQSxLQUFJVCxNQUFPUSxRQUFQLEtBQXFCLENBQUNMLFFBQVNLLFFBQVQsRUFBbUJFLFNBQVNDLE1BQVQsR0FBa0JDLE1BQXJDLENBQTFCLEVBQXlFO0FBQ3hFLFFBQU0sSUFBSUMsS0FBSixDQUFXLGtCQUFYLENBQU47QUFDQTs7QUFFREosVUFBU0wsUUFBU0ssTUFBVCxFQUFpQkosS0FBTSxJQUFOLENBQWpCLENBQVQ7O0FBRUEsS0FBSSxDQUFDSCxLQUFNTSxRQUFOLEVBQWdCQyxNQUFoQixDQUFMLEVBQStCO0FBQzlCLFNBQU8sRUFBUDtBQUNBOztBQUVELEtBQUlLLGFBQWEsd0NBQWlDTCxNQUFqQyxFQUF5Q0QsUUFBekMsQ0FBakI7O0FBRUEsS0FBSVIsTUFBT2MsVUFBUCxDQUFKLEVBQXlCO0FBQ3hCLFNBQU8sRUFBUDtBQUNBOztBQUVELEtBQUlDLFFBQVFELFdBQVdDLEtBQXZCOztBQUVBLEtBQUlDLE9BQU9aLFFBQVNLLE9BQU9PLElBQWhCLEVBQXNCUCxPQUFPUSxXQUFQLENBQW1CRCxJQUF6QyxDQUFYOztBQUVBLFFBQU9WLEtBQU1VLElBQU4sRUFBWVAsTUFBWixFQUFvQkQsUUFBcEIsRUFBOEJNLFVBQTlCLEVBQTBDQyxLQUExQyxDQUFQO0FBQ0EsQ0FqQ0Q7O0FBbUNBRyxPQUFPQyxPQUFQLEdBQWlCWixJQUFqQiIsImZpbGUiOiJtZXRvLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcIm1ldG9cIixcclxuXHRcdFx0XCJwYXRoXCI6IFwibWV0by9tZXRvLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcIm1ldG8uanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJtZXRvXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL21ldG8uZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcIm1ldG8tdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRTdGFuZGFyZCBjb252ZW50aW9uYWwgb2JqZWN0IG1ldGEgZGVzY3JpcHRpb24uXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcclxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxyXG5cdFx0XHRcIndpY2hldnJcIjogXCJ3aWNoZXZyXCIsXHJcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XHJcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xyXG5jb25zdCB3aWNoZXZyID0gcmVxdWlyZSggXCJ3aWNoZXZyXCIgKTtcclxuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XHJcblxyXG5jb25zdCBNZXRhID0gcmVxdWlyZSggJy4vbWV0YS5qcycgKTtcclxuXHJcbmNvbnN0IG1ldG8gPSBmdW5jdGlvbiBtZXRvKCBwcm9wZXJ0eSwgZW50aXR5ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcInN0cmluZ1wiXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwcm9wZXJ0eVwiICk7XHJcblx0fVxyXG5cclxuXHRlbnRpdHkgPSB3aWNoZXZyKCBlbnRpdHksIHplbGYoIHRoaXMgKSApO1xyXG5cclxuXHRpZiggIWtlaW4oIHByb3BlcnR5LCBlbnRpdHkgKSApe1xyXG5cdFx0cmV0dXJuIHsgfTtcclxuXHR9XHJcblxyXG5cdGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggZW50aXR5LCBwcm9wZXJ0eSApO1xyXG5cclxuXHRpZiggZmFsenkoIGRlc2NyaXB0b3IgKSApe1xyXG5cdFx0cmV0dXJuIHsgfTtcclxuXHR9XHJcblxyXG5cdGxldCB2YWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7XHJcblxyXG5cdGxldCBuYW1lID0gd2ljaGV2ciggZW50aXR5Lm5hbWUsIGVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lICk7XHJcblxyXG5cdHJldHVybiBNZXRhKCBuYW1lLCBlbnRpdHksIHByb3BlcnR5LCBkZXNjcmlwdG9yLCB2YWx1ZSApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtZXRvO1xyXG4iXX0=
//# sourceMappingURL=meto.support.js.map
