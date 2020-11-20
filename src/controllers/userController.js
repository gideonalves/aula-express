const database =  require('../models/bd')
const userController = {
    index: (req, res) => {
        res.send(database)
    },
    create: (req, res) => {
        database.push(req.query)
        res.send({msg: 'mesagem cadastrado'})
    }
}
module.exports =  userController
