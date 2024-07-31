function answerA() {
  let correct = 'wrong';
  
  if (correct === 'wrong') {
    document.querySelector('.js-emoji').innerHTML = ` <i class="bi bi-emoji-frown-fill"></i>`;
    document.querySelector('.js-answer').innerHTML = `Option A. is not the correct answer`;
    document.querySelector('.js-correct-answer').innerHTML = `The correct answer is D because <br><br> The theme of a story is the underlying message, central idea, or insight that the author wants to convey.
    <br><br>It is a universal concept or lesson that often reflects on human nature, society, or life experiences. The theme is not explicitly stated but is revealed through the story's characters, plot, setting, and other literary elements. Examples of common themes include love, friendship, courage, betrayal, and the struggle between good and evil.`;
  }
  
  document.querySelector('.js-answer-choose3').style.border = 'none';
    document.querySelector('.js-answer-choose').style.border = '2px solid red';
    document.querySelector('.js-answer-choose2').style.border = 'none';
    document.querySelector('.answer-correct').style.border = 'none';
  document.querySelector('.right').innerHTML = `Wrong..`;
}

function answerB() {
  let correct = 'wrong';
  
  if (correct === 'wrong') {
    document.querySelector('.js-emoji').innerHTML = ` <i class="bi bi-emoji-frown-fill"></i>`;
    document.querySelector('.js-answer').innerHTML = `Option B. is not the correct answer`;
    document.querySelector('.js-correct-answer').innerHTML = `The correct answer is D because <br><br> The theme of a story is the underlying message, central idea, or insight that the author wants to convey.
    <br><br>It is a universal concept or lesson that often reflects on human nature, society, or life experiences. The theme is not explicitly stated but is revealed through the story's characters, plot, setting, and other literary elements. Examples of common themes include love, friendship, courage, betrayal, and the struggle between good and evil.`;
  }
  
  document.querySelector('.js-answer-choose3').style.border = 'none';
    document.querySelector('.js-answer-choose').style.border = 'none';
    document.querySelector('.js-answer-choose2').style.border = '2px solid red';
    document.querySelector('.answer-correct').style.border = 'none';
    document.querySelector('.right').innerHTML = `Wrong..`;
}

function answerC() {
  let correct = 'wrong';
  
  if (correct === 'wrong') {
    document.querySelector('.js-emoji').innerHTML = ` <i class="bi bi-emoji-frown-fill"></i>`;
    document.querySelector('.js-answer').innerHTML = `Option C. is not the correct answer`;
    document.querySelector('.js-correct-answer').innerHTML = `The correct answer is D because <br><br> The theme of a story is the underlying message, central idea, or insight that the author wants to convey.
    <br><br>It is a universal concept or lesson that often reflects on human nature, society, or life experiences. The theme is not explicitly stated but is revealed through the story's characters, plot, setting, and other literary elements. Examples of common themes include love, friendship, courage, betrayal, and the struggle between good and evil.`;
  }
  
  document.querySelector('.js-answer-choose3').style.border = '2px solid red';
    document.querySelector('.js-answer-choose').style.border = 'none';
    document.querySelector('.js-answer-choose2').style.border = 'none';
    document.querySelector('.answer-correct').style.border = 'none';
    document.querySelector('.right').innerHTML = `Wrong..`;
}

function answerD() {
  let correct = 'right';
  
  if (correct === 'right') {
    document.querySelector('.js-emoji').innerHTML = `     <i class="bi bi-emoji-smile-fill"></i>`;
    document.querySelector('.js-answer').innerHTML = `Option D. is the correct answer`;
    document.querySelector('.js-correct-answer').innerHTML = '';
  }
  
  document.querySelector('.js-answer-choose3').style.border = 'none';
    document.querySelector('.js-answer-choose').style.border = 'none';
    document.querySelector('.js-answer-choose2').style.border = 'none';
    document.querySelector('.answer-correct').style.border = '2px solid greenyellow';
    document.querySelector('.right').innerHTML = `Correct..`;
}
