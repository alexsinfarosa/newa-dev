import React from "react"
import ReactMapGL from "react-map-gl"

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
        // mapStyle="mapbox://styles/xscanna/ck0wmlp3p0g8b1coymhpx0rv4"
        onViewportChange={viewport => setViewport(viewport)}
      ></ReactMapGL>
    </div>
  )
}
