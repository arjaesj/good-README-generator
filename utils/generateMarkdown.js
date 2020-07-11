// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  ![badge](https://img.shields.io/badge/License-${data.license}-green.svg)

## Description
${data.description}

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
3. [Contributing](#Contributing)
3. [Test](#Test)
3. [Questions](#Questions)


### Installation
${data.installation}

### Usage
Deployed URL: ${data.deployedURL}  
${data.usage}  
Demo:  
![demo](${data.demo})

### License
Copyright (c) 2012 ${data.fullname} (GitHub profile name: ${data.githubName})  
Licensed under the ${data.license} license.

### Contributing
${data.contributing}

### Test
${data.test}

### Questions
Any questions regarding this project, please don't hesitate to contact me:  
Email me @ ${data.email}  
My GitHub profile page: https://github.com/${data.githubName}  

`;
}

module.exports = generateMarkdown;