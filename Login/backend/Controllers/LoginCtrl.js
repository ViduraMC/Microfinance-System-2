const UserModel = require("../Model/UserModel");

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await UserModel.findOne({ username, password });
        if (user) {
            res.json({ success: true, message: "Login successful" });
        } else {
            res.status(401).json({ success: false, message: "Invalid credentials" });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
}; 