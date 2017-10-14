document.addEventListener('DOMContentLoaded', () => {
  console.log('hello?')
  AFRAME.registerComponent('child-sizer', {
    schema: {},
    tick() {
      const { data } = this
      const analyserEl = data.analyserEl || this.el
      const volume = analyserEl.components.audioanalyser.volume
      if (!volume) return
      window.stuff = this
      ;[].slice.call(this.el.children).forEach(child => {
        child.setAttribute('scale', {x: volume / 100, y: 1, z: 1})
      })
    }
  })

  const video = document.querySelector('#test-vid')
  const videoEntity = document.querySelector('#video-entity')
  window.videoEntity = videoEntity;
  videoEntity.addEventListener('click', () => {
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  })
})
