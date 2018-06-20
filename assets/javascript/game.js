// Institute Variable //

    var targetNumber  = "";    
    var wins = 0;
    var losses = 0;
    var counter = 0;
    var images = ["./assets/images/Crystal-Blue.png", "./assets/images/Crystal-Purple.png", "./assets/images/Crystal-Yellow.png", "./assets/images/Crystal-Red.png"]
    
// Functions //

        function randomTargetNumber () {
            targetNumber = Math.floor(Math.random() * 120) + 19;
        }
    
       


        function resetCrystals () {
            for (var i = 0; i < images.length; i++) {
                var crystal = $("<img>");
                crystal.addClass("crystal");
                crystal.attr("src", images[i]);
                crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
                crystal.attr("height", "100");
                $(".crystal-images").append(crystal);
            }
        }
    
        

        function resetHtml () {
            $(".target-number").html(targetNumber);
            $(".win-lose-counter").html("<p>Wins: " + wins + "<p>Losses: " + losses + "</p>");
            $(".score-number").html(counter);
            $(".crystal-images").empty();
        }

        function totalReset () {
            randomTargetNumber ();
            counter = 0;
            resetHtml ();
            resetCrystals ();
        }
    
// Running Code //

        // Initial Page Set Up
        randomTargetNumber();
        resetHtml ();
        resetCrystals ();

// Click Functions //  

        function crystalClick () {
            // This attr returns first value of selected html element
            counter += parseInt($(this).attr("value"));
            $(".score-number").html(counter);
            if (counter == targetNumber) {
                wins++;
                totalReset();
            }
            else if (counter > targetNumber) {
                losses++;
                totalReset();
            };
        };

 // For Lifecycle of document, every single time document is dynamically changed execute crystalClick function // 
 
 $(document).on("click", ".crystal", crystalClick);












    
