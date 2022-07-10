const admin = require("../config/firebaseConfig");
exports.index = async (req, res) => {

    const {user_id} = res.locals;

    const user = await admin.auth().getUser(user_id);

    res.status(200).json({
        data: user
    })
}

exports.register = async (req, res) => {

    try {
        const {user_id} = res.locals;
        const {email, phoneNumber, displayName} = req.body;

        const user = await admin.auth().updateUser(user_id, {
            email,
            phoneNumber,
            displayName
        })

        res.status(200).json({
            data: user
        })

    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}
