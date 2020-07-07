require("dotenv").config();

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "hello1",
    from: process.env.twitwiliofromNumber,
    to: process.env.twilioToNumber,
  })
  .then((message) => console.log(message.sid))
  .done();
