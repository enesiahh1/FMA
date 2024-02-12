console.log(`im the notificacions`);



//save 5 notifacicons in local storge

let defautleNotifacicons = [
    `Jhon Doe sent a message`,
    `Someone viewed your profile`,
    `Abrakadabra`,
    `hello, world notification`,
    `jane doe wante to connect`
]

localStorage.setItem(`notification`, JSON.stringify(defautleNotifacicons));

//1. i lexojme prej ls notifications
let notifacicons = JSON.parse(localStorage.getItem(`notification`));


//2.i vendosim n`html
let notifaciconsBody = document.getElementById(`notificationsListing`);

notifacicons.forEach((elemet) => {
    let el = document.createElement(`p`);
    el.textContent = elemet;
    notifaciconsBody.appendChild(el);
});


//3.e ndreqim numrin e notifications
let notifaciconsNumberHtml = document.getElementById(`notificationsNumber`);
notifaciconsNumberHtml.textContent = notifacicons.length;

//4.me click mu qel
let notifaciconsDiv = document.getElementById(`notifications`);
let notifaciconsListing = document.getElementById(`notificationsListing`);
let notifaciconsListingOpen = false;

notifaciconsDiv.addEventListener(`click`, () => {
    if (!notifaciconsListingOpen) {
        notifaciconsListing.style.display = `block`;
        body.addEventListener(`dblclick`, () => {
            if (notifaciconsListing.style.display == `block`) {
                notifaciconsListing.style.display = `none`;
            }
        })
        notifaciconsListingOpen = true;
    } else {
        notifaciconsListing.style.display = `none`;
        notifaciconsListingOpen = false;
    }
})

let body = document.querySelector(`body`);
