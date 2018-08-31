var path=require("path");
var formidable = require("formidable");
var admin = require("../models/admin.js");
var crypto = require("crypto");
var fs = require("fs");
exports.showIndex=function (req, res) {
    res.sendFile(path.join(__dirname , "../views/index.html"));
}
exports.showleixing=function (req, res) {
    res.sendFile(path.join(__dirname , "../views/leixing.html"));
}
exports.checklogin=function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var username = fields.username;
        var password = fields.password;
        if(err){
            res.json({"result":-1});
            return;
        }
        if(!username || !password){
            res.json({"result":-4});
            return;
        }
        admin.findusername(username,function(err,results){
            var theadmin = results[0];
            var sha256 = crypto.createHash("sha256");
            password = sha256.update(password).digest("hex").toString();
            if(theadmin.password == password){
                //登录成功，下发session
                req.session.username = username;
                req.session.type = "admin";
                req.session.login = true;

                res.json({"result":1 , "type" : "admin"});
            }else{
                res.json({"result":-3});
            }
        })
    })
}
