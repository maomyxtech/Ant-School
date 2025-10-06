        // Check for saved user preference or default to light mode
        const toggleButton = document.getElementById('theme-toggle');
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');

        // Check if dark mode is already set in localStorage
        const currentTheme = localStorage.getItem('theme') || 'light';
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            moonIcon.style.display = 'inline'; // Show the moon icon
            sunIcon.style.display = 'none';    // Hide the sun icon
        }

        // Toggle dark/light mode
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode') ;

            // Toggle icons
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                moonIcon.style.display = 'inline'; // Show the moon icon
                sunIcon.style.display = 'none';    // Hide the sun icon
            } else {
                localStorage.setItem('theme', 'light');
                moonIcon.style.display = 'none';    // Hide the moon icon
                sunIcon.style.display = 'inline';   // Show the sun icon
            }
        });

