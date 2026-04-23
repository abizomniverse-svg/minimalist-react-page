export const SERVICES_DATA = {
    'instagram-likes': {
        title: 'Buy Instagram Likes',
        description: 'Boost your engagement rate instantly with premium Instagram likes. Help trigger the algorithm and expand your reach securely. Join thousands of creators who trust our safe, fast, and high-quality services to grow their social proof.',
        platform: 'Instagram',
        type: 'Likes',
        icon: 'instagram',
        color: '#FF00A6',
        gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        requiresPosts: true,
        packages: [
            { amount: 500, price: 5.99, originalPrice: 9.99 },
            { amount: 1000, price: 10.99, originalPrice: 18.99, isPopular: true },
            { amount: 2500, price: 24.99, originalPrice: 42.99 },
            { amount: 5000, price: 44.99, originalPrice: 79.99 },
            { amount: 10000, price: 79.99, originalPrice: 140.00 }
        ],
        minAmount: 100,
        maxAmount: 50000,
        basePriceRate: 0.0125 // approx rate per like
    },
    'tiktok-followers': {
        title: 'Buy TikTok Followers',
        description: 'Accelerate your TikTok growth with high-quality followers. Enhance your credibility and make your account more appealing to new viewers. Fast delivery and real-looking profiles.',
        platform: 'TikTok',
        type: 'Followers',
        icon: 'tiktok',
        color: '#00F2FE',
        gradient: 'linear-gradient(45deg, #00F5D4, #FF00C8)',
        requiresPosts: false,
        packages: [
            { amount: 100, price: 2.99, originalPrice: 4.99 },
            { amount: 500, price: 12.99, originalPrice: 19.99, isPopular: true },
            { amount: 1000, price: 22.99, originalPrice: 35.99 },
            { amount: 5000, price: 99.99, originalPrice: 150.00 },
        ],
        minAmount: 100,
        maxAmount: 100000,
        basePriceRate: 0.026
    },
    'youtube-subscribers': {
        title: 'Buy YouTube Subscribers',
        description: 'Hit your YouTube monetization goals faster with premium subscribers. Build a solid foundation and increase your channel authority instantly.',
        platform: 'YouTube',
        type: 'Subscribers',
        icon: 'youtube',
        color: '#FF0000',
        gradient: 'linear-gradient(45deg, #FF0000, #990000)',
        requiresPosts: false,
        packages: [
            { amount: 100, price: 14.99, originalPrice: 20.00 },
            { amount: 500, price: 59.99, originalPrice: 85.00, isPopular: true },
            { amount: 1000, price: 109.99, originalPrice: 150.00 },
        ],
        minAmount: 50,
        maxAmount: 5000,
        basePriceRate: 0.12
    }
};

export const getServiceData = (serviceId) => {
    // If exact match not found, default to a standard configuration
    if (!SERVICES_DATA[serviceId]) {
        return {
            title: `Buy ${serviceId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`,
            description: `Boost your visibility with our premium ${serviceId.replace('-', ' ')} service. Fast, secure, and reliable.`,
            platform: serviceId.split('-')[0] || 'Social Media',
            type: serviceId.split('-')[1] || 'Service',
            icon: 'star',
            color: '#FF00C8',
            gradient: 'linear-gradient(45deg, #FF00C8, #7E22CE)',
            requiresPosts: serviceId.includes('likes') || serviceId.includes('views'),
            packages: [
                { amount: 500, price: 4.99, originalPrice: 7.99 },
                { amount: 1000, price: 8.99, originalPrice: 14.99, isPopular: true },
                { amount: 2500, price: 19.99, originalPrice: 32.99 }
            ],
            minAmount: 100,
            maxAmount: 10000,
            basePriceRate: 0.01
        };
    }
    return SERVICES_DATA[serviceId];
};
