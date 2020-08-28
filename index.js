const app = require("./app");

//Specify port to run on
const port = 5000;

//listen in for requests on port
app.listen(port,() =>{
    console.log(`Running on port ${port}`);
})