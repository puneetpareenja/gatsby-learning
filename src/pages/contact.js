import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
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
