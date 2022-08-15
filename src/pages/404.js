import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <section className="flex flex-col bg-black h-screen justify-center px-10">
        <h1 className="text-white leading-snug text-3xl sm:text-4xl lg:text-5xl font-serif sm:my-2 md:my-8">You found nothing.</h1>
        <p className="text-primary-500 font-serif">
          There's nothing to see here.<br/>
          <Link to="/" className="underline">Go back.</Link>
        </p>
      </section>
    </Layout>
  )
}

export default NotFoundPage
