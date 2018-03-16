routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/doc001/',
    url: './pages/doc001.html',
  },  
  {
    path: '/doc002/',
    url: './pages/doc002.html',
  },
  {
    path: '/doc003/',
    url: './pages/doc003.html',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
