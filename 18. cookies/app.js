//we can use data to coockie and use it in website - like user login info (not user pass cause its not safe)

let setCookie = document.querySelector("btn");
let getCookie = document.querySelector(".get-btn");

setCookie.addEventListener("load", () => {
  console.log(document.cookie); //show all cookies

  const now = new Date();
  console.log(now);
  let expireDay = now.setTime(now.getTime() + 2 * 24 * 60 * 1000); //time for 2 days later

  //set cookie: name:username value:alireza-tayebi
  //its available in all pages because: ;path=/
  //can have an expire day with the help of Date() : ;expires=theDate;
  document.cookie = `username=alireza-tayebi;path=/;expires=${now}`;
});

getCookie.addEventListener("load", () => {
  //get cookies:

  let mainCookieName = prompt("enter the cookie name: ");
  let cookieArray = document.cookie.split(";"); //turn it to array
  let mainCookie = null;

  cookieArray.some((cookie) => {
    if (cookie.includes(mainCookieName)) {
      mainCookie = cookie.substring(cookie.indexOf("=") + 1);
      return true;
    }
  });
  console.log(mainCookie);
});

