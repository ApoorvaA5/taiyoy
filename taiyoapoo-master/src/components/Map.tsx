import  { FC } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

type MapProps = {
  data: Array<{
    country: string;
    active: number;
    deaths: number;
    recovered: number;
    countryInfo: {
      lat: number;
      long: number;
    };
  }>;
};

const Map: FC<MapProps> = ({ data }) => {
  const icon = L.icon({ iconUrl: "/marker-icon.png" });

  return (
    <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false}>
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((item, index) => (
        <Marker
          icon={icon}
          position={[item.countryInfo.lat, item.countryInfo.long]}
          key={index}
        >
          <Popup>
            <p className="font-bold">Country Name: {item.country}</p>
            <p className="font-bold">Total Active: {item.active}</p>
            <p className="font-bold">Recovered Cases: {item.recovered}</p>
            <p className="font-bold">Total Deaths: {item.deaths}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
