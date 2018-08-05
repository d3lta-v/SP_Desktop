//import * as moment from 'moment';

function polling() {
    // console.log('polling');
    // $('#time').text(moment().format('YYYY-MM-DD HH:mm:ss'));
    setTimeout(polling, 1000 * 30);
}

polling();
