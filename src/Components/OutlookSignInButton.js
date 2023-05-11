import React, { useEffect } from 'react';
import { PublicClientApplication } from '@azure/msal-browser';

function OutlookSignInButton() {
  // Create a new instance of MSAL PublicClientApplication
  const msalConfig = {
    auth: {
      clientId: 'YOUR_OUTLOOK_CLIENT_ID',
      authority: 'https://login.microsoftonline.com/common',
      redirectUri: 'http://localhost:3000', // Update with your app's redirect URI
    },
  };
  const msalInstance = new PublicClientApplication(msalConfig);

  // Handle Outlook Sign-In
  const handleOutlookSignIn = async () => {
    try {
      // Check if there's already an account signed in
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length > 0) {
        // If there's an existing account, acquire a token silently
        const silentRequest = {
          scopes: ['user.read'], // Add the necessary scopes based on your requirements
          account: accounts[0],
        };

        const response = await msalInstance.acquireTokenSilent(silentRequest);
        const accessToken = response.accessToken;

        // Use the access token for further authentication or API requests

        // Example: Print the access token in the console
        console.log(accessToken);
      } else {
        // If no account is signed in, initiate the interactive sign-in process
        const interactiveRequest = {
          scopes: ['user.read'], // Add the necessary scopes based on your requirements
        };

        const response = await msalInstance.loginPopup(interactiveRequest);
        const accessToken = response.accessToken;

        // Use the access token for further authentication or API requests

        // Example: Print the access token in the console
        console.log(accessToken);
      }
    } catch (error) {
      console.log('An error occurred during Outlook sign-in:', error);
    }
  };

  useEffect(() => {
    // Cleanup function
    return () => {
      // Nothing to clean up in this example
    };
  }, []);

  // Render the Outlook Sign-In button
  return (
    <div className="outlook-signin-button">
      <button className='decoration-blue-300 bg-green-500 hover:bg-green-700 text-white  py-2 px-4 rounded flex items-center justify-center'  onClick={handleOutlookSignIn}>Sign in with Outlook</button>
    </div>
  );
}

export default OutlookSignInButton;
