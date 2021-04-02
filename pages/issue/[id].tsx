import * as React from "react";
import axios from "../api/index";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchOneIssue } from "../api/query";
import Spinner from "../../utils/Spinner";
import moment from "moment";
import { Formik } from "formik";

const EditIssue: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const id = router.query.id;
  const { status, data } = useQuery(["fetchOneIssue", id], fetchOneIssue);

  return (
    <div>
      {status !== "success" ? (
        <Spinner />
      ) : (
        <div className="p-4 font-body">
          <p className="text font-bold text-lg">Issue Id {id}</p>
          <Formik
            enableReinitialize
            initialValues={data}
            onSubmit={(values, { resetForm }) => {
              setLoading(true);
              const payload = {
                ...values,
              };
              axios.put(`/api/issue/${id}`, payload).then((response) => {
                setLoading(false);
                router.push("/");
              });
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              resetForm,
              errors,
              touched,
              setFieldValue,
            }) => (
              <form className="mt-6 space-y-2" onSubmit={handleSubmit}>
                <label className="block text-md font-medium text-gray-500 font-body">
                  Title
                </label>
                <input
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  id="title"
                  placeholder="Issue Title"
                  className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 font-body"
                />
                <label className="block text-md font-medium text-gray-500 font-body">
                  Type
                </label>
                <select
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="type"
                  className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 font-body"
                >
                  <option>to fix</option>
                  <option>to do</option>
                </select>
                <label className="block text-md font-medium text-gray-500 font-body">
                  Status
                </label>
                <select
                  value={values.status}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="status"
                  className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 font-body"
                >
                  <option>open</option>
                  <option>assigned</option>
                  <option>bug</option>
                </select>
                <label className="block text-md font-medium text-gray-500 font-body">
                  Owner
                </label>
                <input
                  value={values.owner}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="owner"
                  type="text"
                  placeholder="Issue Owner"
                  className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 font-body"
                />
                <label className="block text-md font-medium text-gray-500 font-body">
                  Description
                </label>
                <textarea
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="description"
                  rows={3}
                  placeholder="Describe how the issue is occured"
                  className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 font-body"
                />
                <label className="block text-md font-medium text-gray-500 font-body">
                  Deadline
                </label>
                <input
                  value={moment(values.deadline).format("YYYY-MM-DD")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="deadline"
                  type="date"
                  placeholder="Deadline"
                  className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 font-body"
                />
                <button
                  type="submit"
                  onClick={() => handleSubmit}
                  style={{ marginTop: "1.5rem" }}
                  className="font-body justify-self-auto self-center border border-gray-400 p-1 rounded-lg px-3 "
                >
                  Update issue
                </button>
              </form>
            )}
          </Formik>
        </div>
      )}
      {loading ? <Spinner /> : null}
    </div>
  );
};

export default EditIssue;
