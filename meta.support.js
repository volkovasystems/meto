"use strict"; /*;
              	@submodule-license:
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
              	@end-submodule-license
              
              	@submodule-configuration:
              		{
              			"package": "meto",
              			"path": "meto/meta.js",
              			"file": "meta.js",
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
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Standard conventional object meta description.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"cemento": "cemento",
              			"diatom": "diatom",
              			"protype": "protype"
              		}
              	@end-include
              */

var cemento = require("cemento");
var diatom = require("diatom");
var protype = require("protype");

var Meta = diatom("Meta");

Meta.prototype.initialize = function initialize(name, entity, property, descriptor, value) {
	/*;
                                                                                            	@meta-configuration:
                                                                                            		{
                                                                                            			"name:required": "string",
                                                                                            			"entity:required": "*"
                                                                                            		}
                                                                                            	@end-meta-configuration
                                                                                            */

	cemento({
		"name": name,
		"entity": entity,

		"property": property,
		"type": protype(value).type,

		"descriptor": descriptor,
		"enumerable": descriptor.enumerable,
		"configurable": descriptor.configurable,
		"writable": descriptor.writable,
		"get": descriptor.get,
		"set": descriptor.set,

		"value": value },
	this);

	return this;
};

Meta.prototype.toJSON = function toJSON() {
	return {
		"name": this.name,
		"entity": this.entity,

		"property": this.property,
		"type": this.type,

		"descriptor": this.descriptor,
		"enumerable": this.enumerable,
		"configurable": this.configurable,
		"writable": this.writable,
		"get": this.get,
		"set": this.set,

		"value": this.value };

};

module.exports = Meta;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJjZW1lbnRvIiwicmVxdWlyZSIsImRpYXRvbSIsInByb3R5cGUiLCJNZXRhIiwicHJvdG90eXBlIiwiaW5pdGlhbGl6ZSIsIm5hbWUiLCJlbnRpdHkiLCJwcm9wZXJ0eSIsImRlc2NyaXB0b3IiLCJ2YWx1ZSIsInR5cGUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJnZXQiLCJzZXQiLCJ0b0pTT04iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQSxJQUFNQSxVQUFVQyxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNRyxPQUFPRixPQUFRLE1BQVIsQ0FBYjs7QUFFQUUsS0FBS0MsU0FBTCxDQUFlQyxVQUFmLEdBQTRCLFNBQVNBLFVBQVQsQ0FBcUJDLElBQXJCLEVBQTJCQyxNQUEzQixFQUFtQ0MsUUFBbkMsRUFBNkNDLFVBQTdDLEVBQXlEQyxLQUF6RCxFQUFnRTtBQUMzRjs7Ozs7Ozs7O0FBU0FYLFNBQVM7QUFDUixVQUFRTyxJQURBO0FBRVIsWUFBVUMsTUFGRjs7QUFJUixjQUFZQyxRQUpKO0FBS1IsVUFBUU4sUUFBU1EsS0FBVCxFQUFpQkMsSUFMakI7O0FBT1IsZ0JBQWNGLFVBUE47QUFRUixnQkFBY0EsV0FBV0csVUFSakI7QUFTUixrQkFBZ0JILFdBQVdJLFlBVG5CO0FBVVIsY0FBWUosV0FBV0ssUUFWZjtBQVdSLFNBQU9MLFdBQVdNLEdBWFY7QUFZUixTQUFPTixXQUFXTyxHQVpWOztBQWNSLFdBQVNOLEtBZEQsRUFBVDtBQWVHLEtBZkg7O0FBaUJBLFFBQU8sSUFBUDtBQUNBLENBNUJEOztBQThCQVAsS0FBS0MsU0FBTCxDQUFlYSxNQUFmLEdBQXdCLFNBQVNBLE1BQVQsR0FBa0I7QUFDekMsUUFBTztBQUNOLFVBQVEsS0FBS1gsSUFEUDtBQUVOLFlBQVUsS0FBS0MsTUFGVDs7QUFJTixjQUFZLEtBQUtDLFFBSlg7QUFLTixVQUFRLEtBQUtHLElBTFA7O0FBT04sZ0JBQWMsS0FBS0YsVUFQYjtBQVFOLGdCQUFjLEtBQUtHLFVBUmI7QUFTTixrQkFBZ0IsS0FBS0MsWUFUZjtBQVVOLGNBQVksS0FBS0MsUUFWWDtBQVdOLFNBQU8sS0FBS0MsR0FYTjtBQVlOLFNBQU8sS0FBS0MsR0FaTjs7QUFjTixXQUFTLEtBQUtOLEtBZFIsRUFBUDs7QUFnQkEsQ0FqQkQ7O0FBbUJBUSxPQUFPQyxPQUFQLEdBQWlCaEIsSUFBakIiLCJmaWxlIjoibWV0YS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XHJcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJtZXRvXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcIm1ldG8vbWV0YS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJtZXRhLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwibWV0b1wiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9tZXRvLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJtZXRvLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0U3RhbmRhcmQgY29udmVudGlvbmFsIG9iamVjdCBtZXRhIGRlc2NyaXB0aW9uLlxyXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiY2VtZW50b1wiOiBcImNlbWVudG9cIixcclxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcclxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBjZW1lbnRvID0gcmVxdWlyZSggXCJjZW1lbnRvXCIgKTtcclxuY29uc3QgZGlhdG9tID0gcmVxdWlyZSggXCJkaWF0b21cIiApO1xyXG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcclxuXHJcbmNvbnN0IE1ldGEgPSBkaWF0b20oIFwiTWV0YVwiICk7XHJcblxyXG5NZXRhLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggbmFtZSwgZW50aXR5LCBwcm9wZXJ0eSwgZGVzY3JpcHRvciwgdmFsdWUgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcclxuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGNlbWVudG8oIHtcclxuXHRcdFwibmFtZVwiOiBuYW1lLFxyXG5cdFx0XCJlbnRpdHlcIjogZW50aXR5LFxyXG5cclxuXHRcdFwicHJvcGVydHlcIjogcHJvcGVydHksXHJcblx0XHRcInR5cGVcIjogcHJvdHlwZSggdmFsdWUgKS50eXBlLFxyXG5cclxuXHRcdFwiZGVzY3JpcHRvclwiOiBkZXNjcmlwdG9yLFxyXG5cdFx0XCJlbnVtZXJhYmxlXCI6IGRlc2NyaXB0b3IuZW51bWVyYWJsZSxcclxuXHRcdFwiY29uZmlndXJhYmxlXCI6IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlLFxyXG5cdFx0XCJ3cml0YWJsZVwiOiBkZXNjcmlwdG9yLndyaXRhYmxlLFxyXG5cdFx0XCJnZXRcIjogZGVzY3JpcHRvci5nZXQsXHJcblx0XHRcInNldFwiOiBkZXNjcmlwdG9yLnNldCxcclxuXHJcblx0XHRcInZhbHVlXCI6IHZhbHVlXHJcblx0fSwgdGhpcyApO1xyXG5cclxuXHRyZXR1cm4gdGhpcztcclxufTtcclxuXHJcbk1ldGEucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiggKXtcclxuXHRyZXR1cm4ge1xyXG5cdFx0XCJuYW1lXCI6IHRoaXMubmFtZSxcclxuXHRcdFwiZW50aXR5XCI6IHRoaXMuZW50aXR5LFxyXG5cclxuXHRcdFwicHJvcGVydHlcIjogdGhpcy5wcm9wZXJ0eSxcclxuXHRcdFwidHlwZVwiOiB0aGlzLnR5cGUsXHJcblxyXG5cdFx0XCJkZXNjcmlwdG9yXCI6IHRoaXMuZGVzY3JpcHRvcixcclxuXHRcdFwiZW51bWVyYWJsZVwiOiB0aGlzLmVudW1lcmFibGUsXHJcblx0XHRcImNvbmZpZ3VyYWJsZVwiOiB0aGlzLmNvbmZpZ3VyYWJsZSxcclxuXHRcdFwid3JpdGFibGVcIjogdGhpcy53cml0YWJsZSxcclxuXHRcdFwiZ2V0XCI6IHRoaXMuZ2V0LFxyXG5cdFx0XCJzZXRcIjogdGhpcy5zZXQsXHJcblxyXG5cdFx0XCJ2YWx1ZVwiOiB0aGlzLnZhbHVlXHJcblx0fTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWV0YTtcclxuIl19
//# sourceMappingURL=meta.support.js.map
