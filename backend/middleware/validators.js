import { body, validationResult } from "express-validator";

export const validators = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        break;
      }
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      next();
    } else {
      return res.status(422).json({ status: "Error", message: errors.array() });
    }
  };
};

export const loginValidation = [
  body("email").notEmpty().isEmail().withMessage("Please Provide Valid Email"),
  body("password")
    .notEmpty()
    .isLength({ min: 8, max: 20 })
    .withMessage(
      "Password should be at least 8 characters and can't be greater than 20 characters"
    ),
];

export const registerValidation = [
  body("username").notEmpty().withMessage("Username is Required"),
  ...loginValidation,
];
