import { Outlet, useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  return (
    <div>
      <Outlet />
      {params.id}
    </div>
  );
};

export default Posts;
