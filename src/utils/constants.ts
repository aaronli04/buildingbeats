const constants = {
    // Banner Message shown
    BANNER_MESSAGE: {
        message: 'New Course: Metro Boomin',
        link: 'https://skool.com/buildingbeats/metro'
    },


    // Categories structure
    CATEGORIES_STRUCTURE: [
        {
            main: {
                title: 'Essentials',
                link: '/essentials'
            },
            subcategories: [
                {
                    title: 'Mixing',
                    link: '/essentials/mixing'
                },
                {
                    title: 'DJing',
                    link: '/essentials/dj'
                },
                {
                    title: 'Soundtrap',
                    link: '/essentials/soundtrap'
                }
            ]
        },
        {
            main: {
                title: 'Styles',
                link: '/styles'
            },
            subcategories: [
                {
                    title: 'Lofi',
                    link: '/styles/lofi'
                },
                {
                    title: 'Ballroom',
                    link: '/styles/ballroom'
                },
                {
                    title: 'Drill',
                    link: '/styles/drill'
                },
                {
                    title: 'K-Pop',
                    link: '/styles/kpop'
                }
            ]
        },
        {
            main: {
                title: 'Artists',
                link: '/artists'
            },
            subcategories: [
                {
                    title: 'Juice WRLD',
                    link: '/artists/juicewrld'
                },
                {
                    title: 'Lil Nas X',
                    link: '/artists/lilnasx'
                },
                {
                    title: 'Pop Smoke',
                    link: '/artists/popsmoke'
                }
            ]
        }
    ]
}

export default constants