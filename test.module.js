"use strict";

/*;
	@test-license:
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
	@end-test-license

	@test-configuration:
		{
			"package": "meto",
			"path": "meto/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/meto.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"meto": "meto"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const meto = require( "./meto.js" );
//: @end-server

//: @client:
const meto = require( "./meto.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "meto", ( ) => {

	describe( "`meto( 'name', { 'name': 'simple' } )`", ( ) => {
		it( "should freeze the object", ( ) => {
			assert.equal( Object.isFrozen( meto( "name", { "name": "simple" } ) ), true );
		} );
	} );

	describe( "`Property descriptor configurable`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( meto( "name", { "name": "simple" } ).configurable, true );
		} );
	} );

	describe( "`Property descriptor enumerable`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( meto( "name", { "name": "simple" } ).enumerable, true );
		} );
	} );

	describe( "`Property descriptor writable`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( meto( "name", { "name": "simple" } ).writable, true );
		} );
	} );

} );

//: @end-server


//: @client:

describe( "meto", ( ) => {

	describe( "`meto( 'name', { 'name': 'simple' } )`", ( ) => {
		it( "should freeze the object", ( ) => {
			assert.equal( Object.isFrozen( meto( "name", { "name": "simple" } ) ), true );
		} );
	} );

	describe( "`Property descriptor configurable`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( meto( "name", { "name": "simple" } ).configurable, true );
		} );
	} );

	describe( "`Property descriptor enumerable`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( meto( "name", { "name": "simple" } ).enumerable, true );
		} );
	} );

	describe( "`Property descriptor writable`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( meto( "name", { "name": "simple" } ).writable, true );
		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "meto", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`meto( 'name', { 'name': 'simple' } )`", ( ) => {
		it( "should freeze the object", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return Object.isFrozen( meto( "name", { "name": "simple" } ) );
				}

			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );

	describe( "`Property descriptor configurable`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return meto( "name", { "name": "simple" } ).configurable;
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`Property descriptor enumerable`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return meto( "name", { "name": "simple" } ).enumerable;
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`Property descriptor writable`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return meto( "name", { "name": "simple" } ).writable;
				}

			).value;

			assert.equal( result, true );

		} );
	} );

} );

//: @end-bridge
