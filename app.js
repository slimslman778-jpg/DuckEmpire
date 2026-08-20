const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
let coins=12500,corn=850,xp=820,size=5;
function toast(t){const e=$("#toast");e.textContent=t;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),1300)}
function openScreen(id){$$(".screen").forEach(x=>x.classList.toggle("active",x.id===id));$$(".bottom-nav button").forEach(x=>x.classList.toggle("active",x.dataset.screen===id))}
$$(".bottom-nav button").forEach(b=>b.onclick=()=>openScreen(b.dataset.screen));
function renderFarm(){const f=$("#farm");f.innerHTML="";["🌽","🌾","🪵","🌿","🥚","💧"].forEach(x=>{const d=document.createElement("div");d.textContent=x;f.append(d)})}
function renderEggs(){const f=$("#eggField");f.className="egg-field"+(size===7?" grid7":"");f.innerHTML="";let n=size*size;for(let i=0;i<n;i++){let d=document.createElement("div");d.className="egg";d.dataset.level=(i%9===0?3:i%4===0?2:1);d.textContent=d.dataset.level==="3"?"🥚✨":d.dataset.level==="2"?"🥚":"🥚";d.draggable=true;f.append(d)}}
$("#feedBtn").onclick=()=>{if(corn<10)return toast("🌽 الذرة غير كافية");corn-=10;xp+=250;coins+=25;$("#corn").textContent=corn;$("#coins").textContent=coins;$("#xpText").textContent=Math.min(xp,1000);$("#xpBar").style.width=Math.min(xp/10,100)+"%";toast("🦆 البطة سعيدة! +250 XP")};
$$(".seg button").forEach(b=>b.onclick=()=>{$$(".seg button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");size=+b.dataset.size;renderEggs()});
$("#smartMerge").onclick=()=>{coins+=500;$("#coins").textContent=coins;toast("✨ تم تنفيذ Smart Merge")};
$("#hatch").onclick=()=>{coins+=250;$("#coins").textContent=coins;toast("🥚✨ فقست بيضة وحصلت على مكافأة!")};
$("#breedBtn").onclick=()=>toast("❤️ اختر شريكًا للبدء");
renderFarm();renderEggs();
if(window.Telegram?.WebApp){Telegram.WebApp.ready();Telegram.WebApp.expand();}
