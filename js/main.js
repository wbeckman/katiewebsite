var buttonInterval = 0

function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

function addSnowflake() {
  // Add new snowflake to snowflakes div in a random location
  const elem = document.getElementById("snowflakes");
  var snowflakeLocation = Math.random() * 100  
  var rotation = "rotate-left";
  // Rotate left/right with 50% probability
  if (Math.random() > 0.5) {
    rotation = "rotate-right";
  }
  var node = htmlToElement(`<div class=\"snow-wrapper\" style=\"padding-left: ${snowflakeLocation}%\"> <img class=\"snowflake ${rotation}\" src=\"img/snowflake.webp\"></img></div>`)
  elem.appendChild(node)
  const durationString = getComputedStyle(node).animationDuration
  const duration = parseFloat(durationString.slice(0, -1)) * 1000;
  setTimeout(function() {
    elem.removeChild(node)
  }, duration);
}

function toggleButtonText(defaultText, alternateText, currentText){
  if (currentText === defaultText){
    return alternateText
  }
  return defaultText
}

function toggleSnowButtonText(buttonText) {
  const letItSnow = 'Let it snow';
  const stopTheSnow = 'Stop the snow';
  return toggleButtonText(letItSnow, stopTheSnow, buttonText)
}

function toggleCaneButtonText(buttonText) {
  const spinTheCanes = 'Spin the canes';
  const stopTheCanes = 'Stop the canes';
  return toggleButtonText(spinTheCanes, stopTheCanes, buttonText)
}

function snow(){
  const snowButton = document.getElementById("snow-button");
  
  if (snowButton.innerText === 'Stop the snow'){
    window.clearInterval(buttonInterval);
  }
  else{ //Start snow
    buttonInterval = setInterval(addSnowflake, 100);
  }
  snowButton.innerText = toggleSnowButtonText(snowButton.innerText);
}


function spinCanes() {
  const canes =  document.getElementsByClassName("candy-cane")
  const caneButton = document.getElementById("cane-button");
  
  if (caneButton.innerText === 'Spin the canes'){
    canes[0].classList.add("rotate-left")
    canes[1].classList.add("rotate-right")
  }
  else{
    canes[0].classList.remove("rotate-left")
    canes[1].classList.remove("rotate-right")
  }

  // Toggle button text
  caneButton.innerText = toggleCaneButtonText(caneButton.innerText);
}
