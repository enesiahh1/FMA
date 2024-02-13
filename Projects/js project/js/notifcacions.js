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
let customization = JSON.parse(localStorage.getItem(`customization`));

//2.i vendosim n`html
let notifaciconsBody = document.getElementById(`notificationsListing`);

notifacicons.forEach((elemet) => {
    let el = document.createElement(`p`);
    el.textContent = elemet;
    el.addEventListener('mouseenter', function () {
        // Add the class when the mouse enters
        el.classList.add('active');
    });
    el.addEventListener('mouseleave', function () {
        // Add the class when the mouse enters
        el.classList.remove('active');
    });
    notifaciconsBody.appendChild(el);
});


//3.e ndreqim numrin e notifications
let notifaciconsNumberHtml = document.getElementById(`notificationsNumber`);
notifaciconsNumberHtml.textContent = notifacicons.length;
notifaciconsNumberHtml.style.background;

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
