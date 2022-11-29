(()=>{"use strict";function t(){const t=document.getElementById("content"),e=document.createElement("div");e.classList.add("banner");const n=document.createElement("h1");n.textContent="Cat's Restaurant for Cats",e.appendChild(n);const d=document.createElement("p");d.textContent="Welcome to Cat's Restaurant for Cats, we work to serve everything a cat's heart could desire. Pellentesque mollis sem et erat rutrum fringilla. Nam eu convallis felis. Sed aliquam interdum rutrum. Ut congue, eros eget egestas auctor, nisl arcu euismod dolor, nec dignissim mauris nisl sit amet libero.",e.appendChild(d),t.appendChild(e);const c=document.createElement("div");c.classList.add("hours");const o=document.createElement("h2");o.textContent="Hours",c.appendChild(o);const a=document.createElement("p");a.textContent="We're open everynight from 8pm to 8am. Only night owls allowed.",c.appendChild(a),t.appendChild(c);const s=document.createElement("div");s.classList.add("location");const l=document.createElement("h2");l.textContent="Location",s.appendChild(l);const i=document.createElement("p");i.textContent="I could tell you, but then I'd have to kill you.",s.appendChild(i),t.appendChild(s)}let e=[];function n(t,e,n){this.title=t,this.desc=e,this.price=n}const d=new n("Fish 'n Chips","Fresh fish of the day, served with boiled potatoes, carrots and herbs.","29.90");e.push(d);const c=new n("Catchicken","Minced roasted chicken, served with grains and herbs, nice and crunchy.","23.90");e.push(c);const o=new n("Beef Chops","Deliciously roasted beef, with herbs, butter and a selection of vegetables","26.90");function a(){const t=document.getElementById("content"),e=document.createElement("div");e.classList.add("navbar");const n=document.createElement("h2");n.classList.add("logo"),n.textContent="CrC",e.appendChild(n);const d=document.createElement("div");d.classList.add("navButtons"),e.appendChild(d);const c=document.createElement("button");c.setAttribute("id","homeBtn"),c.classList.add("navBtn"),c.textContent="Home",d.appendChild(c);const o=document.createElement("button");o.setAttribute("id","menuBtn"),o.classList.add("navBtn"),o.textContent="Menu",d.appendChild(o);const a=document.createElement("button");a.setAttribute("id","contactBtn"),a.classList.add("navBtn"),a.textContent="Contact",d.appendChild(a),t.appendChild(e)}function s(){const t=document.getElementById("content"),e=document.createElement("div");e.classList.add("footer"),t.appendChild(e);const n=document.createElement("p");n.textContent="This is a student project for the Odin Project's javascript course",e.appendChild(n);const d=document.createElement("a");d.setAttribute("href","https://github.com/Vimpandra/restaurant-page"),d.textContent="Click here to visit the Github repository",e.appendChild(d)}e.push(o),a(),t(),s(),function n(){const d=document.getElementById("content"),c=document.getElementById("homeBtn"),o=document.getElementById("menuBtn"),l=document.getElementById("contactBtn");c.addEventListener("click",(()=>{d.textContent=null,a(),t(),s(),n()})),o.addEventListener("click",(()=>{d.textContent=null,a(),function(){const t=document.getElementById("content"),n=document.createElement("div");n.classList.add("menuTitle"),t.appendChild(n);const d=document.createElement("h1");d.textContent="Today's Menu",n.appendChild(d);const c=document.createElement("p");c.textContent="Updated daily with fresh tasty options",n.appendChild(c);const o=document.createElement("div");o.classList.add("menuCards"),t.appendChild(o);for(let t=0;t<e.length;t++){const n=document.createElement("div");n.classList.add("menuItemCard"),o.appendChild(n);const d=document.createElement("h3");d.textContent=e[t].title,n.appendChild(d);const c=document.createElement("p");c.classList.add("itemDesc"),c.textContent=e[t].desc,n.appendChild(c);const a=document.createElement("p");a.classList.add("itemPrice"),a.textContent=e[t].price,n.appendChild(a)}}(),s(),n()})),l.addEventListener("click",(()=>{d.textContent=null,a(),function(){const t=document.getElementById("content"),e=document.createElement("div");e.classList.add("titleContainer");const n=document.createElement("h1");n.textContent="Contact Us",e.appendChild(n),t.appendChild(e);const d=document.createElement("div");d.classList.add("cardContainer"),t.appendChild(d);const c=document.createElement("div");c.classList.add("contactCard");const o=document.createElement("h2");o.textContent="Delivery",c.appendChild(o);const a=document.createElement("p");a.classList.add("cardDesc"),a.textContent="You can call or text us to request the menu of the day and place your order.",c.appendChild(a);const s=document.createElement("p");s.classList.add("cardTel"),s.textContent="+55 (61) 99999 9969",c.appendChild(s),d.appendChild(c);const l=document.createElement("div");l.classList.add("contactCard");const i=document.createElement("h2");i.textContent="Customer Support",l.appendChild(i);const r=document.createElement("p");r.classList.add("cardDesc"),r.textContent="If your have any complaints, special requests or suggestions, we'll be happy to hear you.",l.appendChild(r);const m=document.createElement("p");m.classList.add("cardTel"),m.textContent="+55 (61) 66666 6696",l.appendChild(m),d.appendChild(l)}(),s(),n()}))}()})();