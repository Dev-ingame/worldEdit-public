export function language(param, type, text) {
    if (type == "command") return param.replace("${command}", text);
    if (type == "actor") return param.replace("${actor}", text);
    if (type == "result") return param.replace("${result}", text);
}
