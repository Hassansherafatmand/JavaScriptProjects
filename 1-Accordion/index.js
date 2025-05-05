
const information = [
    {
      id: 1,
      title: "What is JavaScript?",
      content: "JavaScript is a programming language commonly used in web development to create interactive effects within web browsers."
    },
    {
      id: 2,
      title: "What is an Accordion Component?",
      content: "An accordion is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them."
    },
    {
      id: 3,
      title: "Why use Accordions?",
      content: "Accordions help organize content in a compact space and improve user experience by reducing scrolling."
    },
    {
      id: 4,
      title: "How to build an Accordion in JavaScript?",
      content: "You can build an accordion using HTML, CSS, and JavaScript by toggling visibility and applying styles dynamically on user interaction."
    }
  ];



  const accordionData = document.querySelector('#Q-and-A');
  accordionData.innerHTML = information.map(info => {
    return `
      <div class="accordion-item">
      <div class="accordion-title">
        <h3>${info.title}</h3>
        <span class="toggle-icon">+</span>
      </div>
      <div class="accordion-content"><p>${info.content}</p></div>
    </div>
    `
  }).join("");



const titles = document.querySelectorAll('.accordion-title');
titles.forEach(title =>{
    title.addEventListener('click', ()=>{

        const content = title.nextElementSibling;
        const icon = title.querySelector('.toggle-icon');

        // Case 1: If the clicked one is already open, close it
        if(content.classList.contains('show')){
          content.classList.remove('show');
          icon.textContent = '+';
        }else{
          document.querySelectorAll('.accordion-content').forEach(itme =>{
            itme.classList.remove('show');
          });
          document.querySelectorAll('.toggle-icon').forEach(icon =>{
            icon.textContent = '+';
          })

          icon.textContent = '-';
          content.classList.add('show');
        }
    });
});







/*
  //Full Behavior
  const allTitles = document.querySelectorAll('.accordion-title');
  allTitles.forEach(title => {
    title.addEventListener('click', (event)=>{
      // console.log(title, title.textContent);

      const content = title.nextElementSibling;
      const icon = title.querySelector('.toggle-icon'); //select the icon inside THIS title

      // Case 1: If the clicked one is already open, close it
      if (content.classList.contains('show')){
        content.classList.remove('show'); 
        icon.textContent = '+';
      }else{
        // Then close all the others
        document.querySelectorAll('.accordion-content').forEach(activeClass => {
          activeClass.classList.remove('show');
        })

        // Then change all - icons to + sign
        document.querySelectorAll('.toggle-icon').forEach(icon =>{
          icon.textContent = '+';
        })



        icon.textContent = '-';
        content.classList.add('show');
      
      }
    })
  });

*/










/*  
// With Toggle function
const accordionData = document.querySelector('#Q-and-A');
accordionData.innerHTML = information.map(info =>{
  return `
    <div class="accordion-item">
      <div class="accordion-title"><h3>${info.title}</h3></div>
      <div class="accordion-content"><p>${info.content}</p></div>
    </div>
  `
}).join('');

const qestions = document.querySelectorAll('.accordion-title');
qestions.forEach(question => {
  question.addEventListener('click', ()=>{
    const content = question.nextElementSibling;
    content.classList.toggle('show');
  });
});
*/



