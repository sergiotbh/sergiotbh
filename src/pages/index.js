import * as React from "react"
import Layout from "../components/Layout";
import JsLogo from '../images/jslogo.svg'
import GatsbyLogo from '../images/gatsbylogo.svg'
import ReactLogo from '../images/reactlogo.svg'
import TailwindLogo from '../images/tailwindlogo.svg'
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <section className="relative flex flex-col bg-black">
        <section className="pt-12 md:p-0 h-screen w-screen md:snap-y md:snap-mandatory overflow-scroll">
          <IntroSection/>
        </section>
        <div className="fixed bg-black md:absolute p-2 shadow-2xl md:p-0  md:bottom-5 md:left-10 overflow-hidden md:w-2/5">
          <StaticImage
            src="../images/sergiotbhlogo.png"
          />
        </div>
      </section>
    </Layout>
  )
}

const IntroSection = () => {
  
  return(
    <section className={`p-10 grid gap-10 md:grid-cols-2 lg:grid-cols-5 md:h-screen bg-black md:snap-start justify-center md:justify-end`}>
      <div className="lg:col-span-2 flex flex-col p-5 md:pl-12 md:pb-12 justify-center">
        <StaticImage
          src="../images/sergiotbh_avatar.jpeg"
          width={200}
          height={200}
          aspectRatio={1}
          layout="fixed"
          className="rounded-full self-center"
        />
        <h1 className="text-white text-4xl lg:text-6xl font-serif my-8">Hola!<br/> I'm Sergio,<br/>web developer</h1>
        <p className="text-primary-500 font-serif">
          // Frontend · React · React Native <br/>
          // Based in Guadalajara, México
        </p>
      </div>
      <div className="relative lg:col-span-3 h-full flex justify-center items-center">
        <ul className="grid grid-cols-2 gap-12">
          <li className="bg-white p-5 rounded-3xl flex justify-center shadow-primary-500 shadow-lg hover:shadow-primary-500 hover:shadow-2xl">
            <img
              src={JsLogo}
              className="md:w-36"
            />
          </li>
          <li className="bg-white p-5 rounded-3xl flex justify-center shadow-primary-500 shadow-lg hover:shadow-primary-500 hover:shadow-2xl">
            <img
              src={GatsbyLogo}
              className="md:w-36"
            />
          </li>
          <li className="bg-white p-5 rounded-3xl flex justify-center shadow-primary-500 shadow-lg hover:shadow-primary-500 hover:shadow-2xl">
            <img
              src={ReactLogo}
              className="md:w-36"
            />
          </li>
          <li className="bg-white p-5 rounded-3xl flex justify-center shadow-primary-500 shadow-lg hover:shadow-primary-500 hover:shadow-2xl">
            <img
              src={TailwindLogo}
              className="md:w-36"
            />
          </li>
        </ul>
        {/* <ChevronDownIcon className="animate-bounce absolute bottom-10 h-12 w-12 text-white opacity-75"/> */}
      </div>
    </section>
  )
}

export default IndexPage
