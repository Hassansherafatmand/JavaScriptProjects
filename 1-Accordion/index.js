
<<<<<<< HEAD
const information = [
=======
//Accordion Project:

//Data for Frequently Question
const accordionData = [
>>>>>>> a5e681088448665e25f2b71d96ce1af941d24496
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

<<<<<<< HEAD


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
=======
  

const accordionInfo = document.querySelector('#Q-and-A');

function getAccordionData (dataItems){
    accordionInfo.innerHTML = dataItems.map(dataItem =>{
        return `
        <div class="accordion-item ">

            <div class="accordion-title">
                <h3>${dataItem.title}<h3>
            </div>   

            <div class="accordion-content">
            <p>${dataItem.content}</p>
            </div>
        </div>
        `
    }).join(" ");
}

getAccordionData(accordionData);


//Get all the items inside the accrodion as an Array
const arrayOfAccordionItmes = document.querySelectorAll('.accordion-title');
console.log(arrayOfAccordionItmes);

//Loop each items to check (add/remove) the classList
arrayOfAccordionItmes.forEach(item =>{
    item.addEventListener('click', ()=> {
        const content = item.nextElementSibling;


        if(content.classList.contains('show'))
        {
            content.classList.remove('show');
        }
        else
        {
            let otherAccordingContent = document.querySelectorAll('.accordion-content');
            otherAccordingContent.forEach(accordionContent => {
                accordionContent.classList.remove('show');
            })

            content.classList.add('show');
>>>>>>> a5e681088448665e25f2b71d96ce1af941d24496
        }
    });
});







<<<<<<< HEAD
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



=======
// const allAccordionTitles = document.querySelectorAll('.accordion-title');
//  console.log(allAccordionTitles);

//  allAccordionTitles.forEach(title =>{

//     title.addEventListener('click', ()=>{      
//         const content = title.nextElementSibling;

//         //With toggle Method
//         // content.classList.toggle('show')

//         //Normal approach 
   
//         if(content.classList.contains('show')) 
//         {
//             content.classList.remove('show')
//         }else
//         {
//             content.classList.add('show')
           
//         }



//     });
//  });

//one open at a time
//  allAccordionTitles.forEach(title => {
//     title.addEventListener('click', () => {
//       // Step 1: Close all accordion contents
//       const toggleAllTheContent = document.querySelectorAll('.accordion-content');
//       toggleAllTheContent.forEach(content => {
//         content.classList.remove('show');
//       });
  
//       // Step 2: Open the one that was clicked (its next sibling)
//       const content = title.nextElementSibling;
//       content.classList.add('show');
//     });
//   });


/*
//Perfect Accordion
allAccordionTitles.forEach(title => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;
  
      // Case 1: If the clicked one is already open, close it
      if (content.classList.contains('show')) {
        content.classList.remove('show');
      } else {
        // Case 2: Close all others first
        document.querySelectorAll('.accordion-content').forEach(c => {
          c.classList.remove('show');
        });
  
        // Then open the one clicked
        content.classList.add('show');
      }
    });
  });

  */
>>>>>>> a5e681088448665e25f2b71d96ce1af941d24496
