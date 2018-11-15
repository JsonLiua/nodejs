module.exports = function(app) {
    app.get("/", function(req, res) {
        res.redirect("/login"); //跳转到登录
    })
    app.use("/login", function() {}); //登录
    app.use("/index", function() {}); //首页
    app.use("/contact", function() {}); //联系
}