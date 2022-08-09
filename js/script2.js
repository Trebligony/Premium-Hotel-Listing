var keyword = document.querySelector('#search-text');
var submitBtn = document.querySelector('#submit');
var googleMaps = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?&location=-33.8670522%2C151.1957362&radius=1500&type=restaurant';
var searchResults = document.querySelector('.list_title');
var apiKey = "AIzaSyDieokqGrcuNBJXx4au9wQ6rKDCNEvGSyY";


submitBtn.addEventListener('click', function () {
    var keyWord = keyword.value;
    var requestUrl = googleMaps + "&keyword=" + keyWord + "&key=" + apiKey;
    var searchResultsEl = document.querySelector('.list_title');
 
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

var rootEl = $('.list_title')
//var timeEl = $('#currentDay');
var saveBtn = $('.savebtn');
//var currentTime = moment().format("dddd, MMMM Do");
//var currentTimeHr = moment().format("HH");
//var curentTimeHrInt = moment().format("HH");
//var hours = [moment("1-1-2027 08:00:00").format("ha"),moment("1-1-2027 09:00:00").format("ha"), moment("1-1-2027 10:00:00").format("ha"), moment("1-1-2027 11:00:00").format("ha"), moment("1-1-2027 12:00:00").format("ha"), moment("1-1-2027 13:00:00").format("ha"), moment("1-1-2027 14:00:00").format("ha"), moment("1-1-2027 15:00:00").format("ha"), moment("1-1-2027 16:00:00").format("ha"), moment("1-1-2027 17:00:00").format("ha"), moment("1-1-2027 18:00:00").format("ha")];
//var hoursInts = [moment("1-1-2027 08:00:00").format("HH"), moment("1-1-2027 09:00:00").format("HH"), moment("1-1-2027 10:00:00").format("H"), moment("1-1-2027 10:00:00").format("HH"), moment("1-1-2027 11:00:00").format("HH"), moment("1-1-2027 12:00:00").format("HH"), moment("1-1-2027 13:00:00").format("HH"), moment("1-1-2027 14:00:00").format("HH"), moment("1-1-2027 15:00:00").format("HH"), moment("1-1-2027 16:00:00").format("HH"), moment("1-1-2027 17:00:00").format("HH"), moment("1-1-2027 18:00:00").format("HH")];
function writeFromLocalStorage () {
    for (let i = 0; i < hours.length; i++) {
        var mr1 = localStorage.getItem('mrs1');
        var mr2 = localStorage.getItem('mrs2');
        var mr3 = localStorage.getItem('mrs3');
        var mr4 = localStorage.getItem('mrs4');
        var mr5 = localStorage.getItem('mrs5');
        var mr6 = localStorage.getItem('mrs6');
        var mr7 = localStorage.getItem('mrs7');
        var mr8 = localStorage.getItem('mrs8');
        var mr9 = localStorage.getItem('mrs9');
        var mr10 = localStorage.getItem('mrs10');
        var mr11 = localStorage.getItem('mrs11');
        var mr12 = localStorage.getItem('mrs12');
        var mr13 = localStorage.getItem('mrs13');
        var mr14 = localStorage.getItem('mrs14');
        var mr15 = localStorage.getItem('mrs15');
        var mr16 = localStorage.getItem('mrs16');
        var mr17 = localStorage.getItem('mrs17');
        var mr18 = localStorage.getItem('mrs18');
        var mr19 = localStorage.getItem('mrs19');
        var mr20 = localStorage.getItem('mrs20');
       
        
        
        $('#8am').text(mr1);
        $('#9am').text(mr2);
        $('#10am').text(mr3);
        $('#11am').text(mr4);
        $('#12pm').text(mr5);
        $('#1pm').text(mr6);
        $('#2pm').text(mr7);
        $('#3pm').text(mr8);
        $('#8am').text(mr9);
        $('#9am').text(mr10);
        $('#10am').text(mr11);
        $('#11am').text(mr12);
        $('#12pm').text(mr13);
        $('#1pm').text(mr14);
        $('#2pm').text(mr15);
        $('#3pm').text(mr16);
        $('#12pm').text(mr17);
        $('#1pm').text(mr18);
        $('#2pm').text(mr19);
        $('#3pm').text(mr20);
    }
 }
function writeHourRows() {
    for (let i = 0; i < hours.length; i++) {
        var rowEl = $('<section>');
        var hourDiv = $('<div>');
        var textAreaSection = $('<textarea>');
        var rowBtn = $('<div>');
        var rowBtnImage = $('<img>');
         // Use IF-Then statement to change row color
        if (hoursInts[i] === currentTimeHr) {
            hourRowStyle = "present";
        } else if (Number(hoursInts[i]) > Number(curentTimeHrInt)) {
            hourRowStyle = "future";
        } else {
            hourRowStyle = "past";
        }
        // Create Row Element
        rootEl.append(rowEl);
        rowEl.attr('class', 'row');
        // Create Hour column
        rowEl.append(hourDiv);
        hourDiv.text(hours[i]);
        hourDiv.attr('class', 'hour');
        // Create Calendar Event Field
        rowEl.append(textAreaSection);
        textAreaSection.attr('class', hourRowStyle);
        textAreaSection.attr('id', hours[i]);
        // Create Save Button
        rowEl.append(rowBtn);
        rowBtn.attr('class', 'saveBtn');
        rowBtn.attr('data-index', hours[i]);
        // Append Image to Button DIV
        rowBtn.append(rowBtnImage);
        rowBtnImage.attr('src', './assets/images/save.png');
    }
}
rootEl.click(function (event) {
    var element = event.target;
    if (element.matches("span") === true) {
        var index = element.parentElement.getAttribute("data-index");
        var meetingDes = $("#" + index).get(0).value;
        localStorage.setItem(index, meetingDes);
    }
})
timeEl.text(currentTime);
writeHourRows();
writeFromLocalStorage ()

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

