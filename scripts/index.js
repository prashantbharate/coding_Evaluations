//store the products array in localstorage as "products"
function getnew()
{
    event.preventDefault();
    window.location.href="../inventory.html"
}

function Constructorclass(type,desc,price,image)
{
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image=image;
}


function getdata()
{
    let arr=JSON.parse(localStorage.getItem("products")) || []
    event.preventDefault();
    let type=document.getElementById("type").value
    let desc=document.getElementById("desc").value
    let price=document.getElementById("price").value
    let image=document.getElementById("image").value

    let s1=new Constructorclass(type,desc,price,image)
    console.log(s1)
    arr.push(s1)

    localStorage.setItem("products",JSON.stringify(arr))
    
    document.getElementById("type").value=""
    document.getElementById("desc").value=""
    document.getElementById("price").value=""
    document.getElementById("image").value=""

}