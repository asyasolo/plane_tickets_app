import axios from "axios"

const ticketsURL = "https://api.npoint.io/163b5e66df9f2741243e"
const companiesURL = "https://api.npoint.io/a1b1c28b32d9785bb26c"

async function fetchTickets(filters = {}) {
  if (Object.keys(filters).length) {
    const { origin, destination, dateStart, dateEnd, numStops, companyId } = filters

    const params = {
      info: {
        origin,
        destination,
        dateStart,
        dateEnd,
        numStops
      },
      companyId
    }
    try {
      const response = await axios.get(ticketsURL, { params })
      console.log("there is your response", response)
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  } else {
    try {
      const response = await axios.get(ticketsURL)
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

async function fetchCompanies() {
  try {
    const response = await axios.get(`${companiesURL}`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export default {
  fetchTickets,
  fetchCompanies
}
