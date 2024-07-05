import { Formik } from "formik";
import { useFormik } from "formik";
import { signin_Schema } from "./schemas";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";


const initialValues = {
  email:'',
  password:''
}

const Login_Trial = () => {
  const navigate = useNavigate();

  const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
    initialValues,
    validationSchema: signin_Schema,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    }
  })

  // console.log(errors)
  // console.log(touched)
  function handleNavigation(values){
    // Alert the input values of the form that we filled
    alert(values);
    // setTimeout for navigate from login page to home page
    setTimeout(() => {
      navigate("/");
    }, 0);
  }

  return (
    <div className="sigin">
      <form className="signin_form" onSubmit={handleSubmit}>
        {/* <label htmlFor="name">Name</label>
        <input type="text" name="name"/> */}

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder="Enter your email"/>
        <div className="error_container" style={{color: 'red'}}>
          {errors.email && touched.email && <p className="form_error">{errors.email}</p>}
        </div>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={values.password} onBlur={handleBlur} onChange={handleChange} placeholder="Enter your password"/>
        <div className="error_container" style={{color: 'red'}}>
          {errors.password && touched.password && (<p className="form_error">{errors.password}</p>)}
        </div>

        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login_Trial