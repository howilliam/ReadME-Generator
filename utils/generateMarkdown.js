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

const licenseBadgeUrl = `https://img.shields.io/badge/license-${data.license}-brightgreen`;

  // README content
  const readmeContent = `
# ${data.title}

${licenseBadgeUrl}

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
  } license. [![License](${licenseBadgeUrl})](${getLicenseLink(data.license)})

## Contributing
${data.contribution}

## Tests
${data.tests}

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
