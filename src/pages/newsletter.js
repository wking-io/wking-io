import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Newsletter } from "../components/newsletter"

const NewsletterPage = () => (
  <Layout>
    <SEO title="Sign up for updates" />
    <div
      className="px-8 flex flex-col min-h-screen items-center justify-center text-center
    "
    >
      <Newsletter dark={false} />
    </div>
  </Layout>
)

export default NewsletterPage
