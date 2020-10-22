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
                  buildHookId: '5f917a8a5202e5f13605b6cc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fq5jxwdj',
                  apiId: 'c8bd090b-e67e-4cdb-aeae-b2965ae47f72'
                },
                {
                  buildHookId: '5f917a8a866375e93738c5f2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1d4u7d4d',
                  apiId: 'd6a6a45c-fe28-4174-acf1-cb379c6b8697'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gotbutchi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1d4u7d4d.netlify.app', category: 'apps'}
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
