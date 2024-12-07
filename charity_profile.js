// charity_profile.js

const apiKey = 'pk_live_74287f8a2cd642dae9fb81a76ebb4b69'; // Replace with your actual API key
const apiURL = `https://partners.every.org/v0.2/search/charities?apiKey=${apiKey}&location=San%20Diego`;

// Fetch data from Every.org API
fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    displayCharities(data.nonprofits);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
    displayErrorMessage();
  });

// Function to display charities
function displayCharities(charities) {
  const charityList = document.getElementById('charity-list');
  charityList.innerHTML = ''; // Clear any existing content
  charities.forEach(charity => {
    const charityItem = document.createElement('div');
    charityItem.classList.add('charity-item');
    charityItem.innerHTML = `
      <h3>${charity.name}</h3>
      <p>${charity.mission}</p>
      <button onclick="viewCharityDetails('${charity.ein}')">View Details</button>
    `;
    charityList.appendChild(charityItem);
  });
}

// Function to display error message
function displayErrorMessage() {
  const charityList = document.getElementById('charity-list');
  charityList.innerHTML = '<p>There was an error fetching the charity data. Please try again later.</p>';
}

// Function to handle viewing charity details
function viewCharityDetails(ein) {
  alert(`Viewing details for charity EIN: ${ein}`);
}
