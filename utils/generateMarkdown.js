// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return`(https://img.shields.io/badge/License-${license.replace(' ','%20')}-blue.svg)]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `(https://opensource.org/licenses/${license.replace(' ','-')})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[![License: ${license}]`
}

// TODO: Create a function to generate String of for license
function renderFullLicense(data) {
  if(data=='Unlicense'){
    return ``
  }
  return renderLicenseSection(data)+renderLicenseBadge(data)+renderLicenseLink(data)
}

module.exports = renderFullLicense;
