import nodemailer from "nodemailer";

export async function sendEmail(username: string, email: string, url: string) {

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "ekrijel@gmail.com", // generated ethereal user
      pass: "TimeEatsUs124C1" // generated ethereal password
    }
  });


  const mailOptions = {
    from: '"The Quantum Terminals 🖥️" <ekrijel@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Welcome on board! ✔", // Subject line
    text: "Activate your account", // plain text body
    html: `
    <div style="
      width: 100%;
      background: #e4e4e4;
      color: #565656;
      padding: 30px;
    ">
    <h2 style="
      font-weight: 600;
      font-size:21px;
      margin-bottom:5px;
    ">
    Welcome ${username},
    </h2>
     <p
     style="
     font-size: 14px;
    "
     >
     Please confirm your email, opening the link below.
     </p>
     <a
     style="
      font-size: 14px;
      font-weight: 600;
      background: #2f2f2f;
      padding: 5px 10px;
      color: white;
      text-decoration: none;
      cursor: pointer;
     "
     href="${url}">Confirm</a>
    </div>
    ` // html body
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
