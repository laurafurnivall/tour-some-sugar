 /*
Import appropiate functions from other pages.
.querySelectory...
define variable that holds base html for each section
and where each imported function lands. 
set mainContainer.innerHTML = variable that holds HTML
 */

import { Bands } from "./bands.js"
import { Bookings } from "./bookings.js"
import { Venues } from "./venues.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour some Sugar on Me</h1>

<article class="bookings">
    <h2>Bookings</h2>
    ${Bookings()}
</article>

<article class="details">
    <section class="listDetail">
        <h2>Venues</h2>
        ${Venues()}
    </section>
    <section class="listDetail">
        <h2>Bands</h2>
        ${Bands()}
    </section>
</article>

`

mainContainer.innerHTML = applicationHTML