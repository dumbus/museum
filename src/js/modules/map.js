const map = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZHVtYnVzIiwiYSI6ImNrdWszNm1yazBwdDAydnBlcmhxdWsyeXYifQ.b-cwn5KK_PbzwLkU_23CJw';

  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 15.75,
    center: [2.3364, 48.86091],
  });

  let nav = new mapboxgl.NavigationControl({
    showCompass: true,
    showZoom: true,
  });

  map.addControl(nav, 'top-right');

  const marker1 = new mapboxgl.Marker({color: '#000000'})
        .setLngLat([2.3364, 48.86091])
        .addTo(map);

const marker2 = new mapboxgl.Marker({color: '#828282'})
      .setLngLat([2.3333, 48.8602])
      .addTo(map);

const marker3 = new mapboxgl.Marker({color: '#828282'})
      .setLngLat([2.3397, 48.8607])
      .addTo(map);

const marker4 = new mapboxgl.Marker({color: '#828282'})
      .setLngLat([2.3330, 48.8619])
      .addTo(map);

const marker5 = new mapboxgl.Marker({color: '#828282'})
      .setLngLat([2.3365, 48.8625])
      .addTo(map);

  

};

export default map;