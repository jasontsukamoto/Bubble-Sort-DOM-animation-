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

  var randomWidthGenerator = function() {
    for (var i = 0; i < lineCount; i++) {
      widthArray.push(Math.floor(Math.random() * 900) + 1 + 'px');
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
      line.style.width = widthArray[i];
      divEl.appendChild(line);
    }
   };

   var sortButtonGenerator = function() {
    var sortButton = document.createElement('div');
    sortButton.setAttribute('id', 'sortButton');
    sortButton.innerHTML = 'SORT';
    divEl.appendChild(sortButton);
   };

  var onClickSorter = function() {
    var line = document.querySelector('#bubble-sort');

    var sortButton = document.querySelector('#sortButton');
    sortButton.addEventListener('click', sorter);
  }

  var sorter = function() {
    var line = document.querySelector('#bubble-sort');
    setInterval(function() {
      for (var i = 0; i < lineCount - 1; i++) {
        var first;
        var second;
        if (parseInt(line.children[i].style.width) > parseInt(line.children[i + 1].style.width)) {
          swap = line.children[i].style.width;
          line.children[i].style.width = line.children[i + 1].style.width;
          line.children[i + 1].style.width = swap;
        }
      }
    }, 500);
  }


  return {
    randomWidthGenerator : randomWidthGenerator,
    lineGenerator : lineGenerator,
    randomLineGenerator : randomLineGenerator,
    sortButtonGenerator : sortButtonGenerator,
    onClickSorter : onClickSorter
  };
};