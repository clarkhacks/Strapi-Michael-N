module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET'),
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
      'cloudflare-pages': {
    enabled: true,
    config: {
      instances: [
        {
          name: "Deploy Website",
          hook_url: 'https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/83417c52-afc7-4e5b-97bb-0d569a6bc035'
        },
      ]
    }
  }
  });
