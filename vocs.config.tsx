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
  // banner: {
  //   dismissable: false,
  //   backgroundColor: 'green',
  //   content: '[Sign up for updates](https://twitter.com/CelestiaOrg)!',
  //   height: '28px',
  //   textColor: 'white',
  // },
  // baseUrl: 'https://modular.academy',
  baseUrl: 'https://celestiaorg.github.io/academy',
  sidebar: [
    // TODO: Add different sections sidebars
    // '/guide': [{
    //   text: 'Getting Started',
    //   link: '/guide',
    // }],
    // '/api': [{
    //   text: 'Config',
    //   link: '/api/config',
    // }],
    {
      text: 'Build whatever',
      link: '/build-whatever',
    },
    {
      text: 'Smart contract modules',
      collapsed: false,
      items: [
        {
          text: 'Module 1',
          collapsed: false,
          items: [
            {
              text: 'Introduction',
              link: '/modules/1/introduction-to-module-1',
            },
          ],
        },
      ],
    },
  ],
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/celestiaorg/academy',
    },
    {
      icon: 'x',
      link: 'https://twitter.com/CelestiaOrg',
    },
    {
      icon: 'telegram',
      link: 'https://t.me/modularacademyorg',
    },
  ],
  // theme: {
  //   accentColor: '#7B2BF9',
  //   variables: {
  //     color: {
  //       background: {
  //         light: 'white',
  //         dark: 'black'
  //       }
  //     }
  //   }
  // },
})
