// creating the array for the menu
var menu=[
{     name:"momo",
      dishe:"This is called nepali momo",
      image:"img/image2.jpg"
},
{     name:"chawmine",
      dishe:"This is called nepali chawmine",
      image:"img/cha1.jpg"
},
{     name:"bhat",
      dishe:"This is called nepali bhat",
      image:"img/bhat2.jpg"
},
{     name:"selroti",
      dishe:"This is called nepali selroti",
      image:"img/sel2.jpg"
},
{     name:"dhido",
      dishe:"This is called nepali dhido",
      image:"img/image8.jpg"
},
{     name:"thukpa",
      dishe:"This is called nepali thukpa",
      image:"img/thukpa2.jpg"
}
]
// this is the function
function mymenu(){
var name = document.getElementById('name').value.toLowerCase()
for(i=0;i<menu.length;i++){
   if(name===menu[i].name){
   	document.getElementById('pritam').innerHTML=menu[i].name;
   	document.getElementById('suchana').innerHTML=menu[i].dishe;
   	document.getElementById('prisumsa').src=menu[i].image;
   	return;
   }
   else{
   	document.getElementById('pritam').innerHTML="Type the name like:momo,chawmine,bhat,selroti,dhido,thukpa";
   	document.getElementById('suchana').innerHTML="Type correctly";
   	document.getElementById('prisumsa').src="img/bro.png";


   }

}

}