//Promise with XHR

let url = "https://api.github.com/users/elzerowebschool/repos";
const btn = document.querySelector("button");

const getData = (apiLink) => {
  return new Promise((res, rej) => {
    let req = new XMLHttpRequest();
    req.open("GET", apiLink);
    req.send();

    req.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        res(JSON.parse(this.responseText));
      } else {
        rej(Error("Data Not Found"));
      }
    };
  });
};

//get data and loop on it
btn.addEventListener("click", () => {
  getData(url)
    .then((res) => {
      for (let value of res) {
        let div = document.createElement("div");
        div.className = "repo-name";
        div.innerText = `${value.name}`;
        document.body.appendChild(div);
        // console.log(value.name);
      }
    })
    .catch((rej) => {
      let div = document.createElement("div");
      div.className = "repo-not-found";
      div.innerText = `Opps, Data Not Found`;
      document.body.appendChild(div);
      console.log(rej);
    })
    .finally(console.log("Operation Done"));
});
