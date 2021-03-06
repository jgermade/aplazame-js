/* globals aplazame */

var _ = require('../../src/tools/tools');

_.template.lookup();

var form = document.querySelector('form[data-submit="updateValues"]'),
    resultsWrapper = document.querySelector('.demo-simulator-section'),
    results = document.querySelector('.demo-simulator-results'),
    amount = form.querySelector('input[name="amount"]');

amount.value = localStorage.getItem('demo-simulator-amount');

function getCents(value) {
  var values = value.split(/[,.]/);
  return '' + ( Number( values[0] ? 100*values[0] : 0 ) + Number( values[1] || 0 ) );
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  localStorage.setItem('demo-simulator-amount', amount.value);

  var currentAmount = getCents( amount.value );

  resultsWrapper.querySelector('.section-title > h3').innerHTML = 'cargando...';
  _.removeClass(resultsWrapper, 'hidden');
  _.addClass(results, 'hidden');

  aplazame.simulator(currentAmount, { noCache: true }, function (choices) {
    console.log('simulator', currentAmount, choices);
    resultsWrapper.querySelector('.section-title > h3').innerHTML = 'Resultados';
    _.removeClass(results, 'hidden');

    results.innerHTML = _.template('results', {
      getAmount: _.getAmount,
      choices: choices,
      months: function (m) {
        return m > 1 ? 'meses' : 'mes';
      }
    });
  });
});
