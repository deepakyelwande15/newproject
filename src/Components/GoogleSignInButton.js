import React, { useEffect } from 'react';

import { IoLogoGoogle } from 'react-icons/io';

function GoogleSignInButton() {
  useEffect(() => {
    const loadGoogleAPI = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.onload = initializeGoogleSignIn;
      document.body.appendChild(script);
    };

    const initializeGoogleSignIn = () => {
      window.google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
        callback: handleGoogleSignIn,
      });
    };
 
    const handleGoogleSignIn = (response) => {
      const { credential } = response;
      const idToken = credential.id;

      // Use the ID token for further authentication or API requests
      console.log(idToken);
    };

    loadGoogleAPI();

    return () => {
      const script = document.querySelector('script[src="https://accounts.google.com/gsi/client"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <button className="   py-2 px-4 rounded flex items-center justify-center goggleSignInBotton">
      <IoLogoGoogle color="#0078D4" size={20}/> Sign in with Google
    </button>
  );
}

export default GoogleSignInButton;
