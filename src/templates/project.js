import React, { useState, useRef, useContext, useLayoutEffect } from "react"
import { graphql } from "gatsby"
import { useRect } from "@reach/rect"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"

import Layout from "../components/layout"
import Social from "../components/social"
import { Newsletter } from "../components/newsletter"
import SEO from "../components/seo"

const Check = () => (
  <>
    <span className="check absolute h-1 bg-white block w-3/5 center-both z-30"></span>
    <span className="check absolute h-1 bg-white block w-3/5 center-both z-30"></span>
  </>
)

const Strikethrough = () => (
  <div className="h-1 absolute z-10 bg-grey-400 w-full center-y"></div>
)

const ToDoList = ({ children, className }) => (
  <ul className={`todo-list ${className}`}>{children}</ul>
)

const ToDo = ({ checked = false, children, className }) => (
  <li className={`flex ${className}`}>
    <div
      className={`check__box ${
        checked ? "check__box--checked" : null
      } z-30 w-6 h-6 rounded relative mr-4 z-20`}
    >
      {checked ? <Check /> : null}
    </div>
    <div className="relative">
      {children}
      {checked ? <Strikethrough /> : null}
    </div>
  </li>
)

const AnimatedContext = React.createContext()

function AnimatedTabs(props) {
  // need to store the position of the selected Tab so we can
  // animate the bar to its position
  const [selectedRect, setSelectedRect] = useState(null)

  // need to measure the parent element so we can measure
  // the relative "left" for the bar
  const tabsRef = useRef()
  const tabsRect = useRect(tabsRef)

  // Put the function to change the positions on context so the
  // Tabs down the tree can easily access it
  return (
    <AnimatedContext.Provider value={setSelectedRect}>
      <Tabs
        {...props}
        ref={tabsRef}
        style={{ ...props.style, position: "relative" }}
      >
        {props.children[0]}

        {/* put the bar inbetween the TabList and TabPanels */}
        <div
          className="absolute h-1 bg-black -mt-1"
          style={{
            // Here is the actual animation part, we use the
            // rect from the selected tab to set the styles of the bar
            transition: "all 300ms ease",
            left: selectedRect && selectedRect.left - tabsRect.left,
            width: selectedRect && selectedRect.width,
          }}
        />

        {props.children[1]}
      </Tabs>
    </AnimatedContext.Provider>
  )
}

function AnimatedTab(props) {
  const { isSelected } = props

  // Each tab measures itself
  const ref = useRef()
  const rect = useRect(ref, isSelected)

  // and calls up to the parent when it becomes selected
  // we useLayoutEffect to avoid flicker
  const setSelectedRect = useContext(AnimatedContext)
  useLayoutEffect(() => {
    if (isSelected) setSelectedRect(rect)
  }, [isSelected, rect, setSelectedRect])

  return <Tab ref={ref} {...props} />
}

export default ({ data, location }) => {
  console.log(data)
  return (
    <Layout theme="elm-press">
      <SEO title="Bringing Elm into the Wordpress community the right way." />
      <div className="font-sans max-w-3xl px-8 mx-auto pt-40 text-black pb-24">
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
          {data.projectsJson.title}
        </h2>
        <Social className="mb-16" link={location.href} />
        <p className="text-lg leading-relaxed mb-12">
          {data.projectsJson.description}
        </p>
        <AnimatedTabs>
          <TabList className="border-b border-black">
            <AnimatedTab className="uppercase font-medium px-3 py-1 border-b-4 border-transparent">
              Roadmap
            </AnimatedTab>
            <AnimatedTab className="uppercase font-medium px-3 py-1 border-b-4 border-transparent">
              Updates
            </AnimatedTab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ToDoList className="my-12">
                {data.projectsJson.roadmap.map(todo => (
                  <ToDo checked={todo.complete} className="mb-10">
                    <p className="font-medium">{todo.content}</p>
                  </ToDo>
                ))}
              </ToDoList>
            </TabPanel>
            <TabPanel>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div
                  className="article-card__wrapper border-t-2 border-grey-200"
                  key={node.id}
                >
                  <a
                    className="article-card py-6 md:py-8 block"
                    href={node.fields.slug}
                  >
                    <h3 className="article-card__title font-display text-black font-bold text-xl sm:text-2xl mb-2">
                      {node.frontmatter.title}
                    </h3>
                    <div className="flex">
                      <p className="text-grey-600 mr-4">
                        {node.frontmatter.date}
                      </p>
                      <p className="bg-secondary-light font-medium px-2 rounded text-white capitalize">
                        {node.frontmatter.type}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </TabPanel>
          </TabPanels>
        </AnimatedTabs>
      </div>
      <Newsletter theme={data.projectsJson.id} />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { project: { eq: $id } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            type
          }
          fields {
            slug
          }
        }
      }
    }
    projectsJson(id: { eq: $id }) {
      title
      description
      id
      roadmap {
        complete
        content
      }
    }
  }
`
