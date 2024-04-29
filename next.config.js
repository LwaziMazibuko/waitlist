// next.config.js

module.exports = {
    async rewrites() {
      return {
        beforeFiles: [
          // Redirect requests from /waitlist to root path
          {
            source: '/waitlist/:path*',
            destination: '/:path*',
          },
        ],
      };
    },
  };
  
  
  