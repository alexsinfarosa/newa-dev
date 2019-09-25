import React from "react"
import ReactMapGL, { NavigationControl } from "react-map-gl"

export default function StationMap() {
  const [viewport, setViewport] = React.useState({
    latitude: 42.444,
    longitude: -76.5019,
    zoom: 11,
    width: "100%",
    height: "100%",
  })

  return (
    <div className="w-full h-full">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={viewport => setViewport(viewport)}
      >
        <div className="ml-2 mt-2 w-8">
          <NavigationControl></NavigationControl>
        </div>
      </ReactMapGL>
    </div>
  )
}
