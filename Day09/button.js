var colors = ["red", "green", "blue", "yellow", "orange", "purple"];
        var currentIndex = 0;

        function changeColor() {
            
            var button = document.getElementById("mybutton");
            button.style.backgroundColor = colors[currentIndex];
            currentIndex++;
            if (currentIndex >= colors.length) {
                currentIndex = 0;
            }
        }