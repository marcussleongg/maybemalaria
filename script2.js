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


  const elevationUrl = `https://api.open-meteo.com/v1/elevation?latitude=${lat}&longitude=${lng}`;
    fetch(elevationUrl)
        .then((response) => response.json())
        .then((data) => {
        const elevation = data.elevation[0];
        console.log(elevation);
        });

  return [lat, lng];
}

