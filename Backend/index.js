const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.get("/" , (req, res) => {
  res.send("Hello, World!");
});


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSWORD,
    },
});

app.post('/subscribe', async (req, res) => {
    console.log('Received Subscription request:', req.body);
    const { email } = req.body;
    console.log('Email:', email);

    try {
    await transporter.sendMail({
      from: process.env.EMAIL_ID,
      to: email,
      replyTo: process.env.EMAIL_ID,
      subject: `You're officially subscribed!`,
      html: `
        <p><b> Welcome aboard! 👋</b></p>
        <p>Thanks for subscribing to Tvashta's newsletter </p>
      `,
    });
    res.status(200).send('Email sent');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
    
});

app.post('/send-email', async (req, res) => {
    console.log('Received request:', req.body);
  const { name, email, phone, service, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_ID,
      to: process.env.EMAIL_ID,
      subject: `Inquiry from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    res.status(200).send('Email sent');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));