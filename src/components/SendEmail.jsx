import { render } from '@react-email/components';
import nodemailer from 'nodemailer';
import { Email } from './email';

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    user: "vivekbanduni3@gmail.com",
    pass: "Nitt@0412",
  },
});

const emailHtml = await render(<Email url="https://example.com" />);

const options = {
  from: "vivekbanduni3@gmail.com",
  to: "bandunivivek2022@gmail.com",
  subject: "hello world",
  html: emailHtml,
};

await transporter.sendMail(options);