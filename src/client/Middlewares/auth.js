function auth(req, res, next){
    console.log("authanticating....")
    next()
}
// eslint-disable-next-line no-undef
module.exports = auth