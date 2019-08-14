import Vue from 'vue'

/**
 * Event bus for listening to keyboard events. The event bus will emit 'keyboardEvent' events that have a
 * payload of the browser's keyboard event. This bus also prevents the use of the F5 button for refreshes.
 *
 * @module
 */
export const eventBus = new Vue({
  methods: {
    keydownListener (event) {
      if (event.which === 116 || event.keyCode === 116 || event.which === 117 || event.keyCode === 117 || event.which === 121 || event.keyCode === 121) {
        event.preventDefault()
      }
    },
    keyboardEventListener (event) {
      this.$emit('keyboardEvent', event)
    }
  },
  created () {
    window.addEventListener('keyup', this.keyboardEventListener)
    window.addEventListener('keydown', this.keydownListener)
  }
})
