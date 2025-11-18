import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
// app.use(json());

const TOKEN = process.env.SUPERHERO_TOKEN;

app.get("/search/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const url = `https://superheroapi.com/api.php/${TOKEN}/search/${name}`;
    const response = await axios.get(url);
    res.json(response.data);
  } 
  catch (error) {
    console.error("Error fetching hero:", error);
    res.status(500).json({ error: "Failed to fetch hero" });
  }
});

console.log(TOKEN)


app.get("/img", async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) return res.status(400).send("Missing id");

    const imageUrl = `https://www.superheroapi.com/api.php/${TOKEN}/${id}/image`;

    const apiRes = await axios.get(imageUrl);
    const url = apiRes.data.url;

    // Now stream the real image
    const imgRes = await axios.get(url, { responseType: "stream" });

    res.set("Content-Type", imgRes.headers["content-type"]);
    imgRes.data.pipe(res);

  } catch (err) {
    console.error("IMAGE ERROR:", err);
    res.status(500).send("Failed to load image");
  }
});





// Test route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>console.log(`server running on ${PORT}`))
