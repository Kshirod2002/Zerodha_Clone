import React from "react";

function Apps() {
  const playStoreLink = 'https://play.google.com/store/apps/details?id=your.app.package.name'; 
  const appStoreLink = 'https://apps.apple.com/app/your-app-name/idYOUR_APP_ID'; 
  
  return (
    <div>
      <p>Download our app:</p>
      <a href={playStoreLink} target="_blank" rel="noopener noreferrer">
        <img src="google-play-badge.png" alt="Get it on Google Play" />
      </a><br />
      <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
        <img src="app-store-badge.png" alt="Download on the App Store" />
      </a>
    </div>
  );
}

export default Apps;