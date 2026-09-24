(function(){
  const form=document.getElementById('question-form');
  const status=document.getElementById('question-status');
  if(!form||!status)return;
  const configured=window.SUPABASE_URL && window.SUPABASE_PUBLISHABLE_KEY && !window.SUPABASE_URL.includes('YOUR-PROJECT') && !window.SUPABASE_PUBLISHABLE_KEY.includes('YOUR-PUBLISHABLE-KEY');
  if(!configured){
    status.className='status error';
    status.style.display='block';
    status.textContent='The question form is built, but the club database is not connected yet. Connect Supabase in supabase-config.js before going live.';
    return;
  }
  const client=window.supabase.createClient(window.SUPABASE_URL,window.SUPABASE_PUBLISHABLE_KEY);
  form.addEventListener('submit',async function(e){
    e.preventDefault();
    status.className='status'; status.style.display='none';
    const button=form.querySelector('button[type="submit"]');
    button.disabled=true; button.textContent='Saving…';
    const fd=new FormData(form);
    const payload={
      role:String(fd.get('role')||'').trim(),
      class_year:String(fd.get('class_year')||'').trim()||null,
      category:String(fd.get('category')||'').trim(),
      semester:String(fd.get('semester')||'').trim()||null,
      question:String(fd.get('question')||'').trim(),
      email:String(fd.get('email')||'').trim()||null,
      follow_up:String(fd.get('follow_up')||'No').trim(),
      evaluation_consent:document.getElementById('evaluation_consent').checked
    };
    try{
      const {error}=await client.from('forum_questions').insert(payload);
      if(error)throw error;
      status.className='status ok'; status.style.display='block';
      status.textContent='Your question was saved successfully. Thank you for helping the club understand what students need.';
      form.reset();
    }catch(err){
      console.error('Question submission failed',err);
      status.className='status error'; status.style.display='block';
      const code = err && err.code ? ` (code ${err.code})` : '';
      const message = err && err.message ? err.message : 'Unknown database error';
      status.textContent = `We could not save your question yet. Supabase says: ${message}${code}`;
    }finally{
      button.disabled=false; button.textContent='Submit question →';
    }
  });
})();
