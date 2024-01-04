module.exports = {
  welcome: (req, res) => {
    return res.status(200).send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Health Check</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    text-align: center;
                    background-color: #f3f3f3;
                    margin: 0;
                    padding: 0;
                }
        
                .container {
                    max-width: 600px;
                    margin: 50px auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    position:absolute;
                    width: 100%;
                    top: 40%;
                    left: 50%;
                    transform: translate(-50%,-50%)
                }
        
                h1 {
                    color: #4CAF50;
                }
        
                .status {
                    font-size: 24px;
                    margin-top: 20px;
                }
        
                .success {
                    color: #4CAF50;
                }
        
                .failure {
                    color: #FF5733;
                }
        
                .joke {
                    margin-top: 20px;
                    font-style: italic;
                    color: #777;
                }
        
                img {
                    max-width: 100%;
                    border-radius: 5px;
                    margin-top: 20px;
                }
        
                .emoji {
                  font-size: 64px;
                }
            
                .blink {
                  animation: blink 1s infinite;
                }
            
                @keyframes blink {
                  0% { opacity: 1; }
                  50% { opacity: 0; }
                  100% { opacity: 1; }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>API Health Check</h1>
                <div class="status success">
                    <p>Everything is working perfectly!</p>
                </div>
                <div class="joke">
                    <p>Why did the API go to therapy?</p>
                    <p>Because it had too many issues!</p>
                    </div>
                    <div class="emoji blink">😹</div>
            </div>
        </body>
  `);
  },
};
