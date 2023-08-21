import Script from "next/script";

export default function ContactForm() {
  return (
    <>
      <br />
      <iframe
        data-tally-src="https://tally.so/embed/wQML0A?alignLeft=1&hideTitle=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="340"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Contact us "
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
