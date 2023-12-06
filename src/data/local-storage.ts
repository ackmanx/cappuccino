import type { Tab } from '../types'

/*
 * These are examples of the data stored in local storage
 * It can be used for development to quickly get fresh valid data
 */

const exampleLocalStorageTabsData: Tab[] = [
  {
    title: 'Pull Requests',
    links: [
      { label: 'All of Mine', url: 'http://git.target.com' },
      { label: 'FE - Ready for Review', url: 'http://git.target.com' },
    ],
    cards: [
      {
        title: 'Frontend',
        links: [
          { label: 'All of Mine', url: 'http://git.target.com' },
          { label: 'FE - Ready for Review', url: 'http://git.target.com' },
        ],
      },
      {
        title: 'Backend',
        links: [
          { label: 'All of Mine', url: 'http://git.target.com' },
          { label: 'BE - Ready for Review', url: 'http://git.target.com' },
        ],
      },
    ],
  },
  {
    title: 'Playgrounds',
    links: [],
    cards: [
      {
        title: 'Frontend',
        links: [
          { label: 'All of Mine', url: 'http://git.target.com' },
          { label: 'FE - Ready for Review', url: 'http://git.target.com' },
        ],
      },
    ],
  },
  {
    title: 'Jira',
    links: [
      { label: 'Slingshot Jira Board', url: 'http://jira.target.com' },
      { label: 'Slingshot Backlog', url: 'http://jira.target.com' },
    ],
    cards: [],
  },
]

const aboveExampleAsJSON =
  '[{"title":"Pull Requests","links":[{"label":"All of Mine","url":"http://git.target.com"},{"label":"FE - Ready for Review","url":"http://git.target.com"}],"cards":[{"title":"Frontend","links":[{"label":"All of Mine","url":"http://git.target.com"},{"label":"FE - Ready for Review","url":"http://git.target.com"}]},{"title":"Backend","links":[{"label":"All of Mine","url":"http://git.target.com"},{"label":"BE - Ready for Review","url":"http://git.target.com"}]}]},{"title":"Playgrounds","links":[],"cards":[{"title":"Frontend","links":[{"label":"All of Mine","url":"http://git.target.com"},{"label":"FE - Ready for Review","url":"http://git.target.com"}]}]},{"title":"Jira","links":[{"label":"Slingshot Jira Board","url":"http://jira.target.com"},{"label":"Slingshot Backlog","url":"http://jira.target.com"}],"cards":[]}]'
