import User from "../models/userModel.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).send({ msg: "Please fill all required filled" })
        } else {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).sennd({ msg: "User Does not exist" });
            } else {
                const validUser = await bcrypt.compare(password, user.password);
                if (!validUser) {
                    return res.status(400).send({ msg: "Invalid Credential" })
                } else {
                    const payload = {
                        userId: user?._id,
                        email: user?.email
                    }
                    const JWT = process.env.JWT_SECRET_KEY
                    jwt.sign(payload, JWT, { expiresIn: 84600 }, async (err, token) => {
                        await User.updateOne({ _id: user._id }, {
                            $set: { token }
                        })
                        user.save();
                        return res.status(200).json({ user: { id: user?._id, email: user?.email, name: user?.name }, token: token })
                    })
                }
            }
        }
    } catch (error) {
        return res.status(500).send({ msg: "Internal server error" });
    }

}
export default login