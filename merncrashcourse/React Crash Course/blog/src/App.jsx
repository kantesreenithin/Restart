import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//pages
import Create from "./pages/Create";
import Home from "./pages/Home";
import Faq from "./pages/Help/Faq";
import Contact from "./pages/Help/contact";
//componenets
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/Notfound";
//layouts
import MainLayout from "./layouts/MainLayout";
import HelpLayout from "./layouts/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="blogs/:id" element={<BlogDetails />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

// <BrowserRouter>
//       <div className="App">
//         <Navbar />
//         <div className="content">
//           <Routes>
//             <Route path="/" element=<Home /> />
//             <Route path="/create" element=<Create /> />
//             <Route path="/blogs/:id" element=<BlogDetails /> />
//             <Route path="*" element=<NotFound /> />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
