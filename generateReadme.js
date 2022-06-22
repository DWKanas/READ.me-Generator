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