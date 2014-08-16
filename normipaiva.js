if (Meteor.isClient) {

  var happinessValues = ["Very unhappy", "Somewhat unhappy", "Neutral", 
    "Somewhat happy", "Very happy"];

  Template.page.rendered = function (){
    $( "#slider" ).slider({
      value:2,
      min: 0,
      max: 4,
      step: 1,
      animate: true,
      slide: function( event, ui ) {
        $( "#happiness" ).val(happinessValues[ui.value] );
      }
    });
    $( "#happiness" ).val(happinessValues[$( "#slider" ).slider( "value" )]);
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
