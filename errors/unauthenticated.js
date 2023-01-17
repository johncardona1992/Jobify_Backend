import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";

class unAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default unAuthenticatedError;
