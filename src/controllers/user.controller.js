const User = require('../models/user.model');

findAll = (req, res) => {
    const data = User.findAll();
    res.status(200).json(data); //devolvemos un estado 200 "OK" y los datos
}

findById = (req, res) => {
    const data = User.findById(req.params.id);

    if (!data) return res.status(404).json({msg: "No se encontró el usuario"});
    res.status(200).json(data);
}

addUser = (req, res) => {
    const newUser = User.addUser(req.body);

    if (!newUser) return res.status(400).json({msg: "Error en los datos del usuario"}); //si no se pudo crear el usuario, devolvemos un estado 400 "Bad Request"
    res.status(201).json(newUser);//devolvemos un estado 201 "creado" y el usuario creado
}

updateUser = (req, res) => {
    const updatedUser = User.updateUser(req.params.id, req.body);

    if (!updatedUser) return res.status(404).json({msg: "No se encontró el usuario o error en los datos"});
    return res.status(200).json({msg: "Se actualizó el usuario", user: updatedUser});
}

deleteUser = (req, res) => {
    const deletedUser = User.deleteUser(req.params.id);
    if (!deletedUser) return res.status(404).json({msg: "No se encontró el usuario"});
    return res.status(200).json({msg: "Se eliminó el usuario", user: deletedUser});
}

module.exports = {
    findAll,
    findById,
    addUser,
    updateUser,
    deleteUser
}