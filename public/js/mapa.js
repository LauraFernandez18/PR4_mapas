window.onload = function() {
    /*MOSTRAR MAPA*/
    var map = L.map('map').setView([41.373703, 2.187467], 15);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFuaWlpMDA5IiwiYSI6ImNsMGd2NHZ2cjAxZ2czb28yeGRmaGx0MXMifQ.fzf_61wajMWBZ0AIkFG87g', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v10',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZGFuaWlpMDA5IiwiYSI6ImNsMGd2NHZ2cjAxZ2czb28yeGRmaGx0MXMifQ.fzf_61wajMWBZ0AIkFG87g'
    }).addTo(map);

    /* poligono */
    var polygon = L.polygon([
        [41.357596, 2.183804],
        [41.383637, 2.182141],
        [41.387918, 2.195807],
        [41.384903, 2.199920],
        [41.380766, 2.197533],
        [41.374282, 2.194663],
        [41.357662, 2.185403]
    ]).addTo(map);

    polygon.setStyle({
        color: 'red',
        opacity: 0.6,
        fillColor: '#333333',
        fillOpacity: 0.1
    });
}