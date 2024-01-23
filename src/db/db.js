const mongoose = require("mongoose")
const reconnectTimeout = 5000;

function connectdatabase(){
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
    useUnifiedTopology: true,
    
    }).then((data)=>{
    console.log(`Mongodb is connected with the server :${data.connection.host}`)
    }).catch((err)=>{
        console.log(err)
    })
}
const db = mongoose.connection;
db.on('connecting', () => {
    console.info('Connecting to MongoDB...');
  });
  
  db.on('error', (error) => {
    console.error(`MongoDB connection error: ${error}`);
    mongoose.disconnect();
  });
  
  db.on('connected', () => {
    console.info('Connected to MongoDB!');
  });
  
  db.on('error', (error) => {
    console.error(`MongoDB connection error: ${error}`);
    mongoose.disconnect();
  });
  
  
  db.on('reconnected', () => {
    console.info('MongoDB reconnected!');
  });
  
  db.on('disconnected', () => {
    console.error(`MongoDB disconnected! Reconnecting in ${reconnectTimeout / 1000}s...`);
    setTimeout(() => connect(), reconnectTimeout);
  });
connectdatabase()