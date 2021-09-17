//jshint esversion:6
//before the export writing module is optional.
exports.getDate=function() {
  const today = new Date();

  const options = {
    day: "numeric",
    weekday: "long",
    month: "long"
  };
  return today.toLocaleDateString("tr-TR", options);

}
module.exports.randomNumber=function (){
  return Math.floor( Math.random()*10);

}
