export const FormatConsoleLink = (name, url) => {
    const ESC = '\u001b';
    const OSC = `${ESC}]`;
    const BEL = '\u0007';

    return `${OSC}8;;${url}${BEL}${name}${OSC}8;;${BEL}`;
}