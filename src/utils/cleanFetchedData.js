import { startOfDay, endOfDay } from "date-fns"
import {
  averageMissingValues,
  flatten,
  dailyToHourlyDatesLST,
  dailyToHourlyDates,
} from "./utils"

import { format } from "date-fns-tz"

export default (acisData, params) => {
  // console.log(acisData)
  // tzo
  const tzo = acisData.tzo

  // current station
  const currentStn = [...acisData.currentStn]

  const currentStnValues = params.eleList.map((el, i) =>
    averageMissingValues(flatten(currentStn.map(arr => arr[i + 1])))
  )
  console.log({ currentStnValues })

  let replaced = currentStnValues
  // sister station
  const sisterStn = [...acisData.sisterStn]
  if (sisterStn) {
    // a station can have not data at all and return an error
    const sisterStnValues = params.eleList.map((el, i) => {
      return averageMissingValues(flatten(sisterStn.map(arr => arr[i + 1])))
    })

    // console.log({ sisterStnValues })

    // replace current station values with sister station's
    replaced = params.eleList.map((el, i) => {
      return replaced[i].map((val, t) =>
        val === "M" ? sisterStnValues[i][t] : val
      )
    })
  }

  // dates from DEC 31 up to date of interest (not including forecast)
  let dates = currentStn.map(arr => arr[0])

  // if date of interest is in current year
  if (Object.keys(acisData).includes("forecast")) {
    const forecast = acisData.forecast
    dates = forecast.map(arr => arr[0])
    const forecastValues = params.eleList.map((el, i) => {
      return flatten(forecast.map(arr => arr[i + 1]))
    })

    // replace missing values with forecast data
    replaced = [...replaced, ...new Array(120).fill("M")]
    replaced = params.eleList.map((el, i) => {
      return replaced[i].map((val, t) =>
        val === "M" ? forecastValues[i][t] : val
      )
    })
  }

  console.log("forecast", replaced)

  ///////////////////////////////////////////////////////////////////////////////////////
  // Shifting and converting data to daylight saving time (DST)
  // ////////////////////////////////////////////////////////////////////////////////////

  // dates go from yyyy-01-01 to dateOfInterest (yyyy-mm-dd) plus 5 days if forecast
  dates = dates.slice(1)
  // values go from yyyy-01-01 00:00 to dateOfInterest current hour
  const valuesHourlyShifted = params.eleList.map((el, i) => {
    return [replaced[i][23], ...replaced[i].slice(24, -1)]
  })
  console.log(dates)
  console.log(valuesHourlyShifted)

  // hourlyDates go from yyyy-01-01 00:00 to dateOfInterest (yyyy-mm-dd 23:00)
  const hourlyDates = dates
    .map(date => dailyToHourlyDates(date))
    .reduce((acc, results) => [...acc, ...results], [])

  // array of indeces where the hour must be shifted
  const arrOFIndeces = hourlyDates.map((dateWithHour, i) => {
    const timeZoneName = {
      5: "America/New_York",
      6: "America/Chicago",
      7: "America/Denver",
      8: "America/Los_Angeles",
    }

    const serverTimezoneDate = format(
      new Date(dateWithHour),
      "yyyy-MM-dd HH:00XXX",
      {
        timeZone: timeZoneName[Math.abs(tzo)],
      }
    )
    const offset = parseInt(serverTimezoneDate.slice(-6, -3))
    // console.log(i, dateWithHour, serverTimezoneDate, offset, tzo)
    return offset === tzo ? null : i
  })
  // console.log(arrOFIndeces)

  // indices where daylight saving time is applied
  const dstIndeces = arrOFIndeces.filter(d => d)
  // console.log(dstIndeces)

  // console.log(valuesHourlyShifted)
  // the valuesShifted array has the hour shifted
  const valuesHourlyDST = params.eleList.map((el, i) => {
    return valuesHourlyShifted[i].map((v, t) =>
      t in dstIndeces ? valuesHourlyShifted[i][t + 1] : v
    )
  })

  console.log(valuesHourlyDST)

  let left = 0
  let right = 0
  const dailyData = dates.map(date => {
    const numOfHours = dailyToHourlyDatesLST(
      startOfDay(new Date(date)),
      endOfDay(new Date(date))
    ).length

    right = left + numOfHours

    let p = {}
    p["date"] = date

    params.eleList.forEach((el, t) => {
      p[el] = valuesHourlyDST[t].slice(left, right)
    })

    left += numOfHours
    return p
  })
  console.log(hourlyDates)
  const hourlyData = [hourlyDates[23], ...hourlyDates.slice(24, -1)].map(
    hour => {
      let p = {}
      p["date"] = format(new Date(hour), "yyyy-MM-dd HH:00XXX", {
        timeZone: "America/New_York",
      })
      params.eleList.forEach((el, t) => {
        p[el] = parseInt(valuesHourlyDST[t], 10)
      })
      return p
    }
  )

  console.log(dailyData, hourlyData)
  return { dailyData, hourlyData }
}
