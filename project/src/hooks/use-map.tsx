import {useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';

function useMap(mapRef: MutableRefObject<HTMLElement | null>): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current === null || map !== null) {
      return;
    }

    const instance = new Map(mapRef.current);
    const layer = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png');

    instance.addLayer(layer);
    setMap(instance);
  }, [mapRef, map]);

  return map;
}

export default useMap;
