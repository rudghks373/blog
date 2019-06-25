let config = {
  title: `Kyunghwan.etx`,
  author: 'Kyunghwan',
  description: "Kyunghwan's blog",
  siteUrl: 'https://rudghks373.github.io/',

  // header config
  titleLogo: () => {
    return require('./src/images/profile.png');
  },
  titleLogoShow: true,
  bio: 'Hello!!',
  bioShow: true,

  // addtional
  googleAnalyticsTrackingId: '',
  disqusShortname: '',
};

/********************************************** */

if (process.env.NODE_ENV === 'development') {
  config.googleAnalyticsTrackingId = '';
  config.disqusShortname = '';
}

module.exports = config;
