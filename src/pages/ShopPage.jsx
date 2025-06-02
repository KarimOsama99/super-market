import Preloader from "../helper/Preloader";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import ShopSection from "../components/ShopSection";
import Shipping from "../components/Shipping";
import Footer from "../components/Footer";
import ColorInit from "../helper/ColorInit";

const ShopPage = () => {

  return (
    <>
      {/* ColorInit */}
      <ColorInit color={false} />

      {/* Preloader */}
      <Preloader />

      {/* Header */}
      <Header category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Shop"} />

      {/* ShopSection */}
      <ShopSection />

      {/* Shipping */}
      <Shipping />

      {/* Footer */}
      <Footer />


    </>
  );
};

export default ShopPage;
