alert("Script start");
DeviceMotionEvent.requestPermission()
.then(response => {
if (response == 'granted') {
    window.addEventListener('devicemotion', (e) => {
        // do something with e
        console.log(e);
        document.getElementById("outputMotion").innerText = e;
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
        document.getElementById("outputOrientation").innerText = e;
    })
}
})
.catch(console.error)

alert("Script end"); I
