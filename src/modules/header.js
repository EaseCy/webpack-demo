function fn() {
    let element = document.createElement("h1");
    element.id = "title";
    let template = `
          Webpack Experience
      `;
    element.innerText = template;
  
    console.log("title");
    console.log("title的js");
    return element;
  }
  let app = document.querySelector("#app");
  app.appendChild(fn());
  
  export default fn;
  