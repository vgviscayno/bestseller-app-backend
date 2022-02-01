import { successResponse, errorResponse } from "../utilities/response-builder";
import RegisterUser from "../services/api/RegisterUser";

export async function createUser(req, res) {
  try {
    const service = new RegisterUser(req.body);
    const user = await service.call();
    return successResponse(req, res, { user }, 201);
  } catch (error) {
    if (error.name === "MongoServerError" && error.code === 11000) {
      error.message = "User already exists";
    }
    return errorResponse(req, res, error.message);
  }
}

export async function loginUser(req, res) {
  try {
    // TODO: implementation
    return successResponse(req, res, {}, 200);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}
