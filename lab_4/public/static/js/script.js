const firebaseConfig = {
    apiKey: "AIzaSyART9x546kjSxtXUeiEecTRAcanfZMEsyM",
    authDomain: "startline-8bf62.firebaseapp.com",
    databaseURL: "https://startline-8bf62.firebaseio.com",
    projectId: "startline-8bf62",
    storageBucket: "startline-8bf62.appspot.com",
    messagingSenderId: "546293959942",
    appId: "1:546293959942:web:b433663202f1b2924a6287"
  };
firebase.initializeApp(firebaseConfig);

function SendToDB() {
    firebase.database().ref().push({
        Name: nickname.value,
        Number: number.value,
        Password: password.value,
        Repeat_Pasword: rep_password.value,
        File: file.files[0],
    }, function (error) {
        if (error) {
            alert("Error!!! Server is down, may be sigfoult)))) или данные введены неверно!")
        } else {
            alert("Спасибо за регистрацию!");
            nickname.value=null;
            number.value=null;
            password.value=null;
            rep_password.value=null;
            file.value = null;
        }
    });
}

