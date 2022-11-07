import { React, useCallback, useEffect, useState } from 'react';
import L from 'leaflet';
import useSupercluster from 'use-supercluster';
import { Marker, Popup, useMap } from 'react-leaflet';
import ReactHtmlParser from 'react-html-parser';

const icons = {};
const fetchIcon = (count, size) => {
  if (!icons[count]) {
    icons[count] = L.divIcon({
      html: `<div class="cluster-maker">${count}</div>`,
    });
  }
  return icons[count];
};

const dkIcon = new L.Icon({
  iconUrl: '/img/dk-icon.png',
  iconSize: [30, 30],
});

const ShopMarkers = ({ places }) => {
  const maxZoom = 22;
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(8);
  const map = useMap();

  function updateMap() {
    const b = map.getBounds();
    setBounds([
      b.getSouthWest().lng,
      b.getSouthWest().lat,
      b.getNorthEast().lng,
      b.getNorthEast().lat,
    ]);
    setZoom(map.getZoom());
  }

  const onMove = useCallback(() => {
    updateMap();
  }, [map]);

  useEffect(() => {
    updateMap();
  }, []);

  useEffect(() => {
    map.on('move', onMove);
    return () => {
      map.off('move', onMove);
    };
  }, [map, onMove]);

  const points = places.data.map((place) => ({
    type: 'Feature',
    properties: {
      cluster: false,
      placeId: place.id,
      title: place.attributes.title,
      street: place.attributes.street,
      postcode: place.attributes.postcode,
      city: place.attributes.city,
    },
    geometry: {
      type: 'Point',
      coordinates: [
        parseFloat(place.attributes.lng),
        parseFloat(place.attributes.lat),
      ],
    },
  }));

  const { clusters, supercluster } = useSupercluster({
    points: points,
    bounds: bounds,
    zoom: zoom,
    options: { radius: 75, maxZoom: 17 },
  });

  return (
    <>
      {clusters.map((cluster) => {
        // every cluster point has coordinates
        const [longitude, latitude] = cluster.geometry.coordinates;
        // the point may be either a cluster or a crime point
        const { cluster: isCluster, point_count: pointCount } =
          cluster.properties;

        // we have a cluster to render
        if (isCluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              position={[latitude, longitude]}
              icon={fetchIcon(
                pointCount,
                10 + (pointCount / points.length) * 40
              )}
              eventHandlers={{
                click: () => {
                  const expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    maxZoom
                  );
                  map.setView([latitude, longitude], expansionZoom, {
                    animate: true,
                  });
                },
              }}
            />
          );
        }

        // we have a single point (crime) to render
        return (
          <Marker
            key={`point-${cluster.properties.placeId}`}
            position={[latitude, longitude]}
            icon={dkIcon}
          >
            <Popup>
              <h4 className='text-lg text-primary font-bold mb-0'>
                {cluster.properties.title}
              </h4>
              {cluster.properties.street} <br />
              {cluster.properties.postcode}
              <br />
              {cluster.properties.city}
            </Popup>
          </Marker>
        );
      })}
    </>
  );
};

export default ShopMarkers;
