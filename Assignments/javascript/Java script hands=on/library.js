let title = document.title
let change = document.querySelector("link[rel='icon']");
let save = document.querySelector("link[rel='icon']");
let href = save ? save.href : null;
let bell = `https://cdn-icons-png.flaticon.com/512/1827/1827272.png`
let interid
function startnotifacion(input) {
    if (interid) {
        endnotifacion();
    }
    interid = setInterval(() => {
        if (document.title == title) {
            document.title = input
            change.href = bell
        } else {
            document.title = title
            change.href = href
        }
    }, 1000);
}

function endnotifacion() {
    clearInterval(interid)
    document.title = title;
    change.href = href
}


