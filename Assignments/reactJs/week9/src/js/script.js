document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');

    menuIcon.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents the click event from propagating to the document
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInside = sidebar.contains(event.target) || menuIcon.contains(event.target);
        if (!isClickInside && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
});