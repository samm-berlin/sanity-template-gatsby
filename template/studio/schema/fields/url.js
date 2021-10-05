export default {
  name: 'url',
  title: 'URL',
  type: 'url',
  validation: Rule =>
    Rule.uri({
      scheme: ['http', 'https', 'mailto', 'tel']
    })
}
