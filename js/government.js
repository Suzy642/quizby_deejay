function answerA() {
  let correct = 'wrong';
  
  if (correct === 'wrong') {
    document.querySelector('.js-emoji').innerHTML = ` <i class="bi bi-emoji-frown-fill"></i>`;
    document.querySelector('.js-answer').innerHTML = `Option A. is not the correct answer`;
    document.querySelector('.js-correct-answer').innerHTML = `The correct answer is B because <br><br> 
    Election Branch is not a branch of government.`;
  }
 
 document.querySelector('.js-answer-choose').style.border = '2px solid red';
  document.querySelector('.js-answer-choose2').style.border = 'none';
  document.querySelector('.js-answer-choose3').style.border = 'none';
 document.querySelector('.answer-correct').style.border = 'none';
 document.querySelector('.right').innerHTML = `Wrong..`;
}

function answerB() {
  let correct = 'right';
  
  if (correct === 'right') {
    document.querySelector('.js-emoji').innerHTML = `     <i class="bi bi-emoji-smile-fill"></i>`;
    document.querySelector('.js-answer').innerHTML = `Option B. is the correct answer`;
    document.querySelector('.js-correct-answer').innerHTML = '';
  }
  
  
  document.querySelector('.answer-correct').style.border = '2px solid greenyellow';
  document.querySelector('.js-answer-choose3').style.border = 'none';
    document.querySelector('.js-answer-choose').style.border = 'none';
    document.querySelector('.js-answer-choose2').style.border = 'none';
  document.querySelector('.right').innerHTML = `Correct..`;
}

function answerC() {
  let correct = 'wrong';
   
  if (correct === 'wrong') {
    document.querySelector('.js-emoji').innerHTML = ` <i class="bi bi-emoji-frown-fill"></i>`;
    document.querySelector('.js-answer').innerHTML = `Option C. is not the correct answer`;
    document.querySelector('.js-correct-answer').innerHTML = `The correct answer is B because <br><br>
    Election Branch is not a branch of government.`;
  }
  
  document.querySelector('.js-answer-choose2').style.border = '2px solid red';
   document.querySelector('.js-answer-choose').style.border = 'none';
   document.querySelector('.js-answer-choose3').style.border = 'none';
   document.querySelector('.answer-correct').style.border = 'none';
   document.querySelector('.right').innerHTML = `Wrong..`;
}

function answerD() {
    let correct = 'wrong';
    
  if (correct === 'wrong') {
    const answer = document.querySelector('.answer').style.border = '2px solid red';
    document.querySelector('.js-emoji').innerHTML = ` <i class="bi bi-emoji-frown-fill"></i>`;
    document.querySelector('.js-answer').innerHTML = `Option D. is not the correct answer`;
    document.querySelector('.js-correct-answer').innerHTML = `The correct answer is B because <br><br>
    Election Branch is not a branch of government.`;
  }
  
  document.querySelector('.js-answer-choose3').style.border = '2px solid red';
    document.querySelector('.js-answer-choose').style.border = 'none';
    document.querySelector('.js-answer-choose2').style.border = 'none';
    document.querySelector('.answer-correct').style.border = 'none';
    document.querySelector('.right').innerHTML = `Wrong..`;
}
