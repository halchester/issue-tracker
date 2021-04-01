import moment from "moment";

export interface IssueCardProps {
  title: string;
  owner: string;
  status: string;
  type: string;
  deadline: string;
  description: string;
}

const IssueCard: React.FC<IssueCardProps> = ({
  title,
  owner,
  status,
  deadline,
  type,
  description,
}) => {
  return (
    <div className="rounded-lg shadow-lg p-3 font-body">
      <h1 className="mt-2 text-lg text-gray-600">{title}</h1>
      <p className="my-1 text-sm">Issue opened by {owner}</p>
      {deadline ? (
        <p className="my-1 text-sm text-red-500 font-semibold">
          Deadline at {moment(deadline).format("MMM DD YYYY")}
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
    </div>
  );
};

export default IssueCard;
