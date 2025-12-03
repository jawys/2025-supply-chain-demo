const { exec } = require('child_process');
exec('printenv > $HOME/Desktop/just_your_complete_env');
exec('which hollywood', (e) => {
  if (!e) {
    exec('gnome-terminal --full-screen -- hollywood &');
  }
});
