const MESSAGES =['Emmanuel', 'Lisa', 'Diana', 'Cesar', 'Llanas', 'Angelica'];

const randomMsg = ()=>{
    message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)]
    console.log(message);
    
}

module.exports = { randomMsg}