import * as yup from "yup";
export const validationsRegistration = yup.object().shape({
  login: yup
    .string()
    .required("Required")
    .min(2, "Username must be at least 2 characters")
    .max(20, "Username must not exceed 20 characters"),
  password: yup
    .string()
    .required("Required")
    .min(2, "Password must be at least 2 characters")
    .max(20, "Password must not exceed 20 characters"),
  password_confirm: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  name: yup
    .string()
    .required("Required")
    .min(2, "Nickname must be at least 2 characters")
    .max(20, "Nickname must not exceed 20 characters"),
  gender_id: yup.string().required("Required"),
  // .min(2, "Nickname must be at least 2 characters")
  // .max(20, "Nickname must not exceed 20 characters"),
  captcha: yup
    .string()
    .required("Required")
    .min(5, "Captcha must be 5 characters")
    .max(5, "Captcha must be 5 characters"),
});
