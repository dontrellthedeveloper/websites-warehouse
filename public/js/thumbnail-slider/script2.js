  const controls2=document.querySelector(".controls-2");
  const container2=document.querySelector(".thumbnail-container-2");
  const allBox2=container2.children;
  const containerWidth2=container2.offsetWidth;
  const margin2=30;
   var items2=0;
   var totalItems2=0;
   var jumpSlideWidth2=0;


  // item setup per slide

 responsive=[
  {breakPoint:{width:0,item2:1}}, //if width greater than 0 (1 item will show)
  {breakPoint:{width:600,item2:2}}, //if width greater than 600 (2  item will show)
  {breakPoint:{width:1000,item2:4}} //if width greater than 1000 (4 item will show)
 ];

 function load2(){
     for(let i=0; i<responsive.length;i++){
     	if(window.innerWidth>responsive[i].breakPoint.width){
     		items2=responsive[i].breakPoint.item2
     	}
     }
     start();
 }
 
 function start2(){
 	 var totalItemsWidth2=0;
 	for(let i=0;i<allBox2.length;i++){
 		 // width and margin setup of items
 		allBox2[i].style.width=(containerWidth2/items2)-margin2 + "px";
 		allBox2[i].style.margin2=(margin2/2)+ "px";
        totalItemsWidth2+=containerWidth2/items2;
        totalItems2++;
 	}

 	// thumbnail-container width set up
 	container2.style.width=totalItemsWidth2 + "px";

 	// slides controls number set up
 	 const allSlides2=Math.ceil(totalItems2/items2);
     const ul=document.createElement("ul");
        for(let i=1;i<=allSlides2;i++){
          const li=document.createElement("li");
               li.id=i;
               li.innerHTML=i;
               li.setAttribute("onclick","controlSlides(this)");
               ul.appendChild(li);
               if(i==1){
               	li.className="active";
               }
        }
        controls2.appendChild(ul);
 }

    // when click on numbers slide to next slide
 function controlSlides2(ele2){
       // select controls children  'ul' element 
       const ul=controls2.children;

       // select ul children 'li' elements;
      const li=ul[0].children;
        
       
       var active;

       for(let i=0;i<li.length;i++){
       	if(li[i].className=="active"){
       		// find who is now active
       		active=i;
       		// remove active class from all 'li' elements
       		li[i].className="";
       	}
       }
       // add active class to current slide
       ele2.className="active";

       var numb2=(ele2.id-1)-active;
          jumpSlideWidth2=jumpSlideWidth2+(containerWidth2*numb2);
       container2.style.marginLeft=-jumpSlideWidth2 + "px";
 }

window.onload=load2();

