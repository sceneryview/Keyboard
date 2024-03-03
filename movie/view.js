function render(movies) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Keyboard</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #B47B84;
                margin: 0;
                padding: 0;
            }
    
            table {
                width: 80%;
                margin: 0px auto;
                border-collapse: collapse;
                background-color: white;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                overflow: hidden;
            }
    
            th, td {
                padding: 12px;
                text-align: left;
                border-bottom: 1px solid #ddd;
            }
    
            th {
                background-color: #000;
                color: white;
            }
            tbody>tr:hover{
                background-color: grey;
                font-size:20px;
                font-weight:bold;
                transition-duration:10s;
            }
            div{
                display: flex;
                align-items: center;
                justify-content: center;
                padding-bottom: 0px;
            }
            h1{
                margin-bottom:0px;
                color: #ffff;
            }
            footer{
                display: flex;
                align-items: center;
                justify-content: center;
                padding-bottom: 0px;
            }
            footer:hover{
                background-color: red;
                font-size:40px;
                font-weight:bolder;
                transition-duration:5s;
            }
        </style>
    
        
    </head>
    <body>
        <div><h1>Keyboard Product</h1></div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>รูปสินค้า</th>
                    <th>ราคา</th>
                    
                </tr>
            </thead>
            <tbody>
            <tr>
            <td>1</td>
            <td>คีย์บอร์ด KEYBOARD RAZER POKEMON EDITION MECHANICAL GREEN SWITCHES CHROMA RGB</td>
            <td><img src="https://speedcom.co.th/uploads/cache/img_1280x1280/uploads/images/product_1700034621281.png" alt="" width="200px" height="200px"> </td>
            <td>5,700 ฿</td>
            
        </tr>
        <tr>
            <td>2</td>
            <td>คีย์บอร์ด KEYBOARD ROYAL KLUDGE RK837 (WHITE) (WIRELESS) (BROWN SWITCH) (TH / EN)</td>
            <td><img src="https://speedcom.co.th/uploads/cache/img_1280x1280/uploads/images/product_1691637420529.png" alt=""width="200px" height="200px"></td>
            <td>1,990 ฿</td>
           
        </tr>
        <tr>
            <td>3</td>
            <td>คีย์บอร์ด KEYBOARD ROYAL KLUDGE RK61 PLUS (WHITE/BLUE) (TH/EN)</td>
            <td><img src="https://speedcom.co.th/uploads/cache/img_1280x1280/uploads/images/product_1688373840401.jpg" alt=""width="200px" height="200px"></td>
            <td>2,090 ฿</td>
            
        </tr>
        <tr>
            <td>4</td>
            <td>คีย์บอร์ด KEYBOARD RAZER HUNTSMAN V2 TENKEYLESS QUARTZ (EN)</td>
            <td><img src="https://speedcom.co.th/uploads/cache/img_1280x1280/uploads/images/product_1688821785417.jpg" alt=""width="200px" height="200px"></td>
            <td>3,590 ฿</td>
            
        </tr>
            </tbody>
        </table>
        <footer><h1>6400833 รัตนากรณ์ การุณ</h1></footer>
    </body>
    </html>
    `};
    
    module.exports = render;