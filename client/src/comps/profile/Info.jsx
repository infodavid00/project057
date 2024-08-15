import { useState, useEffect } from "react";
import { Edit3 } from "react-feather";
import { TailSpin } from 'react-loader-spinner';
import { makeRequest } from "../../etc/network"; 
import "./profile.css";
import { ToastContainer, toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import { BaseEndpoint, tokenVault } from "../../etc/network";
import Cookies from 'js-cookie';

export default function Info() {
  function formatDate(date) {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return (new Date(date)).toLocaleDateString('en-US', options).replace(',', '');   
  }
  const [info, setInfo] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState(''); // Start with an empty string for no image
  const [newImageUrl, setNewImageUrl] = useState(''); // State for the new image URL
  const defaultImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-5Wi8qZXluHi11q-AHGh8riznXRoltGVYQ&s"; // Default image URL

  useEffect(() => {
    makeRequest("/user", "GET", (data) => {
      setInfo(data);
      setLoading(false);
      // Set imagePreview to the profile URL if it exists, otherwise set it to the default image URL
      setImagePreview(data.profile ? data.profile : defaultImageUrl);
    });
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Set imagePreview to an empty string to show nothing during upload
    setImagePreview('');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'th47zcei');

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/dxkzodjlu/image/upload', { 
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      // Set the imagePreview and newImageUrl to the uploaded URL on success
      if (data.secure_url) {
        setImagePreview(data.secure_url); // Set preview to the uploaded image
        setNewImageUrl(data.secure_url); // Store the new image URL
      } else {
        // On error or if no secure_url is returned, fallback to blank
        setImagePreview('');
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      // On error, fallback to blank
      setImagePreview('');
    }
  };

  const handleUpdateImage = async () => {
    if (!newImageUrl) {
      toast.error("No new image to update.");
      return;
    }

    await uploadProfileImage(newImageUrl); // Call the function to update the profile image
  };

  const uploadProfileImage = async (url) => {
    const token = Cookies.get(tokenVault); 
    if (!token) {
      window.location.href = "/signin";
      return;
    }

    const payload = { url };

    try {
      const options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Pass': btoa(token),
        },
        body: JSON.stringify(payload),
      };

      const response = await fetch(BaseEndpoint + '/user/uploadProfileImage', options);
      const data = await response.json();

      if (response.ok) {
        toast.success("Profile image updated successfully.");
      } else {
        toast.error(data.message || "Failed to update profile image.");
      }
    } catch (error) {
      toast.error(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div id="profile-info-cont">
      {loading ? (
        <div className="loader-container" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}>
          <TailSpin width={20} height={20} />
        </div>
      ) : (
        <>
          <div id="profile-info-updatecont">
            <button onClick={handleUpdateImage}>Update</button> {/* Call handleUpdateImage on click */}
          </div>
          <div id="profile-info-image-container">
            <img 
              src={imagePreview} // Show the image preview or default image
              id="profile-info-image" 
              alt="Profile" 
            />
            <div id="profile-info-image-editbtn" onClick={() => document.getElementById('profile-image-upload').click()}>
              <Edit3 width={15} height={15} />
            </div>
            <input
              type="file"
              id="profile-image-upload"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
              accept="image/*"
            />
          </div>
          <h2 id="profile-info-name">{info.firstName + " " + info.lastName}</h2>
          <div className="profile-info-metainfo">{info.email}</div>
          <div className="profile-info-metainfo">Joined {formatDate(info?.regDate)}</div>

          <div id="profile-info-credentials">
            <div>
              <div className="profile-info-credentials-lead">
                {info?.points ?? 0}
              </div>
              <div className="profile-info-metainfo">Points</div>
            </div>
            <div>
              <div className="profile-info-credentials-lead">
                {info?.registration ?? 0}
              </div>
              <div className="profile-info-metainfo">Registrations</div>
            </div>
            <div>
              <div className="profile-info-credentials-lead">
                €{info?.deposits ?? 0}
              </div>
              <div className="profile-info-metainfo">Deposits</div>
            </div>
          </div>
        </>
      )}
      <ToastContainer /> {/* Add ToastContainer for notifications */}
    </div>
  );
}
