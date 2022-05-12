var age = prompt("Please enter your age");
document.write(age);
try {
	if (age > 18) {
		age = "above";
	} else if (age <= 0) {
		throw -1;
	} else {
		age = "Below";
	}
} catch (error) {
	document.write("Not valid");
}
