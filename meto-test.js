"use strict";

const meto = require( "./meto.js" );

console.log( require( "util" ).inspect( meto( "name", { "name": "simple" } ), { "showHidden":true } ) );
