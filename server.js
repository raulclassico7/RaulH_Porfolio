const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log('Listening on port 5000'));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'raulclassico7@gmail.com',
        // pass: "" create a application password in order to access this feature
    }
});

contactEmail.verify((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Ready to send");
    }
})

router.post('/contact', (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phoneNumber;
    const mail = {
        from: name,
        to: 'raulclassico7@gmail.com',
        subject: 'Contact Form Submission - Porfolio',
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>`,
    };
    contactEmail.sendEmail(mail, (error) => {
        if(error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" })
        }
    });
});
