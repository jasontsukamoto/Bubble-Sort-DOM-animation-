window.onload = function() {
  var animate = animator();
  animate.randomWidthGenerator();
  animate.lineGenerator();
  animate.randomLineGenerator();
  animate.sortButtonGenerator();
  animate.onClickSorter();
};

var animator = function() {
  var divEl = document.querySelector('#bubble-sort');
  var lineCount = 100;
  var widthArray = [];

  var randomArray = [];

  var randomWidthGenerator = function() {
    for (var i = 1; i < lineCount + 1; i++) {
      widthArray.push(i * 12 + 'px');
    }
    for (var i = 0; i < lineCount; i++) {
      var x = widthArray.splice(Math.floor(Math.random() * widthArray.length), 1);
      randomArray.push(x);

    }
  };

  var lineGenerator = function() {
    var line;
    for (var i = 0; i < lineCount; i++) {
      line = document.createElement('div');
      line.setAttribute('class', 'bubble-sort')
      line.setAttribute('id', 'line' + i);
      divEl.appendChild(line);
    }
   };

   var randomLineGenerator = function() {
    for (var i = 0; i < lineCount; i++) {
      var line = document.getElementById('line' + i);

      line.style.width = randomArray[i];

      divEl.appendChild(line);
    }
   };

   var sortButtonGenerator = function() {
    var sortButton = document.createElement('div');
    sortButton.setAttribute('id', 'sortButton');

    sortButton.innerHTML = 'SORT !';

    divEl.appendChild(sortButton);
   };

  var onClickSorter = function() {

    var sortButton = document.querySelector('#sortButton');
    sortButton.addEventListener('click', sorter);
  }

  var sorter = function() {

    setInterval(function() {
      for (var i = 0; i < lineCount - 1; i++) {
        var first;
        var second;

        if (parseInt(divEl.children[i].style.width) > parseInt(divEl.children[i + 1].style.width)) {
          swap = divEl.children[i].style.width;
          divEl.children[i].style.width = divEl.children[i + 1].style.width;
          divEl.children[i + 1].style.width = swap;
        }
      }
    }, 100);

  }


  return {
    randomWidthGenerator : randomWidthGenerator,
    lineGenerator : lineGenerator,
    randomLineGenerator : randomLineGenerator,
    sortButtonGenerator : sortButtonGenerator,
    onClickSorter : onClickSorter
  };
};