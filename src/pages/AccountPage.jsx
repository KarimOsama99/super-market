import Preloader from "../helper/Preloader";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BottomFooter from "../components/BottomFooter";
import Shipping from "../components/Shipping";
import Account from "../components/Account";
import ColorInit from "../helper/ColorInit";

const AccountPage = () => {



  return (
    <>
      {/* ColorInit */}
      <ColorInit color={false} />

      {/* Preloader */}
      <Preloader />

      {/* Header */}
      <Header category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Account"} />

      {/* Account */}
      <Account />

      {/* Shipping */}
      <Shipping />

      {/* Footer */}
      <Footer />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default AccountPage;
