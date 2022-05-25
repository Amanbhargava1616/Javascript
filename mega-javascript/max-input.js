const max_char = 60;
input = document.getElementById("input");

remaining_number = document.getElementById("remaining_number");

function input_char() {
	let len = input.value.length;

	remaining_number.innerText = 60 - len;
	if (len >= 50) {
		input.style.backgroundColor = "rgb(254, 127, 127)";
	}
}

input.addEventListener("input", input_char);
