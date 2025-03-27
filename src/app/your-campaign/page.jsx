import Image from 'next/image'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import foundryCommunityLogo from '@/images/fvtt-d20.png';
import map from '@/images/map.svg';
import headphones from '@/images/headphones.svg';
import code from '@/images/code.svg';
import bookOpen from '@/images/book-open.svg';
import token from '@/images/token.webp';

const services = [
    {
        image: foundryCommunityLogo,
        title: 'Foundry VTT integration',
        description: <p>
            Your campaign, ready to launch. I take your story, setting, and mechanics and package everything into a
            <strong> directly importable Foundry VTT module</strong>. This means no tedious manual setup—your maps, encounters,
            journals, and mechanics are fully integrated and ready to go the moment you load them. From adventure paths to homebrew
            epics, I ensure that every element is formatted for smooth and efficient gameplay, letting you focus on running your game
            instead of wrestling with setup.
        </p>
    },
    {
        image: map,
        title: 'Custom Maps',
        description: <p>
            A well-crafted map does more than guide players—it sets the scene for adventure. Using <strong>DungeonDraft,
                Wonderdraft</strong>, and <strong>Forgotten Adventures&apos; assets</strong>, I create high-quality battle maps, regional overviews,
            and detailed environments that match your setting and style. Whether you need a war-torn battlefield, a sprawling megacity,
            or the ruins of a lost civilization, I ensure that your world feels <strong>alive, immersive, and visually stunning</strong>.
            Maps are fully compatible with Foundry VTT, complete with lighting, walls, and interactive elements to make gameplay seamless.
        </p>
    },
    {
        image: headphones,
        title: 'Ambience',
        description: <p>
            Sound transforms an RPG session, adding layers of depth and emotion. I help you build a custom <strong>audio library</strong>
            &nbsp;filled with thematic music and ambient soundscapes that match the tone of your campaign. I have personally licensed tracks
            available, or I can assist you in finding and implementing the perfect music for your game. Whether you need
            <strong> epic battle music, haunting dungeon echoes, or the bustling sounds of a city at dusk</strong>, I tailor the
            atmosphere to your adventure. (For specific tracks outside my library, additional licensing fees may apply.)
        </p>
    },
    {
        image: code,
        title: 'Code',
        description: <p>
            Foundry VTT is powerful, but it truly shines with <strong>custom automation and scripts</strong> designed to enhance gameplay.
            I develop <strong>macros, quality-of-life improvements, and system integrations</strong> that streamline mechanics, automate
            tedious processes, and ensure the game flows effortlessly. Need an <strong>initiative tracker that adjusts dynamically</strong>,
            an <strong>automated resource management system</strong>, or <strong>custom rule implementations</strong> for a homebrew setting?
            I can build and integrate the right tools to make your GMing experience smoother and more intuitive.
        </p>
    },
    {
        image: token,
        title: 'Custom Tokens and Token Rings',
        description: <p>
            A character&apos;s token is their identity on the battlefield—why settle for anything generic? If you provide artwork, I can create
            &nbsp;<strong>dynamic or static token rings</strong> that match your campaign&apos;s theme and <strong>integrate seamlessly with Foundry VTT</strong>.
            Whether you want glowing magical borders, faction-based designs, or highly stylized personal rings for each character, I ensure
            they feel unique and <strong>enhance the visual storytelling</strong> of your game.
        </p>
    },
    {
        image: bookOpen,
        title: 'Completely Customizable Journals',
        description: <p>
            Handouts, notes, and journals should be more than just walls of text. I create <strong>professionally designed, fully themed
                journals</strong> that fit the <strong>style and atmosphere of your campaign</strong>. With structured formatting, immersive
            design elements, and interactive features, your players will feel like they are reading a <strong>real in-world document</strong>
            rather than a simple text file. Whether it&apos;s lore entries, quest logs, or ancient prophecies, I ensure that your campaign&apos;s
            information is <strong>engaging, visually appealing, and easy to navigate</strong>.
        </p>
    }
];


function WhatWeProvide() {
    return (
        <Container className="mt-40">
            <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                    What we bring to the table
                </h2>
                <h6 className="font-display text-sm font-semibold text-neutral-950">
                    (get it?)
                </h6>
            </FadeIn>
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                {services.map(ProvidedService)}
            </div>
        </Container>
    )
}

function ProvidedService({ image, title, description }) {
    return (
        <FadeIn>
            <article>
                <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                    <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                        <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                            <Image
                                src={image}
                                alt=""
                                className="w-24 flex-none"
                                unoptimized
                            />
                        </div>
                    </div>
                    <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                        <p className="font-display text-4xl font-medium text-neutral-950">
                            {title}
                        </p>
                        <div className="mt-6 space-y-6 text-base text-neutral-600">
                            {description}
                        </div>
                    </div>
                </Border>
            </article>
        </FadeIn>
    );
}

export const metadata = {
    title: 'Our Work',
    description:
        'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function YourCampaign() {
    return (
        <>
            <PageIntro
                eyebrow="Your Campaign"
                title="Tailor-made campaigns to bring your stories to life"
            >
                <p>
                    Every great adventure starts with an idea—but turning that idea into a fully realized campaign takes time, skill, and technical expertise.
                    Whether you have an epic story in mind but lack the tools to develop maps, custom modules, immersive audio, or automation in Foundry VTT, I can help.
                    With experience in campaign development and digital toolsets, I&apos;ll bring your world to life so you can focus on what matters most: storytelling and running unforgettable games for your players.
                </p>
            </PageIntro>

            <WhatWeProvide />
        </>
    )
}
