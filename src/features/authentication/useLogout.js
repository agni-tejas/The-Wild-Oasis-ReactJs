import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      //removes all the cache stored in the website
      queryClient.removeQueries();
      //basically replace erases the place that we were earlier
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
