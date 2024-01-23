const app = require("./app")
require('./src/db/db')
app.listen(process.env.PORT,()=>{

    console.log(`server is working on http://localhost:${process.env.PORT}`)
} )