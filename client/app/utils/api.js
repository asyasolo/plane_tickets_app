import axios from "axios"
/*const cors = require("cors")*/

const apiURL = "https://api.npoint.io/163b5e66df9f2741243e"

async function fetchFlights() {
  try {
    const response = await axios.get(`${apiURL}`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export default {
  fetchFlights
}
