document.getElementById('voting-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    var selectedOrganizer = document.getElementById('organizer').value;

    // Check if an organizer is selected
    if (selectedOrganizer) {
        switch (selectedOrganizer) {
            case 'rohit-saha':
                window.location.href = 'https://f903fbe5619d4da3af8e844ec14000d9.serveo.net'; // Redirect to Google for Rohit Saha
                break;
            case 'rahul-burman':
                // Handle redirect for Rahul Burman if needed
                break;
            case 'sayantan-dey':
                // Handle redirect for Sayantan Dey if needed
                break;
            default:
                // Handle default case if needed
                break;
        }
    }
});
