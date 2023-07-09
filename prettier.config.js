module.exports = {
  ...require('@magicdawn/prettier-config'),
  overrides: [
    {
      files: '*.user.css',
      options: {
        parser: 'less',
      },
    },
  ],
}
