#! /usr/bin/env node
import inquirer from "inquirer";
const question = [
    {
        type: "input",
        name: "name",
        message: "Enter Your Name:"
    },
    {
        type: "list",
        name: "question1",
        message: "What is the capital of Pkaistan",
        choices: [
            "Karachi",
            "Faisalabad",
            "Islamabad",
            "Lahore"
        ]
    },
    {
        type: "list",
        name: "question2",
        message: "What is the capital of China",
        choices: [
            "Shanghai",
            "Tianjin",
            "Chongqing",
            "Beijing"
        ]
    },
    {
        type: "list",
        name: "question3",
        message: "What are the golden principles of Quaid e Azam?",
        choices: [
            "Faith",
            "Discipline",
            "Unity",
            "All the above"
        ]
    },
    {
        type: "list",
        name: "question4",
        message: "What is the coldest place in Pakistan?",
        choices: [
            "Quetta",
            "Gilgit Batistan",
            "Balochistan",
            "Karachi"
        ]
    },
    {
        type: "list",
        name: "question5",
        message: "Which city is called Flower City in Pakistan?",
        choices: [
            "Quetta",
            "Gilgit Batistan",
            "Peshawar",
            "Karachi"
        ]
    }
];
inquirer.prompt(question)
    .then(answers => {
    let score = 0;
    if (answers.question1 === "Islamabad") {
        score++;
    }
    if (answers.question2 === "Beijing") {
        score++;
    }
    if (answers.question3 === "All the above") {
        score++;
    }
    if (answers.question4 === "Gilgit Batistan") {
        score++;
    }
    if (answers.question5 === "Peshawar") {
        score++;
    }
    console.log(`${answers.name},You Scored ${score} out of 5`);
});
