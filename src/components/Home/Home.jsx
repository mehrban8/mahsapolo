import ContactForm from "../ContactForm/ContactForm";
import { CountriesItems } from "../CountriesItems/CountriesItems";
import { Header } from "../Header/Header";

export const Home = () => (
  <div className="App">
    <Header />
    <CountriesItems></CountriesItems>
    <ContactForm />
  </div>
);
