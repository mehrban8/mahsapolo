import { CountriesItems } from "../CountriesItems/CountriesItems";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Home = () => (
  <div className="App">
    <Header />
    <CountriesItems></CountriesItems>
    <Footer></Footer>
  </div>
);
