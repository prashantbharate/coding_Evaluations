function gethome()
{
    event.preventDefault();
    window.location.href="../index.html"
}

    getmydata=JSON.parse(localStorage.getItem("products"))

    //console.log(getmydata)
    getmydata.map(function(el,i){

        let div1=document.createElement("div")
        div1.setAttribute("id","div1")
        let img=document.createElement("img")
        img.src=el.image

        let p1=document.createElement("p")
        p1.innerText=el.type

        let p2=document.createElement("p")
        p2.innerText=el.desc
        let p3=document.createElement("p")
        p3.innerText=el.price

     let  btn1=document.createElement("button")
        btn1.setAttribute("id","remove_product")
        btn1.innerText="Remove Product"
        btn1.addEventListener("click",function()
        {
            removeproduct(el,i)
        })

        


        div1.append(img,p1,p2,p3,btn1)
        document.querySelector("#all_products").append(div1)
    });

    function removeproduct(el,i)
    {
        getmydata.splice(i,1)
        localStorage.setItem("products",JSON.stringify(getmydata))
        window.location.reload()
    }