import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Newsletter } from '../components/newsletter';
import { ExternalLinkIcon } from '../components/icons';

const ResumePage = () => (
  <Layout>
    <SEO title="Sign up for updates" />
    <div className="mt-32 min-h-screen max-w-2xl mx-auto text-black font-sans px-8 mb-24">
      <div className="">
        <h2 className="font-display font-bold leading-tight text-3xl mb-8">
          My name is Will King, <br className="hidden md:inline" />
          and I am a Web Developer with a passion for functional programming.
        </h2>
        <h3 className="uppercase font-bold mb-4 text-grey-600">Current facts about me:</h3>
        <div className="mb-12">
          <p className="pb-4 mb-4 border-b border-grey-300">
            I approach software from a functional perspective. This is easiest in functional languages I use, like Elm,
            but the principles can be applied to any language.
          </p>
          <p className="pb-4 mb-4 border-b border-grey-300">
            I don't think functional programming is the only way or always the best way to solve a problem.
          </p>
          <p className="pb-4 mb-4 border-b border-grey-300">
            I have a design and research background which has proven to be a huge asset building software. Ask me how, I
            enjoy talking about it.
          </p>
          <p className="pb-4">
            I am a recent father and other than marring my wife it is the best thing that has ever happened to me.
          </p>
        </div>
        <h3 className="uppercase font-bold mb-4 text-grey-600">Work Experience:</h3>
        <div className="mb-8">
          <h4 className="font-bold text-2xl font-display mb-4 leading-tight">
            Frontend Developer @{' '}
            <a className="link" href="https://skillcrush.com">
              Skillcrush
            </a>
          </h4>
          <p className="mb-4">
            <strong>5 Years</strong>
          </p>
          <p className="mb-4">
            I have been the sole frontend developer at Skillcrush for 5 years and because of that I have done a lot. I
            will try and highlight some of it below, but feel free to ask about details:
          </p>
          <ul className="list-outside list-disc pl-4">
            <li className="mb-4">Organized and implemented best practices around frontend codebase.</li>
            <li className="mb-4">
              Refactored and reorganized frontend assets to reduce number of resources required for page load.
            </li>
            <li className="mb-4">
              Leveraged WordPress REST API to standardize header and footer across three platforms
            </li>
            <li className="mb-4">
              Wrote backend, frontend, and designed internal tool to integrate purchase metrics and data between
              WordPress and HubSpot.
            </li>
            <li className="mb-4">
              Designed and built UI and sometime the backend for a number of internal tools including reports
              (transaction, churn, student progress), automations, and a url builder (this one was interesting).
            </li>
          </ul>
        </div>
        <div className="mb-12">
          <h4 className="font-bold text-2xl font-display mb-4 leading-tight">Webmaster @ Myself Co.</h4>
          <p className="mb-4">
            <strong>7 Years</strong>
          </p>
          <p className="mb-4">
            Throughout my entire career I've taken on contract projects creating websites from design to development to
            launch to maintenance and more. I just started calling the role I played Webmaster. Here are a few of the
            recent projects including the live site and the repo, if public, where the code lives:
          </p>
          <ul className="pt-2">
            <li className="mb-4 flex">
              <p className="flex-1 font-bold text-sm">SecondMile</p>
              <a className="flex items-start text-sm mr-4  no-underline hover:underline" href="http://secondmile.net/">
                Website{' '}
                <span className="h-3 pt-1 pl-1">
                  <ExternalLinkIcon />
                </span>
              </a>
              <a
                className="flex items-start text-sm  no-underline hover:underline"
                href="https://github.com/wking-io/second-mile"
              >
                Repo{' '}
                <span className="h-3 pt-1 pl-1">
                  <ExternalLinkIcon />
                </span>
              </a>
            </li>
            <li className="mb-4 flex">
              <p className="flex-1 font-bold text-sm">Covenant Church</p>
              <a className="flex items-start text-sm mr-4  no-underline hover:underline" href="https://www.covhsv.org/">
                Website{' '}
                <span className="h-3 pt-1 pl-1">
                  <ExternalLinkIcon />
                </span>
              </a>
              <a
                className="flex items-start text-sm  no-underline hover:underline"
                href="https://github.com/wking-io/cpc"
              >
                Repo{' '}
                <span className="h-3 pt-1 pl-1">
                  <ExternalLinkIcon />
                </span>
              </a>
            </li>
            <li className="mb-4 flex">
              <p className="flex-1 font-bold text-sm">TurnerBatson</p>
              <a
                className="flex items-start text-sm mr-4  no-underline hover:underline"
                href="https://turnerbatson.com/"
              >
                Website{' '}
                <span className="h-3 pt-1 pl-1">
                  <ExternalLinkIcon />
                </span>
              </a>
              <a
                className="flex items-start text-sm  no-underline hover:underline"
                href="https://github.com/wking-io/turnerbatson"
              >
                Repo{' '}
                <span className="h-3 pt-1 pl-1">
                  <ExternalLinkIcon />
                </span>
              </a>
            </li>
            <li className="mb-4 flex">
              <p className="flex-1 font-bold text-sm">Motion Worship</p>
              <a
                className="flex items-start text-sm  no-underline hover:underline"
                href="http://www.motionworshipband.com/"
              >
                Website{' '}
                <span className="h-3 pt-1 pl-1">
                  <ExternalLinkIcon />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="md:flex">
          <div className="flex-1">
            <h3 className="uppercase font-bold mb-4 text-grey-600">Software:</h3>
            <p className="font-bold text-2xl font-display mb-4 leading-tight">
              <strong>I know:</strong>
            </p>
            <ul className="list-outside list-disc pl-4 mb-4">
              <li>Elm</li>
              <li>Html</li>
              <li>CSS/Sass</li>
              <li>Javascript/ES6</li>
              <li>React</li>
              <li>GraphQL</li>
              <li>PHP</li>
              <li>WordPress</li>
            </ul>
            <p className="font-bold text-2xl font-display mb-4 leading-tight">
              <strong>I understand:</strong>
            </p>
            <ul className="list-outside list-disc pl-4 mb-4">
              <li>Elixir</li>
            </ul>
            <p className="font-bold text-2xl font-display mb-4 leading-tight">
              <strong>I want to understand:</strong>
            </p>
            <ul className="list-outside list-disc pl-4 mb-12">
              <li>Haskell</li>
              <li>WebGL</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="uppercase font-bold mb-4 text-grey-600">Design:</h3>
            <p className="font-bold text-2xl font-display mb-4 leading-tight">
              <strong>I know:</strong>
            </p>
            <ul className="list-outside list-disc pl-4 mb-4">
              <li>Figma/Sketch/Photoshop/Illustrator</li>
              <li>Customer Development/User Research</li>
              <li>User Experience</li>
            </ul>
            <p className="font-bold text-2xl font-display mb-4 leading-tight">
              <strong>I understand:</strong>
            </p>
            <ul className="list-outside list-disc pl-4 mb-4">
              <li>Color Theory/Typography/etc</li>
            </ul>
            <p className="font-bold text-2xl font-display mb-4 leading-tight">
              <strong>I want to understand:</strong>
            </p>
            <ul className="list-outside list-disc pl-4 mb-12">
              <li>3D Design (Cinema 4D)</li>
            </ul>
          </div>
        </div>

        <h3 className="uppercase font-bold mb-4 text-grey-600">Education:</h3>
        <div className="mb-8">
          <h4 className="font-bold text-2xl font-display mb-4 leading-tight">
            B.S. Industrial Design @ Auburn University
          </h4>
          <p className="text-grey-600 mb-4">
            Although I don't work in this field professionally the lessons, skills, and experience gained from the
            program have been invaluable in my career in software.
          </p>
        </div>
      </div>
    </div>
    <Newsletter />
  </Layout>
);

export default ResumePage;
