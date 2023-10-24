import User from "../models/userModel.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const isUserAlreadyExist = await User.findOne({ email });
        if (isUserAlreadyExist) {
            res.status(400).send({ msg: "User already exist" });
        } else if (!name || !email || !password) {
            res.status(400).send({ msg: "Please Filled all required filled" });
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password, salt)
            const newUser = new User({
                name,
                email,
                password: hashPassword
            })
            await newUser.save();
            res.status(200).json(newUser);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal server error" });
    }
}
export default register;