import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "";

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                q: "",
                appid: API_KEY,
                units: "metric"
            }
        });
        const result = response.data;
        console.log(result);
        res.render(__dirname+'/views/index.ejs', { data: result });
    } catch (error) {
        console.error("Failed to make request:", error.message);
    }
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});