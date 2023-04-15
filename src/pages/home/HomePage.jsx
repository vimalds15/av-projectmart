import React, { useState } from "react";
import DashboardPage from "../dashboard/DashboardPage";
import CryptoWalletPage from "../crytowallet/CryptoWalletPage";
import Sidebar from "../../components/Sidebar";
import Orders from "../orders/OrdersPage";
import MainNavBar from "../../components/MainNavBar";

const HomePage = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
     

      
    </div>
  );
};

export default HomePage;
