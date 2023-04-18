import { fileURLToPath} from "url";
import path from "path";

export function getFile(metaUrl){
    const __fileName = fileURLToPath(metaUrl);
    return __fileName;
}

export function getDirname(metaUrl){
    const __dirname = path.dirname(getFile(metaUrl));
    return __dirname;
}