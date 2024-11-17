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
  return [lat, lng];
}
