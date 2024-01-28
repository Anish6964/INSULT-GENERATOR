import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const URL = "https://evilinsult.com/generate_insult.php"


app.use(express.static("public"));

app.get("/", (req,res) =>{
    res.render("index.ejs", {insult : null});
})

app.get("/generate", async (req,res) => {
    try{
        const result = await axios.get(URL); 
        res.render("index.ejs", {insult:result.data});
    }
    catch(error){
        console.error('Error fetching insult:', error);
        res.render("index", { insult: "Error fetching insult." });
    }
    
})

app.get("/about", (req,res)=>{
    res.render("about.ejs");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  