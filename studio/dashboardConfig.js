export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '632b7c63882f6f35179cfd83',
                  title: 'Sanity Studio',
                  name: 'portfolio-22-studio-nsub46ts',
                  apiId: '62c02639-3302-4991-a4a7-24e3f627d270'
                },
                {
                  buildHookId: '632b7c64f6b89d32540b04cb',
                  title: 'Portfolio Website',
                  name: 'portfolio-22-web-zz7p8p3j',
                  apiId: '101f2bdf-3bfb-41e3-98d1-1d645e232b54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/geethikasimhadri/portfolio-22',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portfolio-22-web-zz7p8p3j.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
