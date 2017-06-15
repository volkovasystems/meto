const assert = require( "assert" );
const meto = require( "./meto.js" );

assert.ok( JSON.stringify( meto( "name", { "name": "simple" } ) ) );

assert.equal( Object.isFrozen( meto( "name", { "name": "simple" } ) ), true, "should return true" );

console.log( "ok" );
