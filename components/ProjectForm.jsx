import Script from "next/script";

export default function MenteeForm() {
  return (
    <>
      <br />
      <iframe
        data-tally-src="https://tally.so/embed/3yNK66?alignLeft=1&hideTitle=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="1334"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Mentee Registration Form"
      ></iframe>
      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          Tally.loadEmbeds();
        }}
      />
    </>
  );
}
