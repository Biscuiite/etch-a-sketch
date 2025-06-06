const container = document.querySelector("#container");

function createGrid(size) {
	squareNumber = size * size;
	let containerWidth = container.offsetWidth;
    let containerHeight = container.offsetHeight;

    let cellWidth = containerWidth / size;
    let cellHeight = containerHeight / size;

	for (let i = 0; i < squareNumber; i++) {
		const grid = document.createElement("div");
		grid.classList.add("grid");
		grid.classList.add("grid" + i);
		container.appendChild(grid);
		grid.style.width = `${cellWidth}px`;
        grid.style.height = `${cellHeight}px`;
	}
	
}

createGrid(16);

//changing the color of the grid when the mouse hovers over it
const grid = document.querySelectorAll(".grid");
grid.forEach((grid) => {
	grid.addEventListener("mouseover", () => {
		grid.style.backgroundColor = "black";
	});
});
//clearing the grid
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
	grid.forEach((grid) => {
		grid.style.backgroundColor = "white";
	});
});

//changing the size of the grid
const sizeButton = document.querySelector("#resize");
sizeButton.addEventListener("click", () => {
	container.innerHTML = "";
	let newSize = prompt ("Enter a new grid size between 1 and 100 :");
	if (newSize < 1 || newSize > 100) {
		alert ("Please enter a correct size between 1 and 100");
	} else {
		createGrid (newSize);
		const grid = document.querySelectorAll(".grid");
		grid.forEach((grid) => {
			grid.addEventListener("mouseover", () => {
				grid.style.backgroundColor = "black";
			});
		});	
		//clearing the grid
		const resetButton = document.querySelector("#reset");
		resetButton.addEventListener("click", () => {
			grid.forEach((grid) => {
				grid.style.backgroundColor = "white";
			});
		});
	}

})


