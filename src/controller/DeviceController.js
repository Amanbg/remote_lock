class DeviceController {
    async searchDevice(req, res, next) {
        try {
            const queryParams = req.query;

            if (!queryParams.id) {
                throw new Error('Invalid request');
            }

            const deviceDetails = await DeviceService.getDevice(queryParams.id);

            if(!deviceDetails){
            	res.status(404).send('No device found');
            }
        } catch (error) {
        	res.status(400).send(error.message);
        }

    }
}