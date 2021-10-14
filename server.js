const express=require('express')
const app=express();
require('dotenv').config()
const port =process.env.PORT;
const axios=require('axios')

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello')
})


const { Token, SERVER_URL } = process.env
const TELEGRAM_API = `https://api.telegram.org/bot${Token}`
const URI = `/webhook/${Token}`
const WEBHOOK_URL = SERVER_URL + URI



const init = async () => {

try {
    const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`)
    console.log(res.data)
} catch (error) {
    console.log(error);
}
  
}

app.post(URI, async (req, res) => {
    console.log(req.body)

    // const chatId = req.body.message.chat.id
    // const text = req.body.message.text

    // await axios.post(`${TELEGRAM_API}/sendMessage`, {
    //     chat_id: chatId,
    //     text: text
    // })
    return res.send()
})


app.listen(port,async()=>{
    console.log(`Server is running at port :${port}`);
    await init()
})