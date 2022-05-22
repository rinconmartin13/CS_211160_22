const express = require('express');
const response = require("../../../network/response");
const { getConnection } = require('../../../model/db');

const router = express.Router();

router.get('/success', function (req, res) {
    response.success(req, res, "", 200);
});

router.post('/login', function (req, res) {

    console.log(req.query);
    console.log(req.query.userName);
    console.log(req.query.password)

    let userName = req.query.userName;
    let password = req.query.password;

    res.send({
        token: '',
        id_user: '13',
        success: 'OK'
    });
    console.log(req.query);
});

router.post('/register', async function (req, res) {
    // Realizar conexion a db
    console.log('-------register------');
    const client = await getConnection();

    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    let phone_number = req.query.phone_number;

    const query_request = {
        text: 'INSERT INTO tbl_usersdb(username, email, password, phone_number) VALUES($1, $2, $3, $4)',
        values: [username, email, password, phone_number]
    };

    client.query(query_request)
        .then(r => { console.log('Se guardo correctamente los datos'); response.success(req, res, r, 200); })
        .catch(e => { console.log('No se guardaron los datos'); response.success(req, res, e.detail, 200); })
});

module.exports = router;

/*definicion: 

un promise "promesa " es un objeto que representa la terminacion o fracaso de una operacion asincrona.
esencialmente una promesa es un objeto devuelto al cual se apuntan funciones

investigar callback
*/
///

