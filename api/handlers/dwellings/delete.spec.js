

const { default: mongoose } = require('mongoose');
const {deleteDwelling} = require('./deleteDwelling');

const DeleteMock = {}
jest.mock('../../../models', () =>{
    DeleteMock.findById = jest.fn();
    return {
        DwellingModel: {findById: DeleteMock.findById}
    }
})


describe('DeleteDwelling', () =>{
    it('should return status 400 if dwelling was not found by id', async () =>{
        req = {
            params: {
                id: new mongoose.Types.ObjectId('56cb91bdc3454f14678934ca')
            }
        }

        res= {
            status: jest.fn().mockImplementation(()=>res),
            send: jest.fn()
        }


        await deleteDwelling(re,res);
        expect(res.status).toBeCalledWith(400);
    })
})