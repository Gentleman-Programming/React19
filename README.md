# CAMBIOS !!!

### 1. Nuevo compilador, React está trabajando para implementar un nuevo compilador. Ahora mismo, esta tecnología está siendo implementada en Instagram y será publicada en versiones futuras de React.

### 2. Server Components, ya no será necesarios frameworks de terceros ya que serán parte de React mismo.

### 3. Actions, una NUEVA forma de interactuar con el DOM.

### 4. Document Metadata, una mejora que se viene, dando poder a los desarrolladores para hacer más con menos código.

### 5. Assets Loading, permite cargar assests detrás de bambalinas, lo que puede mejorar los tiempos de carga de la aplicación y la experiencia de usuario.

### 6. Web Components, ahora serán parte de React.

### 7. Mejores Hooks, se eliminan un montón y se traen nuevos jugadores al tablero.

Problemas que se tratan de atacar:

1. Problemas de render excecivos.
2. Problemas para manejar los renders a la hora de desarrollar.
3. Manejos de memoria complejos y que ocacionan dudas en los programadores novatos (useMemo, useCallback, memo)

Como lo quieren mejorar:

1. 2. El manejo del render será realizado de manera AUTOMÁTICA por React.
2. No serán necesarios los hooks de implementación manual para el manejo de memoria.

Vamos con los temas anteriores.

## Nuevo Compilador

El compilador actual deja MUCHO que desear, desde malas prácticas y dejar propensos a los desarrolladores a implementarlas con el uso de hooks como useMemo, useCallback, memo, etc que YA DEBERÍAN ser parte de la librería misma.
Luego de muchos años han escuchado finalmente a los gritos de los desarrolladores y decidieron que este manejo se realice de forma AUTOMÁTICA, será la misma librería la que decida cómo y cúando se realiza un cambio de estado y con este un render.

Por lo cual, chau useMemo(), chau useCallback() y chau memo.

Nuevamente, como se indicó anteriormente, están probando estos nuevos cambios directamente en productos propios, empezando por Instagram antes de que se hagan públicos.

## Server Components

Ya no se necesitan frameworks de terceros, ya que serán parte de React. Una de las cualidades que hacía que todos prefieran utilizar NextJs, llegará directamente a la librería misma.
NextJs implementó esta idea en un principio y ya en la versión 13 es la que se utiliza por default, si haz programado con este framework sabrás que para indicar que un componente se renderiza en el cliente, se utiliza la directiva "use client". Todo esto ahora será parte de React pero en sentido inverso, por default se utilizan componentes renderizados en el cliente y si queremos usar Server Components, tendremos que utilizar "use server".

Mejoras:

- SEO: aumentan el resultado de las web vitals por lo que podremos tener una mejora en cuanto a la puntuación total de la aplicación y con esto un mejor posicionamiento en los motores de búsqueda.
- Mejora de performance: sumado y relacionado a las mejoras de SEO, ya que uno de los web vitals más importantes es la velocidad de carga inicial y la utilización de Server Components trae consigo una carga inicial MUY rápida por lo que aplicaciones más pesadas se verán beneficiadas.
- Ejecución del lado del servidor: ahora podremos ejecutar código en el lado del servidor ya que es necesario montar uno para poder implementar este tipo de componentes.

## Acciones

Las acciones se utilizan con los server components y permiten llamar funciones del servidor que mutan los datos. En el browser, el elemento form del HTML es la forma tradicional de subir estas mutaciones, por lo que ahora React provee a los mismos de acciones del servidor.

## Web Components

Web Components son una forma de implementar componentes que serán puramente comformados por HTML, CSS y JS, por lo que se pueden incorporar de forma agnóstica a cualquier proyecto, indepenedientemente de la tecnología utiilzada en el Frontend.

Actualmente, la incorporación de este tipo de componentes a un projecto de React no se realiza de forma tan directa y necesitamos transformar dicho Web Componente a uno de React, instalar alguna librería que nos solucione el problema o escribir código adicional. En la versión 19, esto ya no será un problema ya que ahora se puede utilizar sin necesidad de convertirlo.

## Document Data

Dentro del SEO se utilizan elementos como lo son: "meta tags", "title", "link tags", etc. para poder identificar los diferentes conceptos de nuestra aplicación por parte de los buscadores y así identificar si esta será de utilidad para satisfacer las necesidades de información de los usuarios.
Para poder implementar un correcto manejo de los mismos entre diferentes rutas debíamos de utilizar código extra, implementar librerías de terceros, etc. y como siempre digo, cuanto menos codificamos y menos código de tercero tengamos...mejor.
Ahora mismo tenemos tags propios como <title>, <meta>.

## Assets Loading

Para no tener que pelear con problemas de las web vitals, como lo es el "INP" (Interaction to Next Paint), una de las cosas que podíamos hacer es es renderizar lo mas importante y luego el resto irlo cargando por detrás sin que el usuario se entere, de esta manera cargamos rápido inicialmente y el usuario puede interactuar con la página.
Ahora para esto se puden utilizar las API "preload" y "preinit", las cuales proveen un mejor control sobre los recursos que deben cargarse e inicializarce.

## Nuevos Hooks !

Como dije anteriormente, chau useMemo, chau useCallback, chau forwardRef y chau memo, pero eso no quiere decir que no vengan nuevos hooks !

### use()

Se utiliza junto con promesas, código asíncrono y context.

```
const value = use(fetchData());
```

Ya no tenemos que utilizar useContext(), ahora directamente se utiliza use(TuContexto).

### useFormStatus()

Provee información sobre el estado del submit de un formulario.

```
const { pending, data, method, action } = useFormStatus();
```

o

```
const { status } = useFormStatus();
```

MUY similar a react-hook-form.

### useActionState()

Reemplaza el anterior llamado useFormState() ya que la intención original es diferente a la entendida por los desarrolladores.
Antes creíamos que solo nos permitía actualizar el estado del formulario según el resultado del submit.

```
const [state, formAction] = useFormState(fn, initialState, permalink?);
```

Pero la verdad es que es mucho más que eso, la idea principal era revolver el estado de la ACCIÓN utilizada en el hook, envolviéndola y retornando una accion que pueda ser trackeada y así obtener el último valor retornado por dicha acción. De esta manera vemos que useFormState, no necesita ser utilizado siquiera en un formulario!.

Entonces ahora los cambios son:

- se cambia el nombre a "useActionState"
- se agrega un estado "pending"
- se importa de la librería "react" y no de "react-dom"

```
const [state, action, isPending] = useActionState(formAction);
```

### useOptimistic()

Nos permite mostrar un estado diferente mientras una lógica asíncrona se ejecuta.

```
const [ optimisticMessage, addOptimisticMessage] = useOptimistic(state, updatefn);
```

La idea principal es que mientras se esté esperando por la respuesta de una llamada asíncrona, se pueda mostrar un estado "optimista" mientras tanto para que el usuario tenga una respuesta inmediata. Una vez que tenemos la respuesta real, mostramos el resultado de la llamada.

Se le llama "optimista" porque se hará de cuenta que el resultado fue satisfactorio aunque todavía no lo sabemos.

## Cómo actualizar a React 19

Antes que todo debes saber que NO ESTÁ BIEN utilizar React 19 para aplicaciones que están en producción ya que todos estos cambios siguen estando en pruebas y pueden cambiar, además de que pueden presentar problemas.

Para poder actualizar tu projecto a React 19 solo debes hacer:

```
// reemplaza pnpm por tu manejador de paquetes predilecto

pnpm upgrade react@canary react-dom@canary

// en el caso de npm

npm update react@canary react-dom@canary
```
