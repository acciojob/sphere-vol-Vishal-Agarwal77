function volume_sphere() {
    //Write your code here
	const radius=document.getElementById("radius").value;
	// console.log(radius);
	let vol=4/3*Math.PI*(radius**3);
	console.log(vol);
	document.getElementById("volume").value=`${vol}`;
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
