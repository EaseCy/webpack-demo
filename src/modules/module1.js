function fn() {
    let element = document.createElement("div");
    element.id = "wrapper";
    let template = `
          第一个webpack应用
          这是 模块1
      `;
    element.innerText = template;
  
    console.log("模块1");
    console.log("模块1的js");
    return element;
  }
  let app = document.querySelector("#app");
  app.appendChild(fn());
  
  export default fn;
  