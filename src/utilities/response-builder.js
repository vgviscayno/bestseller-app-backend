export const successResponse = (req, res, data = {}, code = 200) =>
  res.status(code).json({
    ...data,
  });

export const errorResponse = (
  req,
  res,
  message = "Something went wrong",
  code = 500,
  error = {}
) =>
  res.status(code).json({
    code,
    message,
    error,
  });
