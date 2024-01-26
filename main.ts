/**
 * Support library for serial thermal printer.
 */
//% color=190 weight=100 icon="\uf02f" block="Thermal Printer"
namespace thermal_printer {
    let crlfcmd = pins.createBuffer(2);
    crlfcmd.setUint8(0, 0x0D);
    crlfcmd.setUint8(1, 0x0A);

    //% block"
    export function init_printer(tx_pin: SerialPin, rx_pin: SerialPin): void {
        serial.redirect(tx_pin, rx_pin, BaudRate.BaudRate9600);
        let initcmd = pins.createBuffer(2);
        initcmd.setUint8(0, 0x1B);
        initcmd.setUint8(1, 0x40);
        serial.writeBuffer(initcmd);
    }
    
    //% block"
    export function print_text(text: string): void {
        serial.writeString(text);
        serial.writeBuffer(crlfcmd);
    }
}