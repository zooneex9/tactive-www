import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import ProductsPage from "../components/ProductsPage";
import NavBar from "../components/Layout/NavBar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import SectionDescription from "../components/SectionDescription";
import ServiceCards from "../components/ServiceCards";
import ReceiveConsultation from "../components/ReceiveConsultation";
import OurTeam from "../components/OurTeam";
import CustomerReviews from "../components/CustomerReviews";
import OurNews from "../components/OurNews";
import Footer from "../components/Footer";

const query = `//groq
  *[_type == "product" && defined(slug.current)]
`;

function IndexPage(props) {
  const { productsData, preview } = props;
  const router = useRouter();

  if (!router.isFallback && !productsData) {
    return <Error statusCode={404} />;
  }
  const { data: products } = usePreviewSubscription(query, {
    initialData: productsData,
    enabled: preview || router.query.preview !== null,
  });

  return (
          <>
            <NavBar/>
            <Hero/>
            <AboutUs/>
            <SectionDescription/>
            <ServiceCards/>
            <ReceiveConsultation/>
            <OurTeam/>
            <CustomerReviews/>
            <OurNews/>
            <Footer/>
        </>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const productsData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      productsData,
    },
  };
}

export default IndexPage;