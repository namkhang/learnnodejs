const fs = require("fs");
const url = require("url"); 
function showhtml(openfile,res){
    fs.readFile( openfile,(err , data) =>{
        if(err) throw err ;
        res.write(data);
        res.end();

});
}

module.exports ={
    onRequest : function (req , res) {
        const path = url.parse(req.url).pathname; // lấy ra pathname từ url người dùng nhập vào
        if(path == "/about"){     //so sánh nếu thỏa mảng thì mở trang html theo đúng yêu cầu người dùng nhập vào
            showhtml("./views/about.html" , res);
        }
       else if(path == "/bai1"){
           showhtml("./views/bai1.html" ,res);
           }
       
       else if(path == "/")
        {
           showhtml("./views/home.html" ,res);
        }
        else{
            res.writeHead(404);
            res.write("File not found")
            res.end();
        }
    }
}
