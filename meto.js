/*;
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
			"wichevr": "wichevr",
			"zelf": "zelf"
		}
	@end-include
*/

const falzy = require( "falzy" );
const kein = require( "kein" );
const protype = require( "protype" );
const wichevr = require( "wichevr" );
const zelf = require( "zelf" );

const Meta = require( './meta.js' );

const meto = function meto( property, entity ){
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

	if( falzy( property ) || !protype( property, NUMBER + STRING + SYMBOL ) ){
		throw new Error( "invalid property" );
	}

	entity = wichevr( entity, zelf( this ) );

	if( !kein( property, entity ) ){
		return { };
	}

	let descriptor = Object.getOwnPropertyDescriptor( entity, property );

	if( falzy( descriptor ) ){
		return { };
	}

	let value = descriptor.value;

	let name = wichevr( entity.name, entity.constructor.name );

	return Meta( name, entity, property, descriptor, value );
};

module.exports = meto;
