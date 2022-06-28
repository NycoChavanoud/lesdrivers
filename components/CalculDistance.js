import axios from "axios";
import { useEffect, useState } from "react";

export default function CalculDistance({ latitude, longitude }) {
  const [distance, setDistance] = useState("");
  const aeroportCoordinates = "45.7220,5.0753";
  useEffect(() => {
    const loadDistance = async () => {
      const response = await axios.get(
        `https://maps.open-street.com/api/route/?origin=${latitude},${longitude}&destination=${aeroportCoordinates}&mode=driving&key=b3a2ba39c14fa86f221d83a472f6b281`
      );
      setDistance(response.data.total_distance);
    };
    loadDistance();
  }, []);
  console.log(distance);
  return <div>{Math.round((distance / 1000) * 1.8)}</div>;
}
