import { useRouteError } from "react-router-dom";

const Error = () => {
  
  //useRouteError hook from react-router-dom helps you get more detailed information about the error that occurred during routing. This information can be used to display the error in a user-friendly manner on the UI.
  const err = useRouteError(); //error element 'err'
  console.log(err);
  
  return (
    <div>
      <h1>Oops !!!</h1>
      <h2>Something went wrong</h2>

      {/* <h2>{err.status}: {err.statusText} - {err.error.message}</h2> */}
    </div>
  )
}

export default Error