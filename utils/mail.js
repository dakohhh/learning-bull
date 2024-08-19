const emailVerificationHtml = `
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email Verification</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f4f4f4;
                        color: #333;
                    }
                    .container {
                        width: 100%;
                        max-width: 600px;
                        margin: 20px auto;
                        padding: 20px;
                        background-color: #fff;
                        border-radius: 5px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
                    p {
                        font-size: 16px;
                        margin-bottom: 20px;
                    }
                    a {
                        display: inline-block;
                        font-size: 16px;
                        color: #fff;
                        background-color: #007bff;
                        padding: 10px 20px;
                        text-decoration: none;
                        border-radius: 5px;
                    }
                    a:hover {
                        background-color: #0056b3;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Hello, {name}! (FROM TESTING BULL ASYNC QUEUE</h1>
                    <p>Click the link below to verify your account:</p>
                    <a href="{verificationLink}">Verify</a>
                </div>
            </body>
        </html>
        `;

export default emailVerificationHtml;
