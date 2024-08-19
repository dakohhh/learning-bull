import Bull from "bull";
import settings from "./settings/index.js";
import emailVerificationHtml from "./utils/mail.js";
import { mailerInstance } from "./libraries/nodemailer.js";

const Queue = new Bull("test-queue", {
    redis: settings.REDIS_URI,
});


const user = {
    firstname: "John",
    lastname: "Doe",
    email: "wisdomdakoh@gmail.com",

}

const token = {
    token: "1234567890", // This should be a unique token (for example, a JWT token or bcrypt hash)
}
const emailProp = {
    name: `${user.firstname} ${user.lastname}`,
    verificationLink: `${settings.BASE_URL}/auth/verify?token=${token.token}?email=${user.email}`,
};

const mailOptions = {
    to: user.email,
    subject: 'Verification for User',
    text: emailVerificationHtml.replace('{name}', emailProp.name).replace('{verificationLink}', emailProp.verificationLink),
    html: emailVerificationHtml.replace('{name}', emailProp.name).replace('{verificationLink}', emailProp.verificationLink),
};




Queue.process(async (job) => {
    // adding a delay to simulate a long-running job
    const delayDuration = 1000; // 1 second
    for (let i = 0; i < 10; i++) {
        // Process each iteration with a delay
        await new Promise(resolve => setTimeout(() => {
            console.log("Processing...");
            resolve();
        }, delayDuration));
    }

    mailerInstance.sendMail(job.data.mailOptions);
    
    console.log("Email Sent Successfully!");   

});



Queue.add({ mailOptions: mailOptions });

console.log("Email is being sent/queued...");




