
function renderLicenseBadge(license) {
    if (license === 'Apache 2.0') {
      return `![GitHub license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    } else
    if (license === 'BSD 3-Clause') {
      return `![GitHub license](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
    } else 
    if (license ==='GNU GPL v3') {
      return `![GitHub license](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`
    } else 
    if (license === 'GNU GPL v2') {
      return `![GitHub license](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
    } else 
    if (license === 'GNU AGPL v3') {
      return `![GitHub license](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)`
    } 
    if (license === 'GNU LGPL v3') {
      return `![GitHub license](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`
    } else 
    if (license === 'GNU FDL v1.3') {
      return `![GitHub license](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)`
    } else 
    if (license === 'IBM Public License Version 1.0') {
      return `![GitHub license](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`
    }
    return '';
  }
  
  
  function renderLicenseLink(license) {
    if (license !== 'None') {
      return `\n* [License](#license)\n`;
    }
    return '';
  }
  
  
 
  function renderLicenseSection(license) {
    if (license !== 'None') {
      return `## License
  
  This project is licensed under the ${license} license.`;
    }
    return '';
  }
  
  
  
  function generateMarkdown(data) {
    return `## Project Title
    
  ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  ${renderLicenseLink(data.license)}
  
  *[Questions](#questions)
  
  ## Installation 
  
  To install necessary dependencies, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage 
  ${data.usage}
  
  
  ${renderLicenseSection(data.license)}
  
  
  ## Contributing 
  ${data.contributing}
  
  ## Tests 
  To run tests, run the following command:
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  
  ## Questions 
  
  If you have any questions, please contact me at ${data.email}. You can find my GitHub page at [${data.github}](https://github.com/${
      data.github
    }/).
  `;
  }
  
  module.exports = generateMarkdown;