import {useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import {CityType} from '../types/offerInfo';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, points: CityType[]): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current === null || map !== null) {
      return;
    }

    const centerMap = {lat: 0, lng: 0};

    points.forEach(({location: {latitude, longitude}}) => {
      centerMap.lat += latitude;
      centerMap.lng += longitude;
    });

    centerMap.lat /= points.length;
    centerMap.lng /= points.length;

    const instance = new Map(mapRef.current, {
      center: centerMap,
      zoom: 12,
    });

    const layer = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png');
    instance.addLayer(layer);

    setMap(instance);
  }, [mapRef, map, points]);

  return map;
}

export default useMap;
