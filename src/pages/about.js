import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header></Header>
      <h1>About</h1>
      <p>
        My name is Puneet. I am a full stack developer from Surrey Vancouver. I
        am learning gatsby{" "}
      </p>
      <p>
        {" "}
        <Link to="/contact">My contact information</Link>
      </p>

      <Footer></Footer>
    </div>
  )
}

export default AboutPage
