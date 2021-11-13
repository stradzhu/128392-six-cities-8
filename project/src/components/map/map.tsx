import {CityType} from '../../types/offer-info';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import {Icon, Marker} from 'leaflet';
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
    const markers: Marker[] = [];
    if (!map) {
      return;
    }

    const centerMap = {lat: 0, lng: 0};

    points.forEach(({location: {latitude, longitude}}) => {
      centerMap.lat += latitude;
      centerMap.lng += longitude;

      const marker = new Marker({
        lat: latitude,
        lng: longitude,
      });

      marker.setIcon(
        selectedCity !== undefined
        && latitude === selectedCity.location.latitude
        && longitude === selectedCity.location.longitude
          ? currentCustomIcon
          : defaultCustomIcon,
      ).addTo(map);

      markers.push(marker);
    });

    centerMap.lat /= points.length;
    centerMap.lng /= points.length;
    map.setView(centerMap);

    return () => {
      if (map) {
        markers.forEach((marker) => map.removeLayer(marker));
      }
    };

  }, [map, points, selectedCity]);

  return <div style={{height: '100%'}} ref={mapRef} />;
}

export default Map;
