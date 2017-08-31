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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJjZW1lbnRvIiwicmVxdWlyZSIsImRpYXRvbSIsInByb3R5cGUiLCJNZXRhIiwicHJvdG90eXBlIiwiaW5pdGlhbGl6ZSIsIm5hbWUiLCJlbnRpdHkiLCJwcm9wZXJ0eSIsImRlc2NyaXB0b3IiLCJ2YWx1ZSIsInR5cGUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJnZXQiLCJzZXQiLCJ0b0pTT04iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQSxJQUFNQSxVQUFVQyxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNRyxPQUFPRixPQUFRLE1BQVIsQ0FBYjs7QUFFQUUsS0FBS0MsU0FBTCxDQUFlQyxVQUFmLEdBQTRCLFNBQVNBLFVBQVQsQ0FBcUJDLElBQXJCLEVBQTJCQyxNQUEzQixFQUFtQ0MsUUFBbkMsRUFBNkNDLFVBQTdDLEVBQXlEQyxLQUF6RCxFQUFnRTtBQUMzRjs7Ozs7Ozs7O0FBU0FYLFNBQVM7QUFDUixVQUFRTyxJQURBO0FBRVIsWUFBVUMsTUFGRjs7QUFJUixjQUFZQyxRQUpKO0FBS1IsVUFBUU4sUUFBU1EsS0FBVCxFQUFpQkMsSUFMakI7O0FBT1IsZ0JBQWNGLFVBUE47QUFRUixnQkFBY0EsV0FBV0csVUFSakI7QUFTUixrQkFBZ0JILFdBQVdJLFlBVG5CO0FBVVIsY0FBWUosV0FBV0ssUUFWZjtBQVdSLFNBQU9MLFdBQVdNLEdBWFY7QUFZUixTQUFPTixXQUFXTyxHQVpWOztBQWNSLFdBQVNOLEtBZEQsRUFBVDtBQWVHLEtBZkg7O0FBaUJBLFFBQU8sSUFBUDtBQUNBLENBNUJEOztBQThCQVAsS0FBS0MsU0FBTCxDQUFlYSxNQUFmLEdBQXdCLFNBQVNBLE1BQVQsR0FBa0I7QUFDekMsUUFBTztBQUNOLFVBQVEsS0FBS1gsSUFEUDtBQUVOLFlBQVUsS0FBS0MsTUFGVDs7QUFJTixjQUFZLEtBQUtDLFFBSlg7QUFLTixVQUFRLEtBQUtHLElBTFA7O0FBT04sZ0JBQWMsS0FBS0YsVUFQYjtBQVFOLGdCQUFjLEtBQUtHLFVBUmI7QUFTTixrQkFBZ0IsS0FBS0MsWUFUZjtBQVVOLGNBQVksS0FBS0MsUUFWWDtBQVdOLFNBQU8sS0FBS0MsR0FYTjtBQVlOLFNBQU8sS0FBS0MsR0FaTjs7QUFjTixXQUFTLEtBQUtOLEtBZFIsRUFBUDs7QUFnQkEsQ0FqQkQ7O0FBbUJBUSxPQUFPQyxPQUFQLEdBQWlCaEIsSUFBakIiLCJmaWxlIjoibWV0YS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm1ldG9cIixcblx0XHRcdFwicGF0aFwiOiBcIm1ldG8vbWV0YS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwibWV0YS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJtZXRvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9tZXRvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwibWV0by10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFN0YW5kYXJkIGNvbnZlbnRpb25hbCBvYmplY3QgbWV0YSBkZXNjcmlwdGlvbi5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiY2VtZW50b1wiOiBcImNlbWVudG9cIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgY2VtZW50byA9IHJlcXVpcmUoIFwiY2VtZW50b1wiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcblxuY29uc3QgTWV0YSA9IGRpYXRvbSggXCJNZXRhXCIgKTtcblxuTWV0YS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoIG5hbWUsIGVudGl0eSwgcHJvcGVydHksIGRlc2NyaXB0b3IsIHZhbHVlICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibmFtZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0Y2VtZW50bygge1xuXHRcdFwibmFtZVwiOiBuYW1lLFxuXHRcdFwiZW50aXR5XCI6IGVudGl0eSxcblxuXHRcdFwicHJvcGVydHlcIjogcHJvcGVydHksXG5cdFx0XCJ0eXBlXCI6IHByb3R5cGUoIHZhbHVlICkudHlwZSxcblxuXHRcdFwiZGVzY3JpcHRvclwiOiBkZXNjcmlwdG9yLFxuXHRcdFwiZW51bWVyYWJsZVwiOiBkZXNjcmlwdG9yLmVudW1lcmFibGUsXG5cdFx0XCJjb25maWd1cmFibGVcIjogZGVzY3JpcHRvci5jb25maWd1cmFibGUsXG5cdFx0XCJ3cml0YWJsZVwiOiBkZXNjcmlwdG9yLndyaXRhYmxlLFxuXHRcdFwiZ2V0XCI6IGRlc2NyaXB0b3IuZ2V0LFxuXHRcdFwic2V0XCI6IGRlc2NyaXB0b3Iuc2V0LFxuXG5cdFx0XCJ2YWx1ZVwiOiB2YWx1ZVxuXHR9LCB0aGlzICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5NZXRhLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oICl7XG5cdHJldHVybiB7XG5cdFx0XCJuYW1lXCI6IHRoaXMubmFtZSxcblx0XHRcImVudGl0eVwiOiB0aGlzLmVudGl0eSxcblxuXHRcdFwicHJvcGVydHlcIjogdGhpcy5wcm9wZXJ0eSxcblx0XHRcInR5cGVcIjogdGhpcy50eXBlLFxuXG5cdFx0XCJkZXNjcmlwdG9yXCI6IHRoaXMuZGVzY3JpcHRvcixcblx0XHRcImVudW1lcmFibGVcIjogdGhpcy5lbnVtZXJhYmxlLFxuXHRcdFwiY29uZmlndXJhYmxlXCI6IHRoaXMuY29uZmlndXJhYmxlLFxuXHRcdFwid3JpdGFibGVcIjogdGhpcy53cml0YWJsZSxcblx0XHRcImdldFwiOiB0aGlzLmdldCxcblx0XHRcInNldFwiOiB0aGlzLnNldCxcblxuXHRcdFwidmFsdWVcIjogdGhpcy52YWx1ZVxuXHR9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZXRhO1xuIl19
//# sourceMappingURL=meta.support.js.map
