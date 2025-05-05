//three_bid_alarm_bot

const express = require('express');
const app = express();

const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running `);

  function sendText() {
    //// bid channel id = -4784307508
    bot.sendMessage('5026099608','Send daily bid report and update race Website!')
    // Replace with your text-sending logic (e.g., SMS API call)
    console.log("Text sent at", new Date().toUTCString());
  }
  
  function scheduleDaily() {
    const now = new Date();
    const target = new Date();
  
    // Set target to 01:00 UTC
    target.setUTCHours(17, 2, 0, 0);
   
    // If target time already passed today, schedule for tomorrow
    if (now > target) {
      target.setUTCDate(target.getUTCDate() + 1);
    }
  
    const delay = target - now;
  
    setTimeout(() => {
      sendText();
      scheduleDaily(); // Reschedule for next day
    }, delay);
  }

  
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
    scheduleDaily()
    console.log("222")
    
        if (messageText === '/start') {    
            console.log("111")
       }
  });
});

const TelegramBot = require('node-telegram-bot-api');
const token = '7773439957:AAEvaW35BsJk9QHEd-ZsLqdS8pT-pKYJpE4'; 
const bot = new TelegramBot(token, { polling: true });

// const port = 3000;
// app.get('/', (req, res) => {
//     res.send('Hello, Node.js!');
// });

// app.listen(port, () => {
    // console.log(`Server is running on port ${port}`);

   


// });

