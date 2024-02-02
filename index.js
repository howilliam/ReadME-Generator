const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your project?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache", "GPL", "None"],
  },
  {
    type: "input",
    name: "contribution",
    message: "How can others contribute to your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "How do you run tests on your project?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  const outputPath = path.join(__dirname, fileName);

  // Use fs.writeFileSync to write the file synchronously
  fs.writeFileSync(outputPath, data);

  console.log(`${fileName} generated successfully at ${outputPath}`);
}

// function to initialize program
function init() {
  // Use inquirer to prompt the user with the defined questions
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Use generateMarkdown function to generate README content based on user's responses
      const readmeContent = generateMarkdown(answers);

      // Call writeToFile function to write the README file
      writeToFile("README.md", readmeContent);
    })
    .catch((err) => console.error(err));
}

// function call to initialize program
init();
