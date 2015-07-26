import moment from 'moment';

const RETURN_DATE = '2015-09-08 09:00';

module.exports = {
  isHereNow
};

function isHereNow() {
  return moment().isAfter(RETURN_DATE);
}
