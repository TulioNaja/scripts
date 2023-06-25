// Jira API credentials
const baseUrl = 'https://efcloud.atlassian.net';
const username = 'your-username';
const password = 'your-password';

// Issue key for which you want to retrieve the status
const issueKey = 'EFEKTA-22';

// API endpoint to get issue details
const apiUrl = `${baseUrl}/rest/api/2/issue/${issueKey}`;

// Create an XMLHttpRequest object
const xhr = new XMLHttpRequest();
xhr.open('GET', apiUrl, true);
xhr.setRequestHeader('Authorization', `Basic ${btoa(`${username}:${password}`)}`);

// Handle the response
xhr.onload = function() {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    const status = response.fields.status.name;
    console.log(`Issue status: ${status}`);
  } else {
    console.error('Error:', xhr.status);
  }
};

// Send the request
xhr.send();
