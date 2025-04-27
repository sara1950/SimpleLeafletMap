
let map =L.map ('map',{
    measureControl: true
});

map.setView([45.805384, 15.971799],12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let ikona = L.icon({
    iconUrl: 'myicon.svg',
    iconSize: [25, 50],
    iconAnchor: [10, 50],
    popupAnchor: [-3, -76],
   
});

//dodavanje mjerila
L.control.scale().addTo(map);

map.zoomControl.setPosition('topright');




$(".print-map").click(function(){
    window.print();
});



L.Control.geocoder().addTo(map);

//definicija markera
let marker_bundek = L.marker([45.785356, 15.987199],{icon: ikona}).addTo(map);
marker_bundek.bindTooltip("<b>Klikni</b>");
let marker_jarun = L.marker([45.781915, 15.922426],{icon: ikona}).addTo(map);
marker_jarun.bindTooltip("<b>Klikni</b>");
let marker_botvrt = L.marker([45.804919, 15.971511],{icon: ikona}).addTo(map);
marker_botvrt.bindTooltip("<b>Klikni</b>");
let marker_maks = L.marker([45.822971, 16.017836],{icon: ikona}).addTo(map);
marker_maks.bindTooltip("<b>Klikni</b>");
let marker_medved = L.marker([45.8694731, 15.94088],{icon: ikona}).addTo(map);
marker_medved.bindTooltip("<b>Klikni</b>");


let bundek_img = '<img src="https://www.plantea.com.hr/wp-content/uploads/2022/06/park-bundek-jezero-2-1170x650.jpg" height="200px" width="300px"';
let jarun_img = '<img src="https://www.apartmani-altis.com/wp-content/uploads/2014/04/jarun_zagreb_iz_zraka__moj_kvart_363951246.jpg" height="200px" width="300px"';
let medved_img = '<img src="https://zagorka.net/wp-content/uploads/2022/07/Medvedgrad-3.jpg" height="200px" width="300px"';
let botanicki_img ='<img src="https://botanickivrt.biol.pmf.hr/wp-content/uploads/2020/12/proljece-3.jpg" height="200px" width="300px"';
let maks_img ='<img src="https://zagorka.net/wp-content/uploads/2020/05/Maksimir.jpg" height="200px" width="300px"';


marker_bundek.bindPopup("<h3><center>Ovo je Bundek</center></h3>"+bundek_img+" <br><p>Mjesto za šetnju i rekreaciju</p>");
marker_jarun.bindPopup("<h3><center>Ovo je Jarun</center></h3>"+jarun_img+" <br><p>Sportsko-rekreacijski centar s brojnim zabavnim sadržajima.</p>");
marker_botvrt.bindPopup("<h3><center>Ovo je Botanički vrt</center></h3>"+botanicki_img+" <br><p>Botanički vrt otvoren od proljeća od jeseni, s brojnim jednogodišnjim biljkama, trajnicama, stablima i jezercima.</p>");
marker_maks.bindPopup("<h3><center>Ovo je Maksimir</center></h3>"+maks_img+" <br> <p>Park Maksimir najveći je gradski park u Zagrebu.</p>");
marker_medved.bindPopup("<h3><center>Ovo je Medvedgrad</center></h3>"+medved_img+" <br><p> <p>Medvedgrad je stara utvrda izgrađena u 13.stoljeću.</p>");




//navigacija
navigator.geolocation.watchPosition(success, error);
function success(position){
console.log(position);
const lat = position.coords.latitude;
const lon = position.coords.longitude;
const accuracy = position.coords.accuracy;

L.marker([lat,lon]).addTo(map);
// L.circle([lat,lon], {radius:accuracy}).addTo(map);

}
function error(err){
if(err.code==1){
alert ("Allow gelocation");
}else{
alert("Can not connect");
}
}



L.control.browserPrint({position: 'topleft', title: 'Print ...'}).addTo(map);


L.Control.Measure(options).addTo(map);