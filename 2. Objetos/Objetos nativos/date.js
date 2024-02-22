// 6. DATE

    let fecha = new Date(); // Es necesario instanciarlo. Días y meses empiezan a contar desde 0

/* Métodos de utilidad: */
    fecha.getDate(); // Devuelve el día del mes actual entre 1 y 31
    fecha.getDay(); // Devuelve el día de la semana actual entre 0 (domingo) y 6 (sábado)
    fecha.getMonth(); // Devuelve el mes del año actual entre 0 (enero) y 11 (diciembre)
    fecha.getFullYear(); // Devuelve el año actual

    fecha.getSeconds(); // Devuelve los segundos del minuto actual como 
    fecha.getMinutes(); // Devuelve los minutos de la hora actual
    fecha.getHours(); // Devuelve la hora del día actual
    fecha.getTime(); // Devuelve el tiempo transcurrido en milisegundos desde el 1 de enero de 1970 hasta el momento actual

    fecha.setDate(dia_mes); // Pone el día del mes actual
    fecha.setDay(dia_semana); // Pone el día de la semana actual
    fecha.setMonth(mes); // Pone el mes del año actual
    fecha.setYear(año); // Pone el año actual
    fecha.setSeconds(segundos); // Pone los segundos del minuto actual
    fecha.setMinutes(minutos); // Pone los minutos de la hora actual
    fecha.setHours(horas); // Pone la hora del día actual
    
    fecha.toGMTString(); // Devuelve una cadena con la zona horaria GMT

    

