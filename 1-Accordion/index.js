
//Accordion Project:

//Data for Frequently Question
const accordionData = [
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
        }
    });
});







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