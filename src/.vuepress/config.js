const { description } = require('../../package')

module.exports = {
  title: 'ThePixarDB',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Github',
        link: 'https://github.com/search?q=malaquiasdev%2Fthepixardb',
        target:'_blank'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'API - Getting Started',
          collapsable: false,
          children: [
            '',
            'languages',
            'authentication',
            'external-ids',
            'popularity',
            'json',
            'request-limite',
            'caching',
            'movies/get-all',
          ]
        },
        {
          title: 'Metadata Agregator',
          collapsable: false,
          children: [
            'walle/intro',
            'walle/movie',
            'walle/image'
          ]
        }
      ],
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
