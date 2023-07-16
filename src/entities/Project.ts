export interface Project {
    name: string,
    description?: {
        first: string,
        second: string,
        emp: string,
    },
    members?: string[],
    isActive?: boolean,
    key?: string,
    qa?: {q:string, a: string}[],
}
