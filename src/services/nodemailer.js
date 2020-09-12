const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

module.exports = async function sendEmail(name, email, callback) {
    console.log(process.env.EMAIL, process.env.EMAIL_PASS);
    try {
        let transporter = nodemailer.createTransport(
            smtpTransport({
                service: "gmail",
                host: "smtp.gmail.com",
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_PASS,
                },
            })
        );
        let info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Servicio al cliente project api",
            text: `Cordial saludo ${name} hemos recibido su solicitud de contacto, no tardaremos en contestar, ¡sé paciente!`,
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};
