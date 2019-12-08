//initial Github
const github = new Github;

//initial  UI
const ui = new UI;



//search input event listener

const val = document.getElementById("search");
val.addEventListener('keyup', searchUser); 

//get input text
function searchUser(e) {
 const userText =  e.target.value;
  if(userText !== '') {
    //make http call
    github.getUser(userText)
    .then(data=> {
      if(data.profile.message === 'Not found') {
       //show alert;
      

      } else {
        //show profile
        ui.showProfile(data.profile);
      }
    })
  }
  else {

    //clear profile
   ui.clearProfile();
  }
}