import {CityType} from '../../types/offerInfo';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../consts';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type MapProp = {
  points: CityType[],
  selectedCity?: CityType,
}

function Map({points, selectedCity}: MapProp): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, points);

  useEffect(() => {
    if (!map) {
      return;
    }

    points.forEach((point) => {
      const marker = new Marker({
        lat: point.location.latitude,
        lng: point.location.longitude,
      });

      marker.setIcon(
        selectedCity !== undefined
        && point.location.latitude === selectedCity.location.latitude
        && point.location.longitude === selectedCity.location.longitude
          ? currentCustomIcon
          : defaultCustomIcon,
      ).addTo(map);
    });

  }, [map, points, selectedCity]);

  return <div style={{height: '100%'}} ref={mapRef} />;
}

export default Map;
