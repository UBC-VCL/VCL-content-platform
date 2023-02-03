import { Project } from "@/services/adapters/projectAdapter";
import { create } from 'zustand'

type ProjectStore = {
  isProjectLoading: boolean,
  projects: Project[],
  setIsProjectLoading: (isLoading: boolean) => void,
  setProjects: (projects: Project[]) => void,
  addProject: (project: Project) => void,
  removeProject: (name: string) => void,
};

export const useProjectStore = create<ProjectStore>(
  (set): ProjectStore => ({
    isProjectLoading: false,
    projects: [],
    setIsProjectLoading: (isLoading) => 
      set((state) => ({
        ...state,
        isProjectLoading: isLoading,
      })),
    setProjects: (projects) => 
      set((state) => ({
        ...state,
        projects,
      })),
    addProject: (project) => 
      set((state) => ({
        ...state,
        projects: [...state.projects, project]
      })),
    removeProject: (name) => 
      set((state) => {
        const filteredProjects = state.projects.filter(project => project.name !== name)
        return {...state, filteredProjects}
      })
    }),
)