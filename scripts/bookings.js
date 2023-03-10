/*
Import appropiate functions from database.
Define a varialbe for imported function.
Define and export a function for Bookings that creates html
for that section of the document.

Guidelines:
- "Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023"
Will need band name, venue and date.
- Click event: when booking is clicked, it will display
band information: 
    Rocket Pumpkins
    EDM
    Formed in 2005
    3 band members
*/

import { getBands, getBookings, getVenues } from "./database.js"

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("booking")) {

            const [, bookingId] = itemClicked.id.split("--")
            for (let booking of bookings)
                if (booking.id === parseInt(bookingId))
                    for (let band of bands)
                    if (band.id === booking.bandId) {

                    window.alert(`
                    ${band.name}
                    ${band.genre}
                    Formed in ${band.year}
                    ${band.members} band members`)
                    }
        }
    }
)


const findBand = (booking, allBands) => {
    let bandBooking = null
    for (let band of allBands) {
        if (band.id === booking.bandId) {
            bandBooking = band
        }
    }
    return bandBooking
}

const findVenue = (booking, allVenues) => {
    let bandVenue = null
    for (let venue of allVenues) {
        if (venue.id === booking.venueId) {
            bandVenue = venue
        }
    }
    return bandVenue
}



export const Bookings = () => {
    let bookingsHTML = "<ul>"

    for (let booking of bookings) {
        let band = findBand(booking, bands)
        let venue = findVenue(booking, venues)

        bookingsHTML += `<li id="booking--${booking.id}">${band.name} is playing at ${venue.name} on ${booking.date}</li>`
    }

    bookingsHTML += "</ul>"

    return bookingsHTML
}