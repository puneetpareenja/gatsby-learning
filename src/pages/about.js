import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        My name is Puneet. I am a full stack developer from Surrey Vancouver. I
        am learning gatsby{" "}
      </p>
      <p>
        {" "}
        <Link to="/contact">My contact information</Link>
      </p>
    </div>
  )
}

export default AboutPage
