// WebsitePermission.jsx
import React, { useState } from 'react';

const WebsitePermission = () => {
  // States to manage permissions
  const [allowTracking, setAllowTracking] = useState(false);
  const [allowDataSharing, setAllowDataSharing] = useState(true);

  // Handler functions
  const handleToggleTracking = () => setAllowTracking(!allowTracking);
  const handleToggleDataSharing = () => setAllowDataSharing(!allowDataSharing);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black text-white p-4">
      {/* Website Permissions Container */}
      <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
        {/* Header */}
        <header className="mb-4 text-center">
          <h1 className="text-2xl font-semibold">Website Permissions</h1>
        </header>

        {/* Allow Tracking Toggle */}
        <div className="flex items-center justify-between py-3">
          <div>
            <h2 className="text-lg font-medium">Allow Website Tracking</h2>
            <p className="text-sm text-gray-400">
              Allow websites you visit to track your activity on and off the app.
            </p>
          </div>
          <input
            type="checkbox"
            checked={allowTracking}
            onChange={handleToggleTracking}
            className="toggle-checkbox"
            id="allowTrackingToggle"
          />
        </div>

        {/* Allow Data Sharing Toggle */}
        <div className="flex items-center justify-between py-3">
          <div>
            <h2 className="text-lg font-medium">Allow Data Sharing</h2>
            <p className="text-sm text-gray-400">
              Allow data sharing with partners for improved services and ads.
            </p>
          </div>
          <input
            type="checkbox"
            checked={allowDataSharing}
            onChange={handleToggleDataSharing}
            className="toggle-checkbox"
            id="allowDataSharingToggle"
          />
        </div>

        {/* Additional Info */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Manage website permissions to control your data and privacy settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsitePermission;
