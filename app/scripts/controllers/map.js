'use strict';

var pensions =
[
    {
        "id": "1",
        "name": "리코펜션",
        "address1": "경기도 가평군 상면 청군로 288-7",
        "tel": "02-555-1305",
        "website": "http://www.club-fish.co.kr",
        "latitude": "37.7543439",
        "longitude": "127.4045576"
    },
    {
        "id": "2",
        "name": "우리두리센편",
        "address1": "경기도 가평군 상면 왕대벌길 24",
        "tel": "02-555-1305",
        "website": "http://www.club-fish.co.kr",
        "latitude": "37.7701236",
        "longitude": "127.3814719"
    },
    {
        "id": "3",
        "name": "꽃무리펜션",
        "address1": "경기도 가평군 상면 축령로 256-11",
        "tel": "02-555-1305",
        "website": "http://www.club-fish.co.kr",
        "latitude": "37.7747350",
        "longitude": "127.3473768"
    },
    {
        "id": "4",
        "name": "모닝힐펜션",
        "address1": "경기도 가평군 청평면 큰갈월로1번길 14",
        "tel": "02-555-1305",
        "website": "http://www.club-fish.co.kr",
        "latitude": "37.7207849",
        "longitude": "127.4015561"
    },
    {
        "id": "5",
        "name": "허브그린펜션",
        "address1": "경기도 가평군 상면 임초밤안골로 270",
        "tel": "02-555-1305",
        "website": "http://www.club-fish.co.kr",
        "latitude": "37.7500043",
        "longitude": "127.3619909"
    },
    {
        "id": "6",
        "name": "ING펜션리조트",
        "address1": "대한민국 경기도 가평군 가평읍 금대리",
        "tel": "02-555-1305",
        "website": "http://www.club-fish.co.kr",
        "latitude": "37.7574106",
        "longitude": "127.5401037"
    },
    {
        "id": "7",
        "name": "일산펜션",
        "address1": "대한민국 경기도 고양시 일산동구 설문동",
        "tel": "02-555-1305",
        "website": "http://www.club-fish.co.kr",
        "latitude": "37.7187317",
        "longitude": "126.7956315"
    },
    {
        "id": "8",
        "name": "이고을펜션캠핑장",
        "address1": "대한민국 경기도 양주시 남면 신암리",
        "tel": "02-555-1305",
        "website": "http://www.club-fish.co.kr",
        "latitude": "37.9216855",
        "longitude": "126.9677104"
    },
    {
        "id": "9",
        "name": "솔뜰펜션캠핑장",
        "address1": "경기도 양평군 옥천면 신복리 432-1",
        "tel": "02-555-1305",
        "website": "http://www.club-fish.co.kr",
        "latitude": "37.5421578",
        "longitude": "127.4680614"
    }
]


/**
 * @ngdoc function
 * @name pensbookApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the pensbookApp
 */
var pensbook = angular.module('pensbookApp');
pensbook.controller('MapCtrl', function ($scope) {
    var coords = { lat: 37.7538709, lng: 127.3719614 };
    var setLatLng = new google.maps.LatLng(coords.lat, coords.lng);
    var mapOptions = {
        zoom: 12,
        center: setLatLng,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    }

    $scope.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    $scope.marker = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function(info){
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.latitude, info.longitude),
            title: info.name
        });
        marker.content = '<div class="infoWindowContent">' + info.address1 + '<br/>' + info.latitude + ' E, ' + info.longitude + ' N, </div>';

        google.maps.event.addListener(marker, "click", function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });

        $scope.marker.push(marker);
    }
    for(var i = 0; i < pensions.length; i++){
        createMarker(pensions[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, "click");
    }
});
