import React from "react"

import "mapbox-gl/dist/mapbox-gl.css"
import ReactMapGL, { Marker, NavigationControl, Popup } from "react-map-gl"
import axios from "axios"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/pro-solid-svg-icons"
import { faPlane, faCircle } from "@fortawesome/pro-solid-svg-icons"

import { stationIdAdjustment } from "../utils/utils"
import { format } from "date-fns"
import dataFetchReducer from "../utils/dataFetchReducer"
import { actions } from "xstate"

export default function StationMap({ dispatchSelectedStation }) {
  const [allStations, dispatchAllStations] = React.useReducer(
    dataFetchReducer,
    {
      isLoading: false,
      isError: false,
      data: [],
    }
  )

  React.useEffect(() => {
    let didCancel = false
    const fetchAllStations = async () => {
      dispatchAllStations({ type: "FETCH_INIT" })
      try {
        const result = await axios.get(
          `${window.location.protocol}//newa2.nrcc.cornell.edu/newaUtil/stateStationList/all`
        )
        if (!didCancel) {
          dispatchAllStations({
            type: "FETCH_SUCCESS",
            payload: result.data.stations,
          })
        }
      } catch (error) {
        if (!didCancel) {
          dispatchAllStations({ type: "FETCH_FAILURE" })
        }
      }
    }
    fetchAllStations()

    return () => {
      didCancel = true
    }
  }, [])

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

  const [viewport, setViewport] = React.useState({
    latitude: 42.444,
    longitude: -76.5019,
    zoom: 8,
    width: "100%",
    height: "100%",
  })
  const [popupInfo, setPopupInfo] = React.useState(null)

  const fetchStationData = async stn => {
    console.log(stn)
    const url = `${window.location.protocol}//data.nrcc.rcc-acis.org/StnData`
    const params = {
      // sid: `${stationIdAdjustment(stn)} ${stn.network}`,
      sid: "kgrr",
      // date: `${format(new Date(), "yyyy-MM-dd")}`,
      date: "2019-09-20",
      elems: "maxt",
    }
    console.log(params)
    dispatchSelectedStation({ type: "FETCH_INIT" })
    try {
      const station = await axios.post(url, params)
      console.log(station)

      // const darkSky = fetchDarkSkyAPI(stn.lat, stn.lon)
      // console.log(darkSky)

      const keyList = Object.keys(station.data)
      if (keyList.length > 0) {
        if (keyList.includes("error")) {
          dispatchSelectedStation({ type: "FETCH_FAILURE" })
        } else {
          dispatchSelectedStation({
            type: "FETCH_SUCCESS",
            payload: station.data,
          })
        }
      }
    } catch (error) {
      dispatchSelectedStation({ type: "FETCH_FAILURE" })
    }
  }

  // const [darkSky, dispatchDarkSky] = React.useReducer(dataFetchReducer, {
  //   isLoading: false,
  //   isError: false,
  //   data: null
  // })
  // const fetchDarkSkyAPI = async (lat, lon) => {
  //   const url = `https://api.darksky.net/forecast/${process.env.GATSBY_DARK_SKY_KEY}/${lat},${lon}`
  //   return await axios.get(url)
  // }

  return (
    <div className="flex flex-col h-full w-full rounded-lg shadow-lg overflow-hidden">
      <div className="p-5 bg-primary-300">
        <h3 className="text-primary-900 text-lg">
          Click a map marker to load the station details
        </h3>
      </div>

      <div className="flex-1 flex justify-center items-center">
        {allStations.isError && (
          <div className="text-center">
            Unable to place stations on the map...
          </div>
        )}

        {allStations.isLoading ? (
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

            {allStations.data.map(stn => {
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
                      onClick={() => {
                        setPopupInfo(stn)
                        fetchStationData(stn)
                      }}
                    ></FontAwesomeIcon>
                  )}

                  {stn.network !== "icao" && (
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="xs"
                      className="text-primary-900 opacity-75"
                      onClick={() => {
                        setPopupInfo(stn)
                        fetchStationData(stn)
                      }}
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
                <span className="text-xs text-primary-900">
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
