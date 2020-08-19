import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header></Header>
      <h1>Contact</h1>
      <p>You can contact me on pareenjapuneet@gmail.com</p>
      <p>
        My twitter handle is{" "}
        <Link to="https://twitter.com/pareenjapuneet">pareenjapuneet</Link>
      </p>

      <Footer></Footer>
    </div>
  )
}

export default ContactPage
