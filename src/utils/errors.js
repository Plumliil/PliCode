// 传参错误
class ParamError extends Error {
    constructor(message) {
        super(message);
        this.message=message?message:'请检查传入参数!';
        this.name='ParamError';
    }
}



module.exports={
    ParamError
}