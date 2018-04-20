      //letters available
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //possible categories and words  
    carBrands = ["acura", "aston martin", "audi", "bentley", "bmw", "bugatti", "buick", "cadillac", "chevrolet", "chevy", 
    "chrysler", "citroen", "dodge", "ferrari", "fiat", "ford", "geely", "honda", "hyundai", "infiniti", "jaguar", 
    "jeep", "koenigsegg", "lamborghini", "land rover", "lexus", "maserati", "mazda", "mclaren", "mercedes benz", "mitsubishi", "pagani", 
    "peugot", "porsche", "renault", "rolls royce", "subaru", "suzuki", "tesla", "toyota", "volkswagen", "volvo"]
    guitarBrands = ["alembic", "alvarez", "aria", "breedlove", "collings", "cort", "danelectro", "dean", "dobro", 
    "duesenberg", "epiphone", "ernie ball", "fender", "garrison", "gibson", "godin", "gretsch", "guild", "harmony", "heritage", 
    "hofner", "hohner", "ibanez", "jackson", "kramer", "larivee", "lowden", "luna", "martin","oscar schmidt", "ovation", "parker", "paul reed smith", 
    "peavey", "rainsong", "ramirez", "rickenbacker", "samick", "santa cruz", "seagull", "sigma", "squier", "takamine", "taylor", 
    "teisco", "tacoma", "vox", "walden", "warwick", "yamaha", "yairi"]
    vegasStripCasinos = ["aria", "ballys", "bellagio", "casino royale", "caesars palace", "circus circus", "cosmopolitan", "encore", "excalibur", "flamingos", 
    "harras", "linq", "luxor", "mandalay bay", "mgm grand", "monte carlo", "mirage", "new york new york", "palazzo", "paris", "planet hollywood", "slots a fun", "stratosphere", "the cromwell", "treasure island", "tropicana", "venetian", "winn"],
    austinBbq = ["franklins", "rudys", "valentinas", "kerlin", "browns", "freedmans", "terry blacks", "coopers old time pit", "micklewaith craft meats", "leonardis", "salt lick"]
    chordTypes = ["augmented", "diminished", "suspended", "seventh", "major", "minor", "power", "ninth", "eleventh"]
    musicGenres = ["alternative", "americana", "blues", "bluegrass", "rock", "rockabilly", "punk", "grunge", 
    "contemporary", "classical", "country", "baroque", "choral", "opera", "orchestral", "rennaissance", "gospel", 
    "dance", "dubstep", "hardcore", "techno", "trance", "reggae", "swing", "rap", "christmas", "metal", "jazz", 
    "ragtime", "karaoke", "mariachi", "latin", "salsa", "britpop", "funk", "motown", "psychedelic", "soul", "ska", 
    "surf", "indie", "chicano", "acapella", "calypso"]
    presidentsUs = ["taft", "obama", "hoover", "washington", "roosevelt", "clinton", "bush", "nixon", "eisenhower", 
    "truman", "coolidge", "harding", "wilson", "mckinley"]
    statesUs = ['alabama','alaska','american samoa','arizona','arkansas','california','colorado','connecticut',
    'delaware','district of columbia','federated states of micronesia','florida','georgia','guam','hawaii','idaho',
    'illinois','indiana','iowa','kansas','kentucky','louisiana','maine','marshall islands','maryland','massachusetts',
    'michigan','minnesota','mississippi','missouri','montana','nebraska','nevada','new hampshire','new jersey',
    'new mexico','new york','north carolina','north dakota','northern mariana islands','ohio','oklahoma','oregon',
    'palau','pennsylvania','puerto rico','rhode island','south carolina','south dakota','tennessee','texas','utah',
    'vermont','virgin island','virginia','washington','west virginia','wisconsin','wyoming']


    var lives = 8;          // Number of tries to guess the word
    var userGuess="";       // User's current Guess
    var prevGuesses=[];     // User's total previous Guesses
    var wrongGuesses =[];   // User's incorrect guesses
    var previousWord = [" "];
    var winCount = 0;       // Initial win count of 0
    var lossCount = 0;      // Initial loss count of 0

    //computer chooses a random category
    var category = [carBrands, guitarBrands, vegasStripCasinos, austinBbq, chordTypes, musicGenres, presidentsUs, 
    statesUs];
    var randomCategory = category[Math.floor(Math.random() * Math.floor(category.length))];
    var word = randomCategory[Math.floor(Math.random() * Math.floor(randomCategory.length))];
    console.log("new word: " + '"' + word + '"');
        
     //Initial Category Display
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
    
    //Initial answerArray
    var answerArray = [];
        for (i=0; i<word.length; i++){          //for loop to assign underscores and spaces
            if (word.charAt(i) == " "){          
            answerArray[i] = " &nbsp ";}         //if character in word is blank, assign a space
            else {                               
            answerArray[i] = "_";}}               //if character in word is a letter, assign a "_"

        var wordDisplay = answerArray.join(" ");
        document.querySelector("#wordDisplay").innerHTML = wordDisplay;
        document.querySelector("#wins").innerHTML = winCount;
        document.querySelector("#losses").innerHTML = lossCount;
        document.querySelector("#lives").innerHTML = lives;


//////////////////////////
// G A M E  B E G I N S //
//////////////////////////

//When key is pressed, begin the Game   
document.onkeyup = function(event) {                                    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();   //convert type to lowercase letter
    if (alphabet.indexOf(userGuess) >= 0){
                                      //check if the user Guess is a valid letter
        //console.log ('"Users Typed Guess:"' + userGuess);

        //check if it has already been guessed
        if (prevGuesses.indexOf(userGuess) < 0){
            prevGuesses.push(userGuess);                                //push userGuess to prevGuesses
            //console.log (prevGuesses);                                
            

            //  CORRECT GUESS //
            if (word.indexOf(userGuess) >= 0){                          
                //console.log(userGuess + " is correct");                 
                answerArray.splice(word.indexOf(userGuess), 1, userGuess);
                for (i=0; i<word.length; i++){
                    if  (word[i] == userGuess){
                        answerArray.splice(i, 1, userGuess);
                    }
                }
                //console.log (answerArray);

                //////////////////////////
                //        WIN!!!!       //
                //////////////////////////

                if (answerArray.indexOf("_") < 0){
                    winCount++;
                    
                    //Reset Word/Category/Lives/Guess Arrays
                    previousWord.splice(0, 1, word);
                    document.querySelector("#prevWord").innerHTML = previousWord;
                    randomCategory = category[Math.floor(Math.random() * Math.floor(category.length))];
                    word = randomCategory[Math.floor(Math.random() * Math.floor(randomCategory.length))];
                    console.log("word: " + '"' + word + "'" + " Wins: " + winCount + " Losses: " + lossCount);
                    lives=8;
                    prevGuesses=[];
                    wrongGuesses=[];
                    answerArray = [];                    
                    for (i=0; i<word.length; i++){          //for loop to assign underscores and spaces
                        if (word.charAt(i) == " "){          
                        answerArray[i] = " &nbsp ";}         //if character in word is blank, assign a space
                        else {                               
                        answerArray[i] = "_";}}               //if character in word is a letter, assign a "_"
                    }

            }

            //  INCORRECT GUESS //
            else {
                
                //check if it has already been guessed                 
                if (wrongGuesses.indexOf(userGuess) < 0){
                    wrongGuesses.push(userGuess);                       //push userGuess to prevGuesses
                    lives--;                                            //Lose One Life
                    wrongGuesses.sort();                                //alphabetize the wrong guesses                               
                    //console.log("wrongGuesses: " + wrongGuesses + " Lives Left: " + lives)
            
                    //////////////////////////
                    //        LOSS!!!!      //
                    //////////////////////////
                }
                    if (lives == 0){
                        lossCount++;
                        
                        //Reset Word/Category/Lives/Guess Arrays
                        previousWord.splice(0, 1, word);
                        document.querySelector("#prevWord").innerHTML = previousWord;
                        randomCategory = category[Math.floor(Math.random() * Math.floor(category.length))];
                        word = randomCategory[Math.floor(Math.random() * Math.floor(randomCategory.length))];
                        console.log("word: " + '"' + word + "'" + " LossCount: " + lossCount);
                        lives=8;
                        prevGuesses=[];
                        wrongGuesses=[];
                        answerArray=[]
                        for (i=0; i<word.length; i++){          //for loop to assign underscores and spaces
                            if (word.charAt(i) == " "){          
                            answerArray[i] = " &nbsp ";}         //if character in word is blank, assign a space
                            else {                               
                            answerArray[i] = "_";}}               //if character in word is a letter, assign a "_"
                    }
                       
            }
        }
    }

    //
    var wordDisplay = answerArray.join(" ");            //creates a word display without commas
    var prevGuessDisplay = wrongGuesses.join(" ");      //creates a wrong guess display without commas

    //Display Random Category
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


    