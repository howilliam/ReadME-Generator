// function to generate markdown for README
function generateMarkdown(data) {

  // Table of Contents with links
  const tableOfContents = `
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
`;

  // README content
  const readmeContent = `
# ${data.title}

## Description
${data.description}

${tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered under the ${
    data.license
  } license.

## Contributing
${data.contribution}

## Tests
${data.tests}

## YouTube Overview
[![Youtube video](https://img.youtube.com/vi/2jrC50je4AA/0.jpg)](https://www.youtube.com/watch?v=2jrC50je4AA)

## Questions
For questions about this project, please reach out to [${
    data.github
  }](https://github.com/${data.github}) or contact [${data.email}](mailto:${
    data.email
  }).
`;

  return readmeContent;
}

module.exports = generateMarkdown;
