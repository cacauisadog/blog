export const SEOData = {
  title: 'Cauê Bittencourt',
  delimiter: ' | ',
  shortDescription: 'Engenheiro de Software',
  description: 'Engenheiro de software, amante de open source. Este é um espaço sem propaganda, sem enrolação, sem encheção de saco e sem bullshit.'
}

export const createSEOMeta = data => [
  { hid: 'description', name: 'description', content: data.description }
]
