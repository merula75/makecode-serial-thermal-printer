/**
 * Support library for serial thermal printer.
 */
//% color=190 weight=100 icon="\uf02f" block="Thermal Printer"
namespace thermal_printer {
    //% block"
    export function print_text(text: string): void {
        serial.writeString(text);
    }
}