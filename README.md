### eslint + prettier

## ¿Que es EsLint?
ESLint es una herramienta de código abierto enfocada en el proceso de "lintig" para javascript (o más correctamente para ECMAScript)
ESLint es la herramienta predominante para la tarea de "limpiar" código javascript tanto en el servidor (node.js) como en el navegador

Bueno, ESLint es una herramienta de "linting", por lo que te puede ayudar a:
- Mostrarte errores de sintaxis.
- Mostrarte errores cuando no se siguen buenas prácticas.
- Proveer sugerencias para mejorar tu código.
- Mantener un estilo consistente en tu código o reforzar reglas internas de tu propio equipo.

## ¿Que es Prettier?
Es una herramienta para formatear el código, tiene soporte para HMTL, CSS, JavaScript, JSX, TypeScript, GraphQL, etc.

Se encarga de garantizar que el código se ajuste a un estilo consistente de manera automática. Para ello, analiza el código y lo re-escribe cada vez que se ejecuta. 

## Configuracion

Instalar dependencias de desarrollo

```sh
# --sabe-dev Guarda las dependencia en forma de desarrollo
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
```

crear archivo eslint.json/js en la raiz de mi proyecto

```sh
# Crea el archivo eslint
  npx eslint --init
```

- para ver que opcion elegir ingresar al link de + INFO

## Prettier

crear archivo .prettierrc en la raiz del proyecto ( a la par del .eslint.json/js)

```sh
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```


## [+ INFO](https://dev.to/mrluisfer/configurar-eslint-prettier-junto-con-vscode-3h00)
