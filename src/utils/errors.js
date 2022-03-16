// 穿参错误
class ParamError extends Error {
    constructor(message) {
        super(message);
        this.name='ParamsError'
    }
}













module.exports={
    ParamError
}