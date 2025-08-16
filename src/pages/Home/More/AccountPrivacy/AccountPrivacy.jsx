// AccountPrivacy.jsx
import React, { useState } from 'react';

const AccountPrivacy = () => {
  // States to manage toggles
  const [isPrivate, setIsPrivate] = useState(false);
  const [showActivityStatus, setShowActivityStatus] = useState(true);

  // Handler functions
  const handleTogglePrivate = () => setIsPrivate(!isPrivate);
  const handleToggleActivityStatus = () => setShowActivityStatus(!showActivityStatus);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black text-white p-4">
      {/* Privacy Settings Container */}
      <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
        {/* Header */}
        <header className="mb-4 text-center">
          <h1 className="text-2xl font-semibold">Account Privacy</h1>
        </header>

        {/* Account Privacy Toggle */}
        <div className="flex items-center justify-between py-3">
          <div>
            <h2 className="text-lg font-medium">Private Account</h2>
            <p className="text-sm text-gray-400">Only your followers can see your posts.</p>
          </div>
          <input
            type="checkbox"
            checked={isPrivate}
            onChange={handleTogglePrivate}
            className="toggle-checkbox"
            id="privateAccountToggle"
          />
        </div>

        {/* Activity Status Toggle */}
        <div className="flex items-center justify-between py-3">
          <div>
            <h2 className="text-lg font-medium">Show Activity Status</h2>
            <p className="text-sm text-gray-400">
              Allow accounts you follow to see when you were last active.
            </p>
          </div>
          <input
            type="checkbox"
            checked={showActivityStatus}
            onChange={handleToggleActivityStatus}
            className="toggle-checkbox"
            id="activityStatusToggle"
          />
        </div>

        {/* Information Text */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Manage your account's privacy settings to control who can see your content and activity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountPrivacy;
