// middleware/checkRole.js

export default function ({ store, redirect }) {
    // Check if the user is authenticated
    if (!store.state.auth.isAuthenticated) {
      return redirect('/login')
    }
  
    // Check if the user has the required role
    const requiredRole = 'ROLE_ADMIN'
    if (!store.state.auth.user.roles.includes(requiredRole)) {
      return redirect('/')
    }
  }
  