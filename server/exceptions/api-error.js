module.exports = class ApiError extends Error {
   constructor(status, message, errors=[]){
      super(message)
      this.status = status
      this.errors = errors
   }

   static UnautharizedError() {
      return new ApiError(401, 'Auth error')
   }

    static BadRequest (message, errors = []) {
       return new ApiError (400, message, errors)
    }
}