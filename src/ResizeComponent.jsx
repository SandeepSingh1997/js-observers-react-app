import { useEffect } from "react";
import "./ResizeComponent.css";
export default function ResizeComponent() {
  useEffect(() => {
    const textAreaNode = document.getElementById("my-text-area");
    const divNode = document.getElementById("my-div");

    const resizeObserver = new ResizeObserver((entries) => {
      //   console.log(entries[0]);
      const textArea = entries[0];
      if (textArea && textArea.contentRect.width > 200) {
        divNode.style.backgroundColor = "#00ff00";
        divNode.style.fontSize = "20px";
      } else {
        divNode.style.backgroundColor = "#ff0000";
        divNode.style.fontSize = "100px";
      }
    });

    resizeObserver.observe(textAreaNode);
  }, []);

  return (
    <>
      <div className="container">
        <textarea id="my-text-area" />
        <div id="my-div">hello people where</div>
      </div>
    </>
  );
}
