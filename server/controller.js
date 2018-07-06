module.exports = {
    add_user: (req, res) => {
        const { user_name, user_password } = req.body;
        req.app.get('db').add_user([user_name, user_password])
        .then( user => res.status(201).send(user))
        .catch( err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
}