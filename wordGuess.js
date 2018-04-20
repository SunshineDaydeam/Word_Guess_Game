

    var winCount = 0;
    var lossCount = 0;

        
    //letters available
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //possible categories and words  
    carBrands = ["acura", "audi", "bentley", "bmw", "bugatti", "buick", "cadillac", "chevrolet", "chevy", 
    "chrysler", "citroen", "dodge", "ferrari", "fiat", "ford", "geely", "honda", "hyundai", "infiniti", "jaguar", 
    "jeep", "koenigsegg", "lamborghini", "lexus", "maserati", "mazda", "mclaren", "mercedes", "mitsubishi", "pagani", 
    "peugot", "porsche", "renault", "subaru", "suzuki", "tesla", "toyota", "volkswagen", "volvo"]
    guitarBrands = ["alembic", "alvarez", "aria", "breedlove", "collings", "cort", "danelectro", "dean", "dobro", 
    "duesenberg", "epiphone", "fender", "garrison", "gibson", "godin", "gretsch", "guild", "harmony", "heritage", 
    "hofner", "hohner", "ibanez", "jackson", "kramer", "larivee", "lowden", "luna", "martin", "ovation", "parker", 
    "peavey", "rainsong", "ramirez", "rickenbacker", "samick", "seagull", "sigma", "squier", "takamine", "taylor", 
    "teisco", "tacoma", "vox", "walden", "warwick", "yamaha", "yairi"]
    vegasStripCasinos = ["aria", "ballys", "bellagio", "caesars", "cosmopolitan", "encore", "excalibur", "flamingos", 
    "harras", "linq", "luxor", "mgm", "mirage", "palazzo", "paris", "stratosphere", "tropicana", "venetian", "winn"],
    austinBbq = ["franklins", "rudys", "valentinas", "kerlin", "browns", "freedmans"]
    chordTypes = ["augmented", "diminished", "suspended", "seventh", "major", "minor", "power", "ninth", "eleventh"]
    musicGenres = ["alternative", "americana", "blues", "bluegrass", "rock", "rockabilly", "punk", "grunge", 
    "contemporary", "classical", "country", "baroque", "choral", "opera", "orchestral", "rennaissance", "gospel", 
    "dance", "dubstep", "hardcore", "techno", "trance", "reggae", "swing", "rap", "christmas", "metal", "jazz", 
    "ragtime", "karaoke", "mariachi", "latin", "salsa", "britpop", "funk", "motown", "psychedelic", "soul", "ska", 
    "surf", "indie", "chicano", "acapella", "calypso"],
    presidentsUs = ["taft", "obama", "hoover", "washington", "roosevelt", "clinton", "bush", "nixon", "eisenhower", 
    "truman", "coolidge", "harding", "wilson", "mckinley"]
    statesUs = ["hawaii", "washington", "oregon", "california", "idaho", "nevada", "utah", "arizona", "montana", 
    "wyoming", "colorado", "texas"]

    var lives = 10;         // Number of tries to guess the word
    var userGuess="";       // User's current Guess
    var prevGuesses=[];     // User's total previous Guesses
    var wrongGuesses =[];   // User's incorrect guesses


    //computer chooses a random category
    var category = [carBrands, guitarBrands, vegasStripCasinos, austinBbq, chordTypes, musicGenres, presidentsUs, 
    statesUs];
    var randomCategory = category[Math.floor(Math.random() * Math.floor(category.length))];
    var word = randomCategory[Math.floor(Math.random() * Math.floor(randomCategory.length))];
    console.log("new word: " + '"' + word + '"');

    //create an initial answerArray
    var answerArray = [];
        for (i=0; i<word.length; i++){
            answerArray[i] = "_";
        }

        //
        //GAME BEGINS
        //

//When key is pressed, begin the Game   
document.onkeyup = function(event) {                                    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();   //convert type to lowercase letter
    if (alphabet.indexOf(userGuess) >= 0){                              //check if the user Guess is a valid letter
        //console.log ('"Users Typed Guess:"' + userGuess);

        //check if it has already been guessed
        if (prevGuesses.indexOf(userGuess) < 0){
            prevGuesses.push(userGuess);                                //push userGuess to prevGuesses
            //console.log (prevGuesses);                                
            

            //  CORRECT GUESS //
            if (word.indexOf(userGuess) >= 0){                          
                console.log(userGuess + " is correct");                 
                answerArray.splice(word.indexOf(userGuess), 1, userGuess);
                for (i=0; i<word.length; i++){
                    if  (word[i] == userGuess){
                        answerArray.splice(i, 1, userGuess);
                    }
                }
                console.log (answerArray);

                // WIN //
                if (answerArray.indexOf("_") < 0){
                    winCount++;
                    //Reset Word/Category/Lives/Guess Arrays
                    randomCategory = category[Math.floor(Math.random() * Math.floor(category.length))];
                    word = randomCategory[Math.floor(Math.random() * Math.floor(randomCategory.length))];
                    console.log("word: " + '"' + word + "'" + " Wins: " + winCount + " Losses: " + lossCount);
                    lives=10;
                    prevGuesses=[];
                    wrongGuesses=[];
                    answerArray = [];
                    for (i=0; i<word.length; i++){
                        answerArray[i] = "_";
                    }
                }

            }
            

            //  INCORRECT GUESS //
            else {
                
                //check if it has already been guessed                 
                if (wrongGuesses.indexOf(userGuess) < 0){
                    wrongGuesses.push(userGuess);                       //push userGuess to prevGuesses
                    lives--;                                            //Lose One Life
                    wrongGuesses.sort();                                //alphabetize the wrong guesses                               
                    console.log("wrongGuesses: " + wrongGuesses + " Lives Left: " + lives)
            
                    //  LOSS!  //
                    if (lives == 0){
                        lossCount++;
                        //Reset Word/Category/Lives/Guess Arrays
                        randomCategory = category[Math.floor(Math.random() * Math.floor(category.length))];
                        word = randomCategory[Math.floor(Math.random() * Math.floor(randomCategory.length))];
                        console.log("word: " + '"' + word + "'" + " LossCount: " + lossCount);
                        lives=10;
                        prevGuesses=[];
                        wrongGuesses=[];
                        answerArray=[]
                        for (i=0; i<word.length; i++){
                            answerArray[i] = "_";
                        }
                    }
                }

                    

            }
        }
    }
}


    