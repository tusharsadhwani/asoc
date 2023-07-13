import Image from "next/image";
import { Balsamiq_Sans } from 'next/font/google'
 
const balsamiq = Balsamiq_Sans({
  weight: '400',
  subsets: ['latin'],
})

export default {
  logo: (
    <>
      <Image src="/images/alias.svg" alt="logo" width={32} height={32} style={{ marginLeft: '.4em',}}/>
      <span className={`${balsamiq.className} logo`} style={{ marginLeft: '.4em', marginTop: '.15em'}}> ASoC</span>
    </>
  ),

  project: {
    link: "https://github.com/asetalias/asoc",
  },

  docsRepositoryBase: "https://github.com/asetalias/asoc/blob/main",

  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },

  useNextSeoProps() {
    return {
      titleTemplate: '%s - ASoC',
    }
  },

  nextThemes: {
    defaultTheme: 'dark',
  },

  chat: {
    link: 'https://discord.gg/KEXGnysX',
  },  

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="ASoC" />
      <meta property="og:description" content="ALiAS Summer of code" />
      <link rel='icon' href='/images/favicon.ico'/>
    </>
  ),

  footer: {
    text: (
      <span>
        <a href="https://asetalias.in" target="_blank">
          Made with ❤️ by ALiAS
        </a>
      </span>
    )
  },

  search: {
    placeholder: 'Search',
  }
};
