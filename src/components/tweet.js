import React from "react"
import TweetEmbed from "react-tweet-embed"

const TwitterLink = ({ tweetId, project, author = "wking__" }) => (
  <a
    className={`link${project === "elm-press" ? " link--secondary" : ""}`}
    href={`https://twitter.com/${author}/status/${tweetId}`}
  >
    See the tweet here!
  </a>
)

export default ({ author = "wking__", tweetId, project }) => (
  <TweetEmbed
    id={tweetId}
    placeholder={
      <TwitterLink author={author} tweetId={tweetId} project={project} />
    }
  />
)
