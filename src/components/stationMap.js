import React from "react"

import "mapbox-gl/dist/mapbox-gl.css"
import ReactMapGL, { Marker, NavigationControl, Popup } from "react-map-gl"
import axios from "axios"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/pro-solid-svg-icons"
import { faPlane, faCircle } from "@fortawesome/pro-solid-svg-icons"

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      }
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      throw new Error()
  }
}

export default function StationMap() {
  const [state, dispatch] = React.useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: [],
  })

  React.useEffect(() => {
    let didCancel = false
    const fetchAllStations = async () => {
      dispatch({ type: "FETCH_INIT" })
      try {
        const result = await axios.get(
          `${window.location.protocol}//newa2.nrcc.cornell.edu/newaUtil/stateStationList/all`
        )
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data.stations })
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" })
        }
      }
    }
    fetchAllStations()

    return () => {
      didCancel = true
    }
  }, [])

  const [viewport, setViewport] = React.useState({
    latitude: 42.444,
    longitude: -76.5019,
    zoom: 8,
    width: "100%",
    height: "100%",
  })

  const [popupInfo, setPopupInfo] = React.useState(null)

  const settings = {
    dragPan: true,
    dragRotate: true,
    scrollZoom: false,
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
    <div className="flex flex-col h-full w-full rounded-lg shadow-lg overflow-hidden">
      <div className="p-5 bg-primary-300">
        <h3 className="text-primary-900 text-lg">
          Click a map marker to load the station details
        </h3>
      </div>

      <div className="flex-1 flex justify-center items-center">
        {state.isError && (
          <div className="text-center">
            Unable to place stations on the map...
          </div>
        )}

        {state.isLoading ? (
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
            onClick={() => setPopupInfo(null)}
          >
            <div className="relative">
              <NavigationControl className="absolute right-0 mr-1 mt-1 z-10"></NavigationControl>
            </div>

            {state.data.map(stn => {
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
                      onClick={() => setPopupInfo(stn)}
                    ></FontAwesomeIcon>
                  )}

                  {stn.network !== "icao" && (
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="xs"
                      className="text-primary-900 opacity-75"
                      onClick={() =>
                        popupInfo ? setPopupInfo(null) : setPopupInfo(stn)
                      }
                    ></FontAwesomeIcon>
                  )}
                </Marker>
              )
            })}

            {popupInfo && (
              <Popup
                tipSize={5}
                longitude={popupInfo.lon}
                latitude={popupInfo.lat}
                closeOnClick={true}
                closeButton={false}
                onClose={() => setPopupInfo(null)}
              >
                <span className="text-sm text-primary-900">
                  {popupInfo.name}
                </span>
              </Popup>
            )}
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
