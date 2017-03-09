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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
              			"eMail": "richeve.bebedor@gmail.com",
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

//# sourceMappingURL=meta.js.map