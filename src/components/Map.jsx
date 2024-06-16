import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Positon: {lat}, {lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
        Change pos
      </button>
    </div>
  );
};

export default Map;
