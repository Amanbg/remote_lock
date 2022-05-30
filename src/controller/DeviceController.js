const { DeviceService } = require('../service');

class DeviceController {
    async searchDevice(req, res, next) {
        try {
            const queryParams = req.query;

            console.log('queryParams-->',queryParams);
            if (!queryParams.id) {
                throw new Error('Invalid request');
            }

            const deviceDetails = await DeviceService.getDevice(queryParams.id);


            if(!deviceDetails.length){
            	res.status(404).send('No device found');
            }
            
            return res.status(200).send(deviceDetails);

        } catch (error) {
        	res.status(400).send(error.message);
        }
    }
}

module.exports = new DeviceController();