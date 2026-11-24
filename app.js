// ---------- language ----------
const L={
en:{clear_title:'Clear all sales data',clear_note:'Deletes all bills and sales history and restarts bill numbers from 1. Fish list, rates and shop details are kept. Download a backup first. This cannot be undone.',clear_btn:'Clear All Data',clear_enter:'Enter your login password to confirm',clear_wrong:'Wrong password',clear_done:'All sales data deleted',delete_now:'Delete Now',dl_csv:'Download Data (Excel)',backup_title:'Backup & Restore',backup_note:'Take a backup when you close the shop each day. Keep the file safe (pen drive or Google Drive).',backup_dl:'Download Backup',restore:'Restore from a backup file',restore_q:'This will replace all current data. Continue?',restore_ok:'Data restored',restore_bad:'This is not a valid backup file',owner:'Owner',owner_name:'Name (printed on bill)',owner_mo:'Mobile (printed on bill)',language:'Language',app_title:'Samarth Fish Shop Billing',login_sub:'Please login to continue',username:'Username',password:'Password',login:'Login',
login_hint:'First time: username admin, password admin123 (change it in Settings)',wrong:'Wrong username or password',
nav_billing:'Billing',nav_dashboard:'Dashboard',nav_fish:'Fish Management',nav_analysis:'Sale Analysis',nav_settings:'Settings',logout:'Logout',
new_bill:'New Bill',current_bill:'Current Bill',total:'Total',print_bill:'Print Bill',clear:'Clear',tap_fish:'Tap a fish to add it.',
set_rate:'set rate',per_kg:'/Kg',weight_kg:'Weight (Kg)',rate_kg:'Rate (₹/Kg)',amount:'Amount',cancel:'Cancel',add_to_bill:'Add to Bill',
enter_weight:'Enter weight in Kg',enter_rate:'Enter rate per Kg',add_one:'Add at least one fish',clear_q:'Clear this bill?',
r_billno:'Bill No',r_date:'Date',r_fish:'Fish',r_kg:'Kg',r_rate:'Rate',r_amt:'Amt',r_total:'TOTAL',r_thanks:'Thank you! Visit again',
today_sale:"Today's sale",bills_today:'Bills today',kg_today:'Kg sold today',this_month:'This month',top_fish:'Top fish today',
last7:'Last 7 days sales',recent:'Recent bills',bill:'Bill',date_time:'Date & time',items:'Items',print:'Print',no_bills:'No bills yet.',
fish_name:'Fish name',rate_kg_label:'Rate per Kg (₹)',add_fish:'Add Fish',rate_col:'Rate/Kg (₹)',fish_col:'Fish',del:'Delete',
enter_fish:'Enter fish name',del_q:'Delete this fish? Old bills are not affected.',
from:'From',to:'To',show:'Show',total_sale:'Total sale',bills:'Bills',kg_sold:'Kg sold',avg_bill:'Avg bill',
fish_wise:'Fish-wise sales',day_wise:'Day-wise sales',all_bills:'All bills',date:'Date',kg:'Kg',no_sales:'No sales in this period.',
shop_details:'Shop details (printed on bill)',shop_name:'Shop name',shop_addr:'Address / phone line (optional)',save:'Save',saved:'Saved',
change_login:'Change login',new_user:'New username',new_pass:'New password',update:'Update',
login_err:'Username required and password at least 4 characters',login_ok:'Login updated',save_fail:'Could not save data in this browser.'},
mr:{clear_title:'सर्व विक्री माहिती हटवा',clear_note:'सर्व बिले व विक्रीचा इतिहास हटवला जाईल आणि बिल क्रमांक पुन्हा १ पासून सुरू होतील. माशांची यादी, दर व दुकानाचा तपशील तसाच राहील. आधी बॅकअप डाउनलोड करा. हे परत मिळणार नाही.',clear_btn:'सर्व माहिती हटवा',clear_enter:'खात्री करण्यासाठी लॉगिन पासवर्ड टाका',clear_wrong:'पासवर्ड चुकीचा आहे',clear_done:'सर्व विक्री माहिती हटवली',delete_now:'आता हटवा',dl_csv:'डेटा डाउनलोड करा (एक्सेल)',backup_title:'बॅकअप व रिस्टोर',backup_note:'दररोज दुकान बंद करताना बॅकअप घ्या. फाइल सुरक्षित ठिकाणी (पेन ड्राइव्ह किंवा गुगल ड्राइव्ह) ठेवा.',backup_dl:'बॅकअप डाउनलोड करा',restore:'बॅकअप फाइलमधून माहिती परत आणा',restore_q:'सध्याची सर्व माहिती बदलली जाईल. पुढे जायचे?',restore_ok:'माहिती परत आणली',restore_bad:'ही योग्य बॅकअप फाइल नाही',owner:'मालक',owner_name:'नाव (बिलावर छापले जाते)',owner_mo:'मोबाईल (बिलावर छापला जातो)',language:'भाषा',app_title:'Samarth Fish Shop Billing',login_sub:'पुढे जाण्यासाठी लॉगिन करा',username:'वापरकर्ता नाव',password:'पासवर्ड',login:'लॉगिन',
login_hint:'पहिल्यांदा: वापरकर्ता नाव admin, पासवर्ड admin123 (सेटिंग्जमध्ये बदला)',wrong:'वापरकर्ता नाव किंवा पासवर्ड चुकीचा आहे',
nav_billing:'बिलिंग',nav_dashboard:'डॅशबोर्ड',nav_fish:'मासे व्यवस्थापन',nav_analysis:'विक्री विश्लेषण',nav_settings:'सेटिंग्ज',logout:'लॉगआउट',
new_bill:'नवीन बिल',current_bill:'सध्याचे बिल',total:'एकूण',print_bill:'बिल प्रिंट करा',clear:'साफ करा',tap_fish:'बिलात टाकण्यासाठी माशावर टॅप करा.',
set_rate:'दर ठरवा',per_kg:'/किलो',weight_kg:'वजन (किलो)',rate_kg:'दर (₹/किलो)',amount:'रक्कम',cancel:'रद्द करा',add_to_bill:'बिलात जोडा',
enter_weight:'किलोमध्ये वजन टाका',enter_rate:'प्रति किलो दर टाका',add_one:'किमान एक मासा जोडा',clear_q:'हे बिल साफ करायचे?',
r_billno:'बिल क्र.',r_date:'तारीख',r_fish:'मासा',r_kg:'किलो',r_rate:'दर',r_amt:'रक्कम',r_total:'एकूण',r_thanks:'धन्यवाद! पुन्हा भेट द्या',
today_sale:'आजची विक्री',bills_today:'आजची बिले',kg_today:'आज विकलेले किलो',this_month:'या महिन्याची विक्री',top_fish:'आजचा सर्वाधिक विकला गेलेला मासा',
last7:'गेल्या ७ दिवसांची विक्री',recent:'अलीकडील बिले',bill:'बिल',date_time:'तारीख व वेळ',items:'माल',print:'प्रिंट',no_bills:'अजून बिले नाहीत.',
fish_name:'माशाचे नाव',rate_kg_label:'दर प्रति किलो (₹)',add_fish:'मासा जोडा',rate_col:'दर/किलो (₹)',fish_col:'मासा',del:'काढून टाका',
enter_fish:'माशाचे नाव टाका',del_q:'हा मासा काढायचा? जुन्या बिलांवर परिणाम होणार नाही.',
from:'पासून',to:'पर्यंत',show:'दाखवा',total_sale:'एकूण विक्री',bills:'बिले',kg_sold:'विकलेले किलो',avg_bill:'सरासरी बिल',
fish_wise:'माशानुसार विक्री',day_wise:'दिवसानुसार विक्री',all_bills:'सर्व बिले',date:'तारीख',kg:'किलो',no_sales:'या कालावधीत विक्री नाही.',
shop_details:'दुकानाचा तपशील (बिलावर छापला जातो)',shop_name:'दुकानाचे नाव',shop_addr:'पत्ता / फोन (ऐच्छिक)',save:'जतन करा',saved:'जतन केले',
change_login:'लॉगिन बदला',new_user:'नवीन वापरकर्ता नाव',new_pass:'नवीन पासवर्ड',update:'अपडेट करा',
login_err:'वापरकर्ता नाव आवश्यक आहे आणि पासवर्ड किमान ४ अक्षरांचा हवा',login_ok:'लॉगिन अपडेट झाले',save_fail:'या ब्राउझरमध्ये माहिती जतन करता आली नाही.'}
};
const K={fish:'fsb_fish',sales:'fsb_sales',set:'fsb_set',auth:'fsb_auth',cnt:'fsb_cnt',lang:'fsb_lang'};
const load=(k,d)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}};
let lang=load(K.lang,'en');if(!L[lang])lang='en';
const t=k=>(L[lang][k]!==undefined?L[lang][k]:L.en[k]);
const save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){alert(t('save_fail'))}};

const names=['Bhati','Rahu','Katla','Shingta','Kardu','Chilapi','Shingi','Echari','Suraki','Shengal','Padin','Vam','Zinga','Gugali','Kanas'];
let fishes=load(K.fish,null)||names.map((n,i)=>({id:i+1,name:n,rate:0}));
let sales=load(K.sales,[]);
let settings=load(K.set,{name:'Ganesh Gajare',addr:'Mo: 9096250535'});
if(settings.name==='My Fish Shop'&&!settings.addr){settings={name:'Ganesh Gajare',addr:'Mo: 9096250535'};save(K.set,settings)}
if(settings.owner===undefined){settings.owner='Ganesh Gajare';settings.ownerMo='9096250535';save(K.set,settings)}
if(settings.ownerMo==='9096200535'){settings.ownerMo='9096250535';save(K.set,settings)}
let auth=load(K.auth,{u:'admin',p:'admin123'});
let bill=[],curPage='billing';
const $=id=>document.getElementById(id);
const money=n=>'₹'+(Math.round(n*100)/100).toFixed(2);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const dkey=x=>{const d=new Date(x);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const fmtDT=x=>new Date(x).toLocaleString(lang==='mr'?'mr-IN':'en-IN',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit',hour12:true});

function applyLang(){
 document.documentElement.lang=lang;
 document.title=t('app_title');
 document.querySelectorAll('[data-i]').forEach(e=>e.textContent=t(e.dataset.i));
 document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('on',b.dataset.lang===lang));
 buildPad();
 if(!$('app').classList.contains('hidden')){$('navShop').textContent='🐟 '+settings.name;show(curPage)}
}
function setLang(l){lang=l;save(K.lang,l);applyLang()}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));

// ---------- login ----------
function doLogin(e){e.preventDefault();
 if($('lu').value.trim()===auth.u&&$('lp').value===auth.p){
  try{sessionStorage.setItem('fsb_in','1')}catch(x){}
  enter();
 }else $('lerr').textContent=t('wrong');
}
function enter(){$('login').classList.add('hidden');$('app').classList.remove('hidden');$('navShop').textContent='🐟 '+settings.name;show('billing')}
function logout(){try{sessionStorage.removeItem('fsb_in')}catch(x){}location.reload()}

// ---------- navigation ----------
document.querySelectorAll('nav [data-p]').forEach(b=>b.onclick=()=>show(b.dataset.p));
function show(p){
 curPage=p;
 ['billing','dashboard','fish','analysis','settings'].forEach(x=>$('p-'+x).classList.toggle('hidden',x!==p));
 document.querySelectorAll('nav [data-p]').forEach(b=>b.classList.toggle('on',b.dataset.p===p));
 if(p==='billing')renderFishBtns();
 if(p==='dashboard')renderDash();
 if(p==='fish')renderFishTable();
 if(p==='analysis'){if(!$('af').value){const d=dkey(Date.now());$('af').value=d.slice(0,8)+'01';$('at').value=d}renderAnalysis()}
 if(p==='settings'){$('sname').value=settings.name;$('saddr').value=settings.addr;$('sowner').value=settings.owner||'';$('sownmo').value=settings.ownerMo||''}
}

// ---------- billing ----------
function renderFishBtns(){
 $('fishBtns').innerHTML=fishes.map(f=>`<button onclick="openKp(${f.id})"><span class="ic">🐟</span>${esc(f.name)}<small>${f.rate?money(f.rate)+t('per_kg'):t('set_rate')}</small></button>`).join('');
 renderBill();
}
let cur=null,field='w',vals={w:'',r:''};
function buildPad(){
 const pad=['7','8','9','4','5','6','1','2','3','.','0','⌫'];
 $('pad').innerHTML=pad.map(k=>`<button onclick="key('${k}')">${k}</button>`).join('')+`<button class="w" onclick="key('C')">${t('clear')}</button>`;
}
function openKp(id){cur=fishes.find(f=>f.id===id);vals={w:'',r:cur.rate?String(cur.rate):''};$('kpName').textContent=cur.name;setField('w');$('kp').classList.remove('hidden')}
function closeKp(){$('kp').classList.add('hidden')}
function setField(f){field=f;$('dW').classList.toggle('on',f==='w');$('dR').classList.toggle('on',f==='r');upd()}
function key(k){
 let v=vals[field];
 if(k==='C')v='';
 else if(k==='⌫')v=v.slice(0,-1);
 else if(k==='.'){if(!v.includes('.'))v=(v||'0')+'.'}
 else{ if(v==='0')v=k; else v+=k; }
 const dp=v.split('.')[1];if(dp&&dp.length>(field==='w'?3:2))return;
 vals[field]=v;upd();
}
function upd(){
 $('vW').textContent=vals.w||'0';$('vR').textContent=vals.r||'0';
 $('vA').textContent=money((+vals.w||0)*(+vals.r||0));
}
document.addEventListener('keydown',e=>{
 if($('kp').classList.contains('hidden'))return;
 if(/^[0-9.]$/.test(e.key))key(e.key);
 else if(e.key==='Backspace')key('⌫');
 else if(e.key==='Tab'){e.preventDefault();setField(field==='w'?'r':'w')}
 else if(e.key==='Enter')addItem();
 else if(e.key==='Escape')closeKp();
});
function addItem(){
 const kg=+vals.w,rate=+vals.r;
 if(!(kg>0)){alert(t('enter_weight'));setField('w');return}
 if(!(rate>0)){alert(t('enter_rate'));setField('r');return}
 bill.push({name:cur.name,kg:kg,rate:rate,amt:Math.round(kg*rate*100)/100});
 if(cur.rate!==rate){cur.rate=rate;save(K.fish,fishes)}
 closeKp();renderFishBtns();
}
const sum=(a,f)=>a.reduce((s,x)=>s+f(x),0);
function billTotal(){return sum(bill,i=>i.amt)}
function renderBill(){
 $('billRows').innerHTML=bill.length?bill.map((i,n)=>`<div class="row"><div>${esc(i.name)}<small>${i.kg} ${t('kg')} × ${money(i.rate)}</small></div><div>${money(i.amt)} <button class="x" onclick="rmItem(${n})">✕</button></div></div>`).join(''):`<p style="color:var(--mute)">${t('tap_fish')}</p>`;
 $('billTotal').textContent=money(billTotal());$('miniTotal').textContent=money(billTotal());
}
function rmItem(n){bill.splice(n,1);renderBill()}
function clearBill(){if(!bill.length||confirm(t('clear_q'))){bill=[];renderBill()}}
const LOGO='logo.png'; // bill logo (replace logo.png to change it)
function receiptHTML(s){
 return `<div class="c" style="font-weight:700">----ॐ नमः शिवाय----</div><div class="c"><img src="${LOGO}" alt="" style="width:64mm;max-width:100%;height:auto;margin:3px 0"></div><h2>${esc(settings.name)}</h2>${settings.addr?`<div class="c">${esc(settings.addr)}</div>`:''}<div class="c"><b>Fresh Fish - Best Quality</b></div>${settings.owner&&settings.owner!==settings.name?`<div class="c">${esc(settings.owner)}</div>`:''}${settings.ownerMo&&!(settings.addr||'').includes(settings.ownerMo)?`<div class="c">Mo: ${esc(settings.ownerMo)}</div>`:''}<hr>
 <div>${t('r_billno')}: ${s.no}</div><div>${t('r_date')}: ${fmtDT(s.ts)}</div><hr>
 <table><tr><th>${t('r_fish')}</th><th style="text-align:right">${t('r_kg')}</th><th style="text-align:right">${t('r_rate')}</th><th style="text-align:right">${t('r_amt')}</th></tr>
 ${s.items.map(i=>`<tr><td>${esc(i.name)}</td><td style="text-align:right">${i.kg}</td><td style="text-align:right">${i.rate}</td><td style="text-align:right">${i.amt.toFixed(2)}</td></tr>`).join('')}</table><hr>
 <table><tr><td><b>${t('r_total')}</b></td><td style="text-align:right"><b>${money(s.total)}</b></td></tr></table><hr><div class="c">${t('r_thanks')}</div>`;
}
function printBill(){
 if(!bill.length){alert(t('add_one'));return}
 const no=(load(K.cnt,0))+1;save(K.cnt,no);
 const s={no:no,ts:Date.now(),items:bill.slice(),total:Math.round(billTotal()*100)/100};
 sales.push(s);save(K.sales,sales);
 $('receipt').innerHTML=receiptHTML(s);
 bill=[];renderBill();
 setTimeout(()=>window.print(),300);
}
function reprint(no){const s=sales.find(x=>x.no===no);if(!s)return;$('receipt').innerHTML=receiptHTML(s);setTimeout(()=>window.print(),300)}

// ---------- dashboard ----------
function renderDash(){
 const today=dkey(Date.now()),month=today.slice(0,7);
 const td=sales.filter(s=>dkey(s.ts)===today),mo=sales.filter(s=>dkey(s.ts).startsWith(month));
 const kgs=a=>sum(a,s=>sum(s.items,i=>i.kg));
 const byF={};td.forEach(s=>s.items.forEach(i=>byF[i.name]=(byF[i.name]||0)+i.kg));
 const top=Object.entries(byF).sort((a,b)=>b[1]-a[1])[0];
 $('dstats').innerHTML=[
  [t('today_sale'),money(sum(td,s=>s.total))],[t('bills_today'),td.length],[t('kg_today'),kgs(td).toFixed(2)],
  [t('this_month'),money(sum(mo,s=>s.total))],[t('top_fish'),top?`${esc(top[0])} (${top[1].toFixed(2)} ${t('kg')})`:'-']
 ].map(x=>`<div class="stat"><small>${x[0]}</small><b>${x[1]}</b></div>`).join('');
 const days=[];for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);days.push(dkey(d))}
 const v=days.map(d=>sum(sales.filter(s=>dkey(s.ts)===d),s=>s.total));const mx=Math.max(...v,1);
 $('dbars').innerHTML=days.map((d,i)=>`<div><span>${v[i]?Math.round(v[i]):''}</span><i style="height:${v[i]/mx*130}px"></i>${d.slice(5)}</div>`).join('');
 $('drecent').innerHTML=billTable(sales.slice(-8).reverse());
}
function billTable(a){
 if(!a.length)return `<p style="color:var(--mute)">${t('no_bills')}</p>`;
 return `<table><tr><th>${t('bill')}</th><th>${t('date_time')}</th><th>${t('items')}</th><th class="r">${t('total')}</th><th></th></tr>${a.map(s=>`<tr><td>#${s.no}</td><td>${fmtDT(s.ts)}</td><td>${s.items.map(i=>esc(i.name)+' '+i.kg+' '+t('kg')).join(', ')}</td><td class="r">${money(s.total)}</td><td><button class="btn sec" style="padding:4px 10px" onclick="reprint(${s.no})">${t('print')}</button></td></tr>`).join('')}</table>`;
}

// ---------- fish management ----------
function renderFishTable(){
 $('fishTable').innerHTML=`<table><tr><th>${t('fish_col')}</th><th>${t('rate_col')}</th><th></th></tr>${fishes.map(f=>`<tr><td><input class="t" value="${esc(f.name)}" onchange="editFish(${f.id},'name',this.value)"></td><td><input class="t" type="number" min="0" step="0.01" value="${f.rate}" onchange="editFish(${f.id},'rate',this.value)"></td><td><button class="btn red" onclick="delFish(${f.id})">${t('del')}</button></td></tr>`).join('')}</table>`;
}
function addFish(){
 const n=$('fn').value.trim();if(!n){alert(t('enter_fish'));return}
 fishes.push({id:Date.now(),name:n,rate:+$('fr').value||0});save(K.fish,fishes);
 $('fn').value='';$('fr').value='';renderFishTable();
}
function editFish(id,k,v){const f=fishes.find(x=>x.id===id);if(!f)return;if(k==='name'){v=v.trim();if(!v)return renderFishTable()}else v=+v||0;f[k]=v;save(K.fish,fishes)}
function delFish(id){if(confirm(t('del_q'))){fishes=fishes.filter(f=>f.id!==id);save(K.fish,fishes);renderFishTable()}}

// ---------- analysis ----------
function renderAnalysis(){
 const f=$('af').value,to=$('at').value;
 const a=sales.filter(s=>{const d=dkey(s.ts);return(!f||d>=f)&&(!to||d<=to)});
 const kg=sum(a,s=>sum(s.items,i=>i.kg));
 $('astats').innerHTML=[[t('total_sale'),money(sum(a,s=>s.total))],[t('bills'),a.length],[t('kg_sold'),kg.toFixed(2)],[t('avg_bill'),money(a.length?sum(a,s=>s.total)/a.length:0)]]
  .map(x=>`<div class="stat"><small>${x[0]}</small><b>${x[1]}</b></div>`).join('');
 const bf={};a.forEach(s=>s.items.forEach(i=>{const o=bf[i.name]||(bf[i.name]={kg:0,amt:0});o.kg+=i.kg;o.amt+=i.amt}));
 const rows=Object.entries(bf).sort((x,y)=>y[1].amt-x[1].amt);
 const none=`<p style="color:var(--mute)">${t('no_sales')}</p>`;
 $('afish').innerHTML=rows.length?`<table><tr><th>${t('fish_col')}</th><th class="r">${t('kg')}</th><th class="r">${t('amount')}</th></tr>${rows.map(r=>`<tr><td>${esc(r[0])}</td><td class="r">${r[1].kg.toFixed(2)}</td><td class="r">${money(r[1].amt)}</td></tr>`).join('')}</table>`:none;
 const bd={};a.forEach(s=>{const d=dkey(s.ts);const o=bd[d]||(bd[d]={n:0,amt:0});o.n++;o.amt+=s.total});
 const dr=Object.entries(bd).sort().reverse();
 $('aday').innerHTML=dr.length?`<table><tr><th>${t('date')}</th><th class="r">${t('bills')}</th><th class="r">${t('amount')}</th></tr>${dr.map(r=>`<tr><td>${r[0]}</td><td class="r">${r[1].n}</td><td class="r">${money(r[1].amt)}</td></tr>`).join('')}</table>`:none;
 $('abills').innerHTML=billTable(a.slice().reverse());
}

// ---------- settings ----------
function saveShop(){settings={name:$('sname').value.trim()||'Ganesh Gajare',addr:$('saddr').value.trim(),owner:$('sowner').value.trim(),ownerMo:$('sownmo').value.trim()};save(K.set,settings);$('navShop').textContent='🐟 '+settings.name;alert(t('saved'))}
function saveLogin(){
 const u=$('nu').value.trim(),p=$('np').value;
 if(!u||p.length<4){alert(t('login_err'));return}
 auth={u:u,p:p};save(K.auth,auth);$('nu').value='';$('np').value='';alert(t('login_ok'))
}

// ---------- download sales data (Excel / CSV) ----------
function downloadCSV(){
 const f=$('af').value,to=$('at').value;
 const a=sales.filter(s=>{const d=dkey(s.ts);return(!f||d>=f)&&(!to||d<=to)});
 if(!a.length){alert(t('no_sales'));return}
 const q=v=>'"'+String(v).replace(/"/g,'""')+'"';
 const p=n=>String(n).padStart(2,'0');
 const rows=[['Bill No','Date','Time','Fish','Kg','Rate per Kg','Amount','Bill Total']];
 a.forEach(s=>{
  const d=new Date(s.ts),dt=dkey(s.ts),tm=p(d.getHours())+':'+p(d.getMinutes());
  s.items.forEach((i,n)=>rows.push([s.no,dt,tm,i.name,i.kg,i.rate,i.amt.toFixed(2),n===0?s.total.toFixed(2):'']));
 });
 const csv='\uFEFF'+rows.map(r=>r.map(q).join(',')).join('\r\n');
 const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});
 const l=document.createElement('a');l.href=URL.createObjectURL(blob);
 l.download='fish-sales-'+(f||'start')+'-to-'+(to||'today')+'.csv';
 document.body.appendChild(l);l.click();l.remove();
 setTimeout(()=>URL.revokeObjectURL(l.href),1000);
}

// ---------- clear all sales data (needs password) ----------
function openClr(){$('clrPw').value='';$('clrErr').textContent='';$('clrM').classList.remove('hidden');setTimeout(()=>$('clrPw').focus(),50)}
function closeClr(){$('clrM').classList.add('hidden')}
function doClear(){
 if($('clrPw').value!==auth.p){$('clrErr').textContent=t('clear_wrong');return}
 sales=[];save(K.sales,sales);save(K.cnt,0);bill=[];
 closeClr();alert(t('clear_done'));show(curPage);
}

// ---------- backup / restore ----------
function downloadBackup(){
 const d={app:'fish-shop-billing',v:1,saved:new Date().toISOString(),fish:fishes,sales:sales,settings:settings,cnt:load(K.cnt,0)};
 const blob=new Blob([JSON.stringify(d)],{type:'application/json'});
 const a=document.createElement('a');a.href=URL.createObjectURL(blob);
 a.download='fish-shop-backup-'+dkey(Date.now())+'.json';
 document.body.appendChild(a);a.click();a.remove();
 setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
function restoreBackup(inp){
 const f=inp.files[0];if(!f)return;
 const r=new FileReader();
 r.onload=()=>{
  try{
   const d=JSON.parse(r.result);
   if(!d||!Array.isArray(d.fish)||!Array.isArray(d.sales))throw new Error('bad');
   if(!confirm(t('restore_q'))){inp.value='';return}
   save(K.fish,d.fish);save(K.sales,d.sales);
   if(d.settings)save(K.set,d.settings);
   save(K.cnt,d.cnt||0);
   alert(t('restore_ok'));location.reload();
  }catch(e){alert(t('restore_bad'));inp.value=''}
 };
 r.readAsText(f);
}

// ---------- start ----------
applyLang();
try{if(sessionStorage.getItem('fsb_in')==='1')enter()}catch(e){}
