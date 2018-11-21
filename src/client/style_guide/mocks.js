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

    for (let i = 0; i < status.comments_count; i++) {
        status.comments.push(
            DEFAULT_COMMENT({
                created_at: chance.date({
                    year: 2018,
                    month: new Date().getMonth(),
                    day: chance.integer({ min: status.created_at.getDate(), max: new Date().getDate() })
                })
            })
        );
    }
    return status;
};

const DEFAULT_COMMENT = customProps => ({
    id: chance.integer({ min: 1, max: 9999 }),
    author: DEFAULT_USER(),
    body: chance.paragraph({ sentences: chance.integer({ min: 1, max: 2 }) }),
    created_at: chance.date({
        year: 2018,
        month: new Date().getMonth(),
        day: chance.integer({ min: 1, max: new Date().getDate() })
    }),
    likes_count: chance.integer({ min: 1, max: 10 }),
});

const DEFAULT_STATUS_LIST = (amount) => {
    let statuses = [];
    for (let i = 0; i < (amount || 6); i++) {
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

export default {
    DEFAULT_USER,
    DEFAULT_STATUS,
    DEFAULT_STATUS_LIST
};
