
	// Javascript Functions


// Create a function that will accept first name, last name, age, current job, reason for career shift, future goals, and return a complete sentence introducing one's self bearing the input of the user. You may use an object data type as an argument, and access the properties of an object inside the function to get the actual value of properties passed in the function. 

var log = console.log;


			


			function introduction(
								fname, 
								lname, 
								age, 
								currentJob, 
								reason, 
								futureGoals){

			return `Greetings, `+fname+` `+lname+`, you are currently `+age+` years of age. Your current job is: `+currentJob+`, and the reason for your career shift is: `+reason+`. Lastly, your future goal(s) is/are: `+futureGoals+`. Right?`
		};

		let user = introduction(
					prompt(`Enter your first name.`), 
					prompt(`Enter your last name.`), 
					prompt(`Enter your age.`), 
					prompt(`What is your current job?`), 
					prompt(`And your reason(s) for a career shift?`), 
					prompt(`What is/are your future goal(s)?`));
		log(user);
		document.getElementById("head").innerHTML = user;

		/*Button appears after the prompts <3*/
		let btn = document.createElement("button");
		btn.innerHTML = "Submit";
		btn.type = "submit";
		btn.name = "formBtn";
		document.body.appendChild(btn);

		/*Functionalities of the button*/
		var attr = document.createAttribute("onclick");
		attr.value = "submit()";
		var h = document.getElementByTagName("button")[0];
		h.setAttributeNode(attr)


		function submit(){
		alert(`Thank you for confirming!`);
		
	};


	// If Else Statement

// Create a conditional statement that gives a user some options whether they will subscribe to a monthly subscription based on given benefits as a subscriber (you can choose any product/services for this scenario)

