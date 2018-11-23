function myFirstApp(name, age) {
	
	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let skills = ["html", "css", "figma"];

		for(let i = 0; i < skills.length; i++) {
			document.write("Я владею " + skills[i] + "!" + "<br>")
		}
	}

	showSkills();
	function checkAge() {
		if (age > 18) {
			alert("Вы можете войти!")
		} else {
			alert("Вход воспрещен! Возрастное ограничение [18+]!")
		}
	}

	function calcPow(num) {
		console.log(num * num)
	}
	
	calcPow(4)
}

myFirstApp("Ivan", 32)