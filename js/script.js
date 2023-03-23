
// show toast massege


let primarycolor = "#d90429";
let secondarycolor = "#008000";

function notification(msg ,clr){

     Toastify({
        text: msg,
        duration: 2000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: clr,
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

function login(){
    
      let username = document.getElementById("Username").value;
      let email = document.getElementById("email").value;
      let passwrod = document.getElementById("password").value;
    
      username = username.trim();
      passwrod = passwrod.trim();
      email = email.trim();
      validEmail = "@."
      let isValid = true;

      switch(true){
        case username === "":
          notification("Please enter your Username", primarycolor);
          // isValid = false;
          break;
        case username.length < 3:
          notification("You are entering invalid Username", primarycolor);
          // isValid = false;
          break;
        case email === "":
          notification("Please Enter your Email", primarycolor);
          // isValid = false;
          break;
        case email !== "admin@user.com":
          notification("You are entering invalid Email", primarycolor);
          // isValid = false;
          break;
        
        case passwrod === "":
          notification("Please enter your password", primarycolor)
          break;
        
        case passwrod !== "12345":
          notification("You are entering invalid password", primarycolor)
          break;
        case  email === "admin@user.com" && passwrod === "12345":
          window.location.href="home.html";
          break;
          default:
            break;

      }
      return isValid;
//     if ( username.length < 3){

//       let msg = "Please Enter Your Proper Name";

//         notification(msg ,primarycolor)
//         }
//         else{


//     if ( email === "" || passwrod ===""){

//       let msg = "Please Enter Username or Password";
//        notification(msg ,primarycolor)

//         }
//           else if ( email === "admin@user.com" && passwrod ==="12345"){
//             window.location.href="home.html";

//  }
//  else {

//   let msg = "Invalid username or Password";
//    notification(msg ,primarycolor)
//  }
// }

}
// display city input 
function showInput() {

  if (addCity.style.display === 'none') 
  {
    addCity.style.display = 'inline-flex';
  }
   else {
    addCity.style.display = 'none';
  }
  
}

// city name

let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"];



function printAllCities() {
  
  
  document.getElementById("printcity").innerHTML = ""
  
  for (i = 0; i < cities.length; i++) {
    num = i + 1;
    document.getElementById("printcity").innerHTML += num + ")" + " " + cities[i] + "<br>"
    
  
  }
    
  
 
}

// addding city in list

function addNewCity(){

  let city = document.getElementById("input").value;
  city= city.trim()

  // console.log(city)

  if (city.length < 3) {
    alert("Please type correct city name")
    return;
}
let cityFirstLetter = city.slice(0, 1).toUpperCase();
let cityAllLetters = city.slice(1).toLowerCase();

let cityFullName = cityFirstLetter + cityAllLetters;

if (!cities.includes(cityFullName)) {
  cities.push(cityFullName);

  let msg = "City Successfuly Added is List";
  notification(msg,secondarycolor)
}
else{

  let msg = "This City Already Added in List" ;
    notification(msg , primarycolor)
}
console.log(cities)
}