import { Formik } from "formik";
import { useFormik } from "formik";
import { signin_Schema } from "./schemas";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleNavigation(values){
    // Alert the input values of the form that we filled
    alert(values);
    // setTimeout for navigate from login page to home page
    setTimeout(() => {
      navigate("/");
    }, 0);
  }

  return (
    <>
    
    </>
  )
}

export default Login