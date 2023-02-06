import { useEffect } from "react";
import { callGetAllProjectsAPI } from "@/services/adapters/projectAdapter";
import { useProjectStore } from "stores/ProjectStore";
import { useAppStore } from "stores/AppStore";

export const useHandleGetAllProjects = () => {
  const { setIsProjectLoading, setProjects} = useProjectStore((state) => state)
  const setAlert = useAppStore((state) => state.setAlert);

  const handleGetAllProjects = async () => {
    setIsProjectLoading(true);
    callGetAllProjectsAPI()
      .then((res) => {
        if (res.data) {
          setProjects(res.data);
        } else {
          setAlert(res.message);
        }
      })
      .then(() => {
        setIsProjectLoading(false);
      })
      .catch(() => {
        console.error("Error: projectService.ts getAllProjects call");
      });
  };

  useEffect(() => {
    handleGetAllProjects();
  }, []);
};
