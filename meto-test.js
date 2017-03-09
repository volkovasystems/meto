"use strict";

const meto = require( "./meto.js" );

console.log( JSON.stringify( meto( "name", { "name": "simple" } ) ) );

console.log( Object.isFrozen( meto( "name", { "name": "simple" } ) ) );
