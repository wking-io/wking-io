import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsletterThankYou = () => (
  <Layout>
    <SEO title="Thank You" />
    <div
      className="max-w-3xl mx-auto px-8 flex flex-col min-h-screen items-center justify-center text-black text-center
    "
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
        Thank You!
      </h2>
      <p className="text-lg text-grey-600 mb-8">
        You should get an email to your inbox shortly asking to confirm your
        email address.
      </p>
      <Link className="btn btn--primary" to="/">
        Back to homepage
      </Link>
    </div>
  </Layout>
)

export default NewsletterThankYou
