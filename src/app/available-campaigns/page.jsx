import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import { GridList, GridListItem } from '@/components/GridList'
import { SectionIntro } from '@/components/SectionIntro'

const availableCampaigns = [
    {
        title: 'Spore War',
        image: {
            src: 'https://cdn.paizo.com/d960ad1b-9967-00f9-1158-72274b18312d/08d53348-2eee-41ac-b1dd-ea3d7c344837/PZO15210_CoverScene_1920x1080.png?w=1920&fm=jpg'
        },
        description: `The demon Treerazer has long lurked in the wretched expanse of Tanglebriar, just south of the elven nation of Kyonin. Long ago, he tried to claim the nation as his own, but the elves pushed back and contained him. Today, many believe Treerazer to be exiled, trapped, imprisoned, or simply cowardly hunkering down in the swamp, afraid to attract attention or to trigger elven wrath once more.
Those who believe this are about to learn just how dangerously wrong they are.`,
        tags: [
            'Adventure Path',
            'level 11 - 20',
            '3 parts',
            'Paizo',
            'Player Guide',
            'Foundry VTT'
        ]
    },
    {
        title: 'Triumph of the Tusk',
        image: {
            src: 'https://cdn.paizo.com/d960ad1b-9967-00f9-1158-72274b18312d/a46fcfaa-79b6-49f2-9e87-46d04754d8f1/TriumphOfTheTusk_KeyArt_1920.png'
        },
        description: `After millennia of infighting and exploitation, many of Belkzen’s orcs crave prosperity and reform. Ardax the White-Hair, a bold orc leader, has invited delegates from across the world to visit Belkzen during its most spectacular natural event: the Flood Truce, when meltwater turns badlands into vibrant wetlands, feeding the nation. Yet not all appreciate Ardax’s diplomatic overtures. When disaster strikes, several guests of honor must take up arms against Belkzens’ enemies and help its orcs realize a brighter future.`,
        tags: [
            'Adventure Path',
            'level 3 - 14',
            '3 parts',
            'Paizo',
            'Player Guide',
            'Foundry VTT'
        ]
    },
    {
        title: 'Wardens of Wildwood',
        image: {
            src: 'https://cdn.paizo.com/d960ad1b-9967-00f9-1158-72274b18312d/d97e65ad-ce7e-4ccc-8346-3ae964082ce8/PZO90201_CoverScene_1920x1080.png?w=1920&fm=jpg'
        },
        description: `After millennia of infighting and exploitation, many of Belkzen’s orcs crave prosperity and reform. Ardax the White-Hair, a bold orc leader, has invited delegates from across the world to visit Belkzen during its most spectacular natural event: the Flood Truce, when meltwater turns badlands into vibrant wetlands, feeding the nation. Yet not all appreciate Ardax’s diplomatic overtures. When disaster strikes, several guests of honor must take up arms against Belkzens’ enemies and help its orcs realize a brighter future.`,
        tags: [
            'Adventure Path',
            'level 5 - 13',
            '6 parts',
            'Paizo',
            'Player Guide',
            'Foundry VTT'
        ]
    },
    {
        title: 'Seven Dooms for Sandpoint',
        image: {
            src: 'https://cdn.paizo.com/d960ad1b-9967-00f9-1158-72274b18312d/68e6697d-5c16-4586-944a-17a7701f175c/PZO90200_COVERSCENE_1920x1080.png?w=1920&fm=jpg'
        },
        description: `The town of Sandpoint has seen more than its fair share of danger and trouble over the years, including harrowing fires, prolific serial killers, goblin raids, and attacks by giants and dragons, but what faces the so-called Light of the Lost Coast now is its greatest threat yet! Something sinister has been manipulating events all along, and now a new band of heroes must step in to save this legendary small town from seven deadly dooms!`,
        tags: [
            'Adventure Path',
            'level 4 - 11',
            '3 parts',
            'Paizo',
            'Player Guide',
            'Foundry VTT'
        ]
    },
    {
        title: 'Season of Ghosts',
        image: {
            src: 'https://cdn.paizo.com/d960ad1b-9967-00f9-1158-72274b18312d/fb617ab9-85fe-4d00-8956-59df8923145d/PZO90196_CoverScene_1920x1080.png?w=1920&fm=jpg'
        },
        description: `Something strange is happening to your hometown of Willowshore! Nestled on the banks of a river winding through the legendary Specterwood in Tian Xia’s haunted land of Shenmen, the people of Willowshore are no strangers to supernatural threat, but the danger that comes to town on the first day of summer is unlike anything you’ve ever seen before. Over the four seasons to come, you and your fellow home-grown heroes must face evil spirits, sinister fiends, and frightening curses, lest the town of Willowshore succumb to the Season of Ghosts!`,
        tags: [
            'Adventure Path',
            'level 1 - 12',
            '4 parts',
            'Paizo',
            'Player Guide',
            'Foundry VTT'
        ]
    },
    {
        title: 'Sky King\'s Tomb',
        image: {
            src: 'https://cdn.paizo.com/d960ad1b-9967-00f9-1158-72274b18312d/2ad4c1c8-b1cc-4a53-9951-67b34f4d425f/KeyArt_SkyKingsTomb_1920x1080.png?w=1920&fm=jpg'
        },
        description: `Millennia ago, the dwarven creator god Torag shook the earth and called the dwarves to the surface in the Quest for Sky. Taargick rose from the hardships of this journey, becoming the Sky King of Highhelm. For centuries he ruled, creating monuments to Torag and the accomplishments of his people… And then he vanished without a trace. Invited guests of the clans of Highhelm find themselves embroiled in a story of seekers, survivors, and heroes discovering the Sky King’s Tomb.`,
        tags: [
            'Adventure Path',
            'level 1 - 12',
            '3 parts',
            'Paizo',
            'Player Guide',
            'Foundry VTT'
        ]
    },
    {
        title: 'Stolen Fate',
        image: {
            src: 'https://cdn.paizo.com/d960ad1b-9967-00f9-1158-72274b18312d/ada9c951-c9bc-4b39-8333-8df8845d96b8/StolenFate_KeyImage_1920x1080.png?w=1920&fm=jpg'
        },
        description: `Not even destiny itself is safe when powerful forces seek to seize control of the future, and now it falls to a band of heroes selected by the power of a magical Harrow deck to step in and ensure that fate is not stolen from the world! Already noteworthy in their own right, this new band of adventurers finds themselves quickly swept up in a race to gather and control the scattered cards of a powerful, mysterious artifact tied to the destinies of all who live on Golarion. It’s a race that must be won, for to lose means all possible futures fade save for one—a stolen fate meant to bring power to a very select few and leave the rest of reality in ruin!`,
        tags: [
            'Adventure Path',
            'level 11 - 20',
            '3 parts',
            'Paizo',
            'Player Guide',
            'Foundry VTT'
        ]
    },
    {
        title: 'Gatewalkers',
        image: {
            src: 'https://cdn.paizo.com:443/d960ad1b-9967-00f9-1158-72274b18312d/43b19485-5e42-4432-8d47-8f5ef00d236b/Gatewalkers_KeyArt_1920.png'
        },
        description: `After they walked through that glowing gateway, nothing was ever the same. A band of characters become paranormal investigators in order to figure out the cause of a global amnesic episode. Their quest takes them to lands near, far, and outside of this reality altogether.`,
        tags: [
            'Adventure Path',
            'level 1 - 8',
            '3 parts',
            'Paizo',
            'Player Guide',
            'Foundry VTT'
        ]
    },
    {
        title: 'Kingmaker',
        image: {
            src: 'https://cdn.paizo.com/d960ad1b-9967-00f9-1158-72274b18312d/72daeb70-d7ea-4ccd-b30e-53a918d318e1/PZO2020_Kingmaker_1920.png?w=1920&fm=jpg'
        },
        description: `The Kingmaker Adventure Path presents a full-length campaign that chronicles the rise of a new nation—a kingdom built and ruled by your player characters! Face off against bands of bloodthirsty bandits, deadly and dangerous monsters, and mysterious menaces from other realities as you fight to claim the Stolen Lands as your own. Will you rule with justice and mercy, or will you become the very monsters you fought to oppose? In the Kingmaker Adventure Path, the destiny of the world’s newest nation is yours to decide!`,
        tags: [
            'Adventure Path',
            'level 1 - 20',
            'Paizo',
            'Player Guide',
            'Foundry VTT'
        ]
    },
    {
        title: 'Blood Lords',
        image: {
            src: 'https://cdn.paizo.com/d960ad1b-9967-00f9-1158-72274b18312d/ea74819f-0963-407b-9f49-937c95141b4d/BloodLords_KeyArt1920.png?w=1920&fm=jpg'
        },
        description: `The undead nation of Geb gains most of its trade from the export of food grown on zombie-worked farms, but one farm has been the site of a series of strange occurrences. The Blood Lords Adventure Path, is a six-part, monthly campaign in which the characters rise from skilled troubleshooters to join the Blood Lords who rule a land of the dead.`,
        tags: [
            'Adventure Path',
            'level 1 - 20',
            '6 parts',
            'Paizo',
            'Player Guide',
            'Foundry VTT'
        ]
    },
    {
        title: 'Outlaws of Alkenstar',
        image: {
            src: 'https://cdn.paizo.com/d960ad1b-9967-00f9-1158-72274b18312d/aba448fd-e620-4429-abfa-6e0b7a1f8743/HellsideChase.png?w=1920&fm=jpg'
        },
        description: `A ragtag band of gunslinging outlaws get their hands dirty in the greasy alleyways and whisky-soaked saloons of Alkenstar, the City of Smog. To get revenge on the mogul who destroyed them, the renegades will have to stick up an illicit bank, foil a crooked shieldmarshal, and escort a reclusive inventor to safety.`,
        tags: [
            'Adventure Path',
            'level 1 - 10',
            '3 parts',
            'Paizo',
            'Player Guide',
            'Foundry VTT'
        ]
    },
    {
        title: 'Abomination Vaults',
        image: {
            src: 'https://cdn.paizo.com/d960ad1b-9967-00f9-1158-72274b18312d/aeb5d655-1da6-4e0b-b498-57146744aa8c/PZO90163_RuinsofGauntlight_Cover.png?w=1920&fm=jpg'
        },
        description: `Enter the megadungeon! Evil stirs in the depths of the Abomination Vaults, a sprawling dungeon where the evil sorcerer Belcorra Haruvex attempted to raise an army of monsters hundreds of years ago. Brave heroes must venture into a dungeon full of beasts and traps to prevent a spiteful villain from rising again. The Abomination Vaults Adventure Path is a three-part, monthly series of connected adventures that comprise a complete Pathfinder campaign.`,
        tags: [
            'Adventure Path',
            'level 1 - 10',
            '3 parts',
            'Paizo',
            'Player Guide',
            'Foundry VTT'
        ]
    }
];

function AdventurePath({ title, image, description, tags }) {
    return (
        <Container className="group/section [counter-increment:section]">
            <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
                <div className="flex justify-center">
                    <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                        <StylizedImage
                            width={1024}
                            height={1024}
                            {...image}
                            sizes="(min-width: 1024px) 41rem, 31rem"
                            className="justify-center lg:justify-end lg:group-even/section:justify-start"
                        />
                    </FadeIn>
                </div>
                <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
                    <FadeIn>
                        <div
                            className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
                            aria-hidden="true"
                        />
                        <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                            {title}
                        </h2>
                        <div className="mt-6">
                            <div className="space-y-6 text-base text-neutral-600">
                                <p>
                                    {description}
                                </p>
                            </div>

                            {tags.length ? <>
                                <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
                                    Tags
                                </h3>
                                <TagList className="mt-4">
                                    {tags.map((tag) => (
                                        <TagListItem key={tag}>{tag}</TagListItem>
                                    ))}
                                </TagList>
                            </> : null}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </Container>
    )
}

function Values() {
    return (
        <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
            <SectionIntro
                eyebrow="Available Campaigns"
                title="Choose your legend"
            >
                <p>
                    Embark on an unforgettable adventure with a campaign tailored to your playstyle.
                    Whether you're drawn to epic sagas, thrilling mysteries, or pulse-pounding dungeon crawls, there's a story waiting for you.
                    From Paizo’s official Adventure Paths to standalone modules, each campaign is expertly prepared and run with immersive storytelling, tactical combat, and deep roleplay opportunities.
                    New to Pathfinder 2E? No problem—I’ll guide you every step of the way.
                    Veteran player? Prepare for a challenge that tests your strategic mastery.
                    The only question left is: what legend will you forge?
                </p>
            </SectionIntro>

            <Container className="mt-24">
                <GridList>
                    <GridListItem title="Official Adventures">
                        Campaigns marked with the <em>Paizo</em> tag are officially published modules, crafted by the creators of Pathfinder Second Edition.
                        While I didn’t write these stories, I run them with care, expertise, and attention to detail, bringing them to life for you.
                    </GridListItem>
                    <GridListItem title="High-Quality Narratives">
                        Paizo’s adventures are designed by some of the best storytellers in tabletop gaming, ensuring well-balanced encounters, immersive world-building, and compelling plots.
                        Expect a polished, engaging experience every time.
                    </GridListItem>
                    <GridListItem title="Player Comfort First">
                        Every player has different comfort levels.
                        We discuss themes beforehand, adjusting or omitting sensitive content as needed to ensure an enjoyable experience for everyone at the table.
                        Your fun and safety matter.
                    </GridListItem>
                    <GridListItem title="Guided Character Creation">
                        Not sure where to start?
                        Campaigns with the <em>Player Guide</em> tag include a player guide to help you build a character that fits the story while staying true to your vision.
                        Whether you're a seasoned adventurer or brand new, you’ll have the tools you need.
                    </GridListItem>
                    <GridListItem title="Immersive Roleplay">
                        Whether you love deep character-driven moments or prefer strategic combat, sessions are tailored to fit your preferred playstyle.
                        NPCs are fully fleshed out, world details are rich, and every session is designed to pull you into the story.
                    </GridListItem>
                    <GridListItem title="A Game for Everyone">
                        No prior experience? No problem. Whether you're a veteran of Golarion or stepping into your first adventure, the table is open to all.
                        Rules explanations, story recaps, and an inclusive space make sure everyone feels welcome.
                    </GridListItem>
                </GridList>
            </Container>
        </div>
    )
}

export const metadata = {
    title: 'Available Campaigns',
    description:
        'We offer a wide variety of adventure paths, to provide a compelling narrative and tactical combat to suit everyone\'s taste',
}

export default function Process() {
    return (
        <>
            <Values />

            <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
                {availableCampaigns.map(AdventurePath)}
                {/* <Discover /> */}
                {/* <Build /> */}
                {/* <Deliver /> */}
            </div>
        </>
    )
}
