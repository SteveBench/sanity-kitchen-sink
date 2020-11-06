export default {
  widgets: [
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
                  buildHookId: '5fa5bd13a8d0161f99b93b7b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hbo3avxz',
                  apiId: '3cdb76c5-39f9-4915-b547-114c1d3e723f'
                },
                {
                  buildHookId: '5fa5bd134987012a0ef748c4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1qrjvpy9',
                  apiId: '604f9760-79a4-47dc-930c-43dfb42b7dd4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SteveBench/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1qrjvpy9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
