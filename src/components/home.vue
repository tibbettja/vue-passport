<template>
  <div style="margin: 10vh 10vw 10vh 10vw">
    <h1>{{ message }}</h1>
    <hr>
    <div v-for="note in notes" :key="note.id">
      <textarea :name="note.id" :id="note.id" cols="100" rows="10" v-model="note.text" />
      <p style="text-align:right">{{ note.updatedAt }}</p>
      <button @click="updNote(note.id)">Update</button>
      <hr>
    </div>
    <hr>
    <textarea name="newNote" id="newNote" cols="100" rows="10" v-model="newNote" />
    <button @click="crtNote">Create</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      message: 'You are logged in!',
      notes: [],
      newNote: ''
    }
  },
  computed: {
    ...mapGetters('note', [
      'getNotes'
    ])
  },
  watch: {
    getNotes (nts) {
      this.notes = JSON.parse(JSON.stringify(nts))
    }
  },
  methods: {
    ...mapActions('note', [
      'createNote',
      'updateNote',
      'deleteNote',
      'loadNotes'
    ]),
    updNote (id) {
      var note = this.notes.find(el => el.id === id)
      this.updateNote(note)
        .then(updRes => {
          if (updRes.success) {
            this.$buefy.toast.open('Note Updated')
            this.loadNotes()
          }
        }).catch(e => {
          console.log(e)
        })
    },
    crtNote () {
      this.createNote({ text: this.newNote })
        .then(crtRes => {
          if (crtRes.success) {
            this.$buefy.toast.open('Note Created')
            this.loadNotes().then(noteRes => {
              this.newNote = ''
            }).catch(e => {
              console.log(e)
            })
          }
        }).catch(e => {
          console.log(e)
        })
    },
    delNote (id) {
      this.deleteNote({ id })
        .then(delNote => {
          if (delNote.success) {
            this.$buefy.toast.open('Note Deleted')
            this.loadNotes()
          }
        }).catch(e => {
          console.log(e)
        })
    },
    reset () {
      this.newNote = ''
    }
  },
  mounted () {
    this.loadNotes().then(noteRes => {
      this.reset()
    }).catch(e => {
      console.log(e)
    })
  }
}
</script>
