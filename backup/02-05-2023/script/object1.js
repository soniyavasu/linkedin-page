// skill------------------

let pageUrl = window.location.href;
if(pageUrl.includes("profil.html")){
const myButton = document.getElementById("addskillbtn");
myButton.addEventListener("click", function (e) {
	e.preventDefault();
	const input = document.createElement("input");
	input.setAttribute("type", "text");
	input.classList.add("addinputs");
	myButton.parentNode.replaceChild(input, myButton);
	input.addEventListener("keydown", function (event) {
		if (event.keyCode === 13) {
			event.preventDefault()
			let elename = document.getElementsByClassName("addinputs")[0]
			console.log(elename.value)
			let ele = document.createElement("span")
			ele.setAttribute("class", 'skillempty')
			ele.innerText = elename.value;
			let ids = document.getElementById("skillitems")
			ids.appendChild(ele)
			document.getElementById("myFormId").reset();
			ele.addEventListener("click", function(){
				ele.remove("skillempty");
			  })
		}
	});
	
});
		


	
let plus = document.getElementsByClassName("plus")[0];

plus.addEventListener("click", function(){
	let form_controlss = document.getElementsByClassName("form-controlss")[0]; 	
	form_controlss.style.display="block";



let btns= document.getElementsByClassName("btn")
for(i=0;i<btns.length;i++){
	btns[i].addEventListener("click",function(e){
  	e.preventDefault();
    let parent= document.getElementById("skillitems")
    parent.appendChild(this)
  })

		
		}
			
let close2 = document.getElementById("close2");
	close2.addEventListener('click',function(e){
		this.parentNode.parentNode.style.display='none'
		
	})

 
})

let skillsArr =[];
let btns= document.getElementsByClassName("btn")
for(i=0;i<btns.length;i++){
	btns[i].addEventListener("click",function(e){
  	e.preventDefault();
	this.remove();
	skillsArr.push(this.innerText);
	  addSkills(skillsArr);
	});
}
 
	 function addSkills(arrSkill){
		let setDefault= document.getElementById("skillitems");
		setDefault.innerHTML = "";
		let skillBtns = arrSkill.map((item)=>{
			return `<span class="skillempty">${item}</span>`;
		}).join("");
		setDefault.innerHTML = skillBtns;
		let skillBtnsDom = document.getElementsByClassName("skillempty");
		for(let i = 0; i <skillBtnsDom.length; i++){
		 skillBtnsDom[i].addEventListener("click", removeSkills);
		}
	 }
	 
	 function removeSkills(e){
		 let updateSkills = skillsArr;
		 let findSkill = updateSkills.filter(item => item !== this.innerText);
		 skillsArr = findSkill;
		 addSkills(skillsArr);

	}



// skill------------------
// forms------------------



		function handler(e){
			//e.preventDefault();
			let form = this.parentNode.getElementsByClassName("forms")[0];
			form.style.display="block";
		  
			let overlay_el = document.getElementById("overlay");
		overlay_el.style.display="block";
		}

		function close(el){
			el.preventDefault();

		let close_el = document.getElementsByClassName("close_btn");
			close_el=close_el[0];
			close_el.style.display="none";
		  
		 
		
		close_thisel.addEventListener("click", close);


		}



		let pencil=document.getElementsByClassName("fa-pencil");

		for(let i=0; i<pencil.length; i++){
			pencil[i].addEventListener("click", handler);


		




		}

	

// forms------------------




function editinformation(event){
	event.preventDefault();
	let fname= document.getElementById("editFname").value;
	let lname= document.getElementById("editLname").value;
	let editheadline= document.getElementById("headline").value;
	let editcountry= document.getElementById("placeCoureg").value;
	let editcity= document.getElementById("placeity").value;
	let editstate= document.getElementById("placestate").value;
	
	let obj = {
		fname,
		lname,
		editheadline,
		editcountry,
		editcity,
		editstate
	}
	//console.log(fname,lname);
	localStorage.setItem("editedobject",JSON.stringify(obj))
	
}
const myObject = JSON.parse(localStorage.getItem('editedobject'));
document.getElementById("editFname").value=myObject.fname;
document.getElementById("editLname").value=myObject.lname;
document.getElementById("headline").value=myObject.editheadline;
document.getElementById("placeCoureg").value=myObject.editcountry;
document.getElementById("placeity").value=myObject.editcity;
document.getElementById("placestate").value=myObject.editstate;
if(myObject){
	let editedfname=document.getElementById("name");
	editedfname.innerHTML=myObject.fname;	
	editLname.innerHTML=myObject.lname;	
	headline.innerHTML=myObject.editheadline;	
	placeCoureg.innerHTML=myObject.editcountry;	
	placeity.innerHTML=myObject.editcity;	
	placestate.innerHTML=myObject.editstate;	
	
	let city = document.getElementsByClassName("city")[0];
	city.innerText= myObject.editcountry +" "+ myObject.editcity +"  "+ myObject.editstate;
}



function editexperians(ele){
	ele.preventDefault();
	
		let fname= document.getElementById("fname").value;
		let editCompany= document.getElementById("Companyname").value;
		let editlocation= document.getElementById("locationel").value;
		let editworking= document.getElementById("working").value;
		let editIndustry= document.getElementById("Industry").value;
		let editprofile_handler= document.getElementById("profile_handler").value;
		
	let objele = {
		fname,
		editCompany,
		editlocation,
		editworking,
		editIndustry,
		editprofile_handler
	}
	
	localStorage.setItem("editedobjectel",JSON.stringify(objele))
	
}
}
const myObjectele = JSON.parse(localStorage.getItem('editedobjectel'));

if(myObjectele){
	let editedfname=document.getElementById("name");
	editedfname.innerHTML=myObjectele.fname;
	Companyname.innerHTML=myObjectele.editCompany;	
	locationel.innerHTML=myObjectele.editlocation;	
	working.innerHTML=myObjectele.editworking;	
	Industry.innerHTML=myObjectele.editIndustry;	
	profile_handler.innerHTML=myObjectele.editprofile_handler;	
	
	
	let date = document.getElementsByClassName("date")[0];
	date.innerText= myObjectele.editcountry +" "+ myObjectele.editcity +"  "+ myObjectele.editstate;
		
		
		
}


if(pageUrl.includes("index.html")){
	const myObject = JSON.parse(localStorage.getItem('editedobject'));
	let adminname = document.getElementById("adminname")
	adminname.innerText=myObject.fname;
}
//let pageUrl = window.location.href;
if(pageUrl.includes("index.html")){
	let getIssign_out = localStorage.getItem("islogin");
	if(!getIssign_out){
		window.location.replace("login.html");
	}
}

//logout
function logOut(event){
	event.preventDefault()
	localStorage.removeItem("islogin");
	window.location.replace("login.html");
}


function gotohome(event){
	event.preventDefault()
	localStorage.removeItem("profil.html");
	window.location.replace("index.html");
}


