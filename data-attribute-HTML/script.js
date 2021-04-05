let rockets, altitude, speed, distance;
function activateRockets() {
  rockets = document.querySelectorAll('div.rockets');
  for (let i = 0; i < rockets.length; i++) {
    altitude = rockets[i].dataset.altitude;
    speed = rockets[i].dataset.speed;
    distance = rockets[i].dataset.rocketDistance;
    rockets[i].style.top = altitude + 'px';
    rockets[i].style.transitionDuration = speed + 's';
    rockets[i].style.left = distance + 'px';
  }
}
window.addEventListener('load', activateRockets);

//we can also use getAttribute() for the older browsers instead of dataset. Dataset is supported in all modern browsers though;
