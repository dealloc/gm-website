import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function PricingBlock() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 dark:bg-white px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-medium [text-wrap:balance] text-white dark:text-neutral-950 sm:text-4xl">
            Affordable Pricing
          </h2>
          <p className="font-medium text-white dark:text-neutral-950 mt-2">
            We believe that high-quality tabletop experiences should be accessible to everyone.
            Game sessions start at €5 per session (pp), with pricing varying based on the length, complexity, and style of the game.
            There is also a one-time sign-up fee of €15, which covers Session 0, character creation support, and administrative costs.
          </p>
          <p className="font-medium text-white dark:text-neutral-950 mt-1">
            For those looking to develop custom campaigns or Foundry VTT modules, pricing is determined on a case-by-case basis to ensure a tailored experience that meets your specific needs.
            Contact us to discuss your ideal game!
          </p>
          <div className="mt-6 flex">
            <Button href="/contact" invert>
              Get started today
            </Button>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
