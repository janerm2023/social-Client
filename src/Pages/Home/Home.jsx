import "./Home.css";
import Stories from "../../components/Stories/Stories";
import Post from "../../components/Posts/Post";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import Share from "../../components/Share/Share";

const Home = () => {
  const { isLoading, error, data } = useQuery(["posts"], async () => {
    const res = await makeRequest.get("/posts");
    return res.data;
  });

  return (
    <div className="homeContainer">
      <Stories />
      <Share />

      {error
        ? "Something went wrong"
        : isLoading
        ? "Loading..."
        : data
            ?.sort((a, b) => b - a)
            .map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default Home;
