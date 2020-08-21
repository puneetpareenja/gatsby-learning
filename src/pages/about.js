import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>
        My name is Puneet. I am a full stack developer from Surrey, British
        Columbia. I am learning gatsby.
      </p>
      <p>
        {" "}
        <Link to="/contact">My contact information</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
