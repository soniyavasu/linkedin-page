	let newarr = [];
	
	
      let userObject =[ {
			id:Math.random().toString(),
			mailId:"soniya@gmail.com",
			password:"soni2409"
			
		},{
			id:Math.random().toString(),
			mailId:"dhanush@gmail.com",
			password:"dhanush2409"
			
		}, {
			id:Math.random().toString(),
			mailId:"akash@gmail.com",
			password:"akash2409"
			
		}   ]
         

	let inputs = document.getElementById("form-email");
	let inputs1 = document.getElementById("form-password");
	let inputs_check = document.getElementsByClassName("para1");
	let form_controls1 = document.getElementsByClassName("form_controls");
	
let pageUrl = window.location.href;
if(pageUrl.includes("index.html")){
	let getIssign_out = localStorage.getItem("islogin");
	if(!getIssign_out){
		window.location.replace("login.html");
	}
}
    
//Sign In
function onSignUp(event){
	
	let isValid;
		for(let x=0; x < form_controls1.length; x++){
			isValid=0;
			if(form_controls1[x].value === ""){
				form_controls1[x].parentNode.getElementsByTagName("p")[0].classList.add("invalid-input");
				isValid++;
			}
			else{
				form_controls1[x].parentNode.getElementsByTagName("p")[0].classList.remove("invalid-input");
				
			}
		}
		if(isValid == 0){
			if(inputs1.value.length < 2){
				document.getElementsByClassName("form_controls")[0].classList.add("invalid-input");
			}
			else{
				document.getElementsByClassName("form_controls")[0].classList.remove("invalid-input");
			}
		}		
			
	if(isValid===0){
			let user = userObject.find(function(e) {
			return e.mailId === inputs.value;
			});
		
			if ( user && user.password === inputs1.value ) {
			return logIn(event);
			} else {
			console.log("login failed");
			} 
			}
	if(isValid===0){		
			if(inputs.value === userObject.mailId ){
			inputs_check[0].classList.remove("error2");	
			}
			else{
				inputs_check[0].classList.add("error2");
			}
			if(inputs1.value === userObject.password){
				inputs_check[0].classList.remove("error2");	
			}
			else{
				inputs_check[0].classList.add("error2");
			}
		}
			
	

	
		
		
		
		
	
	

	}

//login		
function logIn(event){
	localStorage.setItem("islogin",true);
	window.location.replace("index.html");
}
		
//logout
function logOut(event){
	event.preventDefault()
	localStorage.removeItem("islogin");
	window.location.replace("login.html");
}	
			
	
	