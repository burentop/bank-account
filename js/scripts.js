function Account(name, deposit) {
  this.name = name;
  this.balance = deposit;
}

$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var submittedName = $("#new-name").val();
    var submittedInitialDeposit = parseInt($("#initial-deposit").val());

    var newAccount = new Account(submittedName, submittedInitialDeposit);
    $("#balance").text("$" + newAccount.balance.toFixed(2));

    $("#new-name").val("");
    $("#initial-deposit").val("");
  });
});
