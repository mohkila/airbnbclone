import MapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import { getCenter } from "geolib";

// Define the type for search results
interface SearchResult {
  long: number;
  lat: number;
  title: string;
}

interface MapProps {
  searchResults?: SearchResult[]; // Mark as optional
}

const Map: React.FC<MapProps> = ({ searchResults = [] }) => {
  const [selectedLocation, setSelectedLocation] = useState<SearchResult | null>(null);

  // Log search results for debugging
  console.log("Search Results:", searchResults);

  // Safely map coordinates
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // Handle empty coordinates case
  const center =
    coordinates.length > 0 ? getCenter(coordinates) : { longitude: 0, latitude: 0 };

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <MapGL
      {...viewport}
      mapStyle="mapbox://styles/mokila/cm5scotbc006701sb5o04a1p2"
      mapboxAccessToken={
        process.env.NEXT_PUBLIC_MAPBOX_KEY ||
        "pk.eyJ1IjoibW9raWxhIiwiYSI6ImNtNXNheXB2ZzBqY3MybHNlZnd4OHF3dWYifQ.NT0tLlAsyQy-VhIXTKBxaQ"
      }
      onMove={(evt) => setViewport(evt.viewState)}
    >
      {searchResults.map((result) => (
        <div key={`${result.lat}-${result.long}`}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetTop={-10}
            offsetLeft={-20}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              role="img"
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              <img src="mapMarker.png" alt="*" />
            </p>
          </Marker>

          {selectedLocation?.long === result.long && (
            <Popup
              closeOnClick={false}
              onClose={() => setSelectedLocation(null)}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          )}
        </div>
      ))}
    </MapGL>
  );
};

export default Map;
