const client = require('./connection.js')
const redis = require('redis');
const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const path = require('path');
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.listen(5000, ()=>{
    console.log("Sever is now listening at port 5000");
})

client.connect();


let redisClient = redis.createClient({
    retry_strategy: (options) => {

        if (options.error && options.error.code === "ECONNREFUSED") {
            console.log('Redis: RECONECTANDO - '+options.error.code); 
        }

        return Math.min(options.attempt * 100, 3000);
    },
});

redisClient.on('connect', ()=>{
    console.log("Redis: CONECTADO");
});

app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      secret: 'class',
      resave: false,
      saveUninitialized: false
    })
);

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan('dev'));

app.use(cors({origin:['http://localhost:5000','http://localhost:3000'],methods:['GET','POST','PUT','DELETE'],credentials:true}))

app.use('/public',express.static(path.resolve(__dirname,"public")));

require('./routes/rutas')(app);


module.exports = app;