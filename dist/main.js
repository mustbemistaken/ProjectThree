(()=>{"use strict";const e=async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{return await n.json()}catch(e){console.log("Error",e)}};document.getElementById("generate").addEventListener("click",(async function(t){t.preventDefault();const n=document.getElementById("start").value,a=document.getElementById("formdata").value;let r,o,i,m,s=new Date,d=s.getFullYear()+"-"+JSON.stringify(s.getMonth()+1).padStart(2,"0")+"-"+JSON.stringify(s.getDate()).padStart(2,"0"),l=new Date(n+"T00:00:00-0400"),c=(new Date).toISOString().slice(0,10),g=new Date(c+"T00:00:00-0400"),y=l.getDate(),u=s.getDate(),p=l.getMonth()+1,b=s.getMonth()+1,h=s.getFullYear()-2+"-"+JSON.stringify(s.getMonth()+1).padStart(2,"0")+"-"+JSON.stringify(s.getDate()).padStart(2,"0"),f=l.getFullYear()-2+"-"+JSON.stringify(s.getMonth()+1).padStart(2,"0")+"-"+JSON.stringify(l.getDate()+1).padStart(2,"0");const $=await e("/readGeoName",{formCity:a});try{r=$.geonames[0].countryName;const t=await e("/readWeather",{longitude:$.geonames[0].lng,latitude:$.geonames[0].lat,countryName:$.geonames[0].countryCode,cityName:a,tripDay:y,currentDay:u,tripMonth:p,currentMonth:b,newDate:d,tripStart:n,historicalCurrent:h,historicalTrip:f});i=Math.abs(l-g),m=Math.ceil(i/864e5);const s=await e("/readInfo",{cityCountry:r});if(n<d)alert("Invalid date entered. Please try again.");else if(d==n){const a=await e("/readPix",{city:t.data[0].city_name});0!==a.hits.length?(o=a.hits[0].webformatURL,document.getElementById("pix").style.height=" 100%",document.getElementsByClassName("cont3")[0].style.display="flex",document.getElementsByClassName("cont2")[0].style.display="flex",document.getElementById("pix").innerHTML=`<img src="${o}"></img>`,document.getElementById("travelData").innerHTML=`<h2>My Trip to:<br> ${t.data[0].city_name}, ${r} </h2><h2>Departing: ${n}</h2>`,document.getElementById("travelData").insertAdjacentHTML("beforeend",'<button id="save" type = "submit"> <b>Save Trip</b> </button><button id="remove" type = "submit"> <b>Remove Trip</b> </button>'),document.getElementById("travelData").insertAdjacentHTML("beforeend",`<p>${t.data[0].city_name}, ${r} is ${m} day(s) away</p>`),document.getElementById("travelData").insertAdjacentHTML("beforeend",`<p>Current weather is:<br>${t.data[0].temp}°</p>`),document.getElementById("travelData").insertAdjacentHTML("beforeend",`<p>Some helpful info on your destination!<br><strong>Currency:</strong> ${s[0].currencies[0].name} (${s[0].currencies[0].symbol}) <br><strong>Language:</strong> ${s[0].languages[0].name} <br><strong>Timezone:</strong> ${s[0].timezones[0]}</p>`)):(document.getElementById("pix").style.height=" 100%",document.getElementsByClassName("cont3")[0].style.display="flex",document.getElementsByClassName("cont2")[0].style.display="flex",document.getElementById("pix").innerHTML='<img src="./img/image-not-found.jpg"></img>',document.getElementById("travelData").innerHTML=`<h2>My Trip to:<br> ${t.data[0].city_name}, ${r} </h2><h2>Departing: ${n}</h2>`,document.getElementById("travelData").insertAdjacentHTML("beforeend",'<button id="save" type = "submit"> <b>Save Trip</b> </button><button id="remove" type = "submit"> <b>Remove Trip</b> </button>'),document.getElementById("travelData").insertAdjacentHTML("beforeend",`<p>${t.data[0].city_name}, ${r} is ${m} day(s) away</p>`),document.getElementById("travelData").insertAdjacentHTML("beforeend",`<p>Current weather is:<br>${t.data[0].temp}°</p>`),document.getElementById("travelData").insertAdjacentHTML("beforeend",`<p>Some helpful info on your destination!<br><strong>Currency:</strong> ${s[0].currencies[0].name} (${s[0].currencies[0].symbol}) <br><strong>Language:</strong> ${s[0].languages[0].name} <br><strong>Timezone:</strong> ${s[0].timezones[0]}</p>`))}else{const a=await e("/readPix",{city:t.city_name});0!=a.hits.length?(o=a.hits[0].webformatURL,document.getElementById("pix").style.height=" 100%",document.getElementsByClassName("cont3")[0].style.display="flex",document.getElementsByClassName("cont2")[0].style.display="flex",document.getElementById("pix").innerHTML=`<img src="${o}"></img>`,document.getElementById("travelData").innerHTML=`<h2>My Trip to:<br> ${t.city_name}, ${r} </h2><h2>Departing: ${n}</h2>`,document.getElementById("travelData").insertAdjacentHTML("beforeend",'<button id="save" type = "submit"> <b>Save Trip</b> </button><button id="remove" type = "submit"> <b>Remove Trip</b> </button>'),document.getElementById("travelData").insertAdjacentHTML("beforeend",`<p>${t.city_name}, ${r} is ${m} day(s) away</p>`),m<16?document.getElementById("travelData").insertAdjacentHTML("beforeend",`<p>Typical weather for then is:<br>High: ${t.data[m].max_temp}, Low: ${t.data[m].min_temp}</p><br>${t.data[m].weather.description} throughout the day.`):document.getElementById("travelData").insertAdjacentHTML("beforeend",`<p>Typical weather for then is:<br>High: ${t.data[0].max_temp}°, Low: ${t.data[0].min_temp}°</p>`),document.getElementById("travelData").insertAdjacentHTML("beforeend",`<p>Some helpful info on your destination!<br><strong>Currency:</strong> ${s[0].currencies[0].name} (${s[0].currencies[0].symbol}) <br><strong>Language:</strong> ${s[0].languages[0].name} <br><strong>Timezone:</strong> ${s[0].timezones[0]}</p>`)):(document.getElementById("pix").style.height=" 100%",document.getElementsByClassName("cont3")[0].style.display="flex",document.getElementsByClassName("cont2")[0].style.display="flex",document.getElementById("pix").innerHTML='<img src="./img/image-not-found.jpg"></img>',document.getElementById("travelData").innerHTML=`<h2>My Trip to:<br> ${t.city_name}, ${r} </h2><h2>Departing: ${n}</h2>`,document.getElementById("travelData").insertAdjacentHTML("beforeend",'<button id="save" type = "submit"> <b>Save Trip</b> </button><button id="remove" type = "submit"> <b>Remove Trip</b> </button>'),document.getElementById("travelData").insertAdjacentHTML("beforeend",`<p>${t.city_name}, ${r} is ${m} day(s) away</p>`),m<16?document.getElementById("travelData").insertAdjacentHTML("beforeend",`<p>Typical weather for then is:<br>High: ${t.data[m].max_temp}, Low: ${t.data[m].min_temp}</p><br>${t.data[m].weather.description} throughout the day.`):document.getElementById("travelData").insertAdjacentHTML("beforeend",`<p>Typical weather for then is:<br>High: ${t.data[0].max_temp}°, Low: ${t.data[0].min_temp}°</p>`),document.getElementById("travelData").insertAdjacentHTML("beforeend",`<p>Some helpful info on your destination!<br><strong>Currency:</strong> ${s[0].currencies[0].name} (${s[0].currencies[0].symbol}) <br><strong>Language:</strong> ${s[0].languages[0].name} <br><strong>Timezone:</strong> ${s[0].timezones[0]}</p>`))}}catch(t){alert("Invalid city entry",t)}}))})();