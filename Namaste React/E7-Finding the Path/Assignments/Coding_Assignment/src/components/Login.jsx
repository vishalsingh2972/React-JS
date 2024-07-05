import { useFormik } from "formik"; // NEW //used with functional components
import { Formik } from "formik"; // OLD //cane be used with functional components or class based components
import { signin_Schema } from "./schemas";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: ""
}

const Login = () => {
  const navigate = useNavigate();

  // const formik = useFormik({
  //   initialValues: initialValues,
  //   onSubmit: (values, actions) => {
  //     console.log(values);
  //     actions.resetForm();
  //   }
  // })
  // console.log(formik);

  const {values, handleChange, handleBlur, handleSubmit, errors, touched} = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    }
  })
  // console.log(values);
  // console.log(handleChange);
  // console.log(handleBlur);


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
    <form className="signin_form" onSubmit={handleSubmit}>
      <label htmlFor="email" className="input-label">Email</label>
      <input
        type="email"
        name="email"
        // id="email"
        placeholder="Enter your email"
        // autoComplete="off"
        // value={formik.values.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div className="error_container" style={{color: 'red'}}>

      </div>


      <label htmlFor="password" className="input-label">Password</label>
      <input
        type="password"
        name="password"
        // id="password"
        placeholder="Enter your password"
        // autoComplete="off"
        // value={formik.values.password}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div className="error_container" style={{color: 'red'}}>
        
      </div>


      <button type="submit">Log in</button> {/*NOTE: type="submit" is crucial/important for onSubmit={handleSubmit} to get triggered and work properly when required*/}
    </form>
    </>
  )
}

export default Login