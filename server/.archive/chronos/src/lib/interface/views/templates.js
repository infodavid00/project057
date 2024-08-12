
export const _404 = (path) => `
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Not Found</title>
   <style>
      body {
         background-color: #222;
         display: flex;
         flex-direction: column;
         align-items: center;
         margin-top: 3em;
         color: white;
         font-family: 
          "Segoe UI", Arial, Helvetica, Calibri, Tahoma, Verdana, Georgia, "Times New Roman", "Courier New", "Lucida Sans Unicode";
      }
      a {
         color: pink;
      }
   </style>
</head>
<body>
   <h1>404: Not Found </h1>
   <p>The requested page ${path} does not exist.</p>
   <a href="/">Return to Homepage</a>
</body>
</html>
`;
