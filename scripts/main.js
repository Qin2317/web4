const eggTumbling = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];
  
  const eggTiming = {
    duration: 2000,
    iterations: 1,
    fill: "forwards",
  };
  
  const egg1 = document.querySelector("#egg1");
  const egg2 = document.querySelector("#egg2");
  const egg3 = document.querySelector("#egg3");

  function startAnimation(element) {
    return element.animate(eggTumbling, eggTiming).finished;
}
  
startAnimation(egg1).then(() => {
    return startAnimation(egg2);
}).then(() => {
    return startAnimation(egg3);
});