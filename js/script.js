function counter(className) {
    let countElement =  document.querySelectorAll(className) ; 
    let convert = Array.from(countElement);
    let number = 0 ;
   
    convert.map((item)=>{
       function increment() {  
            item.innerHTML =  number++; 
            console.log(item.dataset.E);
        }
       $timing =  setInterval(()=>{
           increment(); 
       },100)
    })
}
