interface Resource {
    // PAGE_LIST: string[];
    CONTENT: {
        title: string;
        content: {
            title: string;
            intro: string;
            href: string;
            release: Date;
        }[];
    }[];

}

const RESOURCES: Resource = {
    // PAGE_LIST: [
    //     "COGS 402",
    //     "lorem ipsum",
    // ],
    CONTENT: [
        {
            title: "COGS 402",
            content: [
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2022-12-24"),
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2021-2-24"),
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2023-4-24"),
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2023-10-24"),
                }
            ]
        },
        {
            title: "lorem ipsum",
            content: [
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2022-12-24"),
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2021-2-24"),
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2023-4-24"),
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2023-10-24"),
                }
            ]
        }, {
            title: "COGS 402 2",
            content: [
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2022-12-24"),
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2021-2-24"),
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2023-4-24"),
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2023-10-24"),
                }
            ]
        },
        {
            title: "lorem ipsum2",
            content: [
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2022-12-24"),
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2021-2-24"),
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2023-4-24"),
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2023-10-24"),
                }
            ]
        },
    ]
};

export default RESOURCES;