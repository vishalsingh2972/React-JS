import * as Yup from 'yup';

// const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

export const signin_Schema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email do bhai pehle"),
  // password: Yup.string().matches(passwordRegex, "Please enter your password")
  password: Yup.string().required("Password do bhai pehle").min(8, "Invalid Password must be at least 8 characters")
})