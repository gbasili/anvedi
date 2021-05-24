class UserLogin {
    
    constructor(username, password) {
        this.username = username;
        this.password = password;    
    }
    
}

class UserLoginRequest {
    constructor(user){
        this.user = user;
    }
}

class UserLoginResponse {
    constructor(resultCode){
        this.resultCode = resultCode;
    }
}

//module.exports.favoriteAuthor = favoriteAuthor;
module.exports = {
    UserLogin , UserLoginRequest, UserLoginResponse
} 