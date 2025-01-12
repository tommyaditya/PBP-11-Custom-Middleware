const userModel = require('../models/user-model');

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'Users Not Found' });
        }
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error Get All Users', error });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User Not Found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error Get User By Id', error });
    }
};

const addUser = async (req, res) => {
    try {
        const newUserId = await userModel.addUser(req.body);
        res.status(200).json({ id: newUserId, ...req.body });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error Insert Data', error });
    }
};

module.exports = { getAllUsers, getUserById, addUser };
