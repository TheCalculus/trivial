import { marked } from "marked";
import DOMPurify from "dompurify";

export function markdownRenderer(buffer, debug) {
    const dirty = marked.parse(buffer, {
        mangle: false,
        headerIds: false,
        headerPrefix: false,
    });
    const clean = DOMPurify.sanitize(dirty);

    if (debug | 0) {
        console.log(dirty);
        console.log(clean);
    }

    return clean;
}
