exports.index = async (req, res) => {

    const {user_id} = res.locals;


    res.status(200).json({
        data: user_id
    })
}
