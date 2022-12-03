render_map()
function render_map(){
    var map = L.map('map').setView([48.716385, 21.261074], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var myIcon = L.icon({
        iconUrl: 'images/bus.png',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
    });

    L.marker([48.716385, 30.57], {icon: myIcon}).addTo(map);
}