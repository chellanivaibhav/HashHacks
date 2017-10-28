<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../../favicon.ico">

    <title>Smart Login</title>

    <!-- Bootstrap core CSS -->
    <link href="./css/bootstrap.min.css" rel="stylesheet">
  </head>

  <body>
    <div class="container" id="app">
      <div class="mt-5">
        <h1 class="text-center">Smart Reports</h1>
        <h2 class="text-center mt-5" style="font-weight: 300">I am a...</h2>
        <div class="row" style="margin-top: 130px;">
          <div class="col-sm pr-5" style="border-right: 3px solid #EAEAEA">
           <div class="row">
               <div class="col-sm mb-sm-5">
                <a class="btn btn-lg btn-outline-primary float-sm-right" v-bind:class='{ "active": doc }' style="width: 150px;" href="#" v-on:click="update(0)" role="button"> Doctor </a>
              </div>
              <div class="w-100"></div>
              <div class="col-sm mt-5">
                <a class="btn btn-lg btn-outline-success float-sm-right" v-bind:class='{ "active": hos }' style="width: 150px;" href="#" v-on:click="update(1)" role="button"> Hospital </a>
              </div>
            </div>
          </div>
          <div class="col-sm mt-sm-3 pt-5 pl-sm-5">
            <a class="btn btn-lg btn-outline-secondary float-sm-left" v-bind:class='{ "active": pat }' style="width: 150px;" href="#" v-on:click="update(2)" role="button">Patient</a>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-sm-8 offset-sm-2">
            <div class="input-group input-group-lg" v-show="doc || hos || pat">
              <input type="text" class="form-control" v-model="phone" placeholder="Enter phone number" aria-label="Your email id">
              <span class="input-group-btn">
                <button class="btn btn-dark" type="button" v-on:click="login">Login</button>
              </span>
            </div>
            <div class="input-group input-group-lg mt-5" v-show="otpbox">
              <input type="text" class="form-control" v-model="otp" placeholder="Enter OTP" aria-label="Enter OTP">
              <span class="input-group-btn">
                <button class="btn btn-dark" type="button" v-on:click="otppost">Submit</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="./js/jquery.js"></script>
    <script src="./js/bootstrap/popper.min.js"></script>
    <script src="./js/bootstrap/bootstrap.min.js"></script>
    <script src="./js/vue.min.js"></script>
    <script src="./js/a1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.3.4"></script>

  </body>
</html>

