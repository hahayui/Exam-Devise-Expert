$(document).ready(function () {


    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');

        } else {
            $('nav').removeClass('black');
        }
    })

    $("nav ul a[href^='#']").on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 70
            },
            3000,
            function () {});
    });




    //DATA - JSON

    var section1 = document.querySelector('#moderate');
    var section2 = document.querySelector('#moderatelyActive');
    var section3 = document.querySelector('#adventuresome');

    var requestURL = 'https://api.myjson.com/bins/v07e9'; //'../scripts/excursions.json'; - NOT WORKING ON ALL BROWSERS
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        var excursion = request.response;
        //populateHeader(excursion);
        showModerateActivity(excursion);
        showModeratelyActiveActivity(excursion);
        showAdventuresome(excursion);
    }
    /*
        function populateHeader(jsonObj) {
            var myH1 = document.createElement('h1');
            myH1.textContent = jsonObj['type'];
            section1.appendChild(myH1);

        }*/

    function showModerateActivity(jsonObj) {
        var moderateActivity = jsonObj['moderateActivity'];

        for (i = 0; i < moderateActivity.length; i++) {
            var myArticle = document.createElement('article');
            var H1 = document.createElement('h1');
            H1.className = "moderate_heading1";
            var image1 = document.createElement('img');
            var operatorCostDates = document.createElement('p');
            operatorCostDates.className = "oCD";
            var pText = document.createElement('p');
            pText.className = "text";

            H1.textContent = moderateActivity[i].name;
            image1.setAttribute('src', moderateActivity[i].img1);
            operatorCostDates.textContent = moderateActivity[i].operatorCostDates;
            pText.textContent = moderateActivity[i].text1;


            myArticle.appendChild(H1);
            myArticle.appendChild(image1);
            myArticle.appendChild(operatorCostDates);
            myArticle.appendChild(pText);
            section1.appendChild(myArticle);


        }
    }

    function showModeratelyActiveActivity(jsonObj) {
        var moderatelyActiveActivity = jsonObj['moderatelyActiveActivity'];
        for (j = 0; j < moderatelyActiveActivity.length; j++) {
            var myArticle = document.createElement('article');
            var H1 = document.createElement('h1');
            H1.className = "moderate_heading1";

            var image1 = document.createElement('img');

            var operatorCostDates = document.createElement('p');
            operatorCostDates.className = "oCD";

            var pText = document.createElement('p');
            pText.className = "text";

            H1.textContent = moderatelyActiveActivity[j].name;
            image1.setAttribute('src', moderatelyActiveActivity[j].img1);
            operatorCostDates.textContent = moderatelyActiveActivity[j].operatorCostDates;
            pText.textContent = moderatelyActiveActivity[j].text1;


            myArticle.appendChild(H1);
            myArticle.appendChild(image1);
            myArticle.appendChild(operatorCostDates);
            myArticle.appendChild(pText);
            section2.appendChild(myArticle);

        }
    }

    function showAdventuresome(jsonObj) {
        var adventuresomeActiviy = jsonObj['adventuresomeActivity'];
        for (k = 0; k < adventuresomeActiviy.length; k++) {
            var myArticle = document.createElement('article');
            var H1 = document.createElement('h1');
            H1.className = "moderate_heading1";

            var image1 = document.createElement('img');

            var operatorCostDates = document.createElement('p');
            operatorCostDates.className = "oCD";

            var pText = document.createElement('p');
            pText.className = "text";

            H1.textContent = adventuresomeActiviy[k].name;
            image1.setAttribute('src', adventuresomeActiviy[k].img1);
            operatorCostDates.textContent = adventuresomeActiviy[k].operatorCostDates;
            pText.textContent = adventuresomeActiviy[k].text1;


            myArticle.appendChild(H1);
            myArticle.appendChild(image1);
            myArticle.appendChild(operatorCostDates);
            myArticle.appendChild(pText);
            section3.appendChild(myArticle);

        }
    }
});

