import React from "react";
import { createRoot } from "react-dom/client";
import RootLayout from "./app/layout";
import Home from "./app/page";
import CoursesPage from "./app/courses/page";
import PackagesPage from "./app/packages/page";
import AboutPage from "./app/about/page";
import BookPage from "./app/book/page";
import FAQPage from "./app/faq/page";
import GalleryPage from "./app/gallery/page";
import BlogPage from "./app/blog/page";
import BlogPostPage from "./app/blog/[slug]/page";
import { RouterProvider, usePathname } from "./lib/next-shim";

const App = () => {
  const path = usePathname();

  // Simple Route Matcher
  let component = <Home />;

  if (path === "/" || path.endsWith("index.html")) {
    component = <Home />;
  } else if (path === "/courses") {
    component = <CoursesPage />;
  } else if (path === "/packages") {
    component = <PackagesPage />;
  } else if (path === "/about") {
    component = <AboutPage />;
  } else if (path === "/book" || path === "/contact") {
    component = <BookPage />;
  } else if (path === "/faq") {
    component = <FAQPage />;
  } else if (path === "/gallery") {
    component = <GalleryPage />;
  } else if (path === "/blog") {
    component = <BlogPage />;
  } else if (path.startsWith("/blog/")) {
    const slug = path.split("/")[2];
    component = <BlogPostPage params={{ slug }} />;
  } else {
    component = (
      <div className="min-h-screen pt-32 text-center text-white">
        404 - Page Not Found
      </div>
    );
  }

  return <RootLayout>{component}</RootLayout>;
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider>
        <App />
      </RouterProvider>
    </React.StrictMode>
  );
}
