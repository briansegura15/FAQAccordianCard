// // toggle drop down menu

// const dropdownMenu = document.querySelector(".dropdown-text");

// function openMenu() {
//   dropdownMenu.classList.toggle("hide");
// }

// if (dropdownMenu.classList.contains("hide")) {
//   dropdownMenu.classList.toggle("hide");
// }

// const dropDown = document.querySelectorAll(".question-container");

// dropDown.forEach(drop =>
//   drop.addEventListener("click", () => {
//     console.log("suh bitchhhh");
//   })
// );

// dropDown.forEach(drop =>
//   drop.addEventListener("click", () => {
//     if (drop.parentNode.classList.contains("hide")) {
//       drop.parentNode.classList.toggle("hide");
//     } else {
//       dropDown.forEach(drop => drop.parentNode.classList.remove("hide"));
//       drop.parentNode.classList.add("hide");
//     }
//   })
// );
// document.querySelector(".dropdown-text").addEventListener("click", (event) =>
// {
//     const textArr = [...event.currentTarget.querySelectorAll("*[hide")];
//     const show = textArr.forEach(ele => {

//     })
// } )
// flip arrows

// document.getElementById("questions").addEventListener("click", function (e) {
//   const tgt = e.target;
//   if (tgt.classList.contains("arrow-down")) {
//     tgt.classList.toggle("open");
//   }
// });

// const accordionBtns = document.querySelectorAll(".arrow");
// const accordionContent = document.querySelectorAll(".answer");
// const accordionHeader = document.querySelectorAll(".question");

// // add a click event lstener to all the accordion btns
// //careful with the callback function ()
// for (let i = 0; i < accordionBtns.length; i++) {
//   accordionBtns[i].addEventListener("click", function () {
//     hideOtherAccordionContentExceptThis(i);
//     toggleAccordion(accordionContent[i], x);
//   });
// }

// function toggleAccordion(item, currentAccordionNum) {
//   //Somehow, the element classlist we are recieving here is not an array
//   //so we need to convert it to an array first to use the helpful Array.includes method
//   let currentClassList = Array.from(item.classList);
//   if (currentClassList.includes("hide")) {
//     item.classList.remove("hide");
//     accordionHeader[currentAccordionNum].classList.add("bold");
//     accordionBtns[currentAccordionNum].style.transform = "rotate(180deg)";
//   } else {
//     item.classList.add("hide");
//     accordionHeader[currentAccordionNum].classList.remove("bold");
//     accordionBtns[currentAccordionNum].style.transform = "rotate(360deg)";
//   }
// }

// //hides all accordion content except current
// function hideOtherAccordionContentExceptThis(currentAccordionContentNumber) {
//   for (let i = 0; i < accordionContent.length; i++) {
//     if (i != currentAccordionContentNumber) {
//       let currentClassList = Array.from(accordionContent[i].classList);
//       if (currentClassList.includes("hide")) {
//         //do nothing
//       } else {
//         accordionContent[i].classList.add("hide");
//         accordionHeader[i].classList.remove("bold");
//         accordionBtns[i].style.transform = "rotate(360deg)";
//       }
//     } else {
//       //do nothing
//     }
//   }
// }

// Select elements from the DOM

const questions = document.querySelectorAll(".question");

// Loop thru all elements and add event listener

questions.forEach(question =>
  question.addEventListener("click", () => {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.toggle("active");
    } else {
      questions.forEach(question =>
        question.parentNode.classList.remove("active")
      );
      question.parentNode.classList.add("active");
    }
  })
);
