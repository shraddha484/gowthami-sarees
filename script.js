var items=[
{n:"Peacock border kalamkari",d:"White cotton-silk with a red and navy hand-painted peacock border.",t:"kalamkari",c:"#f1e7d0",b:"linear-gradient(90deg,#a3182b,#1b1b3a)"},
{n:"Green and purple zari silk",d:"Parrot-green body with a rich purple woven border.",t:"silk",c:"#3f9d5a",b:"#6b2a7a"},
{n:"Lavender copper-zari silk",d:"Soft blue-lavender with copper temple zari.",t:"silk",c:"#8e8ccf",b:"#b8692f"},
{n:"Magenta and teal Kanchipuram",d:"Bold magenta pallu with a teal zari border and tassels.",t:"silk",c:"#a8328f",b:"#2f8a99"},
{n:"Saree gift box set",d:"Boxed sarees in assorted colours, ready for gifting.",t:"gift",c:"#e8b4c8",b:"#d4a017"},
{n:"Daily-wear cotton drape",d:"Light and easy, for work and everyday occasions.",t:"kalamkari",c:"#d8e3d0",b:"#a3182b"}
];
var g=document.getElementById("grid"),sel=document.getElementById("s");
function draw(f){g.innerHTML="";items.forEach(function(i){if(f!=="all"&&i.t!==f)return;
var a=document.createElement("article");a.className="card";
a.innerHTML='<div class="sw" style="background:'+i.c+';--b:'+i.b+'" role="img" aria-label="'+i.n+' colour swatch"></div><div class="t"><h3>'+i.n+'</h3><p>'+i.d+'</p><a class="btn" href="https://wa.me/917899314903?text='+encodeURIComponent("Hi, I am interested in: "+i.n)+'" target="_blank" rel="noopener">Ask price</a></div>';g.appendChild(a)})}
draw("all");
items.forEach(function(i){var o=document.createElement("option");o.textContent=i.n;sel.appendChild(o)});
var o2=document.createElement("option");o2.textContent="Other (I will describe it)";sel.appendChild(o2);
document.querySelectorAll(".chip").forEach(function(b){b.onclick=function(){document.querySelectorAll(".chip").forEach(function(x){x.setAttribute("aria-pressed","false")});b.setAttribute("aria-pressed","true");draw(b.dataset.f)}});
document.getElementById("f").onsubmit=function(e){e.preventDefault();
var m="Hi Gowthami, I would like to order.\nName: "+n.value+"\nSaree: "+s.value+"\nColour/details: "+c.value+"\nCity: "+d.value;
window.open("https://wa.me/917899314903?text="+encodeURIComponent(m),"_blank")};