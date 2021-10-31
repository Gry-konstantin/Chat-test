import * as yup from "yup";
export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Required")
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username must not exceed 20 characters"),
  password: yup
    .string()
    .required("Required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters"),
});
