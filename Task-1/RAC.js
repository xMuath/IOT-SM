var slider1 = document.getElementById("Motor1");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value; // Display the default slider value

slider1.oninput = function() {
  output1.innerHTML = this.value;
}


var slider2 = document.getElementById("Motor2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value; // Display the default slider value

slider2.oninput = function() {
  output2.innerHTML = this.value;
}


var slider3 = document.getElementById("Motor3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value; // Display the default slider value

slider3.oninput = function() {
  output3.innerHTML = this.value;
}


var slider4 = document.getElementById("Motor4");
var output4 = document.getElementById("demo4");
output4.innerHTML = slider4.value; // Display the default slider value

slider4.oninput = function() {
  output4.innerHTML = this.value;
}


var slider5 = document.getElementById("Motor5");
var output5 = document.getElementById("demo5");
output5.innerHTML = slider5.value; // Display the default slider value

slider5.oninput = function() {
  output5.innerHTML = this.value;
}


var slider6 = document.getElementById("Motor6");
var output6 = document.getElementById("demo6");
output6.innerHTML = slider6.value; // Display the default slider value

slider6.oninput = function() {
  output6.innerHTML = this.value;
}


document.getElementById('reset').onclick = function(){
  document.getElementById('Motor1').value = 90;
  document.getElementById('Motor2').value = 90;
  document.getElementById('Motor3').value = 90;
  document.getElementById('Motor4').value = 90;
  document.getElementById('Motor5').value = 90;
  document.getElementById('Motor6').value = 90;

  document.getElementById('demo1').innerHTML = 90;
  document.getElementById('demo2').innerHTML = 90;
  document.getElementById('demo3').innerHTML = 90;
  document.getElementById('demo4').innerHTML = 90;
  document.getElementById('demo5').innerHTML = 90;
  document.getElementById('demo6').innerHTML = 90;

};
