const baseConstants = {
  // Skool page link
  SKOOL_LINK: "https://skool.com/buildingbeats",
};

const courses = {
  // Bank of all courses
  ALL_COURSES: [
    {
      title: "Introduction to Mixing",
      difficulty: "Beginner",
      description:
        "Start at the beginning by learning mixing basics \u2014 the foundation of beat making.",
      link: baseConstants.SKOOL_LINK + "/courses/intro-to-mixing",
    },
    {
      title: "Drill Beats 101",
      difficulty: "Intermediate",
      description:
        "Dive into the world of drill and craft energetic beats that stand out.",
      link: baseConstants.SKOOL_LINK + "/courses/drill101",
    },
    {
      title: "A Guide to Pop Smoke",
      difficulty: "Advanced",
      description:
        "Delve deep into drill, mastering Pop Smoke-style beats with our exclusive kit.",
      link: baseConstants.SKOOL_LINK + "/courses/guide-to-pop-smoke",
    },
    {
      title: "Introduction to DJing",
      difficulty: "Beginner",
      description:
        "Learn DJing from scratch and start mixing tracks like a pro.",
      link: baseConstants.SKOOL_LINK + "/courses/intro-to-djing",
    },
    {
      title: "A Guide to Juice WRLD",
      difficulty: "Advanced",
      description:
        "Master Juice WRLD-style beats and elements of his iconic emo-rap and trap sound.",
      link: baseConstants.SKOOL_LINK + "/courses/guide-to-juice-wrld",
    },
    {
      title: "Introduction to Soundtrap",
      difficulty: "Beginner",
      description:
        "Create music with Soundtrap through engaging lessons and practical tips.",
      link: baseConstants.SKOOL_LINK + "/courses/intro-to-soundtrap",
    },
  ],
};

const constants = {
  // Banner message shown
  BANNER_MESSAGE: {
    message: "New Drop: Migos MIDI Files",
    link: "https://buildingbeats.org/migos-bad-and-boujee-midi",
  },

  // Categories structure
  CATEGORIES_STRUCTURE: [
    {
      main: {
        title: "Essentials",
        link: "/essentials",
      },
      subcategories: [
        {
          title: "Mixing",
          link: "https://buildingbeats.org/complete-guide-to-mixing",
        },
        {
          title: "DJing",
          link: "https://buildingbeats.org/how-to-dj",
        },
        {
          title: "Soundtrap",
          link: "https://buildingbeats.org/learn-soundtrap",
        },
      ],
    },
    {
      main: {
        title: "Styles",
        link: "/styles",
      },
      subcategories: [
        {
          title: "Lofi",
          link: "https://buildingbeats.org/lo-fi",
        },
        {
          title: "Ballroom",
          link: "https://buildingbeats.org/ballroom",
        },
        {
          title: "Drill",
          link: "https://buildingbeats.org/complete-guide-to-drill",
        },
        {
          title: "K-Pop",
          link: "https://buildingbeats.org/k-pop",
        },
      ],
    },
    {
      main: {
        title: "Artists",
        link: "/artists",
      },
      subcategories: [
        {
          title: "Juice WRLD",
          link: "https://buildingbeats.org/juice-wrld",
        },
        {
          title: "Lil Nas X",
          link: "https://buildingbeats.org/lil-nas-x",
        },
        {
          title: "Pop Smoke",
          link: "https://buildingbeats.org/pop-smoke",
        },
      ],
    },
  ],

  // Filters shown
  FILTERS_STRUCTURE: [
    {
      title: "Level",
      options: ["Beginner", "Intermediate", "Advanced"],
    },
  ],

  // Trending courses
  TRENDING_COURSES: [
    courses.ALL_COURSES[0],
    courses.ALL_COURSES[1],
    courses.ALL_COURSES[2],
  ],
};

export default {
  constants: constants,
  courses: courses,
};
