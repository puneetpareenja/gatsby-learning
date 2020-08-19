import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>You can contact me on pareenjapuneet@gmail.com</p>
      <p>
        My twitter handle is{" "}
        <Link to="https://twitter.com/pareenjapuneet">pareenjapuneet</Link>
      </p>
    </Layout>
  )
}

export default ContactPage
