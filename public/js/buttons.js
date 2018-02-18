(function () {
  var revokeBtn = document.querySelector("button.revokeBtn");
  revokeBtn.addEventListener("click", function () {
    var revoke = confirm("Revoke this bounty?");
    if (revoke) {
      console.log("revoked");
    } else {
      console.log("not revoked");
    }
  });

  var reviewAnswers = document.querySelectorAll("div.answer");
  var checkAllAnswers = false;
  var that = reviewAnswers[0];
  reviewAnswers.forEach(function (e) {
    e.addEventListener("click", function () {
      for (var i = 0; i < reviewAnswers.length; i++) {
        if ($(reviewAnswers[i].childNodes[1]).hasClass("fa")) {
          $(reviewAnswers[i].childNodes[1]).remove();
        }
      }
      var i_tag = document.createElement("i");
      $(i_tag).addClass("fa fa-check-circle fa-2x");
      $(i_tag).insertAfter(e.childNodes[0]);
    });
  });

  var reviewModalAccept = document.querySelector("#reviewModal .btn-primary");
  reviewModalAccept.addEventListener("click", function () {
    // call to function which proccesses the changes
  })

})();