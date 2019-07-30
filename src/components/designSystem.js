import React from "react"

export const BlockQuote = ({ children, author = false, ...props }) => (
  <blockquote className="py-4" {...props}>
    <div className="leading-normal border-l-4 border-grey-600 text-xl italic -ml-6 pl-6">
      {children}
    {author ? (
      <p>
        <cite>{author}</cite>
      </p>
    ) : null}
    </div>
  </blockquote>
)
