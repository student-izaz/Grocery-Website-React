const userModel = require('../../model/auth-model/user-model')

const createUser = async (req, res) => {
    try {
        const data = req.body;
        userModel.create({data});
        res.status(200).json({ msg:'User Created Successfully!' });
    } catch (error) {
        req.status(400).json({ msg: 'User Created Error', error });
    }
}

module.exports = { createUser };