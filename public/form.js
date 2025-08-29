// form.js
async function submitMessage(name, message) {
  const res = await fetch('/api/messages', {
    method: 'POST',
    body: JSON.stringify({ name, message }),
    headers: { 'Content-Type': 'application/json' },
  });
  return res.ok;
}
