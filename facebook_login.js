function loginWithFacebook() {
    FB.login(function (response) {
      if (response.authResponse) {
        console.log("Access Token: " + response.authResponse.accessToken);
        // Send access token to Dart code
        if (typeof sendTokenToDart !== "undefined") {
          sendTokenToDart(response.authResponse.accessToken);
        }
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    }, { scope: "public_profile,email" });
  }
  