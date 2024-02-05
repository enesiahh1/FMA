let sidbarOpen = `
<h3>cp <span>cool page</span></h3>
<hr>
<div class="profileRow">
    <div class="profileLeft cpointer"><img src="images/avatar.jpg" class="avatar" alt="profile"><br>
        <p>John Doe</p>
    </div><span class="material-symbols-outlined cpointer expand">
        expand_more
    </span>
</div>
<hr>
<nav>
    <ul>
        <li class="red active cpointer">
            <div class="listContent">
                <span class="material-symbols-outlined">
                    dashboard
                </span>
                <p>Dashboard</p>
            </div>
        </li>
        <li>
            <div class="listContent"><span class="material-symbols-outlined">
                    image
                </span>
                <p>Pages</p>
            </div>
            <span class="material-symbols-outlined cpointer expand">
                expand_more
            </span>
        </li>
        <li>
            <div class="listContent"><span class="material-symbols-outlined">
                    apps
                </span>
                <p>Components</p>
            </div><span class="material-symbols-outlined cpointer expand">
                expand_more
            </span>
        </li>
        <li>
            <div class="listContent"><span class="material-symbols-outlined">
                    content_paste
                </span>
                <p>Forms</p>
            </div><span class="material-symbols-outlined cpointer expand">
                expand_more
            </span>
        </li>
        <li>
            <div class="listContent"><span class="material-symbols-outlined">
                    grid_on
                </span>
                <p>Tables</p>
            </div><span class="material-symbols-outlined cpointer expand">
                expand_more
            </span>
        </li>
        <li>
            <div class="listContent"><span class="material-symbols-outlined">
                    location_on
                </span>
                <p>Maps</p>
            </div><span class="material-symbols-outlined cpointer expand">
                expand_more
            </span>
        </li>
        <li>
            <div class="listContent"><span class="material-symbols-outlined">
                    widgets
                </span>
                <p>Widgets</p>
            </div><span class="material-symbols-outlined cpointer expand">
                expand_more
            </span>
        </li>
        <li>
            <div class="listContent"><span class="material-symbols-outlined">
                    timeline
                </span>
                <p>Charts</p>
            </div><span class="material-symbols-outlined cpointer expand">
                expand_more
            </span>
        </li>
        <li>
            <div class="listContent"><span class="material-symbols-outlined">
                    date_range
                </span>
                <p>Calendar</p>
            </div><span class="material-symbols-outlined cpointer expand">
                expand_more
            </span>
        </li>
    </ul>
</nav>`;

let sidbarClosed = `
<h3>cp</h3>
<hr>
<div class="profile cpointer" id="profile">
    <div class="profileLeft"><img src="images/avatar.jpg" class="avatar" alt="profile">
</div>
</div>
<hr>
<nav>
    <ul>
        <li class="red active cpointer">
            <div class="listContent">
                <span class="material-symbols-outlined">
                    dashboard
                </span>
            </div>
        </li>
        <li>
            <div class="listContent"><span class="material-symbols-outlined">
                    image
                </span>
            </div>
        </li>
        <li>
            <div class="listContent"><span class="material-symbols-outlined">
                    apps
                </span>
            </div>
        </li>
        <li>
            <div class="listContent"><span class="material-symbols-outlined">
                    content_paste
                </span>
            </div>
        </li>
        <li>
            <div class="listContent"><span class="material-symbols-outlined">
                    grid_on
                </span>
            </div>
        </li>
        <li>
            <div class="listContent"><span class="material-symbols-outlined">
                    location_on
                </span>
            </div>
        </li>
        <li>
            <div class="listContent"><span class="material-symbols-outlined">
                    widgets
                </span>
            </div>
        </li>
        <li>
            <div class="listContent"><span class="material-symbols-outlined">
                    timeline
                </span>
            </div>
        </li>
        <li>
            <div class="listContent"><span class="material-symbols-outlined">
                    date_range
                </span>
            </div>
        </li>
    </ul>
</nav>`;


let open1 = true;
let aside = document.getElementById('aside');
let btn = document.getElementById('openClose');
let body = document.getElementById(`body`);
let profile = document.getElementById(`profile`);

let previousClickedElement = null;

function createNestedList(liElement) {
    // Create the HTML content for the new ul
    let nestedUlHTML = '<ul class="nested-list"><li>New Item 1</li><li>New Item 2</li></ul>';
    // Insert the new content after the clicked li
    liElement.insertAdjacentHTML('afterend', nestedUlHTML);
}

function removeNestedList(liElement) {
    // Remove the dynamically created ul
    let nestedUl = liElement.nextElementSibling;
    nestedUl && nestedUl.remove();
}

function toggleExpansion(target) {
    if (target.classList.contains('expand')) {
        // Check if the target is inside an <li> element
        let listItem = target.closest('li');
        if (listItem) {
            // If the element was clicked before, remove the dynamically created ul
            if (listItem.classList.contains('expanded')) {
                removeNestedList(listItem);
            } else {
                // Create a new ul after the <li>
                createNestedList(listItem);
            }

            // Toggle a class for rotation
            target.classList.toggle('rotate-180');

            // Toggle a class to mark if the element has been expanded
            listItem.classList.toggle('expanded');
        }
    }
}





function asideFunction(event) {
    toggleExpansion(event.target);
}



function asideFunction2() {
    if (!open1) {
        aside.innerHTML = sidbarOpen;
        body.style.gridTemplateColumns = `2fr 9fr`;
        profile.style.flexDirection = `column`;
        open1 = true;
        btn.innerHTML = `
        <span class="material-symbols-outlined iconHover cpointer" title="Hide">
            more_vert
        </span>`
    } else {
        aside.innerHTML = sidbarClosed;
        body.style.gridTemplateColumns = `0.74fr 10fr`;
        profile.style.flexDirection = `row`;
        open1 = false;
        btn.innerHTML = `<span class="material-symbols-outlined iconHover cpointer" title="See More">
        list
        </span>`;
    }
}

btn.addEventListener('click', asideFunction2);

aside.addEventListener('click', function (event) {
    toggleExpansion(event.target);
});


