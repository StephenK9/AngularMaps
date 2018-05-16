import { Component } from '@angular/core';
import { MouseEvent} from '@agm/core';
// when lodash was installed with npm i lodash, lodash worked. After that, when npm i @types/lodash was installed, nothing extra needed to be done. The type decleration files automatically loaded and the ide was able to give me the functions and their types. One interesting thing to note is that the type decleration files can have type errors if the person that wrote them made mistakes. Keep that in mind if some functionality that worked with generic .js files no longer work after importing the type decleration files.
import * as _ from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    console.log(this)
    var array = [1];
   console.log( _.add(4,5))
    var other = _.concat(array, 2, [3], [4]);
    
    console.log(`The function is:  var array = [1]; var other = _.concat(array, 2, [3], [[4]]);; and the result thereof is: ${_.concat(array, 2, [3], [4])}`)
  }
  
  someFunction(){
    console.log(window);
    console.log(document.addEventListener('mousewheel',()=>{
      console.log('mouse wheel engaged');
    }));
    
    document.getElementById('testing').innerHTML='FUCKING WORK!'
     console.log( document.getElementById('testing'))
    
  }
  triangleCoords = [
    {lat: 25.774, lng: -80.190},
    {lat: 18.466, lng: -66.118},
    {lat: 32.321, lng: -64.757},
    {lat: 25.774, lng: -80.190}
  ];
  styles=[
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#263c3f' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#6b9a76' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#38414e' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#212a37' }]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9ca5b3' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#746855' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#1f2835' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#f3d19c' }]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#2f3948' }]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#17263c' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#515c6d' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#17263c' }]
    }
  ]
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  
}
