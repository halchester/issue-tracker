import Head from "next/head";
import { Formik } from "formik";
import Header from "./components/Header";
import axios from "./api";
import { addIssueFormValidator } from "../utils/index";
import { useState } from "react";
import Spinner from "../utils/Spinner";

const formInitialValues = {
  title: "",
  type: "to fix",
  status: "open",
  owner: "",
  deadline: "",
  description: "",
};

export default function AddNewIssue() {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Head>
        <title>Issue Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4">
        <p className="text-gray-600 text-4xl font-bold font-body">
          Issue Tracker
        </p>
        <Formik
          enableReinitialize
          initialValues={formInitialValues}
          onSubmit={(values, { resetForm }) => {
            setLoading(true);
            const {
              title,
              owner,
              deadline,
              status,
              type,
              description,
            } = values;
            const payload = {
              title,
              owner,
              deadline,
              status,
              type,
              description,
            };
            axios.post("/api/issue", payload).then((response) => {
              setLoading(false);
              resetForm();
            });
          }}
          validationSchema={addIssueFormValidator}
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
                value={values.deadline}
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
                Add issue
              </button>
            </form>
          )}
        </Formik>
        {loading ? <Spinner /> : null}
      </main>
    </div>
  );
}
