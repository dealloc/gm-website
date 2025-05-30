import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <Container as="footer" className="w-full sm:mt-32 lg:mt-20">
      <div className="mt-24 mb-10 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 dark:border-neutral-100/10 pt-12">
        <Link href="/" aria-label="Home">
          <Logo className="h-8" fillOnHover />
        </Link>
        <p className="text-sm text-neutral-700 dark:text-neutral-100">
          <Link href="/legal" aria-label="Legal">Legal</Link>
        </p>
        <p className="text-sm text-neutral-700 dark:text-neutral-100">
          Website developed by <a href="https://www.elixus.be" target="_blank" className="text-primary font-bold">
            Elixus
          </a>
        </p>
      </div>
    </Container>
  )
}
