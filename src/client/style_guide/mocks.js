/*
 * Generates random data to use as props in the styleguide components
 */
import Chance from 'chance';

const chance = new Chance();

const DEFAULT_USER = customProps => ({
    id: chance.integer({ min: 1, max: 9999 }),
    username: chance.name({ nationality: 'en' }),
    email: chance.email(),
    bio: chance.sentence({ words: chance.integer({ min: 5, max: 10 }) }),
    friends_count: chance.integer({ min: 1, max: 50 }),
    ...customProps
});

const DEFAULT_COMMENT = customProps => ({
    id: chance.integer({ min: 1, max: 9999 }),
    author: DEFAULT_USER(),
    body: chance.paragraph({ sentences: chance.integer({ min: 1, max: 2 }) }),
    created_at: chance.date({
        year: 2018,
        month: new Date().getMonth(),
        day: chance.integer({ min: 1, max: new Date().getDate() })
    }),
    likes_count: chance.integer({ min: 1, max: 10 })
});

const DEFAULT_STATUS = customProps => {
    let status = {
        id: chance.integer({ min: 1, max: 9999 }),
        author: DEFAULT_USER(),
        body: chance.paragraph({
            sentences: chance.integer({ min: 1, max: 3 })
        }),
        likes_count: chance.integer({ min: 1, max: 25 }),
        likes_count: chance.integer({ min: 1, max: 25 }),
        comments_count: chance.integer({ min: 1, max: 10 }),
        shares_count: chance.integer({ min: 1, max: 25 }),
        created_at: chance.date({
            year: 2018,
            month: new Date().getMonth(),
            day: chance.integer({ min: 1, max: new Date().getDate() })
        }),
        comments: [],
        ...customProps
    };
    [...Array(status.comments_count)].forEach((_, i) => {
        status.comments.push(
            DEFAULT_COMMENT({
                created_at: chance.date({
                    year: 2018,
                    month: new Date().getMonth(),
                    day: chance.integer({
                        min: status.created_at.getDate(),
                        max: new Date().getDate()
                    })
                })
            })
        );
    });
    return status;
};

const DEFAULT_MENU = () => [
    {
        label: 'Dashboard',
        to: '/dashboard',
        system: true
    },
    {
        label: 'Profile',
        to: '/profile/1',
        system: true
    },
    {
        label: 'Messages',
        to: '/messages',
        system: true
    },
    {
        label: 'Projects',
        to: '/projects',
        system: true
    },
    {
        label: 'Apps',
        to: '/apps',
        system: true
    },
    {
        label: 'Settings',
        to: '/settings',
        system: true
    },
    {
        label: 'App1',
        to: '/apps/1',
        system: false,
        color: 'hsl(0,60%,55%)'
    },
    {
        label: 'App2',
        to: '/apps/2',
        system: false,
        color: 'hsl(30,60%,55%)'
    },
    {
        label: 'App3',
        to: '/apps/3',
        system: false,
        color: 'hsl(60,60%,55%)'
    },
    {
        label: 'App4',
        to: '/apps/4',
        system: false,
        color: 'hsl(90,60%,55%)'
    },
    {
        label: 'App5',
        to: '/apps/5',
        system: false,
        color: 'hsl(120,60%,55%)'
    },
    {
        label: 'App6',
        to: '/apps/6',
        system: false,
        color: 'hsl(150,60%,55%)'
    },
    {
        label: 'App7',
        to: '/apps/7',
        system: false,
        color: 'hsl(180,60%,55%)'
    }
];

const DEFAULT_STATUS_LIST = (amount = chance.integer({ min: 4, max: 8 })) => {
    let statuses = [];
    for (let i = 0; i < amount; i++) {
        statuses.push(
            DEFAULT_STATUS({
                comments_count: chance.integer({ min: 0, max: 5 })
            })
        );
    }
    statuses.sort(
        (a, b) => (a.created_at.getTime() > b.created_at.getTime() ? -1 : 1)
    );
    return statuses;
};

const DEFAULT_COMMENT_LIST = (amount = chance.integer({ min: 3, max: 6 })) => {
    let comments = [];
    [...Array(amount)].forEach((_, i) => {
        comments.push(DEFAULT_COMMENT());
    });
    comments.sort(
        (a, b) => (a.created_at.getTime() > b.created_at.getTime() ? -1 : 1)
    );
    return comments;
};

export default {
    DEFAULT_USER,
    DEFAULT_STATUS,
    DEFAULT_STATUS_LIST,
    DEFAULT_COMMENT,
    DEFAULT_COMMENT_LIST,
    DEFAULT_MENU
};
