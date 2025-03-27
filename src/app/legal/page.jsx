import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export default function Legal() {
    return (
        <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
            <FadeIn className="flex max-w-xl flex-col items-center text-center">
                <p className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl">
                    For legal reasons
                </p>
                <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
                    Image Credit Notice
                </h1>
                <p className="mt-2 text-sm text-neutral-600">
                    The images used on this site, including those from Paizo Inc. and other sources, are copyrighted and owned by their respective creators.
                    These images are used for illustrative purposes only and are not owned or endorsed by me.
                    All rights to the images remain with their respective owners.
                    Any reference to Paizo, their products, or intellectual property is used in accordance with fair use for the purpose of promoting content and enhancing the experience of the game.
                </p>
                <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
                    Logo Credit Notice
                </h1>
                <p className="mt-2 text-sm text-neutral-600">
                    The Foundry VTT logo used on this site is the property of Foundry Interactive, LLC.
                    It is used for promotional purposes only and is not owned or endorsed by me.
                    All rights to the logo and related trademarks are reserved by Foundry Interactive, LLC.
                    This use complies with their community guidelines for displaying the logo.
                </p>
            </FadeIn>
        </Container>
    )
}
