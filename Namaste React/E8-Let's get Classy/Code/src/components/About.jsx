import User from "./User"

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is your about section</h2>
      <User/>
      {console.log("we are now in the About section")}
    </div>
  )
}

export default About
