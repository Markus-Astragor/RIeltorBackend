

module.exports = {
    ...require('./deleteDwelling'),
    ...require('./updateDwelling'),
    ...require('./getAllDwellings'),
    ...require('./createDwelling'),
    ...require('./filterDwellings')
}