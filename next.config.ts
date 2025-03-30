const nextConfig = {
  webpack(config: any) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
