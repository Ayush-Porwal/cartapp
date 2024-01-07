import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ItemCard from "./components/ItemCard/ItemCard";

import "./App.scss";
import { useState, useEffect } from "react";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  //   useEffect(() => {}, []);
  return (
    <div>
      <Navbar userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
      <div className="container">
        <Sidebar />
        <div className="productList">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  );
}

export default App;
