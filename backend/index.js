import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)


app.listen(8000, () => {
    console.log("Connected!")
})





/* const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'examensarbete-db'
})





app.get('/', (req, res) => {
 res.json("Hello this is the beckend")
});

app.get('/users', (req, res) => {
    const q = "SELECT * FROM users"
    db.query( q, (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
      
});
 */






/* app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'examensarbete-db'
})


db.connect(err => {
    if(err) {
        throw err
    }
    console.log('MySQL Connected')
})



app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query(
        'INSERT INTO users (username, password) VALUES (?,?)', 
        [username, password], 
        (err, result) => {

            if(err) {
                console.log(err);
            } else {
                res.send("User registerd")
            }
        }
    );
});


app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query(
        'SELECT * FROM users WHERE username = ? AND password = ?', 
        [username, password], 
        (err, result) => {

            if(err) {
                res.send({err: err});
            }
            
            if(result) {
                res.send(result);
            } 
            
            else {
                res.send({message: "Wrong username or password!"})
            }
        }
    );
});




app.listen('3001', () => {
    console.log("started")
})
 */