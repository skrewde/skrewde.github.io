        // Array of background colors to cycle through
        const colors = ["#006ab1", "#4a0521", "#5d2965", "#3f3d3b", "#333a8b", "#003c64", "#297e55", "#c9918e", "#b78f19"];

        // Function to set a random background color
        function setRandomBackgroundColor() {
            const randomIndex = Math.floor(Math.random() * colors.length);
            document.body.style.backgroundColor = colors[randomIndex];
        }

        // Set a random background color when the page loads
        window.addEventListener("load", setRandomBackgroundColor);

        // You can also add an event listener to change the color on a button click or other event
        // Example: document.getElementById("changeColorButton").addEventListener("click", setRandomBackgroundColor);