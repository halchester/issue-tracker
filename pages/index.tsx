import Head from "next/head";
import { useQuery } from "react-query";
import Spinner from "../utils/Spinner";
import { fetchAllIssues } from "./api/query";
import IssueCard from "./components/IssueCard";

const IssueList: React.FC = () => {
  const { isError, status, data } = useQuery("fetchAllIssues", fetchAllIssues);
  console.log(data);
  return (
    <div>
      {status === "loading" ? (
        <Spinner />
      ) : (
        <main className="p-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item, _) => (
              <IssueCard
                key={_}
                title={item.title}
                owner={item.owner}
                deadline={item.deadline}
                status={item.status}
                type={item.type}
                description={item.description}
              />
            ))}
          </div>
        </main>
      )}
      {isError ? (
        <p>Cannot fetch Issues! An unknown Error has occured!</p>
      ) : null}
    </div>
  );
};

export default IssueList;
