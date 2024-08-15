import React, { useRef, useState } from 'react';
import Layout from "../components/Layout";
import JsLogo from '../images/jslogo.svg'
import GatsbyLogo from '../images/gatsbylogo.svg'
import ReactLogo from '../images/reactlogo.svg'
import TailwindLogo from '../images/tailwindlogo.svg'
import CasaMuchaLogo from '../images/casamucha_horizontal_logo.svg'
import { StaticImage } from "gatsby-plugin-image";
import { ChevronDownIcon, ClipboardIcon } from '@heroicons/react/outline'
import AagnesLogo from '../images/aagnes_logo_black.svg'
import MaribarraLogo from '../images/logo_maribarra_black.svg'

const sectionProperties = [{
  bgProperty: 'bg-black',
  logoColorProperty: 'text-[#6631fb]',
  theme: 'dark'
},{
  bgProperty: 'bg-[#F6F2EF]',
  logoColorProperty: 'text-[#7B5231]',
  theme: 'light'
},{
  bgProperty: 'bg-white',
  logoColorProperty: 'text-[#1245B5]',
  theme: 'light'
},{
  bgProperty: 'bg-[#ffffff]',
  logoColorProperty: 'text-[#9289BE]',
  theme: 'light'
},{
  bgProperty: 'bg-black',
  logoColorProperty: 'text-[#6631fb]',
  theme: 'dark'
}]

const IndexPage = () => {

  const generalContainerRef = useRef()
  const isBrowser = typeof window !== "undefined"
  const { innerHeight: height } = isBrowser ? window : {innerHeight: 0};

  const [sectionIdx, setSectionIdx] = useState(0)

  const handleScroll = () => {
    const idx = generalContainerRef.current.scrollTop / height
    setSectionIdx(idx <= 4 ? Math.round(idx) : 4)
  }


  return (
    <Layout>
      <section className={`transition-color duration-700 relative ${sectionProperties[sectionIdx]?.bgProperty}`}>
        <div className={`fixed overflow-y-clip w-full z-40 ${sectionProperties[sectionIdx]?.bgProperty} bg-opacity-40 md:bg-transparent md:absolute md:bottom-5 md:left-10 md:w-2/5`}>
          <h1 className={`overflow-hidden transition duration-700 text-center md:text-left text-5xl lg:text-6xl xl:text-8xl font-semibold ${sectionProperties[sectionIdx]?.theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <span className={`transition duration-700 ${sectionProperties[sectionIdx]?.logoColorProperty}`}>sergiotbh</span>
            .dev
          </h1>
        </div>
        <section
          ref={generalContainerRef}
          className="h-screen w-screen overflow-scroll snap-mandatory 2xl:snap-none snap-y"
          onScroll={handleScroll}
        >
          <IntroSection selected={sectionIdx === 0}/>
          <CasaMuchaSection selected={sectionIdx === 1}/>
          <AagnesSection selected={sectionIdx === 2}/>
          <MaribarraSection selected={sectionIdx === 3}/>
          <ClosingSection selected={sectionIdx === 4}/>
        </section>
      </section>
    </Layout>
  )
}

const IntroSection = ({selected}) => (
  <SectionContainer customStyles="grid" selected={selected}>
    <TitleContainer customStyles="m-auto pt-16">
      <StaticImage
        src="../images/sergiotbh_avatar.jpg"
        width={200}
        height={200}
        aspectRatio={1}
        layout="fixed"
        className="mx-auto transform rounded-full self-center"
        alt="Sergio's headshot"
      />
      <h1 className="text-white leading-snug text-3xl sm:text-4xl xl:text-5xl font-serif sm:my-2 md:my-8">Hola!<br/> I'm Sergio,<br/>web developer</h1>
      {/* eslint-disable */}
      <Paragraph customStyles="text-primary-500 font-serif">
        // Frontend · React · React Native <br/>
        // Based in Guadalajara, México
      </Paragraph>
      {/* eslint-enable */}
    </TitleContainer>
    <ContentContainer>
      <ul className="grid px-2 grid-cols-4 md:grid-cols-2 gap-4 md:gap-12">
        <RoundedBox>
          <img
            src={JsLogo}
            className="md:w-36"
            alt="Javascript"
          />
        </RoundedBox>
        <RoundedBox>
          <img
            src={GatsbyLogo}
            className="md:w-36"
            alt="Gatsby"
          />
        </RoundedBox>
        <RoundedBox>
          <img
            src={ReactLogo}
            className="md:w-36"
            alt="React and React Native"
          />
        </RoundedBox>
        <RoundedBox>
          <img
            src={TailwindLogo}
            className="md:w-36"
            alt="Tailwind CSS"
          />
        </RoundedBox>
      </ul>
      <ChevronDownIcon className="animate-bounce mx-auto mt-10 md:absolute md:bottom-10 h-12 w-12 text-white opacity-75"/>
    </ContentContainer>
  </SectionContainer>
)

const CasaMuchaSection = ({selected}) => (
  <SectionContainer selected={selected}>
    <TitleContainer customStyles="pt-28 md:pt-0 text-[#7B5231]">
      <img
        src={CasaMuchaLogo}
        alt="Casa Mucha"
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
          alt="Casa Mucha website"
        />
    </ContentContainer>
  </SectionContainer>
)

const AagnesSection = ({selected}) => (
  <SectionContainer selected={selected}>
    <TitleContainer customStyles="text-black pt-28 md:pt-0">
      <img
        src={AagnesLogo}
        width={400}
        className="mx-auto w-80 h-20"
        alt="Aagnes"
      />
      <Paragraph>
        Aagnes is an interior and furniture design studio based in Guadalajara, Mexico. The work as a studio leads us back to the trade, which consists of sensitively working the luminosity, materials, silence and awareness of the space that is going to be inhabited.
      </Paragraph>
      <Paragraph>
        Site designed on Figma and developed with React based GatsbyJS and styled with Tailwind.
      </Paragraph>
      <SubParagraph>
        Design and development by sergiotbh.
      </SubParagraph>
    </TitleContainer>
    <ContentContainer customStyles="flex-col">
        <StaticImage
          src="../images/aagnes_espacio.jpg"
          className="md:absolute top-0 lg:top-20 left-0 xl:left-8 lg:w-2/3"
          alt="Aagnes Espacio detail"
        />
        <StaticImage
          src="../images/aagnes_hero.jpg"
          style={{
            position: 'absolute !important'
          }}
          className="absolute z-0 top-0 md:top-auto md:bottom-20 xl:bottom-0 right-0 w-4/5 md:w-full lg:w-2/3 drop-shadow-2xl"
          alt="Aagnes website"
        />
    </ContentContainer>
  </SectionContainer>
)

const MaribarraSection = ({selected}) => (
  <SectionContainer selected={selected}>
    <TitleContainer customStyles="text-black pt-28 md:pt-0">
      <img
        src={MaribarraLogo}
        width={450}
        className="mx-auto w-80 h-28"
        alt="Aagnes"
      />
      <Paragraph>
        Maribarra is a makeup artist based in San Diego, CA. Since her career started in 2008, she has worked with over 200 brides, editorial content, television, film and theatrical makeup, and thousands of social events and charities. 
      </Paragraph>
      <Paragraph>
        Site developed with React based GatsbyJS and styled with Tailwind.
      </Paragraph>
      <SubParagraph>
        Design by sergiotbh with Salvador Méndez. Development by sergiotbh.
      </SubParagraph>
      <SubParagraph>
        <a className="underline cursor-pointer" href="https://maribarramakeup.com" target="_blank" rel="noreferrer">You can take a look here.</a>
      </SubParagraph>
    </TitleContainer>
    <ContentContainer customStyles="flex-col md:justify-between md:py-24">
        <StaticImage
          src="../images/maribarra-ss1.jpg"
          className="lg:absolute top-0 lg:top-20 left-0 xl:left-8 lg:w-full 2xl:w-1/2 z-20"
          alt="Maribarra website"
        />
        <StaticImage
          src="../images/maribarra-ss2.jpg"
          style={{
            position: 'absolute !important'
          }}
          className="lg:absolute mt-2 top-0 md:top-auto md:bottom-20 xl:bottom-0 right-0 w-full 2xl:w-1/2 drop-shadow-2xl"
          alt=""
        />
    </ContentContainer>
  </SectionContainer>
)

const ClosingSection = ({selected}) => {

  const [copied, setCopied] = useState(false)
  
  return(
    <SectionContainer customStyles="grid-rows-2" selected={selected}>
      <TitleContainer customStyles="row-span-1 pt-28 md:pt-0">
        <h1 className="text-white text-4xl lg:text-5xl font-serif my-8">Contact me via email or my socials:</h1>
        <p className="text-primary-500 font-serif">
          <ul>
            <li>
              <Paragraph>
                <a className="hover:cursor-pointer" href="https://instagram.com/sergiotbh" target="_blank" rel="noreferrer"><span className="text-white">@sergiotbh</span> on Instagram</a> 
              </Paragraph>
            </li>
            <li>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('sergioyj93@gmail.com')
                  setCopied(true)
                  setTimeout(() => {
                    setCopied(false)
                  }, 400);
                }}
              >
                <Paragraph customStyles="hover:cursor-pointer text-left">
                  <span className="text-white">sergioyj93@gmail.com</span> via email (click to copy to clipboard)
                  <span className={`transition duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}> Copied!<ClipboardIcon className="h-4 mb-1 inline"/></span>
                </Paragraph>
              </button>
            </li>
          </ul>
        </p>
      </TitleContainer>
    </SectionContainer>
  )
}

const SectionContainer = ({children, customStyles, selected}) => (
  <section className={`transition-opacity duration-500 px-2 sm:px-10 md:grid gap-0 md:gap-10 md:grid-cols-2 lg:grid-cols-5 h-screen snap-start max-h-screen overflow-hidden justify-end ${customStyles}`}>
    {children}
  </section>
)

const TitleContainer = ({children, customStyles}) => (
  <section className={`lg:col-span-2 md:flex flex-col px-5 md:pl-6 md:pb-12 md:h-screen justify-end md:justify-center ${customStyles}`}>
    {children}
  </section>
)

const ContentContainer = ({children, customStyles}) => (
  <section className={`relative lg:col-span-3 h-full md:flex justify-center items-center ${customStyles}`}>
    {children}
  </section>
)

const Paragraph = ({customStyles, children}) => (
  <p className={`${customStyles} font-serif leading-snug text-xs sm:text-sm md:text-md pt-2 md:pt-6 xl:text-lg`}>{children}</p>
)

const SubParagraph = ({customStyles, children}) => (
  <p className={`${customStyles} font-serif leading-snug text-xs pt-2 md:pt-6`}>{children}</p>
)

const RoundedBox = ({children}) => (
  <li className="bg-white p-3 md:p-5 rounded-xl md:rounded-3xl flex justify-center shadow-primary-500 shadow-lg hover:shadow-primary-500 hover:shadow-2xl">
    {children}
  </li>
)

export default IndexPage
