export default {
    items: [{
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW',
            },
        },
        {
            title: true,
            name: 'Managements',
            wrapper: {
                element: '',
                attributes: {}
            },
            class: ''
        },
        {
            name: 'Category',
            url: '/category',
            icon: 'fas fa-boxes',
        },
        {
            name: 'District',
            url: '/district',
            icon: 'fas fa-map-marked-alt',
        },
        {
            name: 'Promotion',
            url: '/promotion',
            icon: 'fas fa-ad',
        },
        {
            name: 'Sites',
            url: '/tourist-site',
            icon: 'fas fa-map-marker-alt',
        },
        {
            name: 'Tourist',
            url: '/tourist',
            icon: 'fas fa-hiking',
        },
        {
            name: 'Tour Guide',
            url: '/tour-guide',
            icon: 'fas fa-street-view',
        },
        {
            name: 'Tour Booking',
            url: '/tour-booking',
            icon: 'fas fa-shopping-cart',
        },
        {
            title: true,
            name: 'Statistics',
            wrapper: {
                element: '',
                attributes: {}
            },
            class: ''
        },
        {
            name: 'Revenue',
            url: '/revenues',
            icon: 'fas fa-wallet',
        },
    ],
};