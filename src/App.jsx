import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import { AuthProvider, useAuth } from "./pages/AppContext/AppContext";
import { useRoutes } from "react-router-dom";

function AppContent() {
  const { userLoggedIn } = useAuth();
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home/*",
      element: <div className='w-full min-h-screen bg-black'><Home /></div>,
    },
  ];

  let routesElement = useRoutes(routesArray);

  return (
    <>
      {!userLoggedIn && <Header />}
      <div className="w-full min-h-screen bg-black">
        {routesElement}
      </div>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
