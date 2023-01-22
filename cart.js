


let cartdata = JSON.parse(localStorage.getItem('cart')) || []
let orderedData = JSON.parse(localStorage.getItem("pending-order")) || []
let product_dom = document.getElementById('product-dom')

console.log(cartdata);
renderDom(cartdata);
priceDom(cartdata);

function renderDom(data){
    product_dom.innerHTML=null
    data.forEach((ele,ind)=>{
        let div = document.createElement('div')
        div.setAttribute('class','pdiv');

        let idiv = document.createElement('div')
        idiv.setAttribute('class','idiv');

        let img= document.createElement('img')
        img.setAttribute("src", ele.images[0]);
        idiv.append(img)

        let ddiv = document.createElement('div')
        ddiv.setAttribute('class','ddiv');

        let title = document.createElement('h4')
        title.innerText=ele.title
        let price = document.createElement('p')
        price.innerText=`$ ${ele.original_price}`
        let inc = document.createElement('button')
        inc.innerText='+'
        inc.setAttribute("class", "incButton")
        inc.addEventListener('click',()=>{
            ele.qty++
            localStorage.setItem('cart',JSON.stringify(cartdata))
            renderDom(cartdata)
            priceDom(cartdata)
        })
        let span=document.createElement('span')
        span.innerText=ele.qty
        let dec = document.createElement('button')
        dec.innerText='-'
        dec.addEventListener('click',()=>{
            ele.qty--
            localStorage.setItem('cart',JSON.stringify(cartdata))
            renderDom(cartdata)
            priceDom(cartdata)
        })
        let del = document.createElement('button')
        del.innerText='Remove'
        del.setAttribute("class", "delButton")
        del.addEventListener('click',()=>{
            let cnfrm = confirm('Do you want to Remove Item')
            if(cnfrm){
                cartdata.splice(ind,1)
                renderDom(cartdata)
                priceDom(cartdata)
                localStorage.setItem('cart',JSON.stringify(cartdata))
                alert("product deleted");
            }
        })
        ddiv.append(title,price,inc,span,dec,del)

        div.append(idiv,ddiv)
        product_dom.append(div)
    })
}

document.getElementById('checkout').addEventListener('click',()=>{
    console.log('yes');
    localStorage.setItem('pending-order',JSON.stringify(cartdata))
    localStorage.setItem('cart',JSON.stringify([]))
    location.href="payment.html"
    // location.reload()
    
})

function priceDom(data){
    let total=29;
    let count=0
    for(let i=0;i<data.length;i++){
        count++
        total+= data[i].qty*data[i].original_price 
    }
    document.getElementById('total').innerText=total
    document.getElementById('tota').innerText=total
    document.getElementById('span').innerText=count
}

let Name = localStorage.getItem("userName")
    console.log(Name)
    document.getElementById("UpdateName").innerText =  Name