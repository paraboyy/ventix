<template>
  <div class="bg-login">
    <div class="container vh-100 d-flex justify-content-center align-items-center">
      <div class="card bg-secondary text-white shadow-lg p-4 W-35" style="border-radius: 15px">
        <div class="d-flex justify-content-between">
          <h4 class="fw-bold">Sing Up</h4>
          <button class="btn-close btn-close-white" aria-label="Close"></button>
        </div>
        <!-- <p class="text-muted">Create an account</p> -->
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">Username</label>
            <input type="username" class="form-control" id="email" placeholder="example.email@gmail.com" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <div class="input-group">
              <input type="password" class="form-control" id="password" placeholder="Enter at least 8+ characters" required />
              <button class="btn btn-outline-light" type="button">
                <i class="bi bi-eye-slash"></i>
              </button>
            </div>
          </div>
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="terms" required />
            <label class="form-check-label" for="terms">I agree with <a href="#" class="text-warning text-decoration-none">Terms & Conditions</a></label>
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-warning fw-bold">Sign Up</button>
          </div>
        </form>
        <div class="text-center my-3">
          <span class="text-muted">Or sign up with</span>
          <div class="d-flex justify-content-center mt-2">
            <button class="btn btn-light rounded-circle me-2"><i class="bi bi-google"></i></button>
            <button class="btn btn-light rounded-circle"><i class="bi bi-facebook"></i></button>
          </div>
        </div>
        <div class="text-center">
          <span class="text-muted">Sudah memiliki account? <a href="#" class="text-warning text-decoration-none">Login</a></span>
        </div>
      </div>
    </div>
  </div>
</template>
