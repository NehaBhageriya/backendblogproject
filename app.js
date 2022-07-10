const express = require ('express');
const cors=require('cors')
const routing = require('./route/Details')
const routing1 = require('./route/Blogdata')

const app =express();
app.use(cors());

app.use('/api',routing)
app.use('/api',routing1)


app.listen(3001,()=>{
    console.log("app is running ");
}
)