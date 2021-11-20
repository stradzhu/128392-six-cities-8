import {PointsType} from '../../types/offer-info';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {UrlMarker} from '../../consts';

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMarker.CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type MapProp = {
  points: PointsType,
  hoveredOfferId: number | undefined,
}

function Map({points, hoveredOfferId}: MapProp): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    const markers: Marker[] = [];
    const pointsFitBounds: [number, number][] = [];

    if (!map) {
      return;
    }

    points.forEach(({location: {latitude, longitude}, id}) => {
      const marker = new Marker({
        lat: latitude,
        lng: longitude,
      });

      marker.setIcon(hoveredOfferId === id ? currentCustomIcon : defaultCustomIcon).addTo(map);
      markers.push(marker);

      pointsFitBounds.push([latitude, longitude]);
    });

    map.fitBounds(pointsFitBounds, {padding: [20, 20]});

    return () => {
      if (map) {
        markers.forEach((marker) => map.removeLayer(marker));
      }
    };

  }, [map, points, hoveredOfferId]);

  return <div style={{height: '100%'}} ref={mapRef}/>;
}

export default Map;
