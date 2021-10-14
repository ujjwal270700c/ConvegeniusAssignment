const express=require('express')
const app=express();
require('dotenv').config()
const port =process.env.PORT;
const {Telegraf} = require('telegraf');

const bot = new Telegraf(process.env.Token);

bot.on(/\/start /, msg => {
    const chatId = msg.chat.id;
    const user_id = msg.from.id;
    const name = msg.from.name;
    const last_name = msg.from.last_name;
    const username = msg.from.user_name;
    user_data = [chatId, first_name, last_name, username];
    console.log(user_data);
})
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello')
})



bot.hears('Start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'How many vaccines shots have been administered to you?', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Not vaccinated', callback_data: '000' },
                ],
                [
                    { text: 'One', callback_data: '001' },
                ],
                [
                    { text: 'Two', callback_data: '002' },
                ]
            ]
        }
    })
})

bot.action('000', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Hope you will take it soon', {
    })
    bot.telegram.sendMessage(ctx.chat.id, 'Do you have fever or any infaction ?', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Yes', callback_data: 'yes' },
                ],
                [
                    { text: 'No', callback_data: 'no' },
                ]
            ]
        }
    })

})
bot.action('yes', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'We will contact you soon Please share your details', requestPhoneKeyboard)

})
bot.action('no', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Happy to know have a good day')

})
const requestPhoneKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [
            [{
                text: "My phone number",
                request_contact: true,
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }
};
//method that returns image of a cat 

bot.action('001', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'take second dose as soon as possible', {
    })

})
bot.action('002', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Good happy to hear that.', {
    })
})


bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot please type Start.', {
    })
})
bot.command('Bot', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Please reply  here to tell us ow we can improve this bot.', {

    })
})
bot.launch();
app.listen(port,()=>{
    console.log(`Server is running at port :${port}`);
})