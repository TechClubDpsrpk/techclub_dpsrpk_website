import firebase from "firebase/compat/app";

const firebaseConfig = {
  //Details
};

firebase.initializeApp(firebaseConfig);

var infoFormDB = firebase.database().ref("InfoForm");

document.getElementById("InfoForm")?.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var classsec = getElementVal("classsec");
  var emailid = getElementVal("emailid");
  var contactno = getElementVal("contact");
  var about = getElementVal("about");

  saveInfo(name, classsec, emailid, contactno, about);

  document.getElementById("InfoForm").reset();
}

const getElementVal = (id) => {
  document.getElementById(id).value;
};

const saveInfo = (name, classsec, emailid, contactno, about) => {
  var newInfoForm = infoFormDB.push();

  newInfoForm.set({
    name: name,
    classsec: classsec,
    emailid: emailid,
    contactno: contactno,
    about: about,
  });
};
