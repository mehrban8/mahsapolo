import { CountryItem } from "../CountryItem/CountryItem";
import "./CountriesItems.scss";

export const CountriesItems = ({ image, title }) => {
  const items = [
    {
      title: "Switzerland",
      image: "/img/switzerland.jpg",
    },
    {
      title: "Japan",
      image: "/img/japan.jpg",
    },
    {
      title: "Norway",
      image: "/img/norway.jpg",
    },
  ];

  return (
    <div className="items">
      {items.map((item) => (
        <CountryItem image={item.image} title={item.title} />
      ))}
    </div>
  );
};
