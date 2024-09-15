import fs from "fs-extra";
import { marked } from 'marked';

export default {
    globelData: {
        foo: (input) => input + "!!",
        md: (fileName) => {
            const content = fs.readFileSync(fileName, "utf-8");
            return marked.parse(content, { async: false });
        }
    }
};
