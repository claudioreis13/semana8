const connection = require('../configs/dbConfiguration');
const findAll = async () => {
 const clientes = await (await connection)
 .execute('SELECT * FROM clientes');
 return clientes[0];
};
const update = async () => {
 const clientes = await (await connection)
 .execute(`UPDATE clientes SET id = '11', nome = 'Jose', sobrenome = 'pereira', 
 email = 'josep@gmail.com', idade = '85' WHERE id = '0'`);
 return clientes[0];
};
const save = async () => {
 const clientes = await (await connection)
 .execute(`INSERT INTO clientes(id, nome, sobrenome,
 email, idade) VALUES ('20', 'João', 'tilapia', 'tilapia@gmail.com', '25')`);
 return clientes[0];
};
const remove = async () => {
 const clientes = await (await connection)
 .execute(`DELETE FROM clientes WHERE id = '0'`);
 return clientes[0];
};
module.exports = {
 findAll,
 save,
 remove,
 update,
};
