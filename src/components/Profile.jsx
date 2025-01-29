import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      const { data, error } = await supabase.from('profiles').select('*').single();
      if (error) {
        console.error('Error fetching profile:', error);
      } else {
        setProfile(data);
      }
    }

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {profile ? (
        <div>
          <h3>{profile.name}</h3>
          <p>{profile.bio}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default Profile;
