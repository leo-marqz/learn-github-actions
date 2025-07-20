console.log("START...");

console.log('Ejecutando codijo JS en main.js desde un workflow de github actions');
console.log("Variable de ambiente configurada en el workflow MI_VARIABLE -> ", process.env.MI_VARIABLE);
console.log(`Variable Centralizada: ${process.env.VARIABLE_CENTRALIZADA}`);
console.log(`Secreto Centralizado: ${process.env.SECRETO_CENTRALIZADO}`);

console.log("END...");
