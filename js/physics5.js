function answerA() {
  let correct = 'wrong';
  
  if (correct === 'wrong') {
    document.querySelector('.js-emoji').innerHTML = ` <i class="bi bi-emoji-frown-fill"></i>`;
    document.querySelector('.js-answer').innerHTML = `Option A. is not the correct answer`;
    document.querySelector('.js-correct-answer').innerHTML = `The correct answer is C because <br><br>
      F = M × A
      <br>
      <br>
  where:
- F = represents force,
<br>
- M = represents mass,
<br>
- A = represents acceleration..`;
   /* document.querySelector('.js-clicked-answer').innerHTML = ` A. <span>
        is just a word
      </span>.`;*/
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
    document.querySelector('.js-correct-answer').innerHTML = `The correct answer is C because <br><br>
    F = M × A
    <br>
      <br>
  where:
- F = represents force,
<br>
- M = represents mass,
<br>
- A = represents acceleration.. `;
  }
  
  document.querySelector('.js-answer-choose3').style.border = 'none';
    document.querySelector('.js-answer-choose').style.border = 'none';
    document.querySelector('.js-answer-choose2').style.border = '2px solid red';
    document.querySelector('.answer-correct').style.border = 'none';
    document.querySelector('.right').innerHTML = `Wrong..`;
}

function answerC() {
  let correct = 'Right';
  
  if (correct === 'Right') {
    document.querySelector('.js-emoji').innerHTML = `     <i class="bi bi-emoji-smile-fill"></i>`;
    document.querySelector('.js-answer').innerHTML = `Option C. is the correct answer`;
    document.querySelector('.js-correct-answer').innerHTML = '';
   /* document.querySelector('.js-correct-answer').innerHTML = `The correct answer is C`;*/
  }
  
  document.querySelector('.js-answer-choose3').style.border = 'none';
    document.querySelector('.js-answer-choose').style.border = 'none';
    document.querySelector('.js-answer-choose2').style.border = 'none';
    document.querySelector('.answer-correct').style.border = '2px solid greenyellow';
    document.querySelector('.right').innerHTML = `Correct..`;
}

function answerD() {
  let correct = 'wrong';
  
  if (correct === 'wrong') {
    document.querySelector('.js-emoji').innerHTML = ` <i class="bi bi-emoji-frown-fill"></i>`;
    document.querySelector('.js-answer').innerHTML = `Option D. is not the correct answer`;
    document.querySelector('.js-correct-answer').innerHTML = `The correct answer is C because <br><br>
    F = M × A
    <br>
      <br>
  where:
- F = represents force,
<br>
- M = represents mass,
<br>
- A = represents acceleration..`;
  }
  
  document.querySelector('.js-answer-choose3').style.border = '2px solid red';
    document.querySelector('.js-answer-choose').style.border = 'none';
    document.querySelector('.js-answer-choose2').style.border = 'none';
    document.querySelector('.answer-correct').style.border = 'none';
    document.querySelector('.right').innerHTML = `Wrong..`;
}
