// let btn= document.querySelector("#forrm");
// btn.addEventListener("submit", (event)=>
// {
//     event.preventDefault();
//     console.log(btn.First_Name.value);
// })
// Zooming functionality cmd+"a" to increase fontsize
// let mybody= document.querySelector("body");
// let mytext = document.querySelector("textarea");

// let myfontsize =16;
// mybody.addEventListener("keydown",(event)=>
// {
//     if(event.key === "a" && event.ctrlKey )
//     {
//         myfontsize+=2;
//         mytext.style.fontSize= `${myfontsize}px`;
//     }
//     else if(event.key === "b" && event.ctrlKey )
//     {
//         myfontsize-=2;
//         mytext.style.fontSize= `${myfontsize}px`;
//     }
// },)
let i=11;
let scroll = document.getElementById("scrollbar");
scroll.addEventListener("scroll",()=>
{
    let trigger = scroll.scrollHeight - scroll.clientHeight;

    console.log(scroll.scrollTop);
    if(trigger-scroll.scrollTop<=5)
    {
    let ele = document.createElement("div");
    ele.innerHTML=`element ${i}`;
    ele.style.height= `18px`;
    ele.style.marginBottom=`3px`;
    ele.style.border=`2px solid black`;
    scroll.appendChild(ele);
    i++;
    }
})
for(let i=1; i<=10;i++)
{
    let ele = document.createElement("div");
    ele.innerHTML=`element ${i}`;
    ele.style.height= `18px`;
    ele.style.marginBottom=`3px`;
    ele.style.border=`2px solid black`;
    scroll.appendChild(ele);
}
