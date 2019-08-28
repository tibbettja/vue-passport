import store from '../store/store'

export default (to, from, next) => {
  if (from && to && from.name && to.name && to.name === from.name) {
    return next(false)
  }
  if (store.state.user.loggedIn) {
    switch (to.name) {
      case 'login':
      case 'logout':
      case 'signup':
      case 'landing':
      case 'forohfor':
        return next({ name: 'home' })
    }
  } else {
    switch (to.name) {
      case 'logout':
      case 'forohfor':
        return next({ name: 'landing' })
      case 'home':
      case 'account':
        return next({ name: 'login' })
    }
  }
  return next()
}
