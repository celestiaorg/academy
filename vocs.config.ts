import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Modular Academy',
  editLink: {
    pattern: 'https://github.com/celestiaorg/academy/edit/main/docs/pages/:path',
    text: 'Edit this page GitHub'
  },
  sidebar: [
    {
      text: 'Build whatever',
      link: '/build-whatever',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
})
