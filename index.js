import express from 'express';
import bodyParser from 'body-parser';
import usersRoute from './routes/users.js'

const app = express();
const port = 3000;

app.use(bodyParser.json())

app.use('/users',usersRoute)

app.listen(port,()=>{
    console.log(`server is running in port${port} `)
})