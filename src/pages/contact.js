import React from "react"
import { Link } from "gatsby"

const ContactPage = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>You can contact me on pareenjapuneet@gmail.com</p>
      <p>
        My twitter handle is{" "}
        <Link to="https://twitter.com/pareenjapuneet">pareenjapuneet</Link>
      </p>
    </div>
  )
}

export default ContactPage
