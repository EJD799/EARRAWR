/*(function($) {
    "use strict";
    var input = $('.validate-input .input100');
    $('.validate-form').on('submit', function() {
        var check = true;
        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }
        return check;
    });
    $('.validate-form .input100').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
})(jQuery);*/
    var usrBox
    var passBox
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const gameId = urlParams.get('gameId')
    function checkPass() {
      usrBox = document.getElementById("usernameBox").value
      passBox = document.getElementById("passwordBox").value
      //alert("Username: " + usrBox + "\nPassword: " + passBox)
      if (usrBox == "EARRPlus") {
        if (passBox == "112322") {
          top.location = "/games/" + gameId + ".html"
        } else {
          alert("Incorrect password!")
        }
      } else {
        alert("Invalid username!")
      }
    }