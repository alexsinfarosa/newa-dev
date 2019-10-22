import React from "react"

import "mapbox-gl/dist/mapbox-gl.css"
import ReactMapGL, { Marker, NavigationControl, Popup } from "react-map-gl"
import axios from "axios"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { stationIdAdjustment } from "../utils/utils"
import { vXDef } from "../utils/vXDef"
import { format } from "date-fns"
import dataFetchReducer from "../utils/dataFetchReducer"

export default function StationMap({
  userLat,
  userLon,
  dispatchSelectedStation,
}) {
  const [allStations, dispatchAllStations] = React.useReducer(
    dataFetchReducer,
    {
      isLoading: false,
      isError: false,
      data: [],
    }
  )
  // console.log({ userLat, userLon })
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
    latitude: userLat ? userLat : 42.444,
    longitude: userLon ? userLon : -76.5019,
    zoom: 8,
    width: "100%",
    height: "100%",
  })
  const [popupInfo, setPopupInfo] = React.useState(null)

  const fetchStationData = async stn => {
    console.log(stn)
    const url = `${window.location.protocol}//data.nrcc.rcc-acis.org/StnData`
    const params = {
      sid: `${stationIdAdjustment(stn)}`,
      sdate: `2019-03-01`,
      edate: "2019-10-22",
      elems: [{ vX: vXDef[stn.network]["temp"] }],
    }
    console.log(params)
    dispatchSelectedStation({ type: "FETCH_INIT" })
    try {
      const station = await axios.post(url, params)
      const darkSky = await fetchDarkSkyAPI(stn.lat, stn.lon)

      const payload = {
        station: { ...stn, data: [station.data.data] },
        darkSky: {
          currently: darkSky.data.currently,
          daily: darkSky.data.daily,
        },
      }

      console.log(payload)

      const keyList = Object.keys(station.data)
      console.log(keyList)
      if (keyList.length > 0) {
        if (keyList.includes("error")) {
          dispatchSelectedStation({ type: "FETCH_FAILURE" })
        } else {
          dispatchSelectedStation({
            type: "FETCH_SUCCESS",
            payload,
          })
        }
      }
    } catch (error) {
      dispatchSelectedStation({ type: "FETCH_FAILURE" })
    }
  }

  const fetchDarkSkyAPI = async (lat, lon) => {
    const removeMe = `https://cors-anywhere.herokuapp.com/` // DEVELOPMENT
    const url = `${removeMe}https://api.darksky.net/forecast/${process.env.GATSBY_DARK_SKY_KEY}/${lat},${lon}`
    return axios.get(url)
  }

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
            <FontAwesomeIcon icon="spinner" size="2x" spin></FontAwesomeIcon>
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
                  className="cursor-pointer"
                >
                  {stn.network === "icao" && (
                    <FontAwesomeIcon
                      icon="plane"
                      rotation={270}
                      className="text-primary-900 opacity-75 cursor-pointer hover:text-black"
                      onClick={() => {
                        setPopupInfo(stn)
                        fetchStationData(stn)
                      }}
                    ></FontAwesomeIcon>
                  )}

                  {stn.network !== "icao" && (
                    <FontAwesomeIcon
                      icon="circle"
                      size="xs"
                      className="text-primary-900 opacity-75 cursor-pointer hover:text-black"
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
          <FontAwesomeIcon icon="circle"></FontAwesomeIcon>
          <span className="ml-2">NEWA Station</span>
        </div>

        <div>
          <FontAwesomeIcon icon="plane" rotation={270}></FontAwesomeIcon>
          <span className="ml-2">Airport Station</span>
        </div>
      </div>
    </div>
  )
}
