function Plant () {
  this.height = null;
}

function Tree () {

}

function IncreaseHeight () {

}
IncreaseHeight.prototype = new Plant();

function DecreaseHeight () {

}
DecreaseHeight.prototype = new Plant();

function Grow () {

}
Grow.prototype = new Tree();