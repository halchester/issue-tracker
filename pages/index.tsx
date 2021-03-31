import Head from "next/head";
import { Formik } from "formik";
import Header from "./components/Header";

export default function Home() {
  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4">
        <p className="text-gray-600 text-4xl font-bold">Issue Tracker</p>
        <Formik
          enableReinitialize
          initialValues={{
            title: "",
            status: "to fix",
            owner: "",
            deadline: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <form className="mt-6 space-y-2" onSubmit={handleSubmit}>
              <label className="block text-md font-medium text-gray-500">
                Title
              </label>
              <input
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                id="title"
                placeholder="Issue Title"
                className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
              />
              <label className="block text-md font-medium text-gray-500">
                Status
              </label>
              <select
                value={values.status}
                onChange={handleChange}
                onBlur={handleBlur}
                id="status"
                className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
              >
                <option>to fix</option>
                <option>to do</option>
              </select>
              <label className="block text-md font-medium text-gray-500">
                Owner
              </label>
              <input
                value={values.owner}
                onChange={handleChange}
                onBlur={handleBlur}
                id="owner"
                type="text"
                placeholder="Issue Owner"
                className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
              />
              <label className="block text-md font-medium text-gray-500">
                Deadline
              </label>
              <input
                value={values.deadline}
                onChange={handleChange}
                onBlur={handleBlur}
                id="deadline"
                type="date"
                placeholder="Deadline"
                className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
              />
              <button
                type="submit"
                onClick={() => handleSubmit}
                style={{ marginTop: "1.5rem" }}
                className="justify-self-auto self-center border border-gray-400 p-1 rounded-lg px-3 "
              >
                Add issue
              </button>
            </form>
          )}
        </Formik>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
