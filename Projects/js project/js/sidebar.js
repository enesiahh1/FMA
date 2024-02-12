let aside = document.getElementById(`aside`);
let btn = document.getElementById(`openClose`);

btn.addEventListener(`click`, () => {
    aside.classList.toggle(`collapse`);
    if (aside.classList.contains(`collapse`)) {
        btn.innerHTML = `
        <span class="material-symbols-outlined iconHover cpointer" title="See More">
        list
        </span>`;
    } else {
        btn.innerHTML = `
        <span class="material-symbols-outlined iconHover cpointer" title="Hide">
            more_vert
        </span>`
    }
});

function toggleExpansion(target) {
    if (target.classList.contains('expand') || target.parentElement.classList.contains('expand') || target.parentElement.parentElement.classList.contains('expand')) {
        // Traverse up to the parent <li> element
        let listItem = target.closest('li');

        // Ensure that listItem is not null or undefined
        if (listItem) {
            // Find the next sibling <ul> element
            let nestedList = listItem.nextElementSibling;

            // Toggle the display of the nested <ul> element
            if (nestedList && nestedList.classList.contains('nested-list')) {
                nestedList.style.display = (nestedList.style.display === 'none' || !nestedList.style.display) ? 'block' : 'none';

            }

        }

        let lastchild = listItem.lastElementChild;
        lastchild.classList.toggle('rotate-180');
    }
}



aside.addEventListener('click', function (event) {
    toggleExpansion(event.target);
});


