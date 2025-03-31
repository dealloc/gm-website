import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'


export const metadata = {
  openGraph: {
    title: 'Contact Us',
    description: 'Let&apos;s work or play together. We can&apos;t wait to hear from you.',
    locale: 'en',
    type: 'website'
  }
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let&apos;s talk">
        <p>We can&apos;t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="flex flex-col gap-x-8 gap-y-24">
          <div className="flex gap-4">
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-50">
              Hi, I&apos;m still making this page.
            </p>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-50">
              Get in touch with me on Discord!
            </p>
            <Button href="https://discordapp.com/users/98476629373767680">Click here</Button>
          </div>
          <Link href="/" className="mt-4 text-sm font-semibold text-neutral-950 dark:text-white transition hover:text-neutral-700 dark:hover:text-neutral-50">
            Return home
          </Link>
        </div>
      </Container>
    </>
  )
}
