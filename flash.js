var inquirer = require("inquirer");

inquirer.prompt([{
    type: "list",
    name: "activityChoice",
    message: "Do you want to make flashcards or study flashcards?",
    choices: ["Make Flashcards", "Study Flashcards"]
}]).then(function(chooseActivity) {
    if (chooseActivity.activityChoice === "Make Flashcards") {
        inquirer.prompt([{
            type: "list",
            name: "cardType",
            message: "Do you want to make basic cards or cloze crds",
            choices: ["Basic Cards", "Cloze Cards"]
        }]).then(function(chooseCardType) {
            if (chooseCardType.cardType === "Basic Cards") {
                console.log("let's make a basic card");
                basicCardMaker();

            } else if (chooseCardType.cardType === "Cloze Cards") {
                console.log("lets make a cloze card");
                clozeCardMaker();

            }

        });
    } else if (choose.activityChoice === "Study Flashcards") {
        console.log("We'll come back to this later");
    }
});

function basicCardMaker() {
    inquirer.prompt([{
        type: "input",
        name: "basicFrontSide",
        message: "What does the front of your card say?"
    }, {
        type: "input",
        name: "basicBackSide",
        message: "What does the back of your card say?"
    }]).then(function(basicAnswers) {
        console.log(basicAnswers);
        // 	// answers.basicFrontSide
        // 	// answers.basicBackSide
    });
}

function clozeCardMaker() {
    inquirer.prompt([
    		{
            type: "input",
            name: "clozeText",
            message: "What is the full statement?"
        	},
        	{
            type: "input",
            name: "cloze",
            message: "What is the main part of the statement?"
        	}
    ]).then(function(clozeAnswers){
    	console.log(clozeAnswers);
    });

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

function ClozeCard(text, cloze) {
    // ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
    this.text = text;
    this.cloze = cloze;

    this.clozeDeleted = function() {

    }
    this.partialTxt = function() {

    }
    this.fullTxt = function() {

    }
}
 