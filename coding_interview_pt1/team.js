window.onload = loadDoc("http://sandbox.bittsdevelopment.com/code1/fetchemployees.php",createEmpCard );
/*get value from end point*/
function loadDoc(url, cFunction){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  	  if (this.readyState == 4 && this.status == 200) {
			 cFunction(this);
	    }
	  };

  xhttp.open("GET", url , true);  
  xhttp.send();
}

/*convert json to object*/
/*separate in order to design as given templete*/
/*created variables for each element of the card*/
function createEmpCard(dataObj){
	var result = document.getElementById('flex-container');
	var id = dataObj.employeeid;
	var fname = dataObj.employeefname;
	var lname = dataObj.employeelname;
	var bio = dataObj.employeebio;
	var roles = dataObj.roles;

/*displays pertcular img for perticular employee*/
	var pro_pic = "";
	if (dataObj.employeehaspic == 1){
		pro_pic = "http://sandbox.bittsdevelopment.com/code1/employeepics/"+id+".jpg";
	} 

/*stored values combining with the object value*/
/*stored all object in empCard*/
	var empCard = "<div class='card-container' id='empCard'>";
	empCard.innerHTML += "<div class='feature' id='crown-"+id+"'>";
	empCard.innerHTML += "<img class='icon' src='crown.png' />";  
	empCard.innerHTML += "</div>";
	empCard.innerHTML += "<div class='img-circle'>";
	empCard.innerHTML += "<img src='"+pro_pic+"' alt='team'>";
	empCard.innerHTML += "</div>";
	empCard.innerHTML += "<div class='container'>";
	empCard.innerHTML += "<span class='center'>"+fname+" "+lname+"</span>";
	empCard.innerHTML += "<p class='bio'>"+bio+"</p>";
	empCard.innerHTML += "</div>";
	empCard.innerHTML += "<div class='roles' id='role"+dataObj.employeeid+"'>";
	empCard.innerHTML += "</div>";
	empCard.innerHTML += "</div>";
/*displayed the result*/
	result.innerHTML += empCard;

}
