import { Outlet } from "react-router-dom";
import Header from "./Navbar/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-20">
        <Outlet /> {/* This is where pages (Home, About, etc.) will render */}
      </main>
    </>
  );
};

export default Layout;
