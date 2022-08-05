var map;
var service;
var infowindow;
var submitBtn = document.getElementById('submit');
var searchVal = document.getElementById('search-text');

function initMap() {
  console.log(searchVal.value);
  var sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
    document.getElementById('map'), { center: sydney, zoom: 15 });

  // map = new google.maps.Map();
  
  var request = {
    query: searchVal,
    fields: ['name', 'icon', 'geometry', 'price_level', 'rating'],
  };

  var service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        console.log(results);
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}


function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}

submitBtn.addEventListener("click", function() {
  event.preventDefault();
  initMap();
});

