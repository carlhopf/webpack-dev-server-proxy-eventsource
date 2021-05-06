import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'development',
  entry: 'index.js',

  plugins: [new HtmlWebpackPlugin()],

  devServer: {
    proxy: {
      '/ssetest': {
        target: 'http://localhost:9600',
        timeout: 5000,
        proxyTimeout: 5000,

        // fix
        onProxyRes: (proxyRes, req, res) => {
          res.on('close', () => {
            if (!res.finished) {
              console.info('client closed http con, close proxy con');
              proxyRes.destroy();
            }
          });
        },
      },
    },
  },
};
