interface Resource {
    // PAGE_LIST: string[];
    CONTENT: {
        title: string;
        page_title: string;
        content: {
            img?: string;
            title: string;
            intro: string;
            href: string;
            release: string;
        }[] | {
            img?: string;
            title: string;
            intro: string;
            href: string;
            release: Date;
        }[];
        // categories: string[];
    }[];

}

const RESOURCES: Resource = {
    CONTENT: [
        {
            title: "COGS 402",
            page_title: "COGS 402 Projects",
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
                    release: new Date("2021-02-24"),
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2023-04-24"),
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2023-10-24"),
                }
            ],
        },
        {
            title: "lorem ipsum",
            page_title: "Lorem Ipsum Projects",

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
                    release: new Date("2021-12-24"),
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    release: new Date("2020-12-24"),
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
            page_title: "COGS 402 2 Projects",

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
            page_title: "Lorem Ipsum2 Projects",

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