
document.addEventListener('DOMContentLoaded', function() {
    // Get all the accordion buttons
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        // Add click event listener to each button
        button.addEventListener('click', function() {
            // Toggle the "active" class for the button
            this.classList.toggle('active');

            // Toggle the display of the corresponding info section
            const info = this.parentElement.nextElementSibling;


            if (info.style.display === 'block') {
                info.style.display = 'none';
            } else {
                info.style.display = 'block';
            }


            setTimeout(() => {
                info.classList.toggle('show');
            }, 500); // 0.5-second delay

            // Toggle the icon (angle down or up)
            const icon = this.querySelector('.fa');
            icon.classList.toggle('fa-angle-down');
            icon.classList.toggle('fa-angle-up');
        });
    });
});
