function generateReadme(data) {
    return (
        `## ${data.project}
        ${renderLicenseLink(data.license)}
        ### Description
        ${data.description}
        ### Table of Contents
        - [Installation](https://github.com/DWKanas/READ.me-Generator#installation)
        - [Usage](https://github.com/DWKanas/READ.me-Generator#usage)
        - [License](https://github.com/DWKanas/READ.me-Generator#license)
        - [Contributing](https://github.com/DWKanas/READ.me-Generator#contributing)
        - [Tests](https://github.com/DWKanas/READ.me-Generator#tests)
        - [Questions](https://github.com/DWKanas/READ.me-Generator#questions)

        ### Installation
        To install: 
        \`${data.install}\`
        ### Usage 
        ${data.repo}
        ### License
        ${renderLicenseSection(data.license)}
        ### Contributing
        ${data.contribute}
        ### Questions
        For any other concerns, visit (https://github.com/${data.username}, or email ${data.email} 
        `
    )
}


function renderLicenseLink(license) {
    if (/mit/ig.test(license)) {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if (/Apache License 2.0/ig.test(license)) {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    else if (/GNU General Public License v3.0/ig.test(license)) {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }
    else if (/BSD 2/ig.test(license)) {
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    }
    else if (/BSD 3/ig.test(license)) {
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }
    else if (/Boost Software License 1.0/ig.test(license)) {
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    }
    else if (/Creative Commons Zero v1.0 Universal/ig.test(license)) {
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
    }
    else if (/Eclipse Public License 2.0/ig.test(license)) {
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    }
    else if (/GNU Affero General Public License v3.0/ig.test(license)) {
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    }
    else if (/GNU General Public License v2.0/ig.test(license)) {
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    }
    else if (/Mozilla Public License 2.0/ig.test(license)) {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    else if (/The Unlicense/ig.test(license)) {
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    }
    else {
      return ``
    } 
  }

  function renderLicenseSection(license) {
    if (/mit/ig.test(license)) {
      return `This project is licensed under the MIT license`
    }
    else if (/Apache License 2.0/ig.test(license)) {
      return `This project is licensed under the Apache License 2.0 license`
    }
    else if (/GNU General Public License v3.0/ig.test(license)) {
      return ``
    }
    else if (/BSD 2-Clause "Simplified" License/ig.test(license)) {
      return ``
    }
    else if (/BSD 3-Clause "New" or "Revised" License/ig.test(license)) {
      return ``
    }
    else if (/Boost Software License 1.0/ig.test(license)) {
      return ``
    }
    else if (/Creative Commons Zero v1.0 Universal/ig.test(license)) {
      return ``
    }
    else if (/Eclipse Public License 2.0/ig.test(license)) {
      return ``
    }
    else if (/GNU Affero General Public License v3.0/ig.test(license)) {
      return ``
    }
    else if (/GNU General Public License v2.0/ig.test(license)) {
      return ``
    }
    else if (/Mozilla Public License 2.0/ig.test(license)) {
      return ``
    }
    else if (/The Unlicense/ig.test(license)) {
      return ``
    }
    else {
      return `N/A`
    } 
  }