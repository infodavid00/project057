
const supportTemplate = (name, message, reply) => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WOLFX Academy Support Response</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #222;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .content {
            padding: 20px;
            line-height: 1.6;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #777777;
            margin-top: 20px;
            padding-top: 10px;
            border-top: 1px solid #dddddd;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to WOLFX Academy support. We have received your message and wanted to let you know that we have responded to your inquiry.</p>
            <p><strong>Your Message:</strong></p>
            <p>"${message}"</p>
            <p><strong>Our Response:</strong></p>
            <p>"${reply}"</p>
            <p>If you have any further questions or need additional assistance, feel free to reply to this email. We're here to help!</p>
            <p>Best regards,<br>
            WOLFX Academy Support Team</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 WOLFX Academy. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;
}

export default supportTemplate;