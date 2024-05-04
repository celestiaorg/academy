import { defineConfig } from 'vocs'

export default defineConfig({
  head: ( 
    <>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Modular Academy" />
      <meta property="og:image" content="https://vocs.dev/api/og?logo=%logo&title=%title&description=%description" />
      {/* <meta property="og:url" content="https://modular.academy" /> */}
      <meta property="og:url" content="https://celestiaorg.github.io/academy" />
      <meta property="og:description" content="Build whatever with Celestia underneath." />
    </> 
  ),
  basePath: '/academy',
  iconUrl: {
    light: '/icon-light.svg',
    dark: '/icon-dark.svg'
  },
  logoUrl: {
    light: '/logo-light.svg',
    dark: '/logo-dark.svg'
  },
  ogImageUrl: 'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  // ogImageUrl: {
  //   '/': 'https://vocs.dev/og-image.png', // TODO: replace this with a base OG image for Modular Academy
  //   '/modules': 'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  // },
  title: 'Modular Academy',
  titleTemplate: '%s - Modular Academy',
  description: 'Build whatever with Celestia underneath.',
  editLink: {
    pattern: 'https://github.com/celestiaorg/academy/edit/main/docs/pages/:path',
    text: 'Edit this page on GitHub'
  },
  font: {
    google: 'Ubuntu'
  },
  banner: '[Join the Telegram for updates](https://t.me/modularacademyorg)!', 
  // baseUrl: 'https://modular.academy',
  baseUrl: 'https://celestiaorg.github.io/academy',
  sidebar:
  {
    '/modules/1/': [ 
      {
        text: 'Introduction',
        link: '/modules/1/introduction',
      },
      {
        text: 'Raspberry testnet',
        link: '/modules/1/raspberry',
      },
      {
        text: 'Deploy your contract',
        link: '/modules/1/thirdweb',
      },
      {
        text: 'Minting your NFT',
        link: '/modules/1/minting',
      },
      {
        text: 'Submit module 1',
        link: '/modules/1/submit',
      }
    ],
    // '/' : [
    //   {
    //     text: 'Build whatever',
    //     link: '/build-whatever',
    //   },
    // ],
  },
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/celestiaorg/academy',
    },
    {
      icon: 'x',
      link: 'https://twitter.com/celestia_devs',
    },
    {
      icon: 'warpcast',
      link: 'https://warpcast.com/celestiaorg'
    },
    {
      icon: 'telegram',
      link: 'https://t.me/modularacademyorg',
    },
  ],
  sponsors: [
    {
      name: 'Learn to build whatever with',
      height: 60,
      items: [
        [
          {
            name: 'Celestia',
            link: 'https://celestia.org',
            image: 'logos/celestia.svg',
          },
          {
            name: 'Rollkit',
            link: 'https://rollkit.dev',
            image: 'logos/rollkit.svg',
          },
        ],
        [
          {
            name: 'Astria',
            link: 'https://astria.org',
            image: 'logos/astria.svg',
          },
          {
            name: 'Sovereign SDK',
            link: 'https://sovereign.xyz',
            image: 'logos/sovereign.svg',
          },
        ],
        [
          {
            name: "Arbitrum Nitro and Orbit",
            link: "https://docs.optimism.io",
            image: "logos/orbit.svg",
          },
          {
            name: "OP Stack",
            link: "https://docs.optimism.io",
            image: "logos/optimism.svg",
          },
        ],
        [
          {
            name: "whatever",
            link: "https://buildwhatever.com",
            image: "logos/whatever.svg",
          },
          {
            name: "thirdweb",
            link: "https://thirdweb.com",
            image: "logos/thirdweb.svg",
          }
        ]
      ],
    },
  ],
})
