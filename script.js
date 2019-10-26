alert("Script start");
DeviceMotionEvent.requestPermission()
.then(response => {
if (response == 'granted') {
    window.addEventListener('devicemotion', (e) => {
    // do something with e
    console.log(e);
    })
}
})
.catch(console.error)

DeviceOrientationEvent.requestPermission()
.then(response => {
if (response == 'granted') {
    window.addEventListener('deviceorientation', (e) => {
    // do something with e
    console.log(e);
    })
}
})
.catch(console.error)

alert("Script end"); 