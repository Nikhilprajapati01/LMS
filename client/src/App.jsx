import Home from './Pages/students/Home';
import CourcesList from './Pages/students/CourcesList'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Player from './Pages/students/Player';
import MyEnrollment from './Pages/students/MyEnrollment';
import CourseDetails from './Pages/students/CourseDetails';
import Layout from './Pages/students/Layout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Course/:input" element={<CourcesList />} />
        <Route path="Player/:courceid" element={<Player />} />
        {/* <Route path="Loading/:path" element={<Loading/>} /> */}
        <Route path="Myenrollment" element={<MyEnrollment />} />
        <Route path="course-List" element={<CourseDetails />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
