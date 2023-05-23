import { useEffect } from "react";
import "./MutationComponent.css";

export default function MutationComponent() {
  useEffect(() => {
    const divNode = document.querySelector(".container");
    const mutationObserver = new MutationObserver((entries) => {});
    mutationObserver.observe(divNode, {
      childList: true,
      attributes: true,
    });
  }, []);

  function handleSayHello() {
    const divNode = document.querySelector(".container");
    const spanNode = document.createElement("span");
    const textNode = document.createTextNode("Hello!");
    spanNode.appendChild(textNode);
    divNode.appendChild(spanNode);
    divNode.style.backgroundColor = "#ff0000";
  }
  return (
    <div>
      <div className="container"></div>
      <button onClick={handleSayHello}>say hello</button>
    </div>
  );
}
