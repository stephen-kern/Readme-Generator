// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "BSD3") {
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "BSD2") {
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "GNU GPLv3") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "GNU LGPL") {
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Mozilla 2.0"){
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "None"){
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Project Title ${data.license}
  # ${data.title}
  

  # Description
  ${data.description}

  # Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions?)
  
  # Installation
  ${data.installation}

  # Usage 
  ${data.usage}

  # License 
  ${data.license}

  # Contributing
  ${data.contribution}

  # Tests
  ${data.tests}

  # Questions?
  * Github Username: ${data.userName}
  * Contact Email: ${data.userEmail}

`;
};

// export the generateMarkdown and renderLicenseBadge function
module.exports = {generateMarkdown, renderLicenseBadge};
