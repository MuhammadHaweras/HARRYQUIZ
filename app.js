let correct =['A','B','B','A'];
let form = document.querySelector('.quiz-form');
let result= document.querySelector('.result');
form.addEventListener('submit',e=>{
e.preventDefault();
  let score =0;
  let userans= [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
  userans.forEach((ans,ind)=>{
    if(ans===correct[ind]){
    score += 25;
  }
  });
  //showing score
  scrollTo(0,0);
  let sc=result.querySelector('span');
  result.classList.remove('d-none');

  //animation
let output=0;
let timer=setInterval(()=>{
    sc.textContent=`${output}%`;
    if(output=== score){
        clearInterval(timer);
    }
    else{
        output++;
    }
},30);
});

setTimeout(()=>{
    alert('Welcome to Harry Quiz');
},1000);
