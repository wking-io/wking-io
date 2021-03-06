// Dependencies
import React from 'react';
import { Link } from 'gatsby';

// Components
import SEO from '../components/seo';
import Layout from '../components/layout';
import { NewsletterInput } from '../components/newsletter';

const IndexPage = () => (
  <Layout>
    <SEO title="I build things for the web" />
    <div className="flex flex-col min-h-screen text-black">
      <div className="flex-1 flex items-end justify-center">
        <h2 className="homepage-hero font-display font-bold leading-tight md:mb-20 pt-40 p-12 md:p-0 md:pt-32 md:w-3/4">
          My name is Will King, <br className="hidden md:inline" />
          and I am a Frontend Developer.
        </h2>
      </div>
      <div className="flex flex-col w-full lg:flex-row font-sans">
        <div className="bg-black text-white lg:max-w-xl p-12">
          <p class="uppercase font-medium tracking-wide text-grey-300 mb-8">Current Project</p>
          <h3 className="font-display text-3xl font-bold leading-tight mb-8">Fabled Labs.</h3>
          <p className="text-grey-300 leading-relaxed mb-12">
            Product lab that will output resources, courses, and software to help developers not only make money, but
            make a difference in their community by focusing on the web needs of businesses in your local area.
          </p>
        </div>
        <div className="border-t border-black w-full py-16 px-12 md:p-12 lg:p-24 flex flex-col items-center justify-center w-full">
          <div className="max-w-5xl w-full mx-auto">
            <div className="flex flex-col md:flex-row mb-12">
              <p className="mb-6 md:mb-0 md:mr-6 leading-relaxed flex-1">
                I solve problems associated with creating digital products. I have spent a lot of time focusing on the
                transition from design to frontend development during my career, but I have been diving in Elixir and
                Phoenix to get personal experience building products end-to-end.
              </p>
              <p className="md:ml-6 leading-relaxed flex-1">
                I am passionate building digital products and how to use functional programming to achieve it. I
                maintain{' '}
                <a className="link" href="https://elm-live.com">
                  elm-live
                </a>. If you would like updates on new articles or any of my project subscribe to updates below!
              </p>
            </div>
            <NewsletterInput />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
