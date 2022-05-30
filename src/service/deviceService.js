const Devices = require('../../devices.json');


class DeviceService {
    getDevice(deviceId) {
    	const device = Devices.data.filter((ele)=>{
    		// if(ele.id === deviceId){
    		// 	return ele;
    		// }
    		return (ele.id == deviceId)
    	})[0]

    	return device;
    }
}

module.exports = new DeviceService();