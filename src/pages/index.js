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
      <section className="relative flex bg-black">
        <section className="h-screen w-screen snap-y snap-mandatory overflow-scroll">
          <IntroSection/>
        </section>
        <div className="absolute bottom-5 left-10 overflow-hidden w-2/5">
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
    <section className={`grid grid-cols-5 h-screen bg-black snap-start justify-end`}>
      <div className="col-span-2 flex flex-col pl-12 pb-12 justify-center">
        <StaticImage
          src="../images/sergiotbh_avatar.jpeg"
          width={200}
          height={200}
          aspectRatio={1}
          layout="fixed"
          className="rounded-full self-center"
        />
        <h1 className="text-white text-6xl font-serif my-8">Hola!<br/> I'm Sergio,<br/>web developer</h1>
        <p className="text-primary-500 font-serif">
          // Frontend · React · React Native <br/>
          // Based in Guadalajara, México
        </p>
      </div>
      <div className="relative col-span-3 h-full flex justify-center items-center">
        <ul className="grid grid-cols-2 gap-12">
          <li className="bg-white p-5 rounded-3xl flex justify-center shadow-primary-500 shadow-lg hover:shadow-primary-500 hover:shadow-2xl">
            <img
              src={JsLogo}
              className="w-36"
            />
          </li>
          <li className="bg-white p-5 rounded-3xl flex justify-center shadow-primary-500 shadow-lg hover:shadow-primary-500 hover:shadow-2xl">
            <img
              src={GatsbyLogo}
              className="w-36"
            />
          </li>
          <li className="bg-white p-5 rounded-3xl flex justify-center shadow-primary-500 shadow-lg hover:shadow-primary-500 hover:shadow-2xl">
            <img
              src={ReactLogo}
              className="w-36"
            />
          </li>
          <li className="bg-white p-5 rounded-3xl flex justify-center shadow-primary-500 shadow-lg hover:shadow-primary-500 hover:shadow-2xl">
            <img
              src={TailwindLogo}
              className="w-36"
            />
          </li>
        </ul>
        {/* <ChevronDownIcon className="animate-bounce absolute bottom-10 h-12 w-12 text-white opacity-75"/> */}
      </div>
    </section>
  )
}

export default IndexPage
