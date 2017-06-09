function getTemplateCallback (location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

getTemplateCallback('philad', function (error, temp) {
    if (error) {
        console.log('error', error);
    } else {
        console.log('success', temp);
    }
});

function getTempPromise (location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(79);
            reject('City not found');
        }, 1000);
    });
}

getTempPromise('Philadelphia').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
});

function addPromise (a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Some of arguments are not numbers');
        }
    });
}
function addPromiseSuccess(result) {
    console.log('addPromise success:', result);
}

function addPromiseError(error) {
    console.log('addPromise error:', error);    
}

console.log('===');
addPromise(2, 3).then(addPromiseSuccess, addPromiseError);
addPromise('a', 'b').then(addPromiseSuccess, addPromiseError);

/*
    Конструктор Promise приймає функцію з двома параметрами: resolve, reject,
    які теж функції. Їх ми викликаємо всередині функції параметра:
    resolve(), якщо все добре
    reject(), якщо щось пішло не так

    Promise вистрілює тільки коли resolve або reject викликані.
*/