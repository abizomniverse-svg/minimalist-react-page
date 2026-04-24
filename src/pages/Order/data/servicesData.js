export const SERVICES_DATA = {
    // TikTok Services
    'tiktok-likes': {
        title: 'Buy TikTok Likes',
        description: 'Skyrocket your TikTok engagement with premium likes. Trigger the algorithm, boost visibility, and attract more organic followers. Safe, fast, and guaranteed results.',
        platform: 'TikTok',
        type: 'Likes',
        icon: 'tiktok',
        color: '#FF00C8',
        gradient: 'linear-gradient(45deg, #00F5D4, #FF00C8)',
        requiresPosts: true,
        packages: [
            { amount: 500, price: 4.99, originalPrice: 7.99 },
            { amount: 1000, price: 8.99, originalPrice: 14.99, isPopular: true },
            { amount: 2500, price: 19.99, originalPrice: 32.99 },
            { amount: 5000, price: 34.99, originalPrice: 59.99 },
            { amount: 10000, price: 64.99, originalPrice: 109.99 }
        ],
        minAmount: 100,
        maxAmount: 50000,
        basePriceRate: 0.008
    },
    'tiktok-views': {
        title: 'Buy TikTok Views',
        description: 'Increase your video visibility and reach millions with premium TikTok views. Boost your algorithm ranking and attract more organic engagement.',
        platform: 'TikTok',
        type: 'Views',
        icon: 'tiktok',
        color: '#FF00C8',
        gradient: 'linear-gradient(45deg, #00F5D4, #FF00C8)',
        requiresPosts: true,
        packages: [
            { amount: 1000, price: 1.99, originalPrice: 3.99 },
            { amount: 5000, price: 8.99, originalPrice: 14.99, isPopular: true },
            { amount: 10000, price: 16.99, originalPrice: 27.99 },
            { amount: 50000, price: 74.99, originalPrice: 124.99 },
            { amount: 100000, price: 139.99, originalPrice: 229.99 }
        ],
        minAmount: 500,
        maxAmount: 1000000,
        basePriceRate: 0.002
    },
    'tiktok-followers': {
        title: 'Buy TikTok Followers',
        description: 'Accelerate your TikTok growth with high-quality followers. Enhance your credibility and make your account more appealing to new viewers. Fast delivery and real-looking profiles.',
        platform: 'TikTok',
        type: 'Followers',
        icon: 'tiktok',
        color: '#FF00C8',
        gradient: 'linear-gradient(45deg, #00F5D4, #FF00C8)',
        requiresPosts: false,
        packages: [
            { amount: 100, price: 5.60, originalPrice: 9.99 },
            { amount: 500, price: 25.99, originalPrice: 42.99, isPopular: true },
            { amount: 1000, price: 45.99, originalPrice: 79.99 },
            { amount: 5000, price: 199.99, originalPrice: 349.99 },
        ],
        minAmount: 100,
        maxAmount: 100000,
        basePriceRate: 0.046
    },
    'tiktok-comments': {
        title: 'Buy TikTok Comments',
        description: 'Boost engagement and interaction on your TikTok videos with premium comments. Create buzz and attract more viewers to your content.',
        platform: 'TikTok',
        type: 'Comments',
        icon: 'tiktok',
        color: '#FF00C8',
        gradient: 'linear-gradient(45deg, #00F5D4, #FF00C8)',
        requiresPosts: true,
        packages: [
            { amount: 50, price: 5.99, originalPrice: 9.99 },
            { amount: 100, price: 10.99, originalPrice: 17.99, isPopular: true },
            { amount: 250, price: 24.99, originalPrice: 42.99 },
            { amount: 500, price: 44.99, originalPrice: 79.99 }
        ],
        minAmount: 25,
        maxAmount: 1000,
        basePriceRate: 0.09
    },
    'tiktok-shares': {
        title: 'Buy TikTok Shares',
        description: 'Increase your video reach exponentially with premium shares. Viral potential guaranteed with our high-quality share network.',
        platform: 'TikTok',
        type: 'Shares',
        icon: 'tiktok',
        color: '#FF00C8',
        gradient: 'linear-gradient(45deg, #00F5D4, #FF00C8)',
        requiresPosts: true,
        packages: [
            { amount: 50, price: 12.99, originalPrice: 19.99 },
            { amount: 100, price: 22.99, originalPrice: 37.99, isPopular: true },
            { amount: 250, price: 49.99, originalPrice: 84.99 },
            { amount: 500, price: 89.99, originalPrice: 149.99 }
        ],
        minAmount: 25,
        maxAmount: 1000,
        basePriceRate: 0.18
    },
    'tiktok-saves': {
        title: 'Buy TikTok Saves',
        description: 'Boost your video authority with premium saves. Increase watch time and algorithm ranking with genuine save actions.',
        platform: 'TikTok',
        type: 'Saves',
        icon: 'tiktok',
        color: '#FF00C8',
        gradient: 'linear-gradient(45deg, #00F5D4, #FF00C8)',
        requiresPosts: true,
        packages: [
            { amount: 50, price: 7.99, originalPrice: 12.99 },
            { amount: 100, price: 14.99, originalPrice: 24.99, isPopular: true },
            { amount: 250, price: 34.99, originalPrice: 59.99 },
            { amount: 500, price: 64.99, originalPrice: 109.99 }
        ],
        minAmount: 25,
        maxAmount: 1000,
        basePriceRate: 0.13
    },

    // Instagram Services
    'instagram-likes': {
        title: 'Buy Instagram Likes',
        description: 'Boost your engagement rate instantly with premium Instagram likes. Help trigger the algorithm and expand your reach securely.',
        platform: 'Instagram',
        type: 'Likes',
        icon: 'instagram',
        color: '#00F5D4',
        gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        requiresPosts: true,
        packages: [
            { amount: 500, price: 7.49, originalPrice: 12.99 },
            { amount: 1000, price: 13.99, originalPrice: 24.99, isPopular: true },
            { amount: 2500, price: 32.99, originalPrice: 57.99 },
            { amount: 5000, price: 59.99, originalPrice: 104.99 },
            { amount: 10000, price: 109.99, originalPrice: 189.99 }
        ],
        minAmount: 100,
        maxAmount: 50000,
        basePriceRate: 0.015
    },
    'instagram-followers': {
        title: 'Buy Instagram Followers',
        description: 'Grow your Instagram presence with premium followers. Increase your credibility and social proof instantly.',
        platform: 'Instagram',
        type: 'Followers',
        icon: 'instagram',
        color: '#00F5D4',
        gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        requiresPosts: false,
        packages: [
            { amount: 500, price: 9.99, originalPrice: 16.99 },
            { amount: 1000, price: 17.99, originalPrice: 31.99, isPopular: true },
            { amount: 2500, price: 39.99, originalPrice: 69.99 },
            { amount: 5000, price: 74.99, originalPrice: 129.99 }
        ],
        minAmount: 100,
        maxAmount: 100000,
        basePriceRate: 0.016
    },
    'instagram-views': {
        title: 'Buy Instagram Views',
        description: 'Increase your video visibility and engagement with premium Instagram views. Boost your content reach and algorithm ranking.',
        platform: 'Instagram',
        type: 'Views',
        icon: 'instagram',
        color: '#00F5D4',
        gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        requiresPosts: true,
        packages: [
            { amount: 1000, price: 2.99, originalPrice: 4.99 },
            { amount: 5000, price: 12.99, originalPrice: 21.99, isPopular: true },
            { amount: 10000, price: 23.99, originalPrice: 41.99 },
            { amount: 50000, price: 109.99, originalPrice: 189.99 }
        ],
        minAmount: 500,
        maxAmount: 1000000,
        basePriceRate: 0.0025
    },
    'instagram-comments': {
        title: 'Buy Instagram Comments',
        description: 'Spark conversations and boost engagement with premium Instagram comments. Create authentic discussions around your content.',
        platform: 'Instagram',
        type: 'Comments',
        icon: 'instagram',
        color: '#00F5D4',
        gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        requiresPosts: true,
        packages: [
            { amount: 50, price: 9.99, originalPrice: 16.99 },
            { amount: 100, price: 17.99, originalPrice: 31.99, isPopular: true },
            { amount: 250, price: 39.99, originalPrice: 69.99 },
            { amount: 500, price: 74.99, originalPrice: 129.99 }
        ],
        minAmount: 25,
        maxAmount: 1000,
        basePriceRate: 0.15
    },
    'instagram-saves': {
        title: 'Buy Instagram Saves',
        description: 'Increase your content authority with premium saves. Boost your profile reach and algorithm performance.',
        platform: 'Instagram',
        type: 'Saves',
        icon: 'instagram',
        color: '#00F5D4',
        gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        requiresPosts: true,
        packages: [
            { amount: 50, price: 6.99, originalPrice: 11.99 },
            { amount: 100, price: 12.99, originalPrice: 22.99, isPopular: true },
            { amount: 250, price: 29.99, originalPrice: 51.99 },
            { amount: 500, price: 54.99, originalPrice: 94.99 }
        ],
        minAmount: 25,
        maxAmount: 1000,
        basePriceRate: 0.11
    },
    'instagram-story-views': {
        title: 'Buy Instagram Story Views',
        description: 'Make your stories more visible with premium views. Increase your story reach and engagement metrics.',
        platform: 'Instagram',
        type: 'Story Views',
        icon: 'instagram',
        color: '#00F5D4',
        gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        requiresPosts: true,
        packages: [
            { amount: 500, price: 1.99, originalPrice: 3.99 },
            { amount: 1000, price: 3.99, originalPrice: 6.99, isPopular: true },
            { amount: 2500, price: 8.99, originalPrice: 15.99 },
            { amount: 5000, price: 16.99, originalPrice: 29.99 }
        ],
        minAmount: 100,
        maxAmount: 50000,
        basePriceRate: 0.0035
    },
    'instagram-story-likes': {
        title: 'Buy Instagram Story Likes',
        description: 'Boost your story engagement with premium likes. Increase visibility and interaction on your Instagram stories.',
        platform: 'Instagram',
        type: 'Story Likes',
        icon: 'instagram',
        color: '#00F5D4',
        gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        requiresPosts: true,
        packages: [
            { amount: 100, price: 2.99, originalPrice: 4.99 },
            { amount: 250, price: 6.99, originalPrice: 11.99, isPopular: true },
            { amount: 500, price: 12.99, originalPrice: 22.99 },
            { amount: 1000, price: 23.99, originalPrice: 41.99 }
        ],
        minAmount: 50,
        maxAmount: 5000,
        basePriceRate: 0.024
    },
    'instagram-reels-likes': {
        title: 'Buy Instagram Reels Likes',
        description: 'Supercharge your Reels performance with premium likes. Boost algorithm ranking and reach more viewers.',
        platform: 'Instagram',
        type: 'Reels Likes',
        icon: 'instagram',
        color: '#00F5D4',
        gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        requiresPosts: true,
        packages: [
            { amount: 500, price: 6.99, originalPrice: 11.99 },
            { amount: 1000, price: 12.99, originalPrice: 22.99, isPopular: true },
            { amount: 2500, price: 29.99, originalPrice: 51.99 },
            { amount: 5000, price: 54.99, originalPrice: 94.99 }
        ],
        minAmount: 100,
        maxAmount: 50000,
        basePriceRate: 0.011
    },
    'instagram-reels-views': {
        title: 'Buy Instagram Reels Views',
        description: 'Explode your Reels reach with premium views. Maximize visibility and engagement on the Reels algorithm.',
        platform: 'Instagram',
        type: 'Reels Views',
        icon: 'instagram',
        color: '#00F5D4',
        gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        requiresPosts: true,
        packages: [
            { amount: 1000, price: 3.99, originalPrice: 6.99 },
            { amount: 5000, price: 17.99, originalPrice: 31.99, isPopular: true },
            { amount: 10000, price: 32.99, originalPrice: 57.99 },
            { amount: 50000, price: 149.99, originalPrice: 259.99 }
        ],
        minAmount: 500,
        maxAmount: 1000000,
        basePriceRate: 0.003
    },
    'instagram-reels-shares': {
        title: 'Buy Instagram Reels Shares',
        description: 'Create viral potential with premium shares on your Reels. Boost reach and discoverability exponentially.',
        platform: 'Instagram',
        type: 'Reels Shares',
        icon: 'instagram',
        color: '#00F5D4',
        gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        requiresPosts: true,
        packages: [
            { amount: 50, price: 14.99, originalPrice: 24.99 },
            { amount: 100, price: 27.99, originalPrice: 47.99, isPopular: true },
            { amount: 250, price: 64.99, originalPrice: 109.99 },
            { amount: 500, price: 119.99, originalPrice: 199.99 }
        ],
        minAmount: 25,
        maxAmount: 1000,
        basePriceRate: 0.24
    },
    'instagram-reels-saves': {
        title: 'Buy Instagram Reels Saves',
        description: 'Build content authority with premium saves on your Reels. Increase long-term engagement and algorithm favor.',
        platform: 'Instagram',
        type: 'Reels Saves',
        icon: 'instagram',
        color: '#00F5D4',
        gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        requiresPosts: true,
        packages: [
            { amount: 50, price: 9.99, originalPrice: 16.99 },
            { amount: 100, price: 17.99, originalPrice: 31.99, isPopular: true },
            { amount: 250, price: 39.99, originalPrice: 69.99 },
            { amount: 500, price: 74.99, originalPrice: 129.99 }
        ],
        minAmount: 25,
        maxAmount: 1000,
        basePriceRate: 0.15
    },

    // YouTube Services
    'youtube-views': {
        title: 'Buy YouTube Views',
        description: 'Supercharge your video performance with premium YouTube views. Boost your algorithm ranking and reach more viewers.',
        platform: 'YouTube',
        type: 'Views',
        icon: 'youtube',
        color: '#A6FF00',
        gradient: 'linear-gradient(45deg, #FF0000, #A6FF00)',
        requiresPosts: true,
        packages: [
            { amount: 1000, price: 2.99, originalPrice: 4.99 },
            { amount: 5000, price: 13.99, originalPrice: 23.99, isPopular: true },
            { amount: 10000, price: 25.99, originalPrice: 44.99 },
            { amount: 50000, price: 119.99, originalPrice: 199.99 },
            { amount: 100000, price: 229.99, originalPrice: 379.99 }
        ],
        minAmount: 500,
        maxAmount: 1000000,
        basePriceRate: 0.0025
    },
    'youtube-likes': {
        title: 'Buy YouTube Likes',
        description: 'Build credibility and engagement with premium YouTube likes. Strengthen your video authority and algorithm ranking.',
        platform: 'YouTube',
        type: 'Likes',
        icon: 'youtube',
        color: '#A6FF00',
        gradient: 'linear-gradient(45deg, #FF0000, #A6FF00)',
        requiresPosts: true,
        packages: [
            { amount: 100, price: 4.99, originalPrice: 8.99 },
            { amount: 250, price: 11.99, originalPrice: 20.99, isPopular: true },
            { amount: 500, price: 22.99, originalPrice: 39.99 },
            { amount: 1000, price: 42.99, originalPrice: 74.99 }
        ],
        minAmount: 50,
        maxAmount: 10000,
        basePriceRate: 0.043
    },
    'youtube-subscribers': {
        title: 'Buy YouTube Subscribers',
        description: 'Hit your YouTube monetization goals faster with premium subscribers. Build a solid foundation and increase your channel authority instantly.',
        platform: 'YouTube',
        type: 'Subscribers',
        icon: 'youtube',
        color: '#A6FF00',
        gradient: 'linear-gradient(45deg, #FF0000, #A6FF00)',
        requiresPosts: false,
        packages: [
            { amount: 100, price: 13.90, originalPrice: 23.99 },
            { amount: 500, price: 64.99, originalPrice: 109.99, isPopular: true },
            { amount: 1000, price: 119.99, originalPrice: 199.99 },
            { amount: 2500, price: 279.99, originalPrice: 459.99 }
        ],
        minAmount: 50,
        maxAmount: 5000,
        basePriceRate: 0.12
    },
    'youtube-shorts-views': {
        title: 'Buy YouTube Shorts Views',
        description: 'Dominate the Shorts algorithm with premium views. Maximize your short-form video reach and engagement.',
        platform: 'YouTube',
        type: 'Shorts Views',
        icon: 'youtube',
        color: '#A6FF00',
        gradient: 'linear-gradient(45deg, #FF0000, #A6FF00)',
        requiresPosts: true,
        packages: [
            { amount: 1000, price: 1.99, originalPrice: 3.49 },
            { amount: 5000, price: 8.99, originalPrice: 15.99, isPopular: true },
            { amount: 10000, price: 16.99, originalPrice: 29.99 },
            { amount: 50000, price: 79.99, originalPrice: 139.99 }
        ],
        minAmount: 500,
        maxAmount: 1000000,
        basePriceRate: 0.0016
    },
    'youtube-shorts-likes': {
        title: 'Buy YouTube Shorts Likes',
        description: 'Boost your Shorts engagement with premium likes. Increase visibility and algorithm favor for your short-form content.',
        platform: 'YouTube',
        type: 'Shorts Likes',
        icon: 'youtube',
        color: '#A6FF00',
        gradient: 'linear-gradient(45deg, #FF0000, #A6FF00)',
        requiresPosts: true,
        packages: [
            { amount: 100, price: 2.99, originalPrice: 4.99 },
            { amount: 250, price: 6.99, originalPrice: 11.99, isPopular: true },
            { amount: 500, price: 12.99, originalPrice: 22.99 },
            { amount: 1000, price: 23.99, originalPrice: 41.99 }
        ],
        minAmount: 50,
        maxAmount: 5000,
        basePriceRate: 0.024
    },
    'youtube-comments': {
        title: 'Buy YouTube Comments',
        description: 'Generate authentic discussions with premium YouTube comments. Boost engagement and community interaction.',
        platform: 'YouTube',
        type: 'Comments',
        icon: 'youtube',
        color: '#A6FF00',
        gradient: 'linear-gradient(45deg, #FF0000, #A6FF00)',
        requiresPosts: true,
        packages: [
            { amount: 50, price: 14.99, originalPrice: 24.99 },
            { amount: 100, price: 27.99, originalPrice: 47.99, isPopular: true },
            { amount: 250, price: 64.99, originalPrice: 109.99 },
            { amount: 500, price: 119.99, originalPrice: 199.99 }
        ],
        minAmount: 25,
        maxAmount: 1000,
        basePriceRate: 0.24
    },
    'youtube-shares': {
        title: 'Buy YouTube Shares',
        description: 'Create viral momentum with premium shares. Expand your reach exponentially through the YouTube share network.',
        platform: 'YouTube',
        type: 'Shares',
        icon: 'youtube',
        color: '#A6FF00',
        gradient: 'linear-gradient(45deg, #FF0000, #A6FF00)',
        requiresPosts: true,
        packages: [
            { amount: 50, price: 19.99, originalPrice: 34.99 },
            { amount: 100, price: 37.99, originalPrice: 64.99, isPopular: true },
            { amount: 250, price: 89.99, originalPrice: 149.99 },
            { amount: 500, price: 169.99, originalPrice: 279.99 }
        ],
        minAmount: 25,
        maxAmount: 1000,
        basePriceRate: 0.34
    },

    // Facebook Services
    'facebook-page-likes': {
        title: 'Buy Facebook Page Likes',
        description: 'Grow your Facebook page presence with premium likes. Increase credibility and reach more potential customers.',
        platform: 'Facebook',
        type: 'Page Likes',
        icon: 'facebook',
        color: '#FF6B35',
        gradient: 'linear-gradient(45deg, #4267B2, #FF6B35)',
        requiresPosts: false,
        packages: [
            { amount: 500, price: 14.99, originalPrice: 24.99 },
            { amount: 1000, price: 27.99, originalPrice: 47.99, isPopular: true },
            { amount: 2500, price: 64.99, originalPrice: 109.99 },
            { amount: 5000, price: 119.99, originalPrice: 199.99 }
        ],
        minAmount: 100,
        maxAmount: 50000,
        basePriceRate: 0.024
    },
    'facebook-post-likes': {
        title: 'Buy Facebook Post Likes',
        description: 'Boost your post engagement with premium likes. Increase visibility and interaction on your Facebook content.',
        platform: 'Facebook',
        type: 'Post Likes',
        icon: 'facebook',
        color: '#FF6B35',
        gradient: 'linear-gradient(45deg, #4267B2, #FF6B35)',
        requiresPosts: true,
        packages: [
            { amount: 500, price: 9.99, originalPrice: 16.99 },
            { amount: 1000, price: 17.99, originalPrice: 31.99, isPopular: true },
            { amount: 2500, price: 39.99, originalPrice: 69.99 },
            { amount: 5000, price: 74.99, originalPrice: 129.99 }
        ],
        minAmount: 100,
        maxAmount: 50000,
        basePriceRate: 0.015
    },
    'facebook-post-views': {
        title: 'Buy Facebook Post Views',
        description: 'Increase your content reach with premium views. Boost your organic reach and engagement metrics.',
        platform: 'Facebook',
        type: 'Post Views',
        icon: 'facebook',
        color: '#FF6B35',
        gradient: 'linear-gradient(45deg, #4267B2, #FF6B35)',
        requiresPosts: true,
        packages: [
            { amount: 1000, price: 3.99, originalPrice: 6.99 },
            { amount: 5000, price: 17.99, originalPrice: 31.99, isPopular: true },
            { amount: 10000, price: 32.99, originalPrice: 57.99 },
            { amount: 50000, price: 149.99, originalPrice: 259.99 }
        ],
        minAmount: 500,
        maxAmount: 1000000,
        basePriceRate: 0.003
    },
    'facebook-video-views': {
        title: 'Buy Facebook Video Views',
        description: 'Maximize your video reach with premium views. Boost algorithm ranking and audience engagement.',
        platform: 'Facebook',
        type: 'Video Views',
        icon: 'facebook',
        color: '#FF6B35',
        gradient: 'linear-gradient(45deg, #4267B2, #FF6B35)',
        requiresPosts: true,
        packages: [
            { amount: 1000, price: 4.99, originalPrice: 8.99 },
            { amount: 5000, price: 22.99, originalPrice: 39.99, isPopular: true },
            { amount: 10000, price: 42.99, originalPrice: 74.99 },
            { amount: 50000, price: 199.99, originalPrice: 349.99 }
        ],
        minAmount: 500,
        maxAmount: 1000000,
        basePriceRate: 0.004
    },
    'facebook-followers': {
        title: 'Buy Facebook Followers',
        description: 'Build your Facebook following with premium followers. Increase your page authority and reach.',
        platform: 'Facebook',
        type: 'Followers',
        icon: 'facebook',
        color: '#FF6B35',
        gradient: 'linear-gradient(45deg, #4267B2, #FF6B35)',
        requiresPosts: false,
        packages: [
            { amount: 500, price: 12.99, originalPrice: 21.99 },
            { amount: 1000, price: 23.99, originalPrice: 41.99, isPopular: true },
            { amount: 2500, price: 54.99, originalPrice: 94.99 },
            { amount: 5000, price: 99.99, originalPrice: 169.99 }
        ],
        minAmount: 100,
        maxAmount: 50000,
        basePriceRate: 0.02
    },
    'facebook-shares': {
        title: 'Buy Facebook Shares',
        description: 'Create viral potential with premium shares. Expand your reach exponentially through social sharing.',
        platform: 'Facebook',
        type: 'Shares',
        icon: 'facebook',
        color: '#FF6B35',
        gradient: 'linear-gradient(45deg, #4267B2, #FF6B35)',
        requiresPosts: true,
        packages: [
            { amount: 50, price: 17.99, originalPrice: 29.99 },
            { amount: 100, price: 32.99, originalPrice: 57.99, isPopular: true },
            { amount: 250, price: 74.99, originalPrice: 129.99 },
            { amount: 500, price: 139.99, originalPrice: 239.99 }
        ],
        minAmount: 25,
        maxAmount: 1000,
        basePriceRate: 0.28
    },
    'facebook-comments': {
        title: 'Buy Facebook Comments',
        description: 'Generate authentic conversations with premium comments. Boost engagement and community interaction.',
        platform: 'Facebook',
        type: 'Comments',
        icon: 'facebook',
        color: '#FF6B35',
        gradient: 'linear-gradient(45deg, #4267B2, #FF6B35)',
        requiresPosts: true,
        packages: [
            { amount: 50, price: 12.99, originalPrice: 21.99 },
            { amount: 100, price: 23.99, originalPrice: 41.99, isPopular: true },
            { amount: 250, price: 54.99, originalPrice: 94.99 },
            { amount: 500, price: 99.99, originalPrice: 169.99 }
        ],
        minAmount: 25,
        maxAmount: 1000,
        basePriceRate: 0.2
    },
    'facebook-event-responses': {
        title: 'Buy Facebook Event Responses',
        description: 'Increase your event attendance with premium responses. Boost visibility and participation for your Facebook events.',
        platform: 'Facebook',
        type: 'Event Responses',
        icon: 'facebook',
        color: '#FF6B35',
        gradient: 'linear-gradient(45deg, #4267B2, #FF6B35)',
        requiresPosts: true,
        packages: [
            { amount: 50, price: 9.99, originalPrice: 16.99 },
            { amount: 100, price: 17.99, originalPrice: 31.99, isPopular: true },
            { amount: 250, price: 39.99, originalPrice: 69.99 },
            { amount: 500, price: 74.99, originalPrice: 129.99 }
        ],
        minAmount: 25,
        maxAmount: 1000,
        basePriceRate: 0.15
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
