const app = require("./index");

const connect = require("./config/db");

app.listen(8080, async function(){
    try {
        await connect();
    console.log("listening on port 5000")
    } catch (error) {
        console.log(error)
    }
})