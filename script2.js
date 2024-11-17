let autocomplete;

document.addEventListener("DOMContentLoaded", () => {
  initAutocomplete();
  getUserLocation();
});

function initAutocomplete() {
  const input = document.getElementById("autocomplete");
  autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.setFields(["place_id", "geometry", "name"]);
  autocomplete.addListener("place_changed", handlePlaceSelect);
}

function handlePlaceSelect() {
  const place = autocomplete.getPlace();
  if (!place.geometry) {
    return;
  }
  const lat = place.geometry.location.lat();
  const lng = place.geometry.location.lng();
  console.log(lat, lng);
  return [lat, lng];
}

function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      console.log(`User's Location: Latitude: ${lat}, Longitude: ${lng}`);
      
      // Reverse geocode to get the address
      const geocoder = new google.maps.Geocoder();
      const latLng = new google.maps.LatLng(lat, lng);

      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            const address = results[0].formatted_address;
            document.getElementById("autocomplete").value = address; // Auto-fill the input
          }
        } else {
          alert("Geocoder failed due to: " + status);
        }
      });
    }, (error) => {
      alert("Geolocation failed: " + error.message);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}