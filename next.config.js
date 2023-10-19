/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // formats: ["image/avif", "image/webp", ""],
    //Remote Image sever Pattern settings
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eczanyjbasiipyhbsoep.supabase.co",
        pathname: "/storage/v1/object/public/images/galary/**",
      },
    ],
    //default Optimize SVG
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
