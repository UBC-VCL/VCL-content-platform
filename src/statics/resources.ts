interface Resource {
    name: string,
    page_title: string,
    subcategories?: string[]
}
export const RESOURCES: Resource[] = [
    {
        name: "COGS 402",
        page_title: "COGS 402 Projects",
    },
    {
        name: "Skills Workshops",
        page_title: "Skills Workshops",
        subcategories: [
            'Coding',
            'Storytelling',
            'Data Science',
            'Presentation Skills',
            'Diversity'
        ]
    },
    {
        name: "Research Project",
        page_title: "Research Project Presentations",
    },
    {
        name: "Career Workshops",
        page_title: "Career Workshops",
        subcategories: [
            'Management Skills',
            'Interview Skills',
            'Resume Building',
            'Networking',
            'Grad School'
        ]
    }
]

export default RESOURCES;