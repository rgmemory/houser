module.exports = {
    login: function(req, res){
        req.app.get('db').get_users().then(users => {
            
            const foundUser = users.find(current => {
                return (current.username == req.body.username && current.password == req.body.password);
            })

            if(foundUser){
                req.session.user = {user_id: null, username: ''}
                req.session.user.user_id = foundUser.user_id;
                req.session.user.username = foundUser.username;
                console.log(req.session.user, 'is the session')
                res.status(200).send(req.session.user)
            }else{
                res.sendStatus(500);
            }
        })
    },

    getProperties: function(req, res){
        console.log('queries', req.session.user)
        if(req.query.filter){
            req.app.get('db').get_filtered_properties([req.session.user.user_id, req.query.filter]).then(properties =>
                res.status(200).send(properties)
            )
        }
        else{
            console.log('no queries', req.session.user)
            req.app.get('db').get_userprops([req.session.user.user_id]).then(properties => {
                res.send(properties)
            })
        }
    },

    postProperty: function(req, res){
        let {name, description, address, city, state, zip, image, loan, mortgage, rent} = req.body
        req.app.get('db').add_property([name, description, address, city, state, zip, image, loan, mortgage, rent, req.session.user.user_id]).then(property => {
            res.sendStatus(200)
        })
    },

    delete: function(req, res){
        req.app.get('db').delete_property([req.params.id]).then(reply => {
            res.sendStatus(200);
        })
    },
    
    register: function(req, res){
        req.app.get('db').register_user([req.body.username, req.body.password]).then(user =>{
            req.session.user = {user_id: null}
            req.session.user.user_id = user[0].user_id;
            res.status(200).send(req.session.user)
        })
    },

    logout: function(req, res){
        req.session.destroy();
        res.sendStatus(200);
    }
    
}