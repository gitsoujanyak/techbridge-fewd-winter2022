//scripts for problems
function resetFindInGrid() {
    //set tbNumberToFind to blank
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    tbNumberToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}

function resetFindInList() {
     //set tbTextToFind to blank
    let tbTextToFind = document.getElementById("tbTextToFind");
    tbTextToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}



function reloadPage() {
    window.location.reload();
    return false;
}


function findInGrid() {
 //find in grid
 let tbNumberToFind = document.getElementById("tbNumberToFind");
 console.log("Entered Value: ", tbNumberToFind.value);
 
 var a=0;

 //display spans and length
 let spans = document.getElementsByTagName('span');
 console.log("spans: ", spans);
 console.log("span lenghs: ", spans.length);

 //loop through span length
 for (let index = 0; index < spans.length; index++) {
     console.log("Entered For Loop: ", tbNumberToFind.value);
     //match span value with entered value
     if (spans[index].innerText == tbNumberToFind.value) {
         spans[index].classList.add('spanHighlighted');
         console.log(spans[index]);
         console.log(spans[index].innerText);
         console.log("Highlight")

     }
     //value does not match
     else {
         spans[index].classList.remove('spanHighlighted');
         console.log(spans[index]);
         console.log(spans[index].innerText);
         console.log("Remove highlight");
         a=a+1;
          }
         
     } 
try { 
        if(tbNumberToFind.value == "") alert("Input empty, please enter valid value");
        if(a==spans.length) alert("Input value not found!")
    }
         catch(err) {
            alert("Issue with code");
          }
}        


function findInList() {
    let tbTextToFind = document.getElementById("tbTextToFind");
    console.log("Entered Value: ", tbTextToFind.value);
  
    //display spans and length
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    console.log("span lenghs: ", spans.length);
    var a=0;

    //loop through span length
    for (let index = 0; index < spans.length; index++) {
        console.log("Entered For Loop: ", tbTextToFind.value);
        //match span value with entered value
        if (spans[index].innerText == tbTextToFind.value) {
            spans[index].classList.add('spanHighlighted');
            console.log(spans[index]);
            console.log(spans[index].innerText);
            console.log("Highlight")
        
        }
        //value does not match
        else {
            spans[index].classList.remove('spanHighlighted');
            console.log(spans[index]);
            console.log(spans[index].innerText);
            console.log("Remove highlight");
            a=a+1;
            console.log(a)  
             }
            
        }       

try { 
    if(tbTextToFind.value == "")  alert("Input empty, please enter valid value");
    if(a==spans.length) alert("Input value not found!")
    }
    
catch(err){ 
    alert("Issue with code");
  }
}

function sortIt() {
  //display spans and length
  let spans = document.getElementsByTagName("span");
  console.log("spans: ", spans);
  console.log("span lenghs: ", spans.length);

  var index, switching, shouldSwitch;

  switching = true;
  /* Make a loop that will continue until
    no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    /* b = list.getElementsByTagName("span");*/
    // Loop through all list-items:s
    for (index = 0; index < spans.length; index++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      console.log("In while For loop");
      console.log(spans[index].innerText.toLowerCase());
      console.log(spans[index + 1].innerText.toLowerCase());
      /* check if the next item should
        switch place with the current item: */
      /*if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {*/
      if (
        spans[index].innerText.toLowerCase() >
        spans[index + 1].innerText.toLowerCase()
      ) {
        /* if next item is alphabetically
          lower than current item, mark as a switch
          and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
        and mark the switch as done: */
      console.log("switch true if loop");
      console.log(spans[index].innerText);
      console.log(spans[index + 1].innerText);
      spans[index].innerText.parentNode.insertBefore(
        spans[index + 1].innerText,
        spans[index].innerText
      );
      switching = true;
    }
  }
}

  // Creating the bblSort function
 function bblSort(){

  let spans = document.getElementsByTagName("span");
  console.log("spans: ", spans);
  console.log("span lenghs: ", spans.length);
     
    for(var i = 0; i < spans.length; i++){
        
      // Last i elements are already in place  
      for(var j = 0; j < ( spans.length - i -1 ); j++){
          
        // Checking if the item at present iteration 
        // is greater than the next iteration
        if(spans[j].innerText > spans[j + 1].innerText){
            
          // If the condition is true then swap them
          var temp = spans[j].innerText
          spans[j].innerText = spans[j + 1].innerText
          spans[j + 1].innerText = temp
        }
      }
    }
    // Print the sorted array
   // console.log(arr);
   console.log(temp);
   }