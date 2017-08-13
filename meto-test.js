const assert = require( "assert" );
const meto = require( "./meto.js" );

assert.ok( JSON.stringify( meto( "name", { "name": "simple" } ) ), "should not throw error" );

assert.equal( Object.isFrozen( meto( "name", { "name": "simple" } ) ), true, "should be equal to true" );

console.log( "ok" );
