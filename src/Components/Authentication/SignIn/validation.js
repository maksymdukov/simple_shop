import { string, object } from "yup";

const validationSchema = object({
    email: string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: string("Enter your password")
        .min(8, "Password must contain at least 8 characters")
        .required("Password is required")
});

export default validationSchema;
