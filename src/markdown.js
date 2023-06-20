import { marked } from "marked";
import DOMPurify from "dompurify";

export function markdownRenderer(buffer, debug) {
    const dirty = marked.parse(buffer, {
        mangle: false,
        headerIds: false,
        headerPrefix: false,
    }); // deprecated libraries
    const clean = DOMPurify.sanitize(dirty); // prevent XSS

    if (debug | 0) {
        console.log(dirty);
        console.log(clean);
    }

    return clean;
}
