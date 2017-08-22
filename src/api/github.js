import _ from 'lodash';
import $ from 'jquery';

const apibase = 'https://api.github.com';

export default {
  getUsers (cb) {
    $.ajax({
      type: 'GET',
      url: apibase + '/repos/eddieace/epoch/stats/contributors',
      headers: {
        'Authorization': 'Basic ' + btoa('dvdhllbrg:1382003fdadf1a354c23ab0ae1d1dc58c464d98f')
      }
    }).done(res => {
      let sumTotal = {
        total: {
          c: 0,
          a: 0,
          d: 0
        },
        week: {
          c: 0,
          a: 0,
          d: 0
        }
      };

      let users = _
        .chain(res)
        .map(u => {
          let nu = {};
          nu.author = u.author;
          nu.total = {
            c: u.total,
            a: _.sumBy(u.weeks, w => w.a),
            d: _.sumBy(u.weeks, w => w.d)
          }
          sumTotal.total.c += nu.total.c;
          sumTotal.total.a += nu.total.a;
          sumTotal.total.d += nu.total.d;

          nu.week = _.last(u.weeks);
          sumTotal.week.c += nu.week.c;
          sumTotal.week.a += nu.week.a;
          sumTotal.week.d += nu.week.d;
          sumTotal
          return nu;
        })
        .sortBy(u => -u.total)
        .value();
      users.sumTotal = sumTotal;
      cb(users);
    });
  }
}
