export default {
  name: 'email',
  title: 'Email',
  type: 'string',
  validation: Rule =>
    Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).error(
      'Is not a valid email address'
    ),
};
