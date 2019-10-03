import {
  isBefore,
  addHours,
  isEqual,
  startOfDay,
  endOfDay,
  getHours,
} from "date-fns"

// Handling station ID adjustment for some networks or states
export const stationIdAdjustment = stn => {
  // Michigan
  if (
    stn.state === "MI" &&
    stn.network === "miwx" &&
    stn.id.slice(0, 3) === "ew_"
  ) {
    // example: ew_ITH
    return stn.id.slice(3, 6)
  }

  // NY mesonet
  if (
    stn.state === "NY" &&
    stn.network === "nysm" &&
    stn.id.slice(0, 5) === "nysm_"
  ) {
    // example: nysm_spra
    return stn.id.slice(5, 9)
  }

  return stn.id
}

// // DARKSKY API -------------------------------------------------
// export const fetchDarkSkyAPI = async (lat, lon) => {
//   const removeMe = `https://cors-anywhere.herokuapp.com/` // DEVELOPMENT
//   const url = `${removeMe}https://api.darksky.net/forecast/${process.env.GATSBY_DARK_SKY_KEY}/${lat},${lon}`
//   return axios.get(url)
// }

export const avgTwoStringNumbers = (a, b) => {
  const aNum = parseFloat(a)
  const bNum = parseFloat(b)
  return ((aNum + bNum) / 2).toFixed(1)
}

const weightedMean = res => {
  // ex: [2,M,M,5] => [2,3,45]
  const arr = res.map(d => Number(d))
  const firstM = ((arr[0] + arr[0] + arr[3]) / 3).toPrecision(2)
  const secondM = ((arr[0] + arr[3] + arr[3]) / 3).toPrecision(2)
  return [firstM, secondM]
}

export const averageMissingValues = d => {
  // console.log(d);
  if (d.includes("M")) {
    if (d[0] === "M" && d[1] !== "M") d[0] = d[1]
    if (d[0] === "M" && d[1] === "M" && d[2] !== "M") {
      d[0] = d[2]
      d[1] = d[2]
    }

    const len = d.length - 1
    if (d[len] === "M" && d[len - 1] !== "M") d[len] = d[len - 1]
    if (d[len] === "M" && d[len - 1] === "M" && d[len - 2] !== "M") {
      d[len] = d[len - 2]
      d[len - 1] = d[len - 2]
    }

    return d.map((t, i) => {
      if (d[i - 1] !== "M" && t === "M" && d[i + 1] !== "M") {
        return avgTwoStringNumbers(d[i - 1], d[i + 1])
      }

      if (
        d[i - 1] !== "M" &&
        t === "M" &&
        d[i + 1] === "M" &&
        d[i + 2] !== "M"
      ) {
        const arr = [d[i - 1], d[i], d[i + 1], d[i + 2]]
        const rep = weightedMean(arr)
        t = rep[0]
        d[i + 1] = rep[1]
      }

      return t
    })
  }
  return d
}

export const dailyToHourlyDatesLST = (sdate, edate) => {
  let startDay = sdate
  let endDay = edate

  let results = []
  results.push(startDay)

  while (isBefore(new Date(startDay), new Date(endDay))) {
    startDay = addHours(new Date(startDay), 1)
    if (
      isBefore(new Date(startDay), new Date(endDay)) ||
      isEqual(new Date(startDay), new Date(endDay))
    ) {
      results.push(startDay)
    }
  }
  return results
}

export const dailyToHourlyDates = date => {
  const numOfHours = dailyToHourlyDatesLST(
    startOfDay(new Date(date)),
    endOfDay(new Date(date))
  )
  const hoursArr = numOfHours.map(h => getHours(new Date(h)))
  let results = hoursArr.map(hour => {
    if (hour >= 0 && hour <= 9) hour = `0${hour}`
    return `${date} ${hour}:00`
  })
  // console.log(results);
  return results
}

export const flatten = arr => Array.prototype.concat(...arr)

export const unflatten = array => {
  let res = []
  while (array.length > 0) res.push(array.splice(0, 24))
  return res
}

// Convert Fahrenheit to Celcius
export const fahrenheitToCelcius = (t, missing) =>
  t === missing ? t : (((t - 32) * 5) / 9).toFixed(1)

// Convert Celcius to Fahrenheit
export const celciusToFahrenheit = (t, missing) =>
  t === missing ? t : (t * (9 / 5) + 32).toFixed(1)

// This formula is used to calculate the growing degree day
export const baskervilleEmin = (min, max, base) => {
  if (min >= base) {
    const avg = (max + min) / 2
    return avg - base
  } else if (max <= base) {
    return 0
  } else {
    const avg = (max + min) / 2
    const amt = (max - min) / 2
    const t1 = Math.sin((base - avg) / amt)
    return avg < 0
      ? 0
      : (amt * Math.cos(t1) - (base - avg) * (3.14 / 2 - t1)) / 3.14
  }
}
