#include "MicroBit.h"
MicroBit uBit;


void onConnected(MicroBitEvent) {
   uBit.display.print("C");
}

void onDisconnected(MicroBitEvent){
   uBit.display.print("D");
}

int main() {
    uBit.init();

	new MicroBitAccelerometerService(*uBit.ble, uBit.accelerometer);
	new MicroBitButtonService(*uBit.ble);
	new MicroBitIOPinService(*uBit.ble, uBit.io);
    new MicroBitLEDService(*uBit.ble, uBit.display);
	//new MicroBitMagnetometerService(*uBit.ble, uBit.compass); 
	new MicroBitTemperatureService(*uBit.ble, uBit.thermometer);

	uBit.messageBus.listen(MICROBIT_ID_BLE, MICROBIT_BLE_EVT_CONNECTED, onConnected);
    uBit.messageBus.listen(MICROBIT_ID_BLE, MICROBIT_BLE_EVT_DISCONNECTED, onDisconnected);

    release_fiber();
}