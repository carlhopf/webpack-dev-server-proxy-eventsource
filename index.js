console.info('hello');

const es = new EventSource('/ssetest', { withCredentials: true });

es.addEventListener('open', () => {
  console.info('open');
  document.body.innerHTML = 'open';
});

setTimeout(() => {
  es.close();
  console.info('closed');
  document.body.innerHTML = 'closed';
}, 3000);
