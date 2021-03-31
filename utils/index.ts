import * as Yup from "yup";

export const addIssueFormValidator = Yup.object().shape({
  title: Yup.string().max(255).required("Title is required!"),
  owner: Yup.string().max(255).required("Issue Owner is required!"),
  status: Yup.string().required("Must choose current status of the issue!"),
});
