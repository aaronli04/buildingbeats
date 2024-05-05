const baseConstants = {
    // Skool page link
    SKOOL_LINK: 'https://skool.com/buildingbeats',
}

const courses = {
    // Bank of all courses
    ALL_COURSES: [
        {
            title: 'Introduction to Mixing',
            difficulty: 'beginner',
            description: 'Start at the beginning by learning mixing basics \u2014 the foundation of beat making.',
            link: baseConstants.SKOOL_LINK + '/courses/intro-to-mixing'
        },
        {
            title: 'Drill Beats 101',
            difficulty: 'intermediate',
            description: 'Learn drill and start to make your own drill beats. Figure out how to embed energy in beats.',
            link: baseConstants.SKOOL_LINK + '/courses/drill101'
        },
        {
            title: 'A Guide to Pop Smoke',
            difficulty: 'advanced',
            description: 'Learn more about drill, figure out to make Pop Smoke-beats, and try out our kit.',
            link: baseConstants.SKOOL_LINK + '/courses/guide-to-pop-smoke'
        },
    ],
}

const constants = {
    // Banner message shown
    BANNER_MESSAGE: {
        message: 'New Course: Metro Boomin',
        link: baseConstants.SKOOL_LINK + '/metro'
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
    ],

    // Filters shown
    FILTERS_STRUCTURE: [
        {
            title: 'Level',
            options: [
                'Beginner',
                'Intermediate',
                'Advanced'
            ]
        }
    ],

    // Trending courses
    TRENDING_COURSES: [
        courses.ALL_COURSES[0],
        courses.ALL_COURSES[1],
        courses.ALL_COURSES[2]
    ]
}

export default constants