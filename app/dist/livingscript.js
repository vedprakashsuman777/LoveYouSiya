// Poem text
const kiplingPoem = `<p>
As the New Year dawns upon us, dear,   
<span>My love Priya for you shines ever so clear.</span>   
<span>Together, we've woven memories so fine,</span>   
<span>From morning texts to midnight signs.</span>   

<span>Virtual hugs and shared dreams so sweet,</span>   
<span>Our laughter and tears, making our love complete.</span>   
<span>You've been my anchor, my guiding star,</span>   
<span>No matter the distance, never too far. Hashmukhlal</span>   

<span>Our messages, like threads, have sewn</span>   
<span>A beautiful tapestry of love we've grown.</span>   
<span>Let's embrace the year ahead, my love,</span>   
<span>With promises of joy and blessings from above. Meri Pehalwan</span>   

<span>Happy New Year, my heart's true delight, Priya</span>   
<span>Let's create more memories, in day and night. Love you so much from your Gyani Baba</span>
</p>`;

// Function to insert poem into divs
function insertPoemIntoDivs() {
	// Get all .text divs
	const textDivs = document.querySelectorAll(".text");

	// Insert poem into all .text divs
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);