/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
    title: 'WP Development - Professional Web & Mobile App Development Services',
    titleTemplate: '%s | WP Development',
    defaultTitle: 'WP Development - Expert Web & Mobile App Development',
    description: 'Professional web and mobile app development services. Expert solutions for React, Next.js, Flutter, iOS, Android, and full-stack development. Custom software development for businesses.',
    canonical: 'https://www.websiteprogrammingdevelopment.com',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.websiteprogrammingdevelopment.com',
        siteName: 'WP Development',
        title: 'WP Development - Professional Web & Mobile App Development',
        description: 'Expert web and mobile app development services. Custom React, Next.js, Flutter solutions for modern businesses.',
        images: [
            {
                url: 'https://www.websiteprogrammingdevelopment.com/logo/websiteprogrammingdevelopmentlogo.png',
                width: 1200,
                height: 630,
                alt: 'WP Development - Web & Mobile App Development Services',
                type: 'image/png',
            },
        ],
    },
    twitter: {
        handle: '@wp_development',
        site: '@wp_development',
        cardType: 'summary_large_image',
    },
    additionalMetaTags: [
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
        },
        {
            name: 'robots',
            content: 'index,follow',
        },
        {
            name: 'googlebot',
            content: 'index,follow',
        },
        {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge',
        },
        {
            name: 'keywords',
            content: 'web development, mobile app development, React, Next.js, Flutter, iOS, Android, TypeScript, JavaScript, Node.js, full-stack development, custom software',
        },
        {
            name: 'author',
            content: 'WP Development Team',
        },
        {
            name: 'language',
            content: 'English',
        },
        {
            name: 'revisit-after',
            content: '7 days',
        },
        {
            name: 'distribution',
            content: 'global',
        },
        {
            name: 'rating',
            content: 'general',
        },
    ],
    additionalLinkTags: [
        {
            rel: 'icon',
            href: '/favicon.ico',
        },
        {
            rel: 'apple-touch-icon',
            href: '/logo/websiteprogrammingdevelopmentlogo.png',
            sizes: '180x180',
        },
        {
            rel: 'manifest',
            href: '/manifest.json',
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
        },
        {
            rel: 'preconnect',
            href: 'https://cdn.jsdelivr.net',
        },
    ],
};

export default defaultSEOConfig;
