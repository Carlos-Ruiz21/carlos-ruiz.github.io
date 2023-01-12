window.addEventListener("load", ()=>{
    consultarInformacionPersonal();
});

function consultarInformacionPersonal(){

    return fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => procesarRespuesta(data));
}

function procesarRespuesta(data){
    console.log(data);
}

function procesarRespuesta(data){
    let persona = data['results'][0];
    let genero = document.getElementById('idGenero');
        genero.innerHTML = "Genero: " + `${persona.gender}`;
    let nombre = document.getElementById('idNombre');
        nombre.innerHTML = "Nombre y Apellido: " + `${persona.name.first} ${persona.name.last}`;
    let ciudad = document.getElementById('idCiudad');
        ciudad.innerHTML = "Ciudad: " + `${persona.location.city}`;
    let estado = document.getElementById('idEstado');
        estado.innerHTML = "Estado: " + `${persona.location.state}`;
    let pais = document.getElementById('idPais');
        pais.innerHTML = "Pais: " + `${persona.location.country}`;
    let codPost = document.getElementById('idCodPost');
        codPost.innerHTML = "Codigo Postal: " + `${persona.location.postcode}`;
    let email = document.getElementById('idEmail');
        email.innerHTML = "E-mail: " + `${persona.email}`;
    let fecNac = document.getElementById('idFecNac');
        fecNac.innerHTML = "Fecha de Nacimiento: " + `${persona.dob.date}`;
    let edad = document.getElementById('idEdad');
        edad.innerHTML = "Edad: " + `${persona.dob.age}`; 
    let celular = document.getElementById('idCelular');
        celular.innerHTML = "Telefono cellular: " + `${persona.cell}`;

    let foto = document.getElementById('idFoto');
        foto['src'] = persona.picture.large;

    let {latitude, longitude} = persona.location.coordinates;
    buscarEnMapa(latitude, longitude);
}

function buscarEnMapa(latitud, longitud) {
    let mapOptions = {
        center:[latitud, longitud],
        zoom:10
    }
    
    let map = new L.map('map-id' , mapOptions);
    
    let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);
    
    let marker = new L.Marker([latitud, longitud]);
    marker.addTo(map);
}

