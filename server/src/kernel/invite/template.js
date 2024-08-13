
export default function InviteTemplate(inviter, link) {
 return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WOLFX Academy Invitation</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            background-color: #222;
            padding: 10px;
            border-radius: 8px 8px 0 0;
            color: #ffffff;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }
        .content {
            padding: 20px;
            text-align: center;
            line-height: 1.6;
            color: #222;
        }
        .content p {
            margin: 20px 0;
        }
        .btn {
            display: inline-block;
            background-color: #222;
            color: #ffffff;
            padding: 15px 25px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: 600;
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
        <div class="header">
            <h1>You're Invited to Join WOLFX Academy</h1>
        </div>
        <div class="content">
            <p><strong>${inviter}</strong> has invited you to join WOLFX Academy.</p>
            <p>Click the button below to get started and sign up:</p>
            <a href="${link}" class="btn">Join WOLFX Academy</a>
            <p>If the button doesn't work, you can copy and paste the following link into your browser:</p>
            <p><a href="#">${link}</a></p>
        </div>
        <div class="footer">
            <p>&copy; 2024 WOLFX Academy. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;
}