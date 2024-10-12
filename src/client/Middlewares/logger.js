function log(req, res, next){
    console.log("logging....")
    next();
}
// eslint-disable-next-line no-undef
module.exports = log;