import React, { useEffect, useState } from 'react'
import ImageCard from './imageCard';

function Dashboard() {

    const [photos, setPhotos] = useState([]);
    const accessKey = "0_6wFK78dB2Z55XB5HoLIRFzdZib3Evr7kJYq8tNP4s";
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.unsplash.com/search/photos?query=lamp&client_id=${accessKey}`
          );
          const data = await response.json();
          setPhotos(data.results);
        } catch (error) {
          console.error("Hata:", error);
        }
      };
      fetchData();
    }, []);

  return (
    <div className="container">
      <div className="cardWrapper">
        {
          photos.map((photo) => (
            <ImageCard key={photo.id} photo={photo}/>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard