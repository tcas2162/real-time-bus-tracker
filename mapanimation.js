// This array contains the coordinates for all bus stops between Coram Apartments and Smithaven Mall
const busStops = [
    [-72.99856497195321,40.87026663596319],
    [-73.03355699223056,40.854643973730276],
    [-73.05679206243246,40.840205436183766],
    [-73.05327637874495,40.84611132429484],
    [-73.04591891191619,40.8532987311724],
    [-73.04750764482904, 40.864015247760705],
    [-73.05220773377422,40.86323182285352],
    [-73.04569372485874, 40.89828271518067],
    [-73.06784497511596, 40.88037979641854],
    [-73.0925979039287, 40.88026768897444],
    [-73.08283952867298, 40.85843344245458],
    [-73.13111144025832, 40.86419354212157],
  ];
  
  // My Mapbox access token
  mapboxgl.accessToken = 'pk.eyJ1IjoidGNhczIxNjIiLCJhIjoiY2t3czQ4aThtMTM3ZjMxbnlodnZubncwMiJ9._vwK8dEth90d4ynpgrbuTg';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-72.99216106049974,40.88443688669096],
    zoom: 14,
  });
  
  //Marker added to the map at the first coordinates in the array busStops. The marker variable is named "marker"
  let marker = new mapboxgl.Marker().setLngLat([-72.99216106049974,40.88443688669096]).addTo(map);
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
   setTimeout(() =>{
  
      if(counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
   }, 1000);
  }
  
  
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  