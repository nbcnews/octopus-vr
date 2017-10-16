AFRAME.registerComponent('text-box', {
  schema: {
    textEl: {type: 'string', default: '#newsDescriptionText'},
  },
  init: function() {
    console.log('in init text-box');
  },

  play: function(){
    const data = [
      'Airport Bomb raises fears about security',
      'Micheal Estes: "fight a war on U.S. soil"',
      'Up Next: Law Enforcement Analyst, Jim Cavanaugh',
      'Next: Attack at baggage terminal'
    ];

    const newsTextEl = document.querySelector(this.data.textEl);

    let counter = 0
    const timer = setInterval(() => {
      counter = (counter + 1) % data.length
      newsTextEl.setAttribute('value', data[counter])
    }, 3000)
  }
});