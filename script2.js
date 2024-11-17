let autocomplete;

document.addEventListener("DOMContentLoaded", () => {
  initAutocomplete();
});

function initAutocomplete() {
  const input = document.getElementById("autocomplete");
  autocomplete = new google.maps.places.Autocomplete(input);
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


  const elevationUrl = `https://maps.googleapis.com/maps/api/elevation/json?locations=${lat}%2C${lng}&key=AIzaSyAU-qMK7iqlaPfllH4w5BCqW2GI6X_sf1M`;


  fetch(elevationUrl)
    .then(response => response.json()) 
    .then(data => {
      if (data.status === "OK") {
        const elevation = data.results[0].elevation;
        console.log(`Elevation: ${elevation} meters`);
      } else {
        console.error(`Elevation API error: ${data.status}`);
      }
    })
    .catch(error => console.error("Error fetching elevation data:", error));

  return [lat, lng];
}

