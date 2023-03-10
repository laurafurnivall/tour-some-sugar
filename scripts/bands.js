/*
Import appropiate function from database.
Define a varialbe for imported function.
Define and export a function for Bands that creates html
for that section of the document.

Guidelines:
- Name of bands listed in bulleted list.
- Click event: Venues the band is playing at
*/

import { getBands, getBookings, getVenues } from "./database.js";


const bands = getBands()
const bookings = getBookings()
const venues = getVenues()

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("band")) {

            const [, bandId] = itemClicked.id.split("--")

            for (const band of bands) {
                if (band.id === parseInt(bandId)) {
                    let venueNames = []
                    for (const booking of bookings) {
                        if (booking.bandId === band.id) {
                            for (let venue of venues)
                                if (venue.id === booking.venueId) {
                                    venueNames.push(venue.name)
                                }
                        }
                    }
                    let allVenues = venueNames.join(" and ")
                    window.alert(`${allVenues}`)
                }
            }
        }
    }
)

export const Bands = () => {
    let bandHTML = "<ul>"

    for (let band of bands) {
        bandHTML += `<li id="band--${band.id}">${band.name}</li>`
    }

    bandHTML += "</ul>"

    return bandHTML
}