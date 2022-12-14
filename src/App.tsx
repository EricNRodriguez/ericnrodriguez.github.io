import {Header} from "./pages/header";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './App.scss';
import {About} from "./pages/about";
import {Contact} from "./pages/contact";
import {Blog, BlogIndex} from "./pages/blog";
import {NotFoundPage} from "./pages/404";
import ScrollToTop from "./components/scroll-to-top";

const getBlogFileUrl = (file: string): Promise<string> => {
  return import(`./blog_content/${file}`)
    .then(res => res.default)
};

// TODO(ericr): factor this properly, pull the metadata directly from the blog file, etc
const blogMetadata = {
  blogDir: "./blog_content",
  posts: [
    {
      title: "Hello, world!",
      id: "hello-world",
      date: new Date(2022, 11, 19),
      sourceUrl: getBlogFileUrl("hello-world.md"),
    }
  ]
}

export const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to={"/about"} />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<p> resume! </p>} />
          <Route path="/blog" element={ <BlogIndex {...blogMetadata} />} />
          <Route path="/blog/:fileName" element={ <Blog {...blogMetadata}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={ <NotFoundPage />} />
          <Route path="/404" element={ <NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
