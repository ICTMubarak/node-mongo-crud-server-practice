const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json());

// username: dbuser3
// pass : UuOMZVpG2Co38wmT
const uri = "mongodb+srv://dbuser3:UuOMZVpG2Co38wmT@cluster0.ltjdg3f.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){

    try{

        const userCollection = client.db('nodeMongoCurdPractice').collection('users');
        app.post('/users', async(req, res) =>{
            const user = req.body;
            console.log(user); 

            const result = await userCollection.insertOne(user)
        })

    }

    finally{

    }

}

run().catch(err => console.log(err));





app.get('/', (req, res) =>{
    res.send('Hello from node mongo crud server');
})

app.listen(port, ()=>{
    console.log(`listinting to potr ${port}`);
})