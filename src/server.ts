import app from './app';
import CONFIG from './common/config';

app.listen(CONFIG.PORT, () =>
  console.log(`Server is running on http://localhost:${CONFIG.PORT}`)
);
