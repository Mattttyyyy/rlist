
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
		var h1 = document.getElementById("head");
		h1.innerHTML = user;

		/*Button appears after the prompts <3*/
		var btn = document.createElement("button");
		btn.innerHTML = "Submit";
		btn.type = "submit";
		btn.name = "formBtn";
		document.body.appendChild(btn)[4];

		/*Functionalities of the button*/
		/*var attr = document.createAttribute("onclick");
		attr.value = "submit()";
		var h = document.getElementsByTagName("button")[0];
		h.setAttributeNode(attr)*/
		btn.addEventListener('click', function(clicky)
		{
			alert(`Thank you for confirming!`);

			// If Else Statement

			// Create a conditional statement that gives a user some options whether they will subscribe to a monthly subscription based on given benefits as a subscriber (you can choose any product/services for this scenario)
				
			alert(`We will now give you choice, and the following choice will benefit you. Are you ready?`);
				// 1Q
				var userAnswer = prompt(`Type "y" to proceed. Otherwise, type "n".`);
				// First Answer Yes to First Question at first; 1Q1A
				if(userAnswer === `y` || userAnswer === `Y`)
				{
						// 1Q1A2Q
						var userAnswer1 = prompt(`The first benefit is for our new customers. Are you our existing customer? Type "y" to agree. Otherwise, type "n".`)
						{
								// 1Q1A2Q1A
								if(userAnswer1 === `y` || userAnswer1 === `Y`){
									var userAnswer2 = prompt(`For existing customers; As our first version prototype of prepaid products, we are offering a one-time bonus discount of -50% to switch to our monthly subscription; Would you like to hear more? Type "y" to agree. Otherwise, type "n".`)
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
				}
				else if(userAnswer === `n` || userAnswer === `N`){  
									alert(`I'm sorry you don't want to hear more of our benefits. Thank you for your interest in visiting our website!`)
									userAnswer1 = "n";
				}

				else{
					alert(`I'm sorry I could not read your answer, please press submit again and communicate in either "y" or "n" response. Thank you for your understanding.`);
					return userAnswer1 = `n`; 
				};
			
				// Ternary Operator

				// Convert the conditional statement with the use of Ternary Operator
					let minute = prompt(`Oh! And before we actually forget, do you have a minute? Y/N?`);

					prompt((minute === `y` || minute === `Y`) ? `Can you leave us a  short comment about your experience with us so far?` : `This will be very short, I promise. Just a quick feedback/comment will do about your experience with us! Thank you!`);

					alert(`From the bottom of our hearts, thank you so very much for your time!`);


				h1.remove();
				var btn1 = document.getElementsByTagName("button")[0];
				btn1.remove();
				var h33 = document.getElementById("head3");
				var p11 = document.getElementById("para1");
				var p22 = document.getElementById("para2");
				var p33 = document.getElementById("para3");
				
				// Switch case statement
				// Create a conditional statements that will give the user options base on their needs followed by executing the codes based on the chosen option

					// Addtl buttons for options
					var btnOp1 = document.createElement("button");
					btnOp1.innerHTML = "Choose Package 1";
					btnOp1.type = "submit";
					btnOp1.name = "formBtn1";
					document.body.appendChild(btnOp1)[4];
					btnOp1.addEventListener('click', function(clicky1)
					{
						alert(`Package 1 on your way! Thank you!`);
						h33.remove();
						p11.remove();
						p22.remove();
						p33.remove();
						btnOp1.remove();
						btnOp2.remove();
						var h11 = document.getElementById("head2");
						h11.innerHTML = "Congratulations! You have passed through the next phase!";
						var btnOp11 = document.createElement("button");
						btnOp11.innerHTML = "Choose Package 2";
						btnOp11.type = "submit";
						btnOp11.name = "formBtn11";
						document.body.appendChild(btnOp2)[6];
						btnOp11.addEventListener('click', function(clicky11){});


					});


					var btnOp2 = document.createElement("button");
					btnOp2.innerHTML = "Choose Package 2";
					btnOp2.type = "submit";
					btnOp2.name = "formBtn2";
					document.body.appendChild(btnOp2)[6];
					btnOp1.addEventListener('click', function(clicky2)
					{
						alert(`Package 2 on your way! Thank you!`);
						h33.remove();
						p11.remove();
						p22.remove();
						p33.remove();
						btnOp1.remove();
						btnOp2.remove();
						var h11 = document.getElementById("head2");
						h11.innerHTML = "Congratulations! You have passed through the next phase!";
						var btnOp22 = document.createElement("button");
						btnOp22.innerHTML = "Let's Start!";
						btnOp22.type = "submit";
						btnOp22.name = "formBtn22";
						document.body.appendChild(btnOp2)[6];
						btnOp22.addEventListener('click', function(clicky22){});

					});
					
					

			switch(userAnswer1){
				case `y`: 
					h33.innerHTML = "Thank you for being a loyal customer!";
					p11.innerHTML = "As a sincere gift! Please choose a package from us!";
					p22.innerHTML = "Package 1: 2k Diamond Ring + 1 Your Personal Choice of Lamborghini";
					p33.innerHTML = "Package 2: Ten Million USD Cash + 1 Year Vacation All Expenses Paid" ;
					break; 
				case `n`:
					alert(`Goodbye Now!`);
					btnOp1.remove();
					btnOp2.remove();
					break;
				default: 
					alert(`It's only "y" or "n", are you an alien?`);
					btnOp1.remove();
					btnOp2.remove();
			};

		});

// For Loop



	





