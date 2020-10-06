/* 
db= Base de datos en la que se encuentra la colección, en este caso g2_bd01 a la que he accedido usando el comando "use g2_bd01" en Mongo
col01= La colección en la que se encuentran los objetos dentro de la base de datos
insert({""})= comando para insertar objetos en la colección
*/
db.col01.insert([{x: "Objeto 1"},{x:"Objeto 2"},{x: "Objeto 3"}])
/* 
Con esta instrucción he creado una colección con tres objetos dentro con la variable "x"
*/
