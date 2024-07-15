import User from "./User"
import UserClass from "./UserClass"

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is your about section</h2>
      {/* <User phone={"123456789 (FBC)"}/> */}
      <UserClass phone={"77777777 (CBC)"} gender={"Male"}/>
    </div>
  )
}

export default About
