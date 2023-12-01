import { SlideShowOBJ } from "@pages/Project/types";

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
interface Description {
    first: any,
    second: string,
    emp?: string,
}

export interface Project {
    name: string,
    description?: Description
    members?: Member[],
    isActive?: boolean,
    key?: string,
    qa?: {q:string, a: string}[],
    joinTeam?: {
        whatWeDo: string[]
    },
    pastProjects?: {
        title: string,
        description: string
    }[]
    publications?: Publication[],
    subpage?:Project[],
    galleryList?: SlideShowOBJ[],
    testimonials?: SlideShowOBJ[]
    
}
