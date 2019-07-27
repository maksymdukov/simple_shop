import {string, object} from "yup";

const validationSchema = object({
    name: string("Enter a name")
        .required("Name is required")
        .min(3, "Name must be at least 3 characters long"),
    email: string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    phone: string("Format: 0XX-XXX-XX-XX")
        .required("Phone is required")
        .matches(
            /^(\+?38)?\d{3}-?\d{3}-?\d{2}-?\d{2}-?$/i,
            "Example: 066-290-68-66"
        ),
    city: string("City").required(),
    address: string("Delivery address").required()
});

export default validationSchema;
