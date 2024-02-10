export const errorHandler = (statusCode, message, missingFields = []) => {
  const error = new Error();
  error.statusCode = statusCode;
  if (missingFields.length > 0) {
    message += ": " + missingFields.join(", ") + " is required";
  }
  error.message = message;
  return error;
};
