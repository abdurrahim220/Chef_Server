const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


const chef_details = require('./data/chef_details.json');

app.use(cors());

app.get('/',(req,res)=>{
    res.send("My name is Rahim!!")
});

app.get('/chef_details',(req,res)=>{
    res.send(chef_details)
});

app.get('/chef_details/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    const selectCountry = chef_details.find(n => n._id === id);
    res.send(selectCountry);
});

app.listen(port,()=>{
    console.log(`Example of app listening on port ${port}`);
})