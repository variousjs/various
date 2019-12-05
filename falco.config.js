module.exports = {
  output: {
    filename: 'index.js',
    library: 'humpback',
    libraryTarget: 'amd',
    libraryExport: 'default',
  },
  // output: {
  //   filename: 'next.js',
  //   library: 'next',
  //   libraryTarget: 'amd',
  //   libraryExport: 'default',
  // },
  externals: [
    {
      name: 'react',
      amd: 'react',
    },
    {
      name: 'react-dom',
      amd: 'react-dom',
    },
    {
      name: 'react-router-dom',
      amd: 'react-router-dom',
    },
    {
      name: 'nycticorax',
      amd: 'nycticorax',
    },
    {
      name: 'antd',
      amd: 'antd',
    },
  ],
}
