import express from "express";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();

// app.get('/',(req,res)=>{
//      res.send('Server is Ready');
// })

app.get('/api/data', (req, res) => {
    const data =[ {
        id: 1,
        name: "John Doe",
        age: 30,
        city: "New York",
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        city: "Los Angeles",
    },
    {
        id: 3,
        name: "Alice Johnson",
        age: 28,
        city: "Chicago",
    },
    {
        id: 4,
        name: "Bob Brown",
        age: 35,
        city: "Houston",
    },
    {
        id: 5,
        name: "Charlie Davis",
        age: 22,
        city: "Phoenix",
    },]; 
     res.send(data);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);