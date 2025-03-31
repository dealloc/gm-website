import { Container } from '@/components/Container'
import { Divider } from '@/components/Divider'
import { FadeIn } from '@/components/FadeIn'

export default function Legal() {
    return (
        <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
            <FadeIn className="flex max-w-xl flex-col items-center text-center">
                <p className="font-display text-4xl font-semibold text-neutral-950 dark:text-white sm:text-5xl">
                    For legal reasons
                </p>
                <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950 dark:text-white dark:text-white">
                    Image Credit Notice
                </h1>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-50">
                    The images used on this site, including those from Paizo Inc. and other sources, are copyrighted and owned by their respective creators.
                    These images are used for illustrative purposes only and are not owned or endorsed by me.
                    All rights to the images remain with their respective owners.
                    Any reference to Paizo, their products, or intellectual property is used in accordance with fair use for the purpose of promoting content and enhancing the experience of the game.
                </p>
                <Divider />
                <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950 dark:text-white">
                    Logo Credit Notice
                </h1>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-50">
                    The Foundry VTT logo used on this site is the property of Foundry Interactive, LLC.
                    It is used for promotional purposes only and is not owned or endorsed by me.
                    All rights to the logo and related trademarks are reserved by Foundry Interactive, LLC.
                    This use complies with their community guidelines for displaying the logo.
                </p>
                <Divider />
                <h1 className="mt-6 font-display text-2xl font-semibold text-neutral-950 dark:text-white">
                    Data Collection
                </h1>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-50">
                    We do not collect any personal data beyond what is strictly necessary to provide our services. This includes your <strong>name, Discord contact information, and payment details</strong> required for processing payments.
                    No data is stored longer than required for the fulfillment of services or as mandated by law, whichever period is longer.
                </p>

                <Divider />
                <h1 className="mt-6 font-display text-2xl font-semibold text-neutral-950 dark:text-white">
                    Cookies
                </h1>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-50">
                    This website does <strong>not</strong> use any cookies—functional, analytical, or otherwise. Your browsing experience remains completely private, and no tracking mechanisms are in place.
                </p>

                <Divider />
                <h1 className="mt-6 font-display text-2xl font-semibold text-neutral-950 dark:text-white">
                    GDPR Policy
                </h1>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-50">
                    In compliance with the <strong>General Data Protection Regulation (GDPR)</strong>, we ensure that all collected data is handled with the highest level of security and transparency.
                    You have the right to <strong>access, correct, or request deletion</strong> of any personal data we may hold. For any inquiries regarding your data, please contact us directly.
                </p>

                <Divider />
                <h1 className="mt-6 font-display text-2xl font-semibold text-neutral-950 dark:text-white">
                    Business & VAT Information
                </h1>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-50">
                    For business and VAT-related information, please refer to our official website:&nbsp;
                    <a href="https://www.elixus.be" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                        elixus.be
                    </a>
                </p>
            </FadeIn>
        </Container>
    )
}
