/**
 * Created by Administrator on 2017/7/3.
 */

const  fs = require("fs");
class App {
    construct(){

    }
    initServer(){
        var package = require("../package.json");
        return function (req,res) {
            // process.cwd("");
            fs.readFile("./public/index.html",'utf8',function (error,data) {
                res.end( JSON.stringify(package));
            });
        }


}
}

modules.exports = App;