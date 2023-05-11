var audio = new Audio('audio/am-thanh-vong-quay-may-man-ngan-www_tiengdong_com.mp3');
  var audio1 = new Audio('audio/success-fanfare-trumpets-6185.mp3');
  function spin() {
    audio.play();
    var result = document.getElementById("result");
    var numbers = result.getElementsByTagName("span");
    var firstNumber, secondNumber, thirdNumber;
    var firstInterval = setInterval(function() {
        firstNumber = Math.floor(Math.random() * 3);
        numbers[0].textContent = firstNumber;
    }, 30);
    var secondInterval = setInterval(function() {
        secondNumber = Math.floor(Math.random() * 10);
        numbers[1].textContent = secondNumber;
    }, 30);
    var thirdInterval = setInterval(function() {
        thirdNumber = Math.floor(Math.random() * 10);
        numbers[2].textContent = thirdNumber;
    }, 30);
    setTimeout(function() {
        clearInterval(firstInterval);
        clearInterval(secondInterval);
        clearInterval(thirdInterval);
        audio1.play();
    }, 4600);
    
  }
