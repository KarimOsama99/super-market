import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BottomFooter from "../components/BottomFooter";
import Shipping from "../components/Shipping";
import Checkout from "../components/Checkout";

const CheckoutPage = () => {



  return (
    <>
      {/* ColorInit */}
      <ColorInit color={false} />

      {/* Preloader */}
      <Preloader />

      {/* Header */}
      <Header category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Checkout"} />

      {/* Checkout */}
      <Checkout />

      {/* Shipping */}
      <Shipping />

      {/* Footer */}
      <Footer />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default CheckoutPage;
