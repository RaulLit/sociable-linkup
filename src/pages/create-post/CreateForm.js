import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { db, auth } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const CreateForm = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    title: yup.string().required("You must enter an title!"),
    description: yup.string().required("You must add a description!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const colRef = collection(db, "posts");

  const onCreatePost = async (data) => {
    addDoc(colRef, {
      // title: data.title,
      // description: data.description,
      ...data,
      email: auth.currentUser.email,
    }).then((data) => navigate("/"));
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input type="text" placeholder="Title..." {...register("title")} />
      <p style={{ color: "red" }}>{errors.title?.message}</p>
      <textarea
        type="text"
        placeholder="Description..."
        {...register("description")}
      />
      <p style={{ color: "red" }}>{errors.description?.message}</p>
      <input type="submit" />
    </form>
  );
};
