import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string("Enter a name")
        .required("Name is required").min(3, "Name must be at least 3 characters long"),
    email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    phone: Yup.string("Format: 0XX-XXX-XX-XX")
        .required("Phone is required")
        .matches(/^(\+?38)?\d{3}-?\d{3}-?\d{2}-?\d{2}-?$/i, "Is not valid"),
    city: Yup.string("City").required(),
    address: Yup.string("Delivery address").required()
});

export default validationSchema;