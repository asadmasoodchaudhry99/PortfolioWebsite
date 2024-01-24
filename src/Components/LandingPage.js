import React from 'react'
import { Card, Container } from 'react-bootstrap'
import MainCenterArea from './MainCenterArea/MainCenterArea'
import AboutSection from './AboutMe/AboutSection'
import DetailsAboutMe from './DetailsAboutMe/DetailsAboutMe'
import Projects from './Projects/Projects'
import ContactMe from './ContactMe/ContactMe'
import Credits from './Credits/Credits'

const LandingPage = () => {
  return (
    <>

              <Container className='mt-20'>
          <Card className='CardMainArea'>
            <MainCenterArea />
            <AboutSection />
            <DetailsAboutMe />
            <Projects />
            <ContactMe />
          </Card>
        </Container>
        <Credits/>
    </>
  )
}

export default LandingPage
