/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },

  alias: {
    'jquery': './src/jquery.alias.js'
  }
};
