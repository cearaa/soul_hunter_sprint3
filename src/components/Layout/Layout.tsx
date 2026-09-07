import { Outlet } from "react-router-dom";
import BackToTop from "../BackToTop/BackToTop";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ToastStack from "../ToastStack/ToastStack";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="relative flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <ToastStack />
    </>
  );
}
