const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());



const mongoUrl="mongodb+srv://burhanqsols:NTPQVSCF2eO83nFd@loader.ckphg2c.mongodb.net/Loader?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Database");
})
.catch(e=>console.log(e))

app.listen(5000,() => {
    console.log("Server Started");
})

require("./webState");

const Blog = mongoose.model("WebStates");

app.post("/save", async (req, res) => {
    const { name, state } = req.body;
    if (!name || !state) {
        return res.status(400).send({ status: "error", message: "Missing required properties in request body" });
    }
    try {
        const blog = await Blog.findOne({ name });
        if (blog) {
            // Update the existing blog entry and save it
            blog.state = state;
            await blog.save();
            return res.send({ status: "ok", message: "Blog updated" });
        }
        // Create a new blog entry
        await Blog.create({ name, state });
        res.send({ status: "ok" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "error", message: error.message });
    }
});

app.get("/getName", async(req,res) => {
    try {
        const allName = await Blog.find({}, { _id: 0, name: 1, state: 1 });
        res.send({status: "ok", data: allName});
    } catch (error) {
        console.log(error);
        
    }
}
)

app.get("/getOne/:name", async(req, res) => {
    try {
      const oneBlog = await Blog.findOne({ name: req.params.name }, { _id: 0, name: 1, state: 1 });
      if (!oneBlog) {
        return res.status(404).send({ status: "error", message: "Blog not found" });
      }
      res.send({ status: "ok", data: oneBlog });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "error", message: {error} });
    }
  });
  
  app.put("/update/:name",async(req,res)=>{
    const { state } = req.body;
    if (!state) {
        return res.status(400).send({status: "error", message: "Missing required properties in request body"})
    }
    try {
        const blog = await Blog.findOne({ name: req.params.name });
        if (!blog) {
            return res.status(404).send({ status: "error", message: "Blog not found" });
        }
        blog.state = state; // Update the state property
        await blog.save(); // Save the updated blog entry to the database
        res.send({ status: "ok", message: "Blog updated" });
    } catch (error) {
        console.log(error);
        res.status(500).send({status: "error", message: error.message})
    }
});
