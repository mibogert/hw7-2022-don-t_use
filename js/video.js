
// page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

let video = document.querySelector("video");
video.autoplay = false;
video.loop = false;

//  play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").textContent = (video.volume *100).toFixed(2) + "%";
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});
// slow down button
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.9;
	console.long("New playback rate:", video.playbackRate)
});
// speed up button
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.9;
	console.long("New playback rate:", video.playbackRate)
});

// skip ahead button
document.querySelector("#skip").addEventListener("click", function () {
console.log("Skip Ahead");
video.currentTime += 10;
if (video.currentTime >= video.duration) {
	video.currentTime = 0;
}
console.log("Current Time", video.currentTime);
});

// mute button
document.querySelector("#mute").addEventListener("click", function () {
if (video.muted) {
	video.muted = false;
	this.textContent = "Mute";
} else {
	video.muted = true;
	this.textContent = "Unmute";
}
});

// volume slider
let volumeSlider = document.querySelector("#slider");
let volumeDisplay = document.querySelector("#volume");
video.volume = volumeSlider.value / 100;
volumeDisplay.textContent = video.volume.toFixed(2) + "%";
volumeSlider.addEventListener("input", function () {
	video.volume = this.value / 100;
	volumeDisplay.textContent = video.volume.toFixed(2) + "%";
});

// old school & original option
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
});
