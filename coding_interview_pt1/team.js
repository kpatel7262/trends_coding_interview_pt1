window.onload = loadDoc;

function loadDoc(){
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php", true);  
  
  xhttp.onreadystatechange = function() {
  	
	  var data = this.responseText;
	    if (this.readyState == 4 && this.status == 200) {
	      //call makelist function
	      console.log(Object.values(data).map(createEmpCard));
	    }
	  };

  xhttp.send();
}

function createEmpCard(dataObj){

var result = document.getElementById('main');
var fname = dataObj.employeefname;
var lname = dataObj.employeelname;
var bio = dataObj.employeebio;
console.log(dataObj);
// var crown = document.getElementById('feat_crown');

// if(dataObj.employeeisfeatured == 1){
// 	console.log("Emp is featured!");
// 	feat_crown.style.display = block;
// }
// // var feat = dataObj.employeeisfeatured;
// var roles = dataObj.roles;
var empImage = "";
if(dataObj.employeehaspic == 1){
	console.log("Profile Pic found!");
	empImage = "http://sandbox.bittsdevelopment.com/code1/employeepics/" +dataObj.employeeid+".jpg";
}

card = document.getElementById('flex-container');

card.innerHTML += "<div class='card-container' id='main'>";
card.innerHTML += "<div class='feature'>";
card.innerHTML += "<img class='icon' src='crown.png' />";  
card.innerHTML += "</div>";
card.innerHTML += "<div class='img-circle'>";
card.innerHTML += "<img src='"+empImage+"' alt='team' style='width:100%;border-radius:50%;'>";
card.innerHTML += "</div>";
card.innerHTML += "<div class='container'>";
card.innerHTML += "<h4 class='center' id='fname'><b>"+fname+"</b><span id='lname'>"+lname+"</span></h4>";
card.innerHTML += "<p class='bio'>"+bio+"</p>";
card.innerHTML += "</div>";
card.innerHTML += "<div class='roles'>";
//card.innerHTML += "
card.innerHTML += "</div>";
card.innerHTML += "</div>";	
	//dataObj.employeefname will give gary

}