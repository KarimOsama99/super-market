import Preloader from "../helper/Preloader";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";
import NewArrival from "../components/NewArrival";
import Shipping from "../components/Shipping";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import BottomFooter from "../components/BottomFooter";
import BreadcrumbTwo from './../components/BreadcrumbTwo';
import ColorInit from "../helper/ColorInit";

const ProductDetailsPage = () => {



  return (
    <>

      {/* Preloader */}
      <Preloader />

      {/* ColorInit */}
      <ColorInit color={false} />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <BreadcrumbTwo title={"Product Details"} />

      {/* ProductDetails */}
      <ProductDetails />

      {/* NewArrival */}
      <NewArrival />

      {/* Shipping */}
      <Shipping />

      {/* Newsletter */}
      <Newsletter />

      {/* FooterTwo */}
      <Footer />

      {/* BottomFooter */}
      <BottomFooter />



    </>
  );
};

export default ProductDetailsPage;
