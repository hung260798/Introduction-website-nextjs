import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: 'https://api.vercel.app/blog', // fake data
    },
};

export default withNextIntl(nextConfig);