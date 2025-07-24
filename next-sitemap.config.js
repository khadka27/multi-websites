/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.websiteprogrammingdevelopment.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: [
        '/api/*',
        '/admin/*',
        '/_next/*',
        '/404',
        '/500',
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: '*',
                disallow: ['/api/', '/admin/', '/_next/'],
            },
        ],
        additionalSitemaps: [
            'https://wp-development.com/sitemap.xml',
        ],
    },
    transform: async (config, path) => {
        // Custom priority and changefreq for different page types
        const customConfig = {
            loc: path,
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
        };

        // Homepage gets highest priority
        if (path === '/') {
            customConfig.priority = 1.0;
            customConfig.changefreq = 'daily';
        }

        // Service pages get high priority
        if (path.startsWith('/services/')) {
            customConfig.priority = 0.9;
            customConfig.changefreq = 'weekly';
        }

        // Tutorial pages get medium-high priority
        if (path.startsWith('/resources/tutorials/')) {
            customConfig.priority = 0.8;
            customConfig.changefreq = 'weekly';
        }

        // Contact and company pages
        if (path === '/contact' || path === '/company' || path === '/pricing') {
            customConfig.priority = 0.8;
            customConfig.changefreq = 'monthly';
        }

        // Resources pages
        if (path.startsWith('/resources/')) {
            customConfig.priority = 0.7;
            customConfig.changefreq = 'weekly';
        }

        // Blog pages
        if (path.startsWith('/blogs/')) {
            customConfig.priority = 0.6;
            customConfig.changefreq = 'weekly';
        }

        return customConfig;
    },
};
