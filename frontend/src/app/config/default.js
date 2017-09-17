export default {
  server: {
    host: 'http://localhost',
    port: 3000,
    proxyUrl: process.env.PROXY_URL,
  },

  webpack: {
    server: {
      host: 'http://localhost',
      port: 3001
    }
  },
  isBrowser: typeof window !== 'undefined',
  isServer: typeof window === 'undefined',
  basename: 'localhost:3005',
  apiUrl: typeof window !== 'undefined' ? window.__ENDPOINT__ : process.env.API_URL,
  env: process.env.NODE_ENV || 'development',
  isDev: process.env.NODE_ENV !== 'production',
};
