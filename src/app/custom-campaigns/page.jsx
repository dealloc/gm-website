import { PageIntro } from '@/components/PageIntro'

export const metadata = {
    title: 'Custom Campaigns',
    description:
        'Sometimes we write our own campaigns, either by ourselves or in collaboration with you',
}

export default async function CustomCampaigns() {
    return (
        <>
            <PageIntro eyebrow="Custom Campaigns" title="The Second Star">
                <p>
                    An Original Pathfinder 2E Campaign of Mystery and Peril
                </p>
                <div className="mt-10 max-w-2xl space-y-6 text-base">
                    <p>
                        Darkness stirs in Ghesia.
                        What begins as a desperate search for a missing girl in a troubled village soon unravels into something far greater.
                        Bandits and beasts roam unchecked, but something far more sinister lurks beneath the surface. Whispers speak of an ancient power lost to time, a force that some would kill to claim.
                        As the stakes rise, the choices you make will shape the fate of the land itself.
                        Will you uncover the truth in time, or will Ghesia fall to an unseen shadow?
                    </p>
                    <p>
                        <em>The Second Star</em> is a full fledged campaign written and developed by your struly.
                        The story is still under development, so while it&apos;s currently not available to be booked,
                        we are open to collaboration on story, music and artwork.
                    </p>
                </div>
            </PageIntro>
        </>
    )
}
