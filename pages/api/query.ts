import axios from "./index";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient();

export const fetchAllIssues = async () => {
  const data = await axios.get("/api/issues");
  return data.data.data;
};
