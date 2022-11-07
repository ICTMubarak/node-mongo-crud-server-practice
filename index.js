const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const { query } = require('express');
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

        app.get('/users', async(req, res)=>{
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);

        });


        app.post('/users', async(req, res) =>{
            const user = req.body;
            console.log(user); 

            const result = await userCollection.insertOne(user);
            res.send(result);
        });

        app.delete('/users/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const result =await userCollection.deleteOne(query);
            console.log('trying to delete', result);
            res.send(result);


        });

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