// Handling ID adjustment
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
