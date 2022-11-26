const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/PROJECT_2",{
         
}).then(()=>{
    console.log('connection successful');
    
}).catch((error)=>{
    console.log(error);

})
