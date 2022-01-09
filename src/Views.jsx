import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Posts from "./Posts";

const Views = () => {
  return (
    <Routes>
      <Route path="/home" element={<div>Hi I'm Home</div>} />
      <Route path="/posts">
        <Route index element={<div>Hi go to a post to start posting</div>} />
        <Route path=":id" element={<Posts />} />
        <Route path="1" element={<div>First post</div>} />
      </Route>
      <Route path="/about" element={<div>About Me</div>} />
      <Route index element={<div>Please Log In</div>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Views;
