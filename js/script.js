var googleMaps = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&libraries=places&radius=1500';
var srcKeyword = document.querySelector("#search-keyword");
var userFormEl = document.querySelector('#search-form');
var queryResults = document.querySelector('#restaurants_list');
var requestUrl = googleMaps + "&keyword=" + srcKeyword.value + "&key=" + apiKey;

userFormEl.addEventListener('submit', function () {
    event.preventDefault();

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {

            console.log(data);
            console.log(requestUrl);
                        
            data.results.forEach(obj => {
                
                
                queryResults.innerHTML += `        
            <div class="restaurants_wrap">
                <a href="#" class="list_wrap">
                    <div class="list_img">
                        <img src="${obj.icon}}" alt="image">
                    </div>
                    <div class="list_info">
                        <div class="list_title">${obj.name}</div>
                        <div class="list_cuisines">
                        <h3>Types:</h3>                    
                        <ul>
                            <li>${obj.type[0]}, </li>
                            <li>Review, </li>
                            <li>Pricing info, </li>
                            <li>Comfort level</li>
                        </ul>
                        </div>
                        <div class="list_affordability">
                        <span class="list__affordability__value">₹</span>₹₹
                        </div>
                        <div class="list_ratings">
                        <i class="fa fa-star active"></i>
                        <i class="fa fa-star active"></i>
                        <i class="fa fa-star active"></i>
                        <i class="fa fa-star active"></i>
                        <i class="fa fa-star"></i>
                        <span>(2560)</span>
                        </div>
                    </div>
                    <div class="list_delivery_time">
                        <span>Pick This Hotel</span>
                        <i class="fa fa-angle-right"></i>
                    </div>
                </a>
            </div>`;
            });
        });
});