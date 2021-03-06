exports.config = {
  collections: [
    { name: '@stencil/router' },
    { name: '@ionic/core' }
  ],
  serviceWorker: {
    swSrc: 'src/sw.js'
  },
  globalStyle: 'src/global/variables.css'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
