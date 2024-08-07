import app from './app.js'
import { connectdb } from './data/database.js'

connectdb()
app.listen(4002,()=>{
    console.log("at 4002")
})