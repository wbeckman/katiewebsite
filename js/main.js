var buttonInterval = 0

function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}


function addSnowflake() {
  // Add new snowflake to snowflakes div in a random location
  const elem = document.getElementById("snowflakes");
  var snowflakeLocation = Math.random() * 100  
  var node = htmlToElement(`<div class=\"snow-wrapper\" style=\"padding-left: ${snowflakeLocation}%\"> <img class=\"snowflake\" src=\"img/snowflake.webp\"></img></div>`)
  elem.appendChild(node)
  const durationString = getComputedStyle(node).animationDuration
  const duration = parseFloat(durationString.slice(0, -1)) * 1000;
  setTimeout(function() {
    elem.removeChild(node)
  }, duration);
}  

function toggleButtonText(buttonText) {
  const letItSnow = 'Let it snow';
  const stopTheSnow = 'Stop the snow';
  if (buttonText === letItSnow){
    return stopTheSnow
  }
  return letItSnow
}

function buttonClick(){
  const snowflakeCount = document.getElementById("snowflakes").childElementCount;
  const buttonText = document.getElementById("snow-button").innerText;
  document.getElementById("snow-button").innerText = toggleButtonText(buttonText)

  // There are snowflakes present - stop snow
  if (buttonText === 'Stop the snow'){
    window.clearInterval(buttonInterval);
  }
  else{ //Start snow
    console.log('starting snow')
    buttonInterval = setInterval(addSnowflake, 100);
  }
}
