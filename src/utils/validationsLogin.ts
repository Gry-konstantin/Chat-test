import * as yup from "yup";
export const validationsLogin = yup.object().shape({
  login: yup
    .string()
    .required("Required")
    .min(2, "Username must be at least 6 characters")
    .max(20, "Username must not exceed 20 characters"),
  password: yup
    .string()
    .required("Required")
    .min(2, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters"),
  captcha: yup
    .string()
    .required("Required")
    .min(2, "Username must be at least 6 characters")
    .max(20, "Username must not exceed 20 characters"),
});
