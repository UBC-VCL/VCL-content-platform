interface Resource {
    // PAGE_LIST: string[];
    CONTENT: {
        name: string;
        page_title: string;
        headers?: string[]; // exists only if the page has header categories that are not the past 3 years 
        content: {
            img?: string;
            title: string;
            intro: string;
            href: string;
            category: string | Date;
            author: string[],
        }[];
        // categories: string[];
    }[];
}

const RESOURCES: Resource = {
    CONTENT: [
        {
            name: "COGS 402",
            page_title: "COGS 402 Projects",
            headers: ['hello', 'yo'],
            content: [
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: "hello",
                    author: ["John Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: "hello",
                    author: ["John Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: "hello",
                    author: ["John Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: "hello",
                    author: ["John Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: "hello",
                    author: ["John Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: "hello",
                    author: ["John Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: "hello",
                    author: ["John Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: "hello",
                    author: ["John Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: "hello",
                    author: ["John Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: "hello",
                    author: ["John Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: "hello",
                    author: ["John Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: "hello",
                    author: ["John Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: "hello",
                    author: ["John Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: "hello",
                    author: ["John Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: "hello",
                    author: ["John Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: "hello",
                    author: ["John Doe"],
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "hello"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    author: ["John Doe", "Jane Doe"],
                    category: "yo"
                }
            ],
        },
        {
            name: "lorem ipsum",
            page_title: "Lorem Ipsum Projects",
            content: [
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2021-12-24"),
                    author: ["John Doe", "Jane Doe"],
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2020-12-24"),
                    author: ["John Doe", "Jane Doe"],
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2023-10-24"),
                    author: ["John Doe", "Jane Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                }, {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                },
            ]
        }, {
            name: "COGS 402 2",
            page_title: "COGS 402 2 Projects",
            content: [
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2021-2-24"),
                    author: ["John Doe", "Jane Doe"],
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2023-4-24"),
                    author: ["John Doe", "Jane Doe"],
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2023-10-24"),
                    author: ["John Doe", "Jane Doe"],
                }
            ]
        },
        {
            name: "lorem ipsum2",
            page_title: "Lorem Ipsum2 Projects",
            content: [
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2022-12-24"),
                    author: ["John Doe", "Jane Doe"],
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2021-2-24"),
                    author: ["John Doe", "Jane Doe"],
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2023-4-24"),
                    author: ["John Doe", "Jane Doe"],
                },
                {
                    title: 'Lorem Ipsum',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus. Sed vitae nisi euismod, tincidunt nisl ac, tincidunt libero. Nullam euismod, nisl ac tincidunt tincidunt, ligula quam ultrices massa, nec aliquet arcu velit eu odio. Sed ut nunc eget urna ultricies consequat. Sed et semper lacus.',
                    href: 'https://www.google.com',
                    category: new Date("2023-10-24"),
                    author: ["John Doe", "Jane Doe"],
                }
            ]
        },
    ]
};

export default RESOURCES;