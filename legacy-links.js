// Keep links to sections of the previous single-page site useful.
const destinations={'#how':'how-it-works.html','#process':'how-it-works.html#process','#faq':'faq.html','#about':'about.html','#founder':'about.html','#contact':'get-involved.html#contact','#pilot':'get-involved.html#working-together','#partners':'get-involved.html?interest=provider#contact'};
if(destinations[location.hash]) location.replace(destinations[location.hash]);
