import { PageIntro } from '@/components/PageIntro';
import forgeHeart from '@/images/forgeheart.webp';

export const metadata = {
    openGraph: {
        title: 'Custom Campaigns',
        description:
            'Sometimes we write our own campaigns, either by ourselves or in collaboration with you',
        locale: 'en',
        images: [
            { url: forgeHeart.src, width: 800, height: 600 }
        ],
        type: 'website'
    }
}

export default async function CustomCampaigns() {
    return (
        <>
            <PageIntro eyebrow="Custom Campaigns" title="The Vault of Echoing Souls">
                <p>
                    An Original Pathfinder 2E Campaign of Mystery and Peril
                </p>
                <div className="mt-10 max-w-2xl space-y-6 text-base">
                    <p>
                        When mysterious embers light the skies above Emberwatch, a quiet frontier town,
                        it marks the beginning of a journey that will draw the heroes into a web of ancient betrayal.
                        They will navigate dangerous mountain passes, uncover the truth behind a vanished expedition,
                        and discover a long forgotten dwarven secret.
                    </p>
                    <p>
                        <em>Vault of Echoing Souls</em> is a campaign steeped in dwarven legacy, divine conflict, and the slow unraveling of a terrible past.
                    </p>
                </div>
            </PageIntro>
        </>
    )
}
