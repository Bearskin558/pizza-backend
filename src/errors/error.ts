class ApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }

  static BadRequest(message: string) {
    return new ApiError(400, message)
  }

  static Unauthorized() {
    return new ApiError(401, 'Пользователь не авторизован')
  }

  static NotFound(message: string) {
    return new ApiError(404, message)
  }
}
