// Create database of bands, venues, bookings

const database = {
    bands: [
        {
            id: 1,
            name: "Quarantine Quail",
            members: 2,
            genre: "Easy listening",
            year: 2020
        },
        {
            id: 2,
            name: "Murder of Crows",
            members: 6,
            genre: "Electronic",
            year: 2012
        },
        {
            id: 3,
            name: "Smooth Crocodiles",
            members: 4,
            genre: "Folk",
            year: 1990
        },
        {
            id: 4,
            name: "The Sleepy Bear",
            members: 2,
            genre: "R&B Soul",
            year: 2007
        },
        {
            id: 5,
            name: "The Goat Gambler",
            members: 5,
            genre: "Punk",
            year: 2015
        },
    ],
    venues: [
        {
            id: 1,
            name: "The Yellow Mongoose",
            address: "8194 Park Drive, Lake Worth, FL 33460",
            sqft: 1500,
            maxOccupancy: 100
        },
        {
            id: 2,
            name: "The Oliver",
            address: "59 Lawrence Street, Easton, PA 18042",
            sqft: 900,
            maxOccupancy: 60
        },
        {
            id: 3,
            name: "Stone Haus",
            address: "9922 Thomas Circle, Queensbury, NY 12804",
            sqft: 750,
            maxOccupancy: 50
        },
        {
            id: 4,
            name: "The Grey Wolf",
            address: "384 Cedarwood Lane, Madison, AL 35758",
            sqft: 450,
            maxOccupancy: 30
        },
        {
            id: 5,
            name: "Schnabeltier",
            address: "2 Wild Rose Road, Greenfield, IN 46140",
            sqft: 1350,
            maxOccupancy: 90
        },
    ],
    bookings: [
        {
            id: 1,
            bandId: 2,
            venueId: 1,
            date: "Sunday, April 16, 2023"
        },
        {
            id: 2,
            bandId: 4,
            venueId: 2,
            date: "Saturday, June 24, 2023"
        },
        {
            id: 3,
            bandId: 3,
            venueId: 3,
            date: "Sunday, September 17, 2023"
        },
        {
            id: 4,
            bandId: 1,
            venueId: 4,
            date: "Saturday, October 28, 2023"
        },
        {
            id: 5,
            bandId: 5,
            venueId: 5,
            date: "Sunday, October 29, 2023"
        },
        {
            id: 6,
            bandId: 1,
            venueId: 5,
            date: "Sunday, October 29, 2023"
        },
        {
            id: 7,
            bandId: 3,
            venueId: 4,
            date: "Saturday, October 28, 2023"
        },
        {
            id: 8,
            bandId: 5,
            venueId: 3,
            date: "Sunday, September 17, 2023"
        },
        {
            id: 9,
            bandId: 4,
            venueId: 1,
            date: "Saturday, June 24, 2023"
        },
        {
            id: 10,
            bandId: 2,
            venueId: 2,
            date: "Sunday, April 16, 2023"
        }
    ]
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}