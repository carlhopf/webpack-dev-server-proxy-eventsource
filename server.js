import express from 'express';

const app = express();

var id = 0;

app.get('/ssetest', function (req, res) {
  const _id = id++;
  console.info('/ssetest connection created', _id);

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });

  res.write('data: hello\n\n');

  const iv = setInterval(() => {
    res.write('data: ping\n\n');
  }, 1000);

  req.on('close', () => {
    clearInterval(iv);
    console.info('/ssetest connection closed', _id);
  });
});

app.listen(9600, () => console.log('listening'));
