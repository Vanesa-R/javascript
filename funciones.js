//  1. FUNCIÓN SIN PARÁMETROS
    
    // Desde ECMAScript6 podemos asociar una función a una variable (expresión funcional)
        let saludar = () => console.log("¡Hola, mundo!");
        saludar();

    // Podemos seguir encontrando funciones declaradas con esta sintaxis
        function saludar () {
            console.log("¡Hola, mundo!");
        }
        saludar();


//  2. FUNCIÓN CON PARÁMETROS

    // Desde ECMAScript6
        let saludar = nombre => `¡Hola, ${nombre}!`;
        console.log(saludar("Jose"));

    // Podemos seguir encontrando funciones con esta sintaxis
        function saludar (nombre){
            return "¡Hola, " + nombre + " !";
        }
        console.log(saludar("Jose"));


        // Otro ejemplo con datos de tipo número:
    
        // Desde ECMAScript6:
            let multiplicar = (a, b) => a * b; // Si hay más de un parámetro se colocan entre paréntesis
                console.log(multiplicar(3, 5));
        
        // Podemos seguir encontrando funciones con esta sintaxis
            function multiplicar (a, b){
                return a * b;
            }
            console.log(multiplicar(3,5));


    // 2.1 FUNCIÓN CON PARÁMETROS POR DEFECTO

        // Desde ECMAScript6:
            let sumar = (a, b = 0) => a + b; //  Asignamos valor «0» al segundo parámetro cuando no definamos ese argumento
            console.log(sumar(4));
            
        // Podemos seguir encontrando funciones con esta sintaxis
            function sumar (a, b){
                if (b === undefined){
                    b = 0;
                }
                return a + b;
            }
            console.log(sumar(4));

            
        /* 2.2.1 FUNCIÓN CON PARÁMETRO REST
        El ejemplo anterior es sencillo porque solo tenemos un parámetro por defecto. Pero ¿qué sucede cuando el número de parámetros es indefinido? 
        Para evitar tener que reeescribir constantemente una función para agregar parámetros, podemos utilizar el parámetro rest */

            const persona = (...datos) => console.log(datos); // Los datos se almacenan en un array
            persona("Vanesa", 36, "Desarrolladora front-end");




    // 2. 2 FUNCIÓN CON PARÁMETROS POR EXCESO
            
        function days (){
            console.log(arguments.length); //  Obtenemos los argumentos con «arguments.length»
            for (let i=0; i < arguments.length; i++){
                console.log(`El argumento ${i} es ${arguments[i]}`);
            }
        }
        days ("lunes", "martes", "jueves");


    // 3. FUNCIÓN ANÓNIMA
    
        const restar = function (e, f){
            return e - f;
        };
        console.log(restar(9, 4));


        /* 3. 1 FUNCIÓN ANÓNIMA AUTOINVOCADA
        Pondremos entre paréntesis la función. No olvidar los paréntesis para invocarla */

            // ECMAScript6:
                (() => console.log(`Hola, mundo`))();

            // Sintaxis anterior:
                (function () {console.log("¡Hola, mundo!");}());