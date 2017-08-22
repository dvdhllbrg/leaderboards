import $ from 'jquery';
const apibase = 'https://api.stackexchange.com/2.2';

export default {
  getUsers (cb) {
    $.get(apibase + '/users/8186752;998851;2832442?key=C3DSMBGhsrA30mI8JErENA((&order=desc&sort=reputation&site=stackoverflow')
      .done(res => {
        cb(res.items);
      });
  }
}
