import nodemailer from "nodemailer";
export default function handler(req, res) {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    var mailOptions = {
      from: "navwebdev2@gmail.com",
      to: "support@chakrakriya.org",
      subject: `New Form Submitted From Chakra Kriya by ${name}`,
      text: ` 
        Email:${email}
        Message:${message}
         `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(400).json({
          err: error.message,
          message: "Message Not Sent ",
          data: null,
        });
      } else {
        console.log("Email sent: " + info.response);

        res.status(200).json({
          err: null,
          message: "Message Sent Successfully",
          data: null,
        });
      }
    });
  } catch (err) {
    res.status(400).json({
      err: err.message,
      message: "Something Went Wrong",
      data: null,
    });
  }
}
