import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BottomFooter from "../components/BottomFooter";
import CartSection from "../components/CartSection";
import Shipping from "../components/Shipping";

const CartPage = () => {



  return (
    <>
      {/* ColorInit */}
      <ColorInit color={false} />

      {/* Preloader */}
      <Preloader />

      {/* Header */}
      <Header category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Cart"} />

      {/* CartSection */}
      <CartSection />

      {/* Shipping */}
      <Shipping />

      {/* Footer */}
      <Footer />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default CartPage;
