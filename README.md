# ReactNativeExpoFirebase

preinstalar global:

`npm i -g create-react-app`

crear nuevo proyecto

`npx create-react-app todo-app`

instalamos yarn o arancamos server con npm:

`yarn start`


-----------

# Operador de Propagación

Basico:
```
var foo = [ 'En', 'un', 'lugar', 'de', 'la', 'Mancha' ];
 
console.info( ...foo );
// En un lugar de la Mancha
```

Concatenar Arrays:

```

var foo = [ 'En', 'un', 'lugar', 'de', 'la', 'Mancha' ],
    bar = [ 'de', 'cuyo', 'nombre', 'no', 'quiero', 'acordarme' ],
 
    // Old Style
    oldStyle = foo.concat( bar ),
 
    // ECMAScript 6 style
    ES6Style = [ ...foo, ...bar ];
 
console.info( oldStyle );
// [ "En", "un", "lugar", "de", "la", "Mancha", "de", 
    "cuyo", "nombre", "no", "quiero", "acordarme" ]
 
console.info( ES6Style );
// [ "En", "un", "lugar", "de", "la", "Mancha", "de", 
    "cuyo", "nombre", "no", "quiero", "acordarme" ]
    
```
