const controller = require('./controller')
const bodyParser = require('body-parser');
const express = require('express');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
//properties
//houseruser

//many references the one. properties references the user_id

const app = express();
////top level middleware
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('db works')
    app.set('db', db);
}).catch(e => {
    console.log(e)
})

// app.use((req, res, next){
    //     req.session.user = {
        //         name: 'tommy',
        //         age: 24
        //     };
        //     next()
        // })
        
        app.use(session({
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: true
            // cookie: {
                //     maxAge: 1000 * 60
                // }
            }))
            
            app.post('/api/auth/login', controller.login)
            app.post('/api/auth/register', controller.register)
            app.post('/api/auth/logout', controller.logout);
            
            app.get('/api/getproperties', controller.getProperties)

            app.post('/api/properties', controller.postProperty)

            app.delete('/api/delete/:id', controller.delete)
                        
            app.listen(3005, () => {
                console.log("working on 3005");
            })

            //drop table if exists authors;
            //create table if not exists authors (
             //   id serial primary key,
             //   name text
            //) 


            //join table
            // create table if not exists authored_books (
            //     id serial primary key,
            //     author_id int references authors(id),
            //     book_id int references books(id)
            // )

            // insert into authored_books(author_id, book_id)
            // values
            // (5, 5)
            // (4, 5)
            // (3, 3)
            // (2, 5)
            // (1, 2)