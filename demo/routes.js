export default [
  // path, components required
  {
    label: 'home',
    icon: 'dashboard',
    path: '/',
    components: {
      switch: 'https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js',
    },
    children: [
      {
        label: '666',
        path: '/home/ty',
        components: {
          switch: 'https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js',
        },
      }
    ],
  },
  {
    label: 'next',
    path: '/next',
    icon: 'user',
    components: {
      next: './dist/next.js',
    },
  },
]
