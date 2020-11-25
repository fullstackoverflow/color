function factory(start: string, end: string) {
    return function (strings: TemplateStringsArray, ...args: any[]) {
        let str = start;
        for (let i = 0; i < strings.length - 1; i++) {
            str += strings[i] + args[i];
        }
        str += strings[strings.length - 1] + end;
        return str;
    }
}

export const lightred = factory("\x1b[31m\x1b[1m", "\x1b[22m\x1b[39m");
export const lightblack = factory("\x1b[30m\x1b[1m", "\x1b[22m\x1b[39m");
export const lightgreen = factory("\x1b[32m\x1b[1m", "\x1b[22m\x1b[39m");
export const lightyellow = factory("\x1b[33m\x1b[1m", "\x1b[22m\x1b[39m");
export const lightblue = factory("\x1b[34m\x1b[1m", "\x1b[22m\x1b[39m");
export const lightmagenta = factory("\x1b[35m\x1b[1m", "\x1b[22m\x1b[39m");
export const lightcyan = factory("\x1b[36m\x1b[1m", "\x1b[22m\x1b[39m");
export const lightwhite = factory("\x1b[37m\x1b[1m", "\x1b[22m\x1b[39m");

export const red = factory("\x1b[31m", "\x1b[39m");
export const black = factory("\x1b[30m", "\x1b[39m");
export const green = factory("\x1b[32m", "\x1b[39m");
export const yellow = factory("\x1b[33m", "\x1b[39m");
export const blue = factory("\x1b[34m", "\x1b[39m");
export const magenta = factory("\x1b[35m", "\x1b[39m");
export const cyan = factory("\x1b[36m", "\x1b[39m");
export const white = factory("\x1b[37m", "\x1b[39m");
