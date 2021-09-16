fetch("https://github.com/dcmar18/DawgDaze/blob/main/scripts/data.json")
.then(mockResponses => {
   return mockResponses.json();
})
.then(data => console.log(data));

let eventsHTML = autumnevents.map(function (el) {
    let event
    //if (el.prettydate == "Thu, Sep 23" ){
    if (el.virtual != "null") {
        event =
            `<div class="card">
        <div class="eventimg">
            <img src="${el.image}" alt="Picture of ${el.title}" >
        </div>
        <div class="eventdetails">
            <h2 style="color: #4b2e83">${el.title}</h2>
            <h3  style="color: #4b2e83">${el.prettydate} ${el.start}-${el.end}</h3>
            
            <h3><img src="https://lib.uw.edu/images2/graphics/icon-location/image_preview"> Virtual Location: <u style="color: #0074bb">${el.virtual}</u></h3>
            <p class="narr">${el.description}</p>
        </div>
    </div>`;
        return event;
    }else{
        event =
        `<div class="card">
    <div class="eventimg">
        <img src="${el.image}" alt="Picture of ${el.title}" >
    </div>
    <div class="eventdetails">
        <h3 style="color: #4b2e83">${el.title}</h2>
        <h3  style="color: #4b2e83">${el.prettydate} ${el.start}-${el.end}</h3>
        
        <h3><img src="https://lib.uw.edu/images2/graphics/icon-location/image_preview"> In-Person Location: <u style="color: #0074bb">${el.oncampus}</u></h3>
        <p class="narr">${el.description}</p>
    </div>
</div>`;
    return event;
    }
//}
});

$(document).ready(function () {
    console.log("ready!");
    $(".template-hook").append(eventsHTML);
});