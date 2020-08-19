import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        My name is Puneet. I am a full stack developer from Surrey Vancouver. I
        am learning gatsby{" "}
      </p>
      <p>
        {" "}
        <Link to="/contact">My contact information</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
