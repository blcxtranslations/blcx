function numfy(val) {
  // http://stackoverflow.com/a/2901298

  var parts = val.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if(parts.length > 1)
  {
    if(parts[1].length > 0)
    {
      if(parts[1].length == 1)
      {
        parts[1] = parts[1] + "0";
      } else
      {
        parts[1] = parts[1].substring(0, 2);
      }
    }
  }

  return parts.join(".");
}

function curfy(val) {
  return "$" + numfy(val.toFixed(2));
}



function OtherWebNovel(title, characters, chapters, donations)
{
  this.title = title;
  this.characters = parseInt(characters);
  this.chapters = parseInt(chapters);
  this.donations = parseFloat(donations);

  this.cpc = this.characters / this.chapters  ;
  this.dpc = this.donations / this.cpc;
}
OtherWebNovel.prototype.title = this.title;
OtherWebNovel.prototype.characters = this.characters;
OtherWebNovel.prototype.chapters = this.chapters;
OtherWebNovel.prototype.donations = this.donations;
OtherWebNovel.prototype.cpc = this.cpc;
OtherWebNovel.prototype.dpc = this.dpc;

function calcdonations(characters, chapters, dpc) {
  return (characters / chapters) * dpc;
}
