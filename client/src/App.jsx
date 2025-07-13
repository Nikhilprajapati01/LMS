import Home from './Pages/students/Home';
import CourcesList from './Pages/students/Courcesinfo'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Player from './Pages/students/Player';
import MyEnrollment from './Pages/students/MyEnrollment';
import CourseDetails from './Pages/students/CourseDetails';
import Layout from './Pages/students/Layout';
import Dashboard from './Pages/educators/Dashboard';
import Educators from './Pages/educators/Educators';
import Courcesinfo from './Pages/students/Courcesinfo';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Course/:id" element={<Courcesinfo/>} />
        <Route path="Player/:courceid" element={<Player />} />
        {/* <Route path="Loading/:path" element={<Loading/>} /> */}
        <Route path="course-List" element={<CourseDetails />} />
        <Route path="course-List/:input" element={<CourseDetails />} />
        <Route path="Myenrollment" element={<MyEnrollment />} />
        {/* <Route path="Player/:courceId" element={<Player/>} /> */}
        {/* <Route path="loading/:path" element={<Loading/>} /> */}


        //educator
        <Route path='/educator' element={<Educators/>}>
             <Route path="educator" element={<Dashboard/>} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
