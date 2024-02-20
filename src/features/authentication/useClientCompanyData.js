import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../services/apiAuthClient";

export function useUserCompany(userId) {
  const { data } = useQuery({
    queryKey: ["userCompanies"],
    queryFn: () => getCompanies(userId)
  });
 
  return { data };
}