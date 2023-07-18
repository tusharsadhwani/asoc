import Script from 'next/script'

export default function MentorForm() {
    return (
        <>
        <br />
            <iframe data-tally-src="https://tally.so/embed/mOlR9K?hideTitle=1&dynamicHeight=1" loading="lazy" width="100%" height="769" frameborder="0" marginheight="0" marginwidth="0" title="Mentor Registration form"></iframe>
            <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                onLoad={() => {
                    Tally.loadEmbeds();
                }}
            />
        </>
        )
}