import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1Ijoia2F5YW4wMS0iLCJhIjoiY202NnI0dHltMDNnMDJycHBmcnllM2p4NiJ9.FVFf8Mppp-rV84wZZxdsxg";

function RealTimeTracking() {
  const [truckLocations, setTruckLocations] = useState([]);
  const mapContainerRef = React.useRef(null);
  const mapRef = React.useRef(null);
  const markersRef = React.useRef([]);

  // Inicializa o mapa
  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current, // ID do contêiner
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-46.6333, -23.5505], // São Paulo
      zoom: 5,
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  // Busca localizações dos caminhões periodicamente
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/trucks");
        const data = await response.json();
        setTruckLocations(data);
      } catch (error) {
        console.error("Erro ao buscar localizações:", error);
      }
    };

    fetchLocations();
    const interval = setInterval(fetchLocations, 3000); // Atualiza a cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  // Atualiza os marcadores no mapa
  useEffect(() => {
    if (!mapRef.current || !truckLocations.length) return;

    // Remove marcadores antigos
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // Adiciona novos marcadores
    truckLocations.forEach((truck) => {
      const marker = new mapboxgl.Marker()
        .setLngLat([truck.lng, truck.lat])
        .setPopup(
          new mapboxgl.Popup().setHTML(
            `<h3>Caminhão ${truck.id}</h3><p>${truck.city}</p>`
          )
        )
        .addTo(mapRef.current);

      markersRef.current.push(marker);
    });
  }, [truckLocations]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Rastreamento em Tempo Real</h1>
      <div
        ref={mapContainerRef}
        style={{ height: "500px", width: "100%" }}
      ></div>
    </div>
  );
}

export default RealTimeTracking;
