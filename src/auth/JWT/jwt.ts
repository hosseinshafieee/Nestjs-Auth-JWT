

const {ACCESS_SECRET_KEY, REFRESH_SECRET_KEY} = process.env;
exports.generateToken = (type, userId) => {
    const key = type == 'access' ? ACCESS_SECRET_KEY : REFRESH_SECRET_KEY;

    
}