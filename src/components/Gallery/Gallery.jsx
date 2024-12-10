import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GalleryItem } from "./GalleryItem";
import "./Gallery.scss";

const Gallery = () => {
  const { country } = useParams();
  
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("/data/gallery.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data[country].images);
        setTitle(data[country].title);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Let's explore {country}</h1>
      <p>{title}</p>
      <div className="grid">
        {images.map((image) => (
          <GalleryItem image={"/img/gallery/" + image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
