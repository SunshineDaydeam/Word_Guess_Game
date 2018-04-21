    //letters available
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //possible categories and words  
    carBrands = ["acura", "aston martin", "audi", "bentley", "bmw", "bugatti", "buick", "cadillac", "chevrolet", "chevy", 
    "chrysler", "citroen", "dodge", "ferrari", "fiat", "ford", "geely", "honda", "hyundai", "infiniti", "jaguar", "jeep", 
    "koenigsegg", "lamborghini", "land rover", "lexus", "maserati", "mazda", "mclaren", "mercedes benz", "mitsubishi", "pagani", 
    "peugot", "porsche", "renault", "rolls royce", "subaru", "suzuki", "tesla", "toyota", "volkswagen", "volvo"]
    guitarBrands = ["alembic", "alvarez", "aria", "breedlove", "collings", "cort", "danelectro", "dean", "dobro", 
    "duesenberg", "epiphone", "ernie ball", "fender", "garrison", "gibson", "godin", "gretsch", "guild", "harmony", "heritage", 
    "hofner", "hohner", "ibanez", "jackson", "kramer", "larivee", "lowden", "luna", "martin","oscar schmidt", "ovation", 
    "parker", "paul reed smith", "peavey", "rainsong", "ramirez", "rickenbacker", "samick", "santa cruz", "seagull", "sigma", 
    "squier", "takamine", "taylor", "teisco", "tacoma", "vox", "walden", "warwick", "yamaha", "yairi"]
    vegasStripCasinos = ["aria", "ballys", "bellagio", "casino royale", "caesars palace", "circus circus", "cosmopolitan", 
    "encore", "excalibur", "flamingos", "harras", "linq", "luxor", "mandalay bay", "mgm grand", "monte carlo", "mirage", 
    "new york new york", "palazzo", "paris", "planet hollywood", "slots a fun", "stratosphere", "the cromwell", "treasure island", 
    "tropicana", "venetian", "winn"],
    austinBbq = ["franklins", "rudys", "valentinas", "kerlin", "browns", "freedmans", "terry blacks", "coopers old time pit", 
    "micklewaith craft meats", "leonardis", "salt lick"]
    chordTypes = ["augmented", "diminished", "suspended", "seventh", "major", "minor", "power", "ninth", "eleventh"]
    musicGenres = ["alternative", "americana", "blues", "bluegrass", "rock", "rockabilly", "punk", "grunge", "contemporary", 
    "classical", "country", "baroque", "choral", "opera", "orchestral", "rennaissance", "gospel", "dance", "dubstep", "hardcore", 
    "techno", "trance", "reggae", "swing", "rap", "christmas", "metal", "jazz", "ragtime", "karaoke", "mariachi", "latin", "salsa", 
    "britpop", "funk", "motown", "psychedelic", "soul", "ska", "surf", "indie", "chicano", "acapella", "calypso"]
    presidentsUs = ["george washington","john adams","thomas jefferson","james madison","james monroe","john quincy adams",
    "andrew jackson","martin van buren","william h harrison","john tyler","james k polk","zachary taylor","millard fillmore",
    "franklin pierce","james buchanan","abraham lincoln","andrew johnson","ulysses s grant","rutherford b hayes","james a garfield",
    "chester a arthur","grover cleveland","benjamin harrison","grover cleveland","william mckinley","theodore roosevelt",
    "william h taft","woodrow wilson","warren g harding","calvin coolidge","herbert hoover","franklin d roosevelt","harry truman",
    "dwight eisenhower","john f kennedy","lyndon b johnson","richard m nixon","gerald ford","jimmy carter","ronald reagan",
    "george hw bush","bill clinton","george w bush","barack obama"]
    statesUs = ['alabama','alaska','american samoa','arizona','arkansas','california','colorado','connecticut',
    'delaware','district of columbia','federated states of micronesia','florida','georgia','guam','hawaii','idaho',
    'illinois','indiana','iowa','kansas','kentucky','louisiana','maine','marshall islands','maryland','massachusetts',
    'michigan','minnesota','mississippi','missouri','montana','nebraska','nevada','new hampshire','new jersey',
    'new mexico','new york','north carolina','north dakota','northern mariana islands','ohio','oklahoma','oregon',
    'palau','pennsylvania','puerto rico','rhode island','south carolina','south dakota','tennessee','texas','utah',
    'vermont','virgin island','virginia','washington','west virginia','wisconsin','wyoming']


    //global variables
    var lives = 8;          // Number of tries to guess the word
    var userGuess="";       // User's current Guess
    var prevGuesses=[];     // User's total previous Guesses
    var wrongGuesses =[];   // User's incorrect guesses
    var previousWord = [" "];
    var winCount = 0;       // Initial win count of 0
    var lossCount = 0;      // Initial loss count of 0

    //computer chooses an initial random category
    var category = [carBrands, guitarBrands, vegasStripCasinos, austinBbq, chordTypes, musicGenres, presidentsUs, 
    statesUs];
    var randomCategory = category[Math.floor(Math.random() * Math.floor(category.length))];
    var word = randomCategory[Math.floor(Math.random() * Math.floor(randomCategory.length))];
    //console.log("new word: " + '"' + word + '"');
        
     //Displays the Category based on the initial random word
    if (carBrands.indexOf(word) >= 0){
    document.querySelector("#category").innerHTML = "Car Brands";}
    if (guitarBrands.indexOf(word) >= 0){
    document.querySelector("#category").innerHTML = "Guitar Makers";}
    if (vegasStripCasinos.indexOf(word) >= 0){
    document.querySelector("#category").innerHTML = "Las Vegas Strip Casinos";}
    if (austinBbq.indexOf(word) >= 0){
    document.querySelector("#category").innerHTML = "BBQ Restaraunts in Austin, TX";}
    if (chordTypes.indexOf(word) >= 0){
    document.querySelector("#category").innerHTML = "Musical Chords";}
    if (musicGenres.indexOf(word) >= 0)
    {document.querySelector("#category").innerHTML = "Genres of Music";}
    if (presidentsUs.indexOf(word) >= 0){
    document.querySelector("#category").innerHTML = "US Presidents";}
    if (statesUs.indexOf(word) >= 0){
    document.querySelector("#category").innerHTML = "US States";}
    
    //computer defines an initial answer array
    var answerArray = [];
        for (i=0; i<word.length; i++){                                      //for loop to assign underscores and spaces
            if (word.charAt(i) == " "){                                     //if character in word is a space
            answerArray[i] = " &nbsp ";}                                    //create a blank string
            else {                                                          //if characterr in word is a letter
            answerArray[i] = "_";}}                                         //create a "_"

        var wordDisplay = answerArray.join(" ");                            //removes commas from the answer array
        document.querySelector("#wordDisplay").innerHTML = wordDisplay;     //display answerArray on screen
        document.querySelector("#wins").innerHTML = winCount;               //display winCount on screen
        document.querySelector("#losses").innerHTML = lossCount;            //display lossCount on screen
        document.querySelector("#lives").innerHTML = lives;                 //display remaining lives on screen
        
        var userGuessIncorrect = userGuess;                                 //define userGuessIncorrect (for red color display of userGuess)
        var userGuessCorrect = userGuess;                                   //define userGuessCorrect (for green color display of userGuess)

        console.log("Thought you could find the answer here, did ya?")      //display a snarky message in console
        console.log("Well, guess again!")                                   //for comedic value


                //////////////////////////
                // G A M E  B E G I N S //
                //////////////////////////

//When key is pressed, begin the Game   
document.onkeyup = function(event) {                                    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();       //convert type to lowercase letter
    if (alphabet.indexOf(userGuess) >= 0){                                  //if key is a letter, proceed with game
        //console.log ('"Users Typed Guess:"' + userGuess);

        //check if it has already been guessed
        if (prevGuesses.indexOf(userGuess) < 0){
            prevGuesses.push(userGuess);
                                           //push userGuess to prevGuesses
            //console.log (prevGuesses);                                
            
            ////////////////////
            //  CORRECT GUESS //
            ////////////////////

            if (word.indexOf(userGuess) >= 0){                                              //if userGuess is in the word     
                //console.log(userGuess + " is correct");                                   
                var userGuessCorrect = userGuess;                                           //changes userGuessCorrect == userGuess (for green color)
                document.querySelector("#userGuessCorrect").innerHTML = userGuessCorrect;   //display userGuessCorrect (green)
                document.querySelector("#userGuessIncorrect").innerHTML = "";               //remove display of userGuessIncorrect (if exists)
                for (i=0; i<word.length; i++){                                              //run a for loop
                    if  (word[i] == userGuess){                                             //for each location that userGuess == letter of the word
                        answerArray.splice(i, 1, userGuess);                                //replace the answerArray with userGuess
                    }
                }

                //////////////////////////
                //                      //
                //        WIN!!!!       //
                //                      //
                //////////////////////////

                if (answerArray.indexOf("_") < 0){                                          //if all letters have been guessed
                    winCount++;                                                             //increase winCount by 1
                    
                    //Reset Word/Category/Lives/Guess Arrays
                    previousWord.splice(0, 1, word);                                                        //replace previousWord Array with word
                    document.querySelector("#prevWord").innerHTML = '"' +previousWord + '"';                //display previousWord Array on screem
                    randomCategory = category[Math.floor(Math.random() * Math.floor(category.length))];     //choose a new random category
                    word = randomCategory[Math.floor(Math.random() * Math.floor(randomCategory.length))];   //choose a new random word
                    lives=8;                                                                                //reset remaining guesses to 0
                    userGuessCorrect = "";                                                                  //reset userGuessCorrect
                    prevGuesses=[];                                                                         //reset previousGuesses
                    wrongGuesses=[];                                                                        //reset wrongGuesses
                    document.querySelector("#userGuessCorrect").innerHTML = "";                             //display reset userGuessCorrect
                    answerArray = [];                                                                       //reset answerArray
                    for (i=0; i<word.length; i++){                                                          //for loop to assign underscores and spaces to new word
                        if (word.charAt(i) == " "){                                                             //if character in word is blank, 
                        answerArray[i] = " &nbsp ";}                                                                //assign a space
                        else {                                                                                  //if character in word is a letter, assign a "_"
                        answerArray[i] = "_";}}                                                                     //assign a "_"
                    }
            }

            //////////////////////
            //  INCORRECT GUESS //
            //////////////////////

            else {                            
                if (wrongGuesses.indexOf(userGuess) < 0){               //if userGuess has not already been guessed
                    userGuessIncorrect = userGuess;                     //changes userGuessIncorrect == userGuess (for green color)
                    document.querySelector("#userGuessIncorrect").innerHTML = userGuessIncorrect;   //display userGuessIncorrect on screen (red)
                    document.querySelector("#userGuessCorrect").innerHTML = "";                     //remove userGuessCorrect (if exists)
                    wrongGuesses.push(userGuess);                       //push userGuess to wrongGuesses
                    lives--;                                            //Lose One Life
                    wrongGuesses.sort();                                //alphabetize the wrong guesses                               
            
                    //////////////////////////
                    //        LOSS!!!!      //
                    //////////////////////////
                }
                    if (lives == 0){                                                                            //if no lives remain
                        lossCount++;                                                                            //increase lossCount by 1
                        
                        //Reset Word/Category/Lives/Guess Arrays    
                        previousWord.splice(0, 1, word);                                                        //reset
                        document.querySelector("#prevWord").innerHTML = '"' +previousWord + '"';                //reset
                        randomCategory = category[Math.floor(Math.random() * Math.floor(category.length))];     //reset
                        word = randomCategory[Math.floor(Math.random() * Math.floor(randomCategory.length))];   //reset
                        //console.log("word: " + '"' + word + "'" + " LossCount: " + lossCount);                //reset
                        lives=8;                                                                                //reset
                        prevGuesses=[];                                                                         //reset
                        wrongGuesses=[];                                                                        //reset
                        document.querySelector("#userGuessIncorrect").innerHTML = "";                           //reset
                        answerArray=[]                                                                          //reset
                        for (i=0; i<word.length; i++){                                                          //for loop to assign underscores and spaces
                            if (word.charAt(i) == " "){                                                             //if character in word is blank
                            answerArray[i] = " &nbsp ";}                                                                //assign "_"
                            else {                                                                                  //if character in word is a letter
                            answerArray[i] = "_";}}                                                                     //assign a "_"
                    }
                       
            }
        }
    }

    //
    var wordDisplay = answerArray.join(" ");            //creates a word display without commas
    var prevGuessDisplay = wrongGuesses.join(" ");      //creates a wrong guess display without commas

    //Displays the Category based on the random word
    if (carBrands.indexOf(word) >= 0){
        document.querySelector("#category").innerHTML = "Car Brands";
    }
    if (guitarBrands.indexOf(word) >= 0){
        document.querySelector("#category").innerHTML = "Guitar Makers";
    }
    if (vegasStripCasinos.indexOf(word) >= 0){
        document.querySelector("#category").innerHTML = "Las Vegas Strip Casinos";
    }
    if (austinBbq.indexOf(word) >= 0){
        document.querySelector("#category").innerHTML = "BBQ Restaraunts in Austin, TX";
    }
    if (chordTypes.indexOf(word) >= 0){
        document.querySelector("#category").innerHTML = "Musical Chords";
    }
    if (musicGenres.indexOf(word) >= 0){
        document.querySelector("#category").innerHTML = "Genres of Music";
    }
    if (presidentsUs.indexOf(word) >= 0){
        document.querySelector("#category").innerHTML = "US Presidents";
    }
    if (statesUs.indexOf(word) >= 0){
        document.querySelector("#category").innerHTML = "US States";
    }
    
    //Display wins, loss, lives, current word, and wrong guesses on screen
    document.querySelector("#wins").innerHTML = winCount;
    document.querySelector("#losses").innerHTML = lossCount;
    document.querySelector("#lives").innerHTML = lives;
    document.querySelector("#wordDisplay").innerHTML = wordDisplay;
    document.querySelector("#prevGuesses").innerHTML = prevGuessDisplay;
}


    