import User from "./User"
import UserClass from "./UserClass"

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is your about section</h2>
      <User/>
      <UserClass/>
      
      {console.log("we are now in the About section")}
    </div>
  )
}

export default About
