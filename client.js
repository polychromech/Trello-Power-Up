TrelloPowerUp.initialize({
  'board-buttons': function(t, options)
    return [{
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
      text: 'Bi-Weekly',
      callback: function(t) {
        window.location.href = 'https://www.google.com';
      }
    }];
  }
});