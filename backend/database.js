const mysql = require('mysql')
const { promisify } = require ('util')

const {database} = require ('./keys')

const pool = mysql.createPool(database)

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error ('CONECCIÓN CON LA BASE DE DATOS SE CERRÓ')
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error ('BASE DE DATOS TIENE MUCHAS CONECCIONES')
        }
        if (err.code === 'ECONREFUSED'){
            console.error ('CONECCIÓN A LA BASE DE DATOS FUE RECHAZADA')
        }
    }
    if (connection) {
        connection.release()
        console.log ('DB esta conectada')
    }
    return
})

pool.query = promisify(pool.query)

module.exports = pool