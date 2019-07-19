// Dependencies
import React from "react"
import { Link } from "gatsby"

// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { NewsletterInput } from "../components/newsletter"

const IndexPage = () => (
  <Layout>
    <SEO />
    <div>
      <h2>
        My name is Will King, <br />
        and I build things for the web.
      </h2>
    </div>
    <div>
      <div>
        <p>
          <strong>Current Project</strong>
        </p>
        <h3>Bring Elm into the Wordpress community.</h3>
        <p>
          Feeling pretty passionate about this. Elm is great and there are so
          many unexplored use cases. As a member of both communities I want to
          step up and give a new group of developers a compelling reason and the
          right tools to bring Elm into their development workflow.
        </p>
        <p>
          <Link
            className="btn btn--outline-light"
            to="articles/wordpress-needs-a-frontend-framework"
          >
            Find Out More
          </Link>
        </p>
      </div>
      <div>
        <div>
          <p>
            I solve problems associated with creating digital products. My focus
            is on the transition from design to front end code, but honestly I
            just love learning as much as I can to better understand how to
            build successful products.
          </p>
          <p>
            I solve problems associated with creating digital products. My focus
            is on the transition from design to front end code, but honestly I
            just love learning as much as I can to better understand how to
            build successful products.
          </p>
        </div>
        <NewsletterInput />
      </div>
    </div>
  </Layout>
)

export default IndexPage
