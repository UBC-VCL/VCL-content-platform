interface Member {
    name: string,
    position: string,
    education?: string,
    description?: string,
    email?: string,
    phone?: string,
    linkedIn?: string,
    isCurrentMember?: boolean
}

interface Publication {
    name: string,
    citation: string,
    link: string
}

export interface Project {
    name: string,
    description?: {
        first: string,
        second: string,
        emp: string,
    },
    members?: Member[],
    isActive?: boolean,
    key?: string,
    qa?: {q:string, a: string}[],
    joinTeam?: {
        whatWeDo: string[]
    },
    publications?: Publication[],
}
