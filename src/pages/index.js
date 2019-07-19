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
    <div className="flex flex-col min-h-screen text-black">
      <div className="flex-1 flex items-end justify-center">
        <h2 className="homepage-hero font-display font-bold leading-tight md:mb-20 pt-40 p-12 md:p-0 md:pt-32">
          My name is Will King, <br className="hidden md:inline" />
          and I build things for the web.
        </h2>
      </div>
      <div className="flex flex-col w-full lg:flex-row font-sans">
        <div className="bg-black text-white lg:max-w-xl p-12">
          <p class="uppercase font-medium tracking-wide text-grey-300 mb-8">
            Current Project
          </p>
          <h3 className="font-display text-3xl font-bold leading-tight mb-8">
            Bring Elm into the Wordpress community.
          </h3>
          <p className="text-grey-300 leading-relaxed mb-12">
            Feeling pretty passionate about this. Elm is great and there are so
            many unexplored use cases. As a member of both communities I want to
            step up and give a new group of developers a compelling reason and
            the right tools to bring Elm into their development workflow.
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
        <div className="border-t border-black w-full py-16 px-12 md:p-12 lg:p-24 flex flex-col items-center justify-center w-full">
          <div className="max-w-5xl w-full mx-auto">
            <div className="flex flex-col md:flex-row mb-12">
              <p className="mb-6 md:mb-0 md:mr-6 leading-relaxed flex-1">
                I solve problems associated with creating digital products. I
                have spent a lot of my time focusing on the transition from
                design to frontend development, but honestly I just love
                learning as much as I can to better understand how to build
                successful products.
              </p>
              <p className="md:ml-6 leading-relaxed flex-1">
                I am passionate about functional program and use Elm whenever I
                can. I maintain{" "}
                <a className="link" href="https://elm-live.com">
                  elm-live
                </a>
                , and I am currently looking into bringing Elm into the
                Wordpress community. If you would like updates on new articles
                or any of my Elm project subscribe to updates below!
              </p>
            </div>
            <NewsletterInput />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
