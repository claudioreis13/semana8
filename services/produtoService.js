const connection = require('../configs/dbConfiguration');
const findAll = async () => {
 const produtos = await (await connection)
 .execute('SELECT * FROM produtos');
 return produtos[0];
};
const update = async () => {
 const produtos = await (await connection)
 .execute(`UPDATE produtos SET id = '5', nome = 'miojo', 
 descricao = 'comer quando tiver com preguiça de cozinhar',
 preco = '5.50', data_atualizado = '2012/05/15' WHERE id = '0'`);
 return produtos[0];
};
const save = async () => {
 const produtos = await (await connection)
 .execute(`INSERT INTO produtos(id, nome, descricao,
 preco, data_atualizado) VALUES ('3', 'unilavras', 'nota 5',
 '6 reais', '2003/02/12')`);
 return produtos[0];
};
const remove = async () => {
 const produtos = await (await connection)
 .execute(`DELETE FROM produtos WHERE id = '0'`);
 return produtos[0];
};
module.exports = {
 findAll,
 save,
 remove,
 update,
};
