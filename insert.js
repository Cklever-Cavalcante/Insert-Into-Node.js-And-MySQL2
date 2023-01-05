// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'admin',
    database:'insertpre'
});

let sql = "INSERT INTO presentes (aluno, aula, dia) VALUES ('carlos','Python','Quarta-feira')";
connection.query(sql,(err,result)=>{
    if(err) throw err
    console.log("Funcionou!");
})


