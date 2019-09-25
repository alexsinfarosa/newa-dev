import React from "react"
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl"
import axios from "axios"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/pro-solid-svg-icons"
import { faPlane, faCircle } from "@fortawesome/pro-solid-svg-icons"

export default function StationMap() {
  const [stations, setStations] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    const fetchAllStations = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await axios.get(
          `${window.location.protocol}//newa2.nrcc.cornell.edu/newaUtil/stateStationList/all`
        )
        setStations(result.data.stations)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchAllStations()
  }, [])

  const [viewport, setViewport] = React.useState({
    latitude: 42.444,
    longitude: -76.5019,
    zoom: 11,
    width: "100%",
    height: "100%",
  })

  const settings = {
    dragPan: true,
    dragRotate: true,
    scrollZoom: true,
    touchZoom: true,
    touchRotate: true,
    keyboard: true,
    doubleClickZoom: true,
    minZoom: 0,
    maxZoom: 20,
    minPitch: 0,
    maxPitch: 85,
  }

  return (
    <div className="flex flex-col h-full rounded-lg shadow-lg overflow-hidden">
      <div className="p-5 bg-primary-300">
        <h3 className="text-primary-900 text-lg">
          Click a map marker to load the station details
        </h3>
      </div>

      <div className="flex-1 flex justify-center items-center">
        {isError && (
          <div className="text-center">
            Unable to place stations on the map...
          </div>
        )}

        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            <FontAwesomeIcon icon={faSpinner} size="2x" spin></FontAwesomeIcon>
          </div>
        ) : (
          <ReactMapGL
            {...viewport}
            {...settings}
            mapboxApiAccessToken={process.env.GATSBY_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={viewport => setViewport(viewport)}
          >
            <div className="ml-2 mt-2 w-8">
              <NavigationControl></NavigationControl>
            </div>

            {stations.map(stn => {
              return (
                <Marker
                  key={`${stn.network}-${stn.id}`}
                  longitude={stn.lon}
                  latitude={stn.lat}
                >
                  {stn.network === "icao" && (
                    <FontAwesomeIcon
                      icon={faPlane}
                      rotation={270}
                      className="text-primary-900 opacity-75"
                    ></FontAwesomeIcon>
                  )}

                  {stn.network !== "icao" && (
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="xs"
                      className="text-primary-900 opacity-75"
                    ></FontAwesomeIcon>
                  )}
                </Marker>
              )
            })}
          </ReactMapGL>
        )}
      </div>

      <div className="flex justify-between p-5 text-xs text-primary-900 opacity-75 font-semibold">
        <div>
          <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
          <span className="ml-2">NEWA Station</span>
        </div>

        <div>
          <FontAwesomeIcon icon={faPlane} rotation={270}></FontAwesomeIcon>
          <span className="ml-2">Airport Station</span>
        </div>
      </div>
    </div>
  )
}
