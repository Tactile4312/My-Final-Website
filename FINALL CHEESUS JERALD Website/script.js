function themeSwitch() {
  //abhorrent fuckng code and i need to learn js and dom.
  if (document.body.classList.contains("bg-dark")) {
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("text-white");
    document.body.classList.add("bg-light");
    document.body.classList.add("text-black");
    document.getElementById("theme").innerHTML = "Light Mode";
    document.getElementById("theme").style.color = "black";
  } else {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("text-black");
    document.body.classList.add("bg-dark");
    document.body.classList.add("text-white");
    document.getElementById("theme").innerHTML = "Dark Mode";
    document.getElementById("theme").style.color = "white";
  }

  if (
    document
      .getElementsByClassName("navbar")[0]
      .classList.contains("navbar-light")
  ) {
    document
      .getElementsByClassName("navbar")[0]
      .classList.remove("navbar-light");
    document.getElementsByClassName("navbar")[0].classList.add("navbar-dark");
  } else {
    document
      .getElementsByClassName("navbar")[0]
      .classList.remove("navbar-dark");
    document.getElementsByClassName("navbar")[0].classList.add("navbar-light");
  }
}
function submit() {
  
   

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (name == "") {
      document.getElementById("name").style.borderColor = "red";
      document.getElementById("name").focus();
      alert("Please enter a name");
      return false;
    } else {
      document.getElementById("name").style.borderColor = "green";
    }

    if (email == "") {
      document.getElementById("email").style.borderColor = "red";
      document.getElementById("email").focus();
      alert("Please enter an email");
      return false;
    } else if (!regex.test(email)) {
      document.getElementById("email").style.borderColor = "red";
      document.getElementById("email").focus();
      return false;
    } else {
      document.getElementById("email").style.borderColor = "green";
    }

    if (message == "") {
      document.getElementById("message").style.borderColor = "red";
      document.getElementById("message").focus();
      alert("Please enter a message");
      return false;
    } else if (message.length > 500) {
      document.getElementById("message").style.borderColor = "red";
      document.getElementById("message").focus();
      return false;
    } else {
    var timestamp = new Date();
    timestamp = timestamp.toLocaleString();

    var random = Math.floor(Math.random() * 1000000);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ipapi.co/json", true);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var country = myObj.country_name;
        var timezone = myObj.utc_offset;
        var ip = myObj.ip;
        var message = {
          username: document.getElementById("name").value,
          avatar_url:
            "https://cdn.discordapp.com/attachments/851692476967813120/919168695799009280/unknown.png",
          embeds: [
            {
              title: "Contact Form",
              description:
                "Name: " +
                document.getElementById("name").value +
                "\n" +
                "Email: " +
                document.getElementById("email").value +
                "\n" +
                "Message: " +
                "\n" +
                document.getElementById("message").value +
                "\n" +
                "Timestamp: " +
                timestamp +
                "\n" +
                "Country: " +
                country +
                "\n" +
                "Timezone: " +
                timezone +
                "\n" +
                "Ip Address:" +
                ip,

              color: random,
            },
          ],
        };
        var xhr = new XMLHttpRequest();
        xhr.open(
          "POST",
          "https://canary.discord.com/api/webhooks/928888990533300285/IJJmoi1uJEe5RrvT5bM9fLWR2UgIy3ywX-OTQCsHsm6-u1VhpTA9PjvGDC3anZb1Elr9",
          true
        );
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(message));
        document.getElementById("message").value = "";
        alert("Message sent!");
      } else if (this.readyState == 4 && this.status == 404) {
        alert("Error: 404");
      }
    };
    xhr.send();
  }
}

if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", function () {
    loaded();
  });
} else if (document.attachEvent) {
  document.attachEvent("onreadystatechange", function () {
    loaded();
  });
}
function loaded() {
  setInterval(loop, 400);
}
var x = 0;
var titleText = [
  "J",
  "Je",
  "Jer",
  "Jera",
  "Jeral",
  "Jerald",
  "Jerald'",
  "Jerald's",
  "Jerald's W",
  "Jerald's We",
  "Jerald's Web",
  "Jerald's Webs",
  "Jerald's Websi",
  "Jerald's Websit",
  "Jerald's Website",
  "Jerald's Websit",
  "Jerald's Websi",
  "Jerald's Webs",
  "Jerald's Web",
  "Jerald's We",
  "Jerald's W",
  "Jerald's ",
  "Jerald's",
  "Jerald'",
  "Jerald",
  "Jeral",
  "Jer",
  "Je",
  "J",
];
function loop() {
  document.getElementsByTagName("title")[0].innerHTML =
    titleText[x++ % titleText.length];
}
update_clock();
function update_clock() {
  var tf = document.getElementsByName("tf");
  for (var i = 0; i < tf.length; i++) {
    if (tf[i].checked) {
      if (tf[i].value == "12") {
        var currentTime = new Date(),
          hours = currentTime.getHours(),
          minutes = currentTime.getMinutes(),
          seconds = currentTime.getSeconds();
        if (hours > 12) {
          hours = hours - 12;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (hours < 10) {
          hours = "0" + hours;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        //check if the time is  am or pm and add the correct suffix
         if (hours < 12) {
           suffix = "PM";
         } else {
           suffix = "AM";
         }
        if (hours == 0) {
          hours = 12;
        }
          

        var clock_element = document.getElementById("clock");
        clock_element.innerHTML =
          hours + " : " + minutes + " : " + seconds + " " + suffix;
      } else {
        var currentTime = new Date(),
          hours = currentTime.getHours(),
          minutes = currentTime.getMinutes();
        seconds = currentTime.getSeconds();
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (hours < 10) {
          hours = "0" + hours;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        var clock_element = document.getElementById("clock");
        clock_element.innerHTML = hours + " : " + minutes + " : " + seconds;
      }
    }
  }
  // var t = setTimeout(function () {
  //   update_clock();
  // }, 1000);
}
setInterval(update_clock, 1000);
