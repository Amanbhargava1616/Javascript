var age = prompt("Please enter your age");
if (age > 18) {
	age = "above";
} else {
	age = "Below";
}
document.write(age);
try {
	if (age <= 0) throw -1;
} catch (error) {
	document.write("Not valid");
}
