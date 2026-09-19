(function(){
 const ready=!!window.supabase && window.SUPABASE_URL && !window.SUPABASE_URL.includes('YOUR-PROJECT');
 const login=document.getElementById('login'), dash=document.getElementById('dashboard');
 if(!ready){document.getElementById('login-status').className='status error';document.getElementById('login-status').style.display='block';document.getElementById('login-status').textContent='Connect Supabase first using supabase-config.js.';return;}
 const client=window.supabase.createClient(window.SUPABASE_URL,window.SUPABASE_PUBLISHABLE_KEY); let rows=[];
 const loginStatus=document.getElementById('login-status'), dashStatus=document.getElementById('dash-status');
 function msg(el,text,cls){el.className='status '+cls;el.style.display='block';el.textContent=text;}
 async function load(){
  dashStatus.style.display='none'; const {data,error}=await client.from('forum_questions').select('*').order('created_at',{ascending:false}).limit(1000);
  if(error){msg(dashStatus,'You are not authorized to view submissions, or the database policy is not configured.','error');return;}
  rows=data||[]; document.getElementById('m-total').textContent=rows.length;document.getElementById('m-mentees').textContent=rows.filter(r=>r.role.startsWith('Mentee')).length;document.getElementById('m-mentors').textContent=rows.filter(r=>r.role==='Mentor').length;document.getElementById('m-research').textContent=rows.filter(r=>r.category.startsWith('Research')).length;
  document.getElementById('questions-body').innerHTML=rows.map(r=>`<tr><td>${new Date(r.created_at).toLocaleDateString()}</td><td>${esc(r.role)}</td><td><span class="pill">${esc(r.category)}</span></td><td>${esc(r.class_year||'')}</td><td style="min-width:280px">${esc(r.question)}</td><td>${esc(r.follow_up)}</td></tr>`).join('');
 }
 function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
 document.getElementById('login-form').addEventListener('submit',async e=>{e.preventDefault(); const {error}=await client.auth.signInWithPassword({email:document.getElementById('login-email').value,password:document.getElementById('login-password').value}); if(error){msg(loginStatus,'Sign-in failed. Check your email/password.','error');return;} login.style.display='none';dash.style.display='block';load();});
 document.getElementById('refresh').addEventListener('click',load);
 document.getElementById('logout').addEventListener('click',async()=>{await client.auth.signOut();dash.style.display='none';login.style.display='block';});
 document.getElementById('export').addEventListener('click',()=>{if(!rows.length)return; const cols=['created_at','role','class_year','category','semester','question','email','follow_up']; const csv=[cols.join(','),...rows.map(r=>cols.map(c=>'"'+String(r[c]??'').replace(/"/g,'""')+'"').join(','))].join('\n'); const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='lnm-question-evaluation.csv';a.click();URL.revokeObjectURL(a.href);});
})();
