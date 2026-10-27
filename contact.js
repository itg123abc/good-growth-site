const prompts={produce:'What do you grow, and how do you currently apply inputs?',purchase:'What do you grow or expect to use locally produced inputs for?',provider:'What area does your organization serve?',collaborate:'What would you like to help investigate?'};
function updateInterest(value){const label=prompts[value];document.getElementById('specific-field').hidden=!label;document.getElementById('specific-label').textContent=label?label+' (optional)':'';document.getElementById('specific-input').value='';document.getElementById('status').textContent='';}
document.querySelectorAll('[name="interest"]').forEach(input=>input.addEventListener('change',()=>updateInterest(input.value)));
const selected=new URLSearchParams(location.search).get('interest');
const option=Array.from(document.querySelectorAll('[name="interest"]')).find(input=>input.value===selected);
if(option){option.checked=true;updateInterest(selected);}
const form = document.getElementById('interest-form');
form.addEventListener('submit', async event => {
  event.preventDefault();
  const status = document.getElementById('status');
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  status.textContent = 'Sending your inquiry…';
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams(new FormData(form)).toString()
    });
    if (!response.ok) throw new Error('Submission failed');
    location.assign('/thank-you.html');
  } catch {
    status.textContent = 'We couldn’t confirm your inquiry was received. Please try again or email ian@allgoodgrowth.com. Your details are still here.';
    button.disabled = false;
  }
});
