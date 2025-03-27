import Image from 'next/image'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import ghesia from '@/images/ghesia.webp';
import { loadCaseStudies } from '@/lib/mdx'

function CustomCampaign() {
  return (
    <section className="mt-24 bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h1 className="text-center font-display font-semibold tracking-wider text-white sm:text-left">
            Bring Your World to Life in Foundry VTT
          </h1>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <p className="text-white">
            Have a great campaign idea but need help bringing it to the virtual table?
            We provide custom maps, curated audio for immersive ambiance, and full Foundry VTT module development. Whether you’re a GM looking to streamline your prep or a creator wanting to see your world realized, we handle the technical side so you can focus on storytelling.
          </p>
        </FadeInStagger>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Our approach"
        title="We believe in making Pathfinder Second Edition available to everyone"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Whether you're a veteran in Pathfinder Second Edition, coming from Dungeons & Dragons
          or have never played in a tabletop roleplaying game, there's a place at our table just for you
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={ghesia}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Guidance for new players">
              Whether you're new to Pathfinder 2E or tabletop RPGs in general, we provide patient,
              hands-on mentorship to help you learn the rules and embrace roleplay with confidence.
            </ListItem>
            <ListItem title="Deep Narrative & Tactical Combat">
              For experienced adventurers, we craft rich, immersive stories with meaningful choices and engaging,
              strategic encounters that challenge and reward veterans.
            </ListItem>
            <ListItem title="Play from Anywhere">
              Our games are hosted online, making it easy to join exciting campaigns no matter where you are—no travel, just adventure.
              All you need is a browser!
            </ListItem>
            <ListItem title="Inclusive &amp; Welcoming">
              We foster a respectful and diverse gaming space where all players, regardless of gender, identity,
              or background, feel valued and empowered to tell their stories.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'I\'m a Pathfinder Second Edition Game Master that runs games for fun people',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            Professional Game Mastering for Adventurers of All Levels
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Explore rich narratives, intense combat, and immersive roleplay in Pathfinder Second Edition campaigns.
          </p>
        </FadeIn>
      </Container>

      <CustomCampaign />

      <Services />
    </>
  )
}
