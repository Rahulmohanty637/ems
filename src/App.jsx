import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@123" && password == "123") {
      setUser("admin");
      console.log("This is admin");
    } else if (email == "user@123" && password == "123") {
      setUser("employee");
      console.log("This is user");
    } else {
      alert("Invalid Credentials !");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
}

export default App;
