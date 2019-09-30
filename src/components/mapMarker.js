import React from "react"
import { Marker } from "react-map-gl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function MapMarker({ stn, setPopupInfo, fetchStationData }) {
  console.log("I am rendering...")
  return (
    <Marker
      key={`${stn.network}-${stn.id}`}
      longitude={stn.lon}
      latitude={stn.lat}
    >
      {stn.network === "icao" && (
        <FontAwesomeIcon
          icon="plane"
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
          icon="circle"
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
}

export default React.memo(MapMarker)
