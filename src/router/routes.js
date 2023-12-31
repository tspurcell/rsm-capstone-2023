const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/IndexPage.vue') },
            { path: '/profiles', component: () => import('pages/ProfilesPage.vue') },
            { path: '/wellness', component: () => import('pages/Wellness.vue') },
            { path: '/wellness/reports', component: () => import('pages/WellnessReports.vue') },
            { path: 'payment_options', component: () => import('pages/PaymentOptions') }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue')
    }
]

export default routes
