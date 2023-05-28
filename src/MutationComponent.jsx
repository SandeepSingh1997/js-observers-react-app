import { useEffect, useRef } from "react";

export default function MutationComponent() {
  const textAreaRef = useRef(null);

  // settting up mutation observer
  useEffect(() => {
    const mutationObserver = new MutationObserver((entries) => {
      console.log(entries);
    });
    mutationObserver.observe(textAreaRef.current, {
      childList: true,
    });
  }, []);

  //Not relevant to mutation just for fun
  function handleSayHello() {
    const divNode = textAreaRef.current;
    const spanNode = document.createElement("span");
    const textNode = document.createTextNode("Hello");
    spanNode.appendChild(textNode);
    divNode.appendChild(spanNode);
    divNode.style.backgroundColor = "#ff0000";
  }

  return (
    <div>
      <div
        contentEditable={true}
        style={{ backgroundColor: "red" }}
        ref={textAreaRef}
      ></div>
      <button onClick={handleSayHello}>say hello</button>
    </div>
  );
}
