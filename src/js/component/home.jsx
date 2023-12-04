import React, { useState } from "react";

//create component
const Home = () => {
	// glow will change depending which circle is clicked 
	const [selectedColor, setSelectedColor] = useState("red");
	
	return (
		
		<div className="trafficLight">
			<div class="vertLine"></div>
		{/* className same for css/less lines of code; if color is red glow else nothing */}
			<div 
				onClick={() => setSelectedColor("red")}
				className={"light red" + ((selectedColor === "red") ? " glow" : "")}></div>
			<div 
				onClick={() => setSelectedColor("yellow")}
				className={"light yellow" + ((selectedColor === "yellow") ? " glow" : "")}></div>
			<div 
				onClick={() => setSelectedColor("green")}
				className={"light green" + ((selectedColor === "green") ? " glow" : "")}></div>		
		</div>
	);
};

export default Home;