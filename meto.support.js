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
                                                                                                                                                                                                                                                                                                  			"contributors": [
                                                                                                                                                                                                                                                                                                  				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
                                                                                                                                                                                                                                                                                                  			],
                                                                                                                                                                                                                                                                                                  			"eMail": "richeve.bebedor@gmail.com",
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
                                                                                                                                                                                                                                                                                                  			"cemento": "cemento",
                                                                                                                                                                                                                                                                                                  			"falzy": "falzy",
                                                                                                                                                                                                                                                                                                  			"protype": "protype",
                                                                                                                                                                                                                                                                                                  			"truly": "truly",
                                                                                                                                                                                                                                                                                                  			"zelf": "zelf"
                                                                                                                                                                                                                                                                                                  		}
                                                                                                                                                                                                                                                                                                  	@end-include
                                                                                                                                                                                                                                                                                                  */

var cemento = require("cemento");
var falzy = require("falzy");
var protype = require("protype");
var truly = require("truly");
var zelf = require("zelf");

var meto = function meto(property, entity) {
	/*;
                                            	@meta-configuration:
                                            		{
                                            			"property:required": "string",
                                            			"entity:required": "object"
                                            		}
                                            	@end-meta-configuration
                                            */

	if (falzy(property) || !protype(property, STRING)) {
		throw new Error("invalid property");
	}

	entity = entity || zelf(this);

	var name = entity.name;
	if (falzy(name) && truly(entity.constructor) && truly(entity.constructor.name)) {
		name = entity.constructor.name;
	}

	var descriptor = (0, _getOwnPropertyDescriptor2.default)(entity, property);

	var value = descriptor.value;

	return cemento({
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
		"value": value });

};

module.exports = meto;

//# sourceMappingURL=meto.support.js.map