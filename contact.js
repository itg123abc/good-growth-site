const prompts={produce:'What do you grow, and would production serve your farm or a group of growers?',purchase:'What do you grow or expect to use locally produced inputs for?',provider:'What area do you serve, and are you interested in cartridges, reactor orders, or producing liquid inputs?',collaborate:'What would you like to help investigate?'};
const routes={
  produce:{title:'Production at your farm.',copy:'Explore a reactor for your own operation or a shared arrangement serving nearby growers. We’ll discuss the site, application equipment, schedule, and who would operate it.',detail:'Early trial planning includes setup support, equipment loans, and agreed costs and responsibilities. See the FAQ for the current trial approach.'},
  purchase:{title:'Local supply starts with local interest.',copy:'Tell us where you grow and what you would like to source. Your interest helps identify where future local producers could serve demand, without you operating a reactor.',detail:'Regional interest can inform conversations with prospective production partners. Availability is still being developed; registering interest is not an order.'},
  provider:{title:'Serve growers in your area.',copy:'You could explore distributing cartridges and coordinating reactor orders, operating reactors to supply finished liquid inputs, or combining both roles.',detail:'We’ll discuss your service area, customers, and preferred role. Grower purchasing interest helps inform where production trials and local supply could make sense.'},
  collaborate:{title:'Help develop and evaluate the system.',copy:'We welcome support with biological evaluation, study design, practical operation, and application testing.',detail:'Tell us about your expertise, facilities, or the question you would like to investigate. Advisors, labs, investors, and strategic partners are welcome too.'},
  other:{title:'Tell us what you have in mind.',copy:'If your interest does not fit one category, tell us a little about your work and what you would like to explore.',detail:'You can mention several interests or simply ask a question. No finished proposal is needed.'}
};
const savedDetails={};
let previousInterest='';
function updateInterest(value){
  const field=document.getElementById('specific-input');
  if(previousInterest) savedDetails[previousInterest]=field.value;
  const label=prompts[value];
  document.getElementById('specific-field').hidden=!label;
  field.disabled=!label;
  document.getElementById('specific-label').textContent=label?label+' (optional)':'';
  field.value=savedDetails[value]||'';
  document.getElementById('purchase-note').hidden=value!=='purchase';
  const route=routes[value];
  if(route){
    document.getElementById('route-title').textContent=route.title;
    document.getElementById('route-copy').textContent=route.copy;
    document.getElementById('route-detail').textContent=route.detail;
  }
  document.getElementById('status').textContent='';
  previousInterest=value;
}
document.querySelectorAll('[name="interest"]').forEach(input=>input.addEventListener('change',()=>updateInterest(input.value)));
const selected=new URLSearchParams(location.search).get('interest');
const option=Array.from(document.querySelectorAll('[name="interest"]')).find(input=>input.value===selected);
if(option){option.checked=true;updateInterest(selected);}
else {const restored=document.querySelector('[name="interest"]:checked');if(restored)updateInterest(restored.value);}
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
