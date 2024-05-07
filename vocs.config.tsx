import { defineConfig } from 'vocs'

export default defineConfig({
  head() {
    return (
      <>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="modular academy" />
      <meta property="og:image" content="https://vocs.dev/api/og?logo=%logo&title=%title&description=%description" />
      {/* <meta property="og:url" content="https://modular.academy" /> */}
      <meta property="og:url" content="https://modular-academy.vercel.app" />
      <meta property="og:description" content="build whatever with Celestia underneath." />
      <script defer data-domain="modular-academy.vercel.app" src="https://plausible.io/js/script.js"></script>
      </>
    )
  },
  // basePath: '/academy',
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
  title: 'modular academy',
  titleTemplate: '%s - modular academy',
  description: 'build whatever with Celestia underneath.',
  editLink: {
    pattern: 'https://github.com/celestiaorg/academy/edit/main/docs/pages/:path',
    text: 'edit this page on GitHub'
  },
  font: {
    google: 'Poppins'
  },
  banner: 'join [the telegram](https://t.me/modularacademyorg) for updates!', 
  // baseUrl: 'https://modular.academy',
  baseUrl: 'https://modular-academy.vercel.app',
  sidebar:
  {
    '/modules/0/': [ 
      {
        text: 'intro',
        link: '/modules/0/intro',
      },
      {
        text: 'post a blob',
        link: '/modules/0/post-a-blob',
      },
      {
        text: 'submit module 0',
        link: '/modules/0/submit',
      }
    ],
    '/modules/1/': [ 
      {
        text: 'intro',
        link: '/modules/1/intro',
      },
      {
        text: 'Raspberry testnet',
        link: '/modules/1/raspberry',
      },
      {
        text: 'deploy your contract',
        link: '/modules/1/thirdweb',
      },
      {
        text: 'minting your NFT',
        link: '/modules/1/minting',
      },
      {
        text: 'submit module 1',
        link: '/modules/1/submit',
      }
    ],
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
  theme: { 
    accentColor: { 
      light: '#7B2BF9', 
      dark: '#91F5E6', 
    }
  },
  // TODO: play around with search configurations
  // source: https://vocs.dev/docs/api/config#search
  search: { 
    boostDocument(documentId) { 
      return documentId === '/core' ? 2 : 1
    } 
  }, 
  topNav: [
    {
      text: 'modules',
      link: '/build-whatever',
    },
  ]
})
