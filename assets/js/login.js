loadData("contacts");

function loginGuest() {
  let checked = document.getElementById("confirm").checked;
  let logData = {
    "mail": "test@test.de",
    "initials": "G",
    "userName": "Guest",
  };
  if (checked) {
    localStorage.setItem("Join", JSON.stringify(logData));
    sessionStorage.clear();
  } else {
    sessionStorage.setItem("Join", JSON.stringify(logData));
    localStorage.clear();
  }
  location.href = "./summary.html";
}

function login() {
  let email = document.getElementById("email").value;
  let password = String(document.getElementById("password").value);
  let checked = document.getElementById("confirm").checked;
  let contact = Object.values(contacts);
  let results = contact.filter((element) => element.email == email && element.password == password && element.user);
  if (results.length > 0) {
    let initial = getInitials(results[0].name);
    let logData = {
      "mail": email,
      "initials": initial,
      "userName": results[0].name,
    };
    if (checked) {
      localStorage.setItem("Join", JSON.stringify(logData));
      sessionStorage.clear();
    } else {
      sessionStorage.setItem("Join", JSON.stringify(logData));
      localStorage.clear();
    }
    location.href = "./summary.html";
  } else {
    let results = contact.filter((element) => element.email == email && element.user);
    if (results.length == 0) {
      document.getElementById("email").classList.add("inputRedBorder");
      document.getElementById("mailError").innerHTML = "Email Adresse ist nicht als Benutzer registriert!";
    } else {
      document.getElementById("email").classList.remove("inputRedBorder");
      document.getElementById("mailError").innerHTML = "";
    }
    results = contact.filter((element) => element.email == email && element.password == password && element.user);
    if (results.length == 0) {
      document.getElementById("password").classList.add("inputRedBorder");
      document.getElementById("passwordError").innerHTML = "Passwort stimmt nicht!";
    } else {
      document.getElementById("password").classList.remove("inputRedBorder");
      document.getElementById("passwordError").innerHTML = "";
    }
    document.getElementById("password").classList.add("inputRedBorder");
  }
}
