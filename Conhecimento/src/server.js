import app from './app.js';
import './Database/index.js';

app.listen(3001, () => {
  console.log('Application is running on port 3001');
});