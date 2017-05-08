const assert = require( "assert" );
const meto = require( "./meto.js" );

assert.ok( JSON.stringify( meto( "name", { "name": "simple" } ) ) );

assert.ok( Object.isFrozen( meto( "name", { "name": "simple" } ) ) );

console.log( "ok" );
