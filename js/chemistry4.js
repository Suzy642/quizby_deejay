function answerA() {
   let correct = 'wrong';
    
  if (correct === 'wrong') {
    const answer = document.querySelector('.answer').style.border = '2px solid red';
    document.querySelector('.js-emoji').innerHTML = ` <i class="bi bi-emoji-frown-fill"></i>`;
    document.querySelector('.js-answer').innerHTML = `Option A. is not the correct answer`;
    document.querySelector('.js-correct-answer').innerHTML = `The correct answer is D because <br><br>
    An atom is the smallest unit of ordinary matter that retains the properties of an element. It consists of a nucleus and electrons.`;
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
    document.querySelector('.js-correct-answer').innerHTML = `The correct answer is D because <br><br> 
    An atom is the smallest unit of ordinary matter that retains the properties of an element. It consists of a nucleus and electrons.`;
  }
 
 document.querySelector('.js-answer-choose').style.border = 'none';
  document.querySelector('.js-answer-choose2').style.border = '2px solid red';
  document.querySelector('.js-answer-choose3').style.border = 'none';
 document.querySelector('.answer-correct').style.border = 'none';
 document.querySelector('.right').innerHTML = `Wrong..`;
}

function answerC() {
  let correct = 'wrong';
   
  if (correct === 'wrong') {
    document.querySelector('.js-emoji').innerHTML = ` <i class="bi bi-emoji-frown-fill"></i>`;
    document.querySelector('.js-answer').innerHTML = `Option C. is not the correct answer`;
    document.querySelector('.js-correct-answer').innerHTML = `The correct answer is D because <br><br>
    An atom is the smallest unit of ordinary matter that retains the properties of an element. It consists of a nucleus and electrons.`;
  }
  
  document.querySelector('.js-answer-choose2').style.border = 'none';
   document.querySelector('.js-answer-choose').style.border = 'none';
   document.querySelector('.js-answer-choose3').style.border = '2px solid red';
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
  
  
  document.querySelector('.answer-correct').style.border = '2px solid greenyellow';
  document.querySelector('.js-answer-choose3').style.border = 'none';
    document.querySelector('.js-answer-choose').style.border = 'none';
    document.querySelector('.js-answer-choose2').style.border = 'none';
    document.querySelector('.right').innerHTML = `Correct..`;
}
