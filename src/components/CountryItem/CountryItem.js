import { useNavigate } from "react-router-dom";
import "./CountryItem.scss";

export const CountryItem = ({ image, title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/gallery/${title}`);
  };

  return (
    <div className="countryItem" onClick={handleClick}>
      <img src={image} className="image" alt={title} />
      <span className="title">{title}</span>
    </div>
  );
};
