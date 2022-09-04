const draggble_list=document.getElementById('draggable-list')
const dragB=document.getElementById('check');

const richestPeople=[
    "Mahlil Mahee",
    "Elon Musk ",
    "Jeff Bejos",
    "Bernard Arnault",
    "Bill Gates" ,
    "Gautam Adani",
    "Warren Buffet",
    "Sergey Grin",
    "Lary Page",
    'Mukesh Ambani '
]

const listItems=[]

let dragStartIndex; 


createList();

// Insert list items into doms 
function createList() {
[...richestPeople]
.map(a=>({value:a,sort:Math.random()}))
.sort((a,b)=>a.sort-b.sort)
.map(a=>a.value)
.forEach((person,index)=>{

    const listItem=document.createElement("li");

    listItem.setAttribute("data-index",index);
     listItem.innerHTML =`
     <span class='number'>${index +1}</span>
     <div class='draggable' draggable='true'>
     <p class='person-name'>${person}</p>
     </div>

     `

     listItems.push(listItem);
     console.log(listItems)
     draggble_list.appendChild(listItem)

})

}


