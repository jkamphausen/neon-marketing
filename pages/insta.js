import React from "react";
import Head from 'next/head'
import Link from 'next/link'

import LandingPage from '../layouts/LandingPage'
import SectionHeader from "../components/SectionHeader";
import {Section, SplitSection, PillarSection, VideoSection, InterSection} from "../components/Section";
import {List, IconListItem} from '../components/List';
import PillarContent from "../components/PillarContent";
import LandingHeader from "../components/layout/LandingHeader";
import { Button, CTAButton, PillButton } from "../components/Buttons";
import Ribbon from "../components/Ribbon";
import { CheckIcon } from "../components/Icons";
import DenseImageGrid, { ImageGridItem } from "../components/DenseImageGrid";
import Question from "../components/Question";
import Review from "../components/Review"
export default function Insta(){
  return(
    <LandingPage>
      <Head>
        <title>NEON Marketing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingHeader/>

      <div>
        <p className="text-center text-xl font-semibold">
          Gewinne 3x mehr Kunden in 60 Tagen!
        </p>
      </div>

      <VideoSection
        autoPlay={true}
        loop={false}
        freezeMS={12000}
        videoUrl="/img/video-compressed.mp4">
        <div className="flex flex-col sm:flex-row bg-white text-neon-gray rounded-xl">
          <div className="rounded-xl text-center p-5 text-xl relative overflow-hidden">
            <Ribbon>NEU!</Ribbon>
            <p>Lorem ipsum dolor sit amet,</p>
            <p>consetetur sadipscing elitr!</p>
            <Button
              hasShadow={true}>Consetetur!</Button>
            <CTAButton
              hasShadow={true}
              bgColor="bg-neon-orange"
              textColor="text-neon-white"
              onClick={(e) => confirm('Kaufen?')}>Consetetur</CTAButton>
            </div>
            <div className="rounded-xl mt-5 mb-10 mx-auto h-32 w-32">
              <img className="object-fit rounded-xl" src="/img/gfx/1.jpg" alt="Lorem ipsum dolor" title="Lorem ipsum dolor"/>
            </div>
          </div>
      </VideoSection>

      <Section>
        <div>
          <p className="text-center text-xs font-semibold">
            Wir zeigen dir, wie du bis zu 300% mehr Kunden gewinnst - ohne teure Marketing-Agentur! Lorem ipsum dolor sit amet, lorem ipsum!
          </p>
        </div>
      </Section>

        <Section backgroundColor="bg-neon-blue">
          <SectionHeader
            className=""
            prior="magna aliquyam erat!"
            headline="Lorem ipsum dolor sit amet"
            posterior="consetetur sadipscing elitr"/>

          <InterSection boxShadow="xl">
            <div className="flex flex-col items-center sm:flex-row bg-white text-neon-gray rounded-xl p-5">
              <div className="text-center p-5 text-xl relative overflow-hidden mx-auto">
                {/* <Ribbon>NEU!</Ribbon> */}
                <p>Lorem ipsum dolor sit amet,</p>
                <p>consetetur sadipscing elitr!</p>
                {/* <Button
                  hasShadow={true}>Consetetur</Button>
                <PillButton
                  hasShadow={true}
                  bgColor="bg-neon-blue"
                  textColor="text-neon-white">Consetetur</PillButton> */}
                <CTAButton
                  hasShadow={true}
                  bgColor="bg-neon-orange"
                  textColor="text-neon-white"
                  onClick={(e) => confirm('Kaufen?')}>Consetetur</CTAButton>
              </div>
              <div className="relative overflow-hidden w-64 mx-auto">
                <img className="object-fit w-full" src="/img/gfx/3.jpg" title="Lorem ipsum" alt="Lorem ipsum"/>
              </div>
            </div>
          </InterSection>
        </Section>


          <SplitSection sectionHeader={
              <SectionHeader
                prior="magna aliquyam erat!"
                headline="Lorem ipsum dolor sit amet"
                posterior="consetetur sadipscing elitr"/>
            }
            backgroundColor="bg-white"
            textColor="text-neon-gray"
          >
            <List>
              {
                [0,1,2,3,4,5,6,7,8,9].map((i) => (
                  <IconListItem key={i} icon={<CheckIcon className="text-neon-blue"/>}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor.
                  </IconListItem>
                 ))
              }
            </List>
            <List>
              {
                [0,1,2,3,4,5,6,7,8,9].map((i) => (
                  <IconListItem key={i} icon={<CheckIcon className="text-neon-blue"/>}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                  </IconListItem>
                ))
              }
            </List>
          </SplitSection>
          <PillarSection sectionHeader={
            <SectionHeader
              className=""
              prior="magna aliquyam erat!"
              headline="Lorem ipsum dolor sit amet"
              posterior={null}/>
          }>
            {
              [0,1,2,4].map((i) => (
                <PillarContent key={i}
                  title="Dolor sit amet"
                  imageUrl="/img/gfx/1.jpg">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </PillarContent>
              ))
            }
          </PillarSection>

          <Section backgroundColor="bg-neon-white" textColor="text-neon-gray">
            <SectionHeader
                prior="magna aliquyam erat!"
                headline="Lorem ipsum dolor sit amet"/>
            <div className="mx-auto text-center pb-20">
              <DenseImageGrid>
                <ImageGridItem image={{url:'/img/gfx/1.jpg', height: '150', width: '150', alt:'Lorem Ipsum', title:'Lorem Ipsum'}}/>
                <ImageGridItem image={{url:'/img/gfx/video.png', height: '250', width: 'auto', alt:'Lorem Ipsum', title:'Lorem Ipsum'}}/>
                <ImageGridItem image={{url:'/img/gfx/2.jpg', height: '150', width: '150', alt:'Lorem Ipsum', title:'Lorem Ipsum'}}/>
                <ImageGridItem image={{url:'/img/gfx/video.png', height: '250', width: 'auto', alt:'Lorem Ipsum', title:'Lorem Ipsum'}}/>
                <ImageGridItem image={{url:'/img/gfx/3.jpg', height: '150', width: '150', alt:'Lorem Ipsum', title:'Lorem Ipsum'}}/>
                <ImageGridItem image={{url:'/img/gfx/video.png', height: '250', width: 'auto', alt:'Lorem Ipsum', title:'Lorem Ipsum'}}/>
                <ImageGridItem image={{url:'/img/gfx/1.jpg', height: '150', width: '150', alt:'Lorem Ipsum', title:'Lorem Ipsum'}}/>
                <ImageGridItem image={{url:'/img/gfx/video.png', height: '250', width: 'auto', alt:'Lorem Ipsum', title:'Lorem Ipsum'}}/>
              </DenseImageGrid>
            </div>
            <div className="mx-auto text-center px-10 mt-15">
              <CTAButton
                  hasShadow={true}
                  bgColor="bg-neon-orange"
                  textColor="text-neon-white"
                  onClick={(e) => confirm('Kaufen?')}>Consetetur</CTAButton>
            </div>
          </Section>

{/* social proof section */}
          <Section backgroundColor="bg-neon-black" textColor="text-neon-white">
          <SectionHeader
                headline="Das sagen unsere Kunden"/>

                <Review person="Peter Silie" headline="Lorem ipsum">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </Review>
                <Review person="Peter Silie" headline="Lorem ipsum">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </Review>
                <Review person="Peter Silie" headline="Lorem ipsum">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </Review>
                <Review person="Peter Silie" headline="Lorem ipsum">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </Review>
          </Section>
{/* FAQ section */}

          <Section backgroundColor="bg-neon-black" textColor="text-neon-white">
          <SectionHeader
                prior="Lorem ipsum dolor sit amet"
                headline="Häufig gestellte Fragen"/>

                <Question headline="Frage 1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </Question>
                <Question headline="Frage 2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </Question>
                <Question headline="Frage 3">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </Question>
                <Question headline="Frage 4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </Question>
          </Section>

        </LandingPage>)
}
