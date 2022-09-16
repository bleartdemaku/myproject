import * as Yup from "yup";

export const conntactSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format!!!").required("Required"),
  name: Yup.string().min(2).max(20).required("Required"),
  lastname: Yup.string().min(2).max(20).required("Required"),
  comment: Yup.string().min(2).max(20).required("Required"),
});