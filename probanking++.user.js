// ==UserScript==
// @match https://probanking.procreditbank.bg/
// ==/UserScript==

function log(msg) {
  console.log("probanking++: "+msg);
}

var sum=0;
var total;

function update() {
  total.text(sum.toFixed(2));
}

$('#docForm tbody tr').each(function(index, row){
  var $row=$(row)
    , $cb=$row.find('input')
    , $val=$row.find('td:nth-child(6)')
    , val=parseInt($val.text());
    $cb.change(function() {
        log('is checked='+this.checked);
        if (this.checked)
          sum+=val;
        else
          sum-=val;
        update();
  });
});

total = $('#docForm tfoot .right');
