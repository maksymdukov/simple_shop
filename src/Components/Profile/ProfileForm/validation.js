import {string, ref, object} from "yup";

const validationSchema = object({
    name: string("Enter a name")
        .min(3, "Name must be at least 3 characters long"),
    email: string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    phone: string("Format: 0XX-XXX-XX-XX")
        .matches(/^(\+?38)?\d{3}-?\d{3}-?\d{2}-?\d{2}-?$/i, "Is not valid"),
    city: string("City").required(),
    address: string("Delivery address"),
    password: string("Enter new password")
        .min(8, "Password must contain at least 8 characters"),
    confirmPassword: string("Confirm new password")
        .when('password', (password, schema)=> {
            return password
                ? schema.required("Confirm your password").oneOf([ref("password")], "Password does not match")
                : schema.notRequired()
        })
});

export default validationSchema;