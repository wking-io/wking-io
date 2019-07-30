// Dependencies
import React, { useState } from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { validate } from "email-validator"
import { Collapse } from "react-collapse"

const VALID = "valid"
const EMAIL_ERROR = "error"
const EMAIL_EMPTY = "empty"

export const NewsletterInput = ({ project = "default", dark = false }) => {
  const [valid, setValid] = useState(EMAIL_EMPTY)
  const validateForm = ({ target }) => {
    if (target.value && target.value.length >= 0) {
      if (validate(target.value)) {
        setValid(VALID)
      } else {
        setValid(EMAIL_ERROR)
      }
    } else {
      setValid(EMAIL_EMPTY)
    }
  }

  const getInputClass = validState => {
    if (validState === VALID) {
      return "cursor-pointer"
    } else if (validState === EMAIL_ERROR) {
      return "cursor-not-allowed opacity-50"
    } else if (validState === EMAIL_EMPTY) {
      return "cursor-not-allowed opacity-50"
    }
    return "cursor-not-allowed opacity-50"
  }

  const isDisabled = validState => {
    if (validState === VALID) {
      return false
    } else if (validState === EMAIL_ERROR) {
      return true
    } else if (validState === EMAIL_EMPTY) {
      return true
    }
    return true
  }

  const showError = validState => {
    if (validState === VALID) {
      return false
    } else if (validState === EMAIL_ERROR) {
      return true
    } else if (validState === EMAIL_EMPTY) {
      return false
    }
    return false
  }

  return (
    <form
      className={`newsletter-${dark ? `dark` : `light`} w-full rounded`}
      name="newsletter-signups"
      method="POST"
      action="/newsletter-thank-you"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <div
        className={`newsletter-input-${
          dark ? `dark` : `light`
        } rounded border border-black p-2 flex flex-col md:flex-row justify-between w-full bg-white relative z-20`}
      >
        <input type="hidden" name="form-name" value="newsletter-signups" />
        <VisuallyHidden>
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </VisuallyHidden>
        <input
          className="pt-2 text-center md:text-left pb-4 md:p-2 flex-1 text-black"
          type="text"
          placeholder="Enter email address..."
          name="Email Address"
          onChange={validateForm}
        />
        <input
          className={`btn ${
            project === "elm-press" ? "btn--secondary" : "btn--primary"
          } w-auto px-3 capitalize ${getInputClass(valid)}`}
          type="submit"
          value="Send me updates"
          disabled={isDisabled(valid)}
        />
      </div>
      <Collapse
        className="bg-primary-dark text-white rounded -mt-2 pb-2 relative z-10"
        isOpened={showError(valid)}
      >
        <p className="pt-4 px-4">Your email is invalid. Please try again.</p>
      </Collapse>
    </form>
  )
}

export const Newsletter = ({ dark = true, project = "default" }) => (
  <div
    className={`${
      dark ? "bg-black text-white" : "bg-white text-black"
    } font-sans text-center py-20 px-8 md:px-16`}
  >
    <div className="max-w-3xl mx-auto">
      <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
        Get this stuff shoved in your inbox!
      </h3>
      <p
        className={`${
          dark ? "text-grey-300" : "text-black"
        } leading-relaxed mb-12`}
      >
        Okay not really, but If you would like to hear about progress on
        projects like elm-live and elm-press or be a part of the research and
        direction of the projects feel free to signup for my newsletter below.
        If you don’t want to do that you can always{" "}
        <a
          className={`link ${
            project === "elm-press" ? "link--secondary" : null
          }`}
          href="https://twitter.com/@wking__"
        >
          follow me on Twitter
        </a>{" "}
        and I will try and make updates there too.
      </p>
      <NewsletterInput dark={dark} project={project} />
    </div>
  </div>
)
