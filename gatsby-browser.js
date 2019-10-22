import "typeface-eb-garamond"
import "typeface-nunito-sans"
import "./src/css/style.css"

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faSpinner as fasSpinner,
  faPlane as fasPlane,
  faCircle as fasCircle,
} from "@fortawesome/pro-solid-svg-icons"
import {
  faSun as falSun,
  faMoon as falMoon,
  faFog as falFog,
  faWind as falWind,
  faClouds as falClouds,
  faCloudSun as falCloudSun,
  faCloudRain as falCloudRain,
  faCloudMoon as falCloudMoon,
  faCloudSleet as falCloudSleet,
  faSnowflakes as falSnowflakes,
} from "@fortawesome/pro-light-svg-icons"

library.add(
  // Light ------------------------
  falClouds,
  falMoon,
  falFog,
  falWind,
  falCloudSun,
  falCloudMoon,
  falSnowflakes,
  falCloudSleet,
  falSun,
  falCloudRain,

  // SOLID --------------------------
  fasSpinner,
  fasPlane,
  fasCircle
)
