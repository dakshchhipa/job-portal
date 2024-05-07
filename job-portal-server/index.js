const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { ObjectId } = require('mongodb');

const port = process.env.PORT || 4000;
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@jobportal.epgboqa.mongodb.net`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const db = client.db("mernJobPortal");
    const jobscollections = db.collection("demoJobs");

    // Middleware
    app.use(express.json());
    app.use(cors());

    // Routes
    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.createdAt = new Date();

      const result = await jobscollections.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: "Can not insert! Try again later",
          status: false
        });
      }
    });


    // get all jobs
    app.get("/all-jobs", async (req, res) => {
      try {
        const jobs = await jobscollections.find({}).toArray();
        res.send(jobs);
      } catch (error) {
        console.error("Error fetching all jobs:", error);
        res.status(500).send("Internal Server Error");
      }
    });

    //get jobs my email..
    app.get("/myJobs/:email" , async(req,res) =>  {
      // console.log(req.params.email);

      const jobs= await jobscollections.find({postedBy: req.params.email }).toArray();
      res.send(jobs);

    })


    //get single job using id
    app.get("/all-jobs/:id" , async(req,res) =>  {
      
      const id=req.params.id;
      const job=await jobscollections.findOne({
        _id:new ObjectId(id)
      })

      res.send(job)



    })
    
    //delete job by id

    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
  
      try {
          const result = await jobscollections.deleteOne(filter);
          res.send(result);
      } catch (error) {
          console.error("Error deleting job:", error);
          res.status(500).send("Internal server error");
      }
  });

  //UPDATE JOBS..

 //UPDATE JOBS..
// app.patch("/update-job/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const jobdata = req.body;
//     const filter = { _id: new ObjectId(id) };
//     const options = { upsert: true };

//     const updateDoc = {
//       $set: {
//         ...jobdata
//       }
//     };

//     const result = await jobscollections.updateOne(filter, updateDoc, options);
//     res.send(result);
//   } catch (error) {
//     console.error("Error updating job:", error);
//     res.status(500).send("Internal server error");
//   }
// });

//UPDATE JOBS..
app.patch("/update-job/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Check if id is a valid ObjectId
    if (!ObjectId.isValid(id)) {
      return res.status(400).send("Invalid job ID");
    }

    const jobdata = req.body;
    const filter = { _id: new ObjectId(id) };
    const options = { upsert: true };

    const updateDoc = {
      $set: {
        ...jobdata
      }
    };

    const result = await jobscollections.updateOne(filter, updateDoc, options);
    res.send(result);
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).send("Internal server error");
  }
});



    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Close the MongoDB client
    // await client.close();
  }
}

run().catch(console.dir);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get("/", (req, res) => {
  res.send("Server is running!");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
