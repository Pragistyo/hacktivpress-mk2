<template>
  <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
            </ul>
        </div>
            <ul class="nav navbar-nav navbar-right">
            <li>
                <router-link
                 to="/login">
                    <p style="color:black">Login</p>
                </router-link>
            </li>
            <li>
                <router-link
                 to="/register">
                    <p style="color:black">Register</p>
                </router-link>
            </li>
            <li>
                <p>logout</p>
            </li>
          </ul>
        </nav>
  </div>
</template>
