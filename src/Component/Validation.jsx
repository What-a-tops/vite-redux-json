export default function Validation (values) {
    const errors = {}
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const contactRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

    if (!values.name) {
        errors.name = "Name is required"
    }

    if (!values.email) {
        errors.email = "Email is required"
    } else if (!emailRegex.test(values.email)) {
        errors.email = "Email didn't match"
    }

    if (!values.contact) {
        errors.contact = "Contact is required"
    } else if (!contactRegex.test(values.contact)) {
        errors.contact = "Contact didn't match"
    }

    if (!values.address) {
        errors.address = "Address is required"
    }

    return errors
}