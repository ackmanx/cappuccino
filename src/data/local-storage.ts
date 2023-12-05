import type { Card } from '../types'

/*
 * These are examples of the data stored in local storage
 * It can be used for development to quickly get fresh valid data
 */

const exampleLocalStorageCardsData: Card[] = [
  {
    title: 'Pull Requests',
    links: [
      { label: 'All of Mine', url: 'http://git.target.com' },
      { label: 'FE - Ready for Review', url: 'http://git.target.com' },
    ],
  },
  {
    title: 'Playgrounds',
    links: [
      { label: 'TypeScript', url: 'http://git.target.com' },
      { label: 'GraphQL', url: 'http://git.target.com' },
    ],
  },
  {
    title: 'Jira',
    links: [
      { label: 'Slingshot Jira Board', url: 'http://jira.target.com' },
      { label: 'Slingshot Backlog', url: 'http://jira.target.com' },
    ],
  },
]

const aboveExampleAsJSON =
  '[{"title":"Pull Requests","links":[{"label":"All of Mine","url":"http://git.target.com"},{"label":"FE - Ready for Review","url":"http://git.target.com"}]},{"title":"Playgrounds","links":[{"label":"TypeScript","url":"http://git.target.com"},{"label":"GraphQL","url":"http://git.target.com"}]},{"title":"Jira","links":[{"label":"Slingshot Jira Board","url":"http://jira.target.com"},{"label":"Slingshot Backlog","url":"http://jira.target.com"}]}]'
