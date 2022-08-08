var keyword = document.querySelector('#search-text');
var submitBtn = document.querySelector('#submit');
var googleMaps = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?&location=-33.8670522%2C151.1957362&radius=1500&type=restaurant';
var searchResults = document.querySelector('.restaurants_list');


submitBtn.addEventListener('click', function () {
    var keyWord = keyword.value;
    var requestUrl = googleMaps + "&keyword=" + keyWord + "&key=" + apiKey;
    var searchResultsEl = document.querySelector('.restaurants_list');
 
    fetch(requestUrl)    
    .then(function (response) {        
        return response.json();
    }).then(function (data) {
        var data = data.results;           
            
        for (var i = 0; i < data.length; i++) {            
            var businessName = data[i].name;  
            var businessRating = data[i].rating;            
            var businessVicinity = data[i].vicinity;
            var businessDetails = "Vicinity: " + businessVicinity + " -- " + "Rating: " + businessRating;
            
            var resultsListRowEL = document.createElement('li')
            var businessNameEl = document.createElement('h3');
            var businessDetailsEl = document.createElement('p');
            var starSpanEl = document.createElement('span');
            
            businessNameEl.textContent = businessName;
            businessDetailsEl.textContent = businessDetails;
            starSpanEl.classList.add("fa");
            starSpanEl.classList.add("fa-star");

            searchResultsEl.append(resultsListRowEL);
            resultsListRowEL.append(businessNameEl);
            resultsListRowEL.append(businessDetailsEl);
            resultsListRowEL.append(starSpanEl);
          }        
    });
})

// var map;
// var service;
// var infowindow;
// var submitBtn = document.getElementById('submit');
// var searchVal = document.getElementById('search-text');

// function initMap() {
//   console.log(searchVal.value);
//   var sydney = new google.maps.LatLng(-33.867, 151.195);

//   infowindow = new google.maps.InfoWindow();

//   map = new google.maps.Map(
//     document.getElementById('map'), { center: sydney, zoom: 15 });

//   // map = new google.maps.Map();
  
//   var request = {
//     query: searchVal,
//     fields: ['name', 'icon', 'geometry', 'price_level', 'rating'],
//   };

//   var service = new google.maps.places.PlacesService(map);

//   service.findPlaceFromQuery(request, function (results, status) {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       for (var i = 0; i < results.length; i++) {
//         console.log(results);
//         createMarker(results[i]);
//       }
//       map.setCenter(results[0].geometry.location);
//     }
//   });
// }


// function createMarker(place) {
//   if (!place.geometry || !place.geometry.location) return;

//   const marker = new google.maps.Marker({
//     map,
//     position: place.geometry.location,
//   });

//   google.maps.event.addListener(marker, "click", () => {
//     infowindow.setContent(place.name || "");
//     infowindow.open(map);
//   });
// }

// submitBtn.addEventListener("click", function() {
//   event.preventDefault();
//   initMap();
// });
// =======
// var map;
// var service;
// var infowindow;
// var submitBtn = document.getElementById('submit');
// var searchVal = document.getElementById('search-text');

// function initMap() {
//   console.log(searchVal.value);
//   var sydney = new google.maps.LatLng(-33.867, 151.195);

//   infowindow = new google.maps.InfoWindow();

//   map = new google.maps.Map(
//     document.getElementById('map'), { center: sydney, zoom: 15 });

//   // map = new google.maps.Map();
  
//   var request = {
//     query: searchVal,
//     fields: ['name', 'icon', 'geometry', 'price_level', 'rating'],
//   };

//   var service = new google.maps.places.PlacesService(map);

//   service.findPlaceFromQuery(request, function (results, status) {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       for (var i = 0; i < results.length; i++) {
//         console.log(results);
//         createMarker(results[i]);
//       }
//       map.setCenter(results[0].geometry.location);
//     }
//   });
// }


// function createMarker(place) {
//   if (!place.geometry || !place.geometry.location) return;

//   const marker = new google.maps.Marker({
//     map,
//     position: place.geometry.location,
//   });

//   google.maps.event.addListener(marker, "click", () => {
//     infowindow.setContent(place.name || "");
//     infowindow.open(map);
//   });
// }

// submitBtn.addEventListener("click", function() {
//   event.preventDefault();
//   initMap();
// });
// >>>>>>> 80c3caeff31c02ccf4f36b9a1d441ea6bde77063

