document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    let lastScrollTop = 0;
    const animationDuration = '0.3s'; // Adjust for faster/slower animation
    header.style.transition = `opacity ${animationDuration} ease-in-out, transform ${animationDuration} ease-in-out, visibility ${animationDuration} ease-in-out`;

    window.addEventListener('scroll', function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > headerHeight && scrollTop > lastScrollTop) {
            // Scrolling down, hide the header
            header.style.opacity = '0';
            header.style.transform = 'translateY(-100%)'; /* Slide up */
            header.style.visibility = 'hidden';
        } else if (scrollTop < lastScrollTop) {
            // Scrolling up, show the header
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
            header.style.visibility = 'visible';
        } else if (scrollTop <= headerHeight) {
            // At the top, ensure header is visible
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
            header.style.visibility = 'visible';
        }

        lastScrollTop = scrollTop;
    });
});