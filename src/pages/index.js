import React, { useRef, useState } from 'react';
import Layout from "../components/Layout";
import JsLogo from '../images/jslogo.svg'
import GatsbyLogo from '../images/gatsbylogo.svg'
import ReactLogo from '../images/reactlogo.svg'
import TailwindLogo from '../images/tailwindlogo.svg'
import CasaMuchaLogo from '../images/casamucha_horizontal_logo.svg'
import { StaticImage } from "gatsby-plugin-image";
import { ChevronDownIcon } from '@heroicons/react/outline'
import ChurchLogo from '../images/churchorg_logo.svg' 
import ChurchTextLogo from '../images/churchorg_text.svg' 
import TabHopLogo from '../images/tabhop_logo.svg'

const sectionProperties = [{
  bgProperty: 'bg-black',
  logoColorProperty: 'text-[#6631fb]',
  theme: 'dark'
},{
  bgProperty: 'bg-[#F6F2EF]',
  logoColorProperty: 'text-[#7B5231]',
  theme: 'light'
},{
  bgProperty: 'bg-[#59dccc]',
  logoColorProperty: 'text-[#FFFFFF]',
  theme: 'light'
},{
  bgProperty: 'bg-white',
  logoColorProperty: 'text-[#ee3453]',
  theme: 'light'
},{
  bgProperty: 'bg-black',
  logoColorProperty: 'text-[#6631fb]',
  theme: 'dark'
}]

// markup
const IndexPage = () => {

  const generalContainerRef = useRef()

  const isBrowser = typeof window !== "undefined"
  const { innerHeight: height } = isBrowser ? window : {innerHeight: 0};

  const [sectionIdx, setSectionIdx] = useState(0)
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => {
    const scrollingDown = generalContainerRef.current.scrollTop > offsetY
    const idx = generalContainerRef.current.scrollTop / height
    setOffsetY(generalContainerRef.current.scrollTop)
    setSectionIdx(scrollingDown ? Math.ceil(idx) : Math.floor(idx))
  }

  return (
    <Layout>
      <section className={`transition-color duration-700 relative flex flex-col ${sectionProperties[sectionIdx]?.bgProperty}`}>
        <section
          ref={generalContainerRef}
          className="h-screen w-screen snap-y snap-mandatory overflow-scroll"
          onScroll={handleScroll}
        >
          <IntroSection/>
          <CasaMuchaSection/>
          <ChurchSection/>
          <TabHopSection/>
          <ClosingSection/>
        </section>
        <div className={`fixed overflow-y-clip w-full z-40 ${sectionProperties[sectionIdx]?.bgProperty} bg-opacity-40 md:bg-transparent md:absolute p-2 md:p-0 md:bottom-5 md:left-10 md:w-2/5`}>
          <h1 className={`transition duration-700 text-center md:text-left text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold ${sectionProperties[sectionIdx]?.theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <span className={`transition duration-700 ${sectionProperties[sectionIdx]?.logoColorProperty}`}>sergiotbh</span>
            .dev
          </h1>
        </div>
      </section>
    </Layout>
  )
}

const IntroSection = () => {
  
  return(
    <SectionContainer>
      <TitleContainer>
        <StaticImage
          src="../images/sergiotbh_avatar.jpg"
          width={200}
          height={200}
          aspectRatio={1}
          layout="fixed"
          className="transform rounded-full self-center"
        />
        <h1 className="text-white text-4xl lg:text-5xl font-serif my-8">Hola!<br/> I'm Sergio,<br/>web developer</h1>
        <p className="text-primary-500 font-serif">
          // Frontend · React · React Native <br/>
          // Based in Guadalajara, México
        </p>
      </TitleContainer>
      <ContentContainer>
        <ul className="grid grid-cols-4 md:grid-cols-2 gap-4 md:gap-12">
          <li className="bg-white p-5 rounded-xl md:rounded-3xl flex justify-center shadow-primary-500 shadow-lg hover:shadow-primary-500 hover:shadow-2xl">
            <img
              src={JsLogo}
              className="md:w-36"
            />
          </li>
          <li className="bg-white p-5 rounded-xl md:rounded-3xl flex justify-center shadow-primary-500 shadow-lg hover:shadow-primary-500 hover:shadow-2xl">
            <img
              src={GatsbyLogo}
              className="md:w-36"
            />
          </li>
          <li className="bg-white p-5 rounded-xl md:rounded-3xl flex justify-center shadow-primary-500 shadow-lg hover:shadow-primary-500 hover:shadow-2xl">
            <img
              src={ReactLogo}
              className="md:w-36"
            />
          </li>
          <li className="bg-white p-5 rounded-xl md:rounded-3xl flex justify-center shadow-primary-500 shadow-lg hover:shadow-primary-500 hover:shadow-2xl">
            <img
              src={TailwindLogo}
              className="md:w-36"
            />
          </li>
        </ul>
        <ChevronDownIcon className="animate-bounce absolute bottom-0 md:bottom-10 h-12 w-12 text-white opacity-75"/>
      </ContentContainer>
    </SectionContainer>
  )
}

const CasaMuchaSection = () => (
  <SectionContainer>
    <TitleContainer customStyles="pt-28 md:pt-0 text-[#7B5231]">
      <img
        src={CasaMuchaLogo}
      />
      <Paragraph>
        The website for Casa Mucha captures the essence of the place itself: 
        a relaxed and fresh look, having a smooth navigation filled with art and beautiful photos.<br/>
        <a className="underline cursor-pointer" href="https://casamucha.mx" target="_blank" rel="noreferrer">You can take a look here.</a>
      </Paragraph>
      <Paragraph>
        Designed by: Salvador Méndez
      </Paragraph>
      <Paragraph>
        Developed with ReactJs and Gatsby. Styled with Tailwind.
      </Paragraph>
    </TitleContainer>
    <ContentContainer>
        <StaticImage
          src='../images/casamuchasite_snapshot.png'
          height={900}
        />
    </ContentContainer>
  </SectionContainer>
)

const ChurchSection = () => (
  <SectionContainer>
    <TitleContainer customStyles="text-white pt-28 md:pt-0">
      <div className="flex justify-center">
        <img
          src={ChurchLogo}
          className="w-8 mr-3 md:w-12"
        />
        <img
          src={ChurchTextLogo}
          className="w-40 md:w-64 mt-1 md:mt-2"
        />
      </div>
      <Paragraph>
        Church.Org is a service that helps people find churches in their area and connect with other members.
      </Paragraph>
      <Paragraph>
        Developed with ReactJs. Styled with Styled Components.
      </Paragraph>
      <SubParagraph customStyles="text-xs">
        Made for Cratebind, LLC. Logo and graphics belong to Church.org
      </SubParagraph>
    </TitleContainer>
    <ContentContainer>
        <StaticImage
          src="../images/churchorg_snapshot1.png"
          className="md:absolute top-20 left-0 xl:left-8 lg:w-2/3"
        />
        <StaticImage
          src="../images/churchorg_snapshot2.png"
          className="absolute top-0 md:top-auto md:bottom-20 xl:bottom-0 right-0 w-4/5 md:w-full lg:w-2/3 drop-shadow-2xl"
        />
    </ContentContainer>
  </SectionContainer>
)

const TabHopSection = () => (
  <SectionContainer>
    <TitleContainer>
      <img
        src={TabHopLogo}
        width={400}
      />
      <Paragraph>
        TabHop is an app that lets you get free drinks at your favorite bars and helps you discover new places near you.
        Currently available on Google Play Store and iOS AppStore
      </Paragraph>
      <Paragraph>
        Mobile app developed with React Native and styled with Styled Components.
      </Paragraph>
      <SubParagraph>
        Made for Cratebind, LLC. Logo and graphics belong to Tab Hop, LLC.
      </SubParagraph>
    </TitleContainer>
    <ContentContainer>
      <StaticImage
        src="../images/tabhop_appstore_snapshot.png"
        height={900}
        className="w-3/5 md:w-full lg:w-1/2"
      />
    </ContentContainer>
  </SectionContainer>
)

const ClosingSection = () => {

  const [copied, setCopied] = useState(false)
  
  return(
    <SectionContainer>
      <TitleContainer customStyles="pb-24">
        <h1 className="text-white text-4xl lg:text-5xl font-serif my-8">Contact me via email or my socials:</h1>
        <p className="text-primary-500 font-serif">
          <ul>
            <li>
              <a className="text-white hover:cursor-pointer" href="https://instagram.com/sergiotbh" target="_blank" rel="noreferrer">@sergiotbh</a> on Instagram
            </li>
            <li
              onClick={() => {
                navigator.clipboard.writeText('sergioyj93@gmail.com')
                setCopied(true)
                setTimeout(() => {
                  setCopied(false)
                }, 400);
              }}
            >
              <span className="text-white hover:cursor-pointer">sergioyj93@gmail.com</span> via email (click to copy to clipboard)
              <span className={`transition duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}> Copied!</span>
            </li>
          </ul>
        </p>
      </TitleContainer>
    </SectionContainer>
  )
}

const SectionContainer = ({children, customStyles}) => (
  <section className={`px-2 sm:px-10 md:py-10 grid gap-2 md:gap-10 md:grid-cols-2 lg:grid-cols-5 md:h-screen snap-start h-full max-h-screen overflow-hidden justify-end ${customStyles}`}>
    {children}
  </section>
)

const TitleContainer = ({children, customStyles}) => (
  <section className={`lg:col-span-2 flex flex-col p-5 md:pl-6 md:pb-12 md:h-screen justify-end md:justify-center ${customStyles}`}>
    {children}
  </section>
)

const ContentContainer = ({children, customStyles}) => (
  <section className={`relative lg:col-span-3 h-full flex justify-center items-center ${customStyles}`}>
    {children}
  </section>
)

const Paragraph = ({customStyles, children}) => (
  <p className={`${customStyles} font-serif leading-snug text-xs sm:text-sm md:text-md pt-2 md:pt-6`}>{children}</p>
)

const SubParagraph = ({customStyles, children}) => (
  <p className={`${customStyles} font-serif leading-snug text-xs pt-2 md:pt-6`}>{children}</p>
)

export default IndexPage
