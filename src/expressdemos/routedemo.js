import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to the Routed Demo!');
});
app.get('/contact', (req, res) => res.send('Contact Page'));
app.get('/about', (req, res) => res.send('About Page'));
app.post('/submit', (req, res) => res.send('Form Submitted'));

app.listen(4000, () => console.log('Routed Demo Server running on port 4000'));     