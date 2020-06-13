function redirect(location){
    if(!location) return;
    
    const counter = document.querySelector("#counter");

    let count = 5;
    const handle = setInterval(()=>{
        count--;
        counter.textContent = count || "...";
        

        if(!count){
            clearInterval(handle);
            go();
        }
    }, 1000)

    function go(){
        if(window.env && window.env === "development")
            return;
            
        window.location = location;
    }

}