// Dependencies
import React from "react"

export const NewsletterInput = ({ dark = false }) => (
  <form className="w-full">
    <div
      className={`newsletter-input-${
        dark ? `dark` : `light`
      } rounded border border-black p-2 flex flex-col md:flex-row justify-between w-full`}
    >
      <input
        className="pt-2 text-center md:text-left pb-4 md:p-2 flex-1"
        type="text"
        placeholder="Enter email address..."
      />
      <input
        className="btn btn--primary w-auto px-3 capitalize"
        type="text"
        value="Send me updates"
      />
    </div>
  </form>
)

export const Newsletter = () => (
  <div>
    <p>Newsletter</p>
    <NewsletterInput />
  </div>
)
