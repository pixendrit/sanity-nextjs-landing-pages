export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6232a0f8ab89ca5a3742604c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gah8out4',
                  apiId: '9bcab9ae-8d44-45dc-91c3-ca7d235b3467'
                },
                {
                  buildHookId: '6232a0f80231205d392b7b7a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qgi5887r',
                  apiId: 'ac7685c5-6186-4cab-9a77-a65995ae127a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pixendrit/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qgi5887r.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
