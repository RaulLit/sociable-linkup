import { auth } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Post } from "./Post";

export const Home = () => {
  const [posts, setPosts] = useState(null);
  const colRef = collection(db, "posts");
  const getPosts = async () => {
    getDocs(colRef).then((data) => {
      setPosts(data.docs.map((data) => ({ ...data.data(), id: data.id })));
    });
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="page">
      <div>
        {posts?.map((data) => (
          <Post data={data} />
        ))}
      </div>
    </div>
  );
};
