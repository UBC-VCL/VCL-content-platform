import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { projectActions } from "@/redux/slices/ProjectRedux";
import { appActions } from "@/redux/slices/AppRedux";
import { callGetAllProjectsAPI } from "@/services/adapters/projectAdapter";

export const useHandleGetAllProjects = () => {
  const dispatch = useAppDispatch();
  dispatch(projectActions.setIsProjectLoading(true));

  const handleGetAllProjects = async () => {
    callGetAllProjectsAPI()
      .then((res) => {
        if (res.data) {
          dispatch(projectActions.setProjects(res.data));
        } else {
          dispatch(appActions.setAlert(res.message));
        }
      })
      .then(() => {
        dispatch(projectActions.setIsProjectLoading(false));
      })
      .catch(() => {
        console.error("Error: projectService.ts getAllProjects call");
      });
  };

  useEffect(() => {
    handleGetAllProjects();
  }, []);
};
