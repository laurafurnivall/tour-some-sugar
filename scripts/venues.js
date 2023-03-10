/*
Import appropiate function from database.
Define a varialbe for imported function.
Define and export a function for Venues that creates html
for that section of the document.

Guidelines:
- Venues displayed in bulleted list.
- Click event: Display all bands that booked venue
*/

import { getBookings, getVenues, getBands } from "./database.js"

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("venue")) {

            const [, venueId] = itemClicked.id.split("--")

            for (const venue of venues) {
                if (venue.id === parseInt(venueId)) {
                    let bandNames = []
                    for (const booking of bookings) {
                        if (booking.venueId === venue.id) {
                            for (let band of bands)
                                if (band.id === booking.bandId) {
                                    bandNames.push(band.name)
                                }
                        }
                    }
                    let allBands = bandNames.join(" and ")
                    window.alert(`${allBands}`)
                }
            }
        }
    }
)



export const Venues = () => {
    let venuesHTML = "<ul>"

    for (let venue of venues) {
        venuesHTML += `<li id="venues--${venue.id}">${venue.name}</li>`
    }

    venuesHTML += "</ul>"

    return venuesHTML
}