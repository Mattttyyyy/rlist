
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
		/*var attr = document.createAttribute("onclick");
		attr.value = "submit()";
		var h = document.getElementByTagName("button")[0];
		h.setAttributeNode(attr)*/
		btn.addEventListener('click', function(clicky){
			alert(`Thank you for confirming!`);

			// If Else Statement

			// Create a conditional statement that gives a user some options whether they will subscribe to a monthly subscription based on given benefits as a subscriber (you can choose any product/services for this scenario)
				
			alert(`We will now give you choice, and the following choice will benefit you. Are you ready?`);
				// 1Q
				let userAnswer = prompt(`Type "y" to proceed. Otherwise, type "n".`);
				// First Answer Yes to First Question at first; 1Q1A
				if(userAnswer === `y` || userAnswer === `Y`)
				{
						// 1Q1A2Q
						let userAnswer1 = prompt(`The first benefit is for our new customers. Are you our existing customer? Type "y" to agree. Otherwise, type "n".`)
						{
								// 1Q1A2Q1A
								if(userAnswer1 === `y` || userAnswer1 === `Y`){
									let userAnswer2 = prompt(`For existing customers; As our first version prototype of prepaid products, we are offering a one-time bonus discount of -50% to switch to our monthly subscription; Would you like to hear more? Type "y" to agree. Otherwise, type "n".`)
										if(userAnswer2 === `y` || userAnswer2 === `Y`){
										prompt(`Please input your email or phone number so our agents can further assist you.`)
										alert(`You will be assisted by our customer service concierge shortly! We wholeheartedly thank you for your support! And we are more than looking forward to serving you more!`)
									}
										if(userAnswer2 === `n` || userAnswer2 === `N`){
										alert(`We're sad to hear that, although this may be disheartening to know, our offer still stands and you may visit us anytime soon until the end of our campaign period!! Until March 08, 2022! Thank you for your continued support!`)
									}
								};
								//1Q1A2Q2A 
								if(userAnswer1 === `n` || userAnswer1 === `N`){
									alert(`I'm sorry we currently don't have any offers for our new customers; As we prioritize this exclusive offer to our existing customers. Thank you for your time with us!`)
								};
						
						};
						if(userAnswer === `n` || userAnswer === `N`){  
									alert(`I'm sorry you don't want to hear more of our benefits. Thank you for your interest in visiting our website!`)}
				};

		// Ternary Operator

		// Convert the conditional statement with the use of Ternary Operator
			let minute = prompt(`Oh! And before we actually forget, do you have a minute? Y/N?`);

			prompt((minute === `y` || minute === `Y`) ? `Can you leave us a  short comment about your experience with us so far?` : `This will be very short, I promise. Just a quick feedback/comment will do about your experience with us! Thank you!`);

			alert(`From the bottom of our hearts, thank you so very much for your time!`);

		});
		






