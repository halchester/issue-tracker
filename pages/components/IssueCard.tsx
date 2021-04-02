import moment from "moment";
import { useState } from "react";
import Spinner from "../../utils/Spinner";
import axios from "../api/index";
import Link from "next/link";

export interface IssueCardProps {
  title: string;
  owner: string;
  status: string;
  type: string;
  deadline: string;
  description: string;
  uniqueId: string;
}

const IssueCard: React.FC<IssueCardProps> = ({
  title,
  owner,
  status,
  deadline,
  type,
  description,
  uniqueId,
}) => {
  const [loading, setLoading] = useState(false);
  const deleteIssue = () => {
    setLoading(true);
    axios.delete(`/api/issue/${uniqueId}`).then((res) => setLoading(false));
  };

  return (
    <div className="rounded-lg shadow-lg p-3 font-body">
      <h1 className="mt-2 text-lg text-gray-600">{title}</h1>
      <p className="my-1 text-sm">Issue opened by {owner}</p>
      {deadline ? (
        <p className="my-1 text-sm text-red-500 font-semibold">
          Deadline on {moment(deadline).format("MMM DD YYYY")}
        </p>
      ) : null}
      <div className="pt-2 pb-1">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {status}
        </span>
        <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type}
        </span>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div className="mt-2">
        <Link href={`/issue/${uniqueId}`}>
          <button className="rounded-lg border px-2 py-1 mx-1 bg-green-400 text-white">
            Edit issue
          </button>
        </Link>
        <button
          className="rounded-lg border px-2 py-1 bg-red-500 text-white p-1 mx-1"
          onClick={deleteIssue}
        >
          Delete issue
        </button>
      </div>
      {loading ? <Spinner /> : null}
    </div>
  );
};

export default IssueCard;
