import User from "../models/userModel.js";

export const logoutUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        if (!user) {
            res.status(404).send({ msg: "User not found" })
        } else {
            user.token = ''
            user.save();
            res.status(200).send({ msg: "User Logout successfully" })
        }
    } catch (error) {
        res.status(500).send({ msg: "Internal server error" });
    }
}