document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
  
    const res = await fetch('/api/nome', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome })
    });
  
    const data = await res.json();
    document.getElementById('mensagem').textContent = data.message;
    document.getElementById('form').reset();
  });
  