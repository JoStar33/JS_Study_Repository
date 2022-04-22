export default theData;

const theData = {
  showStar: function() {
    let star = "*";
    for(let i = 0; i < 5; i++){
      console.log(star.repeat(i + 1));
    }
  }
}