const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
//Lembrar que a opção de trazer o registro atualizado e as validações não estão ativas por padrão
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo