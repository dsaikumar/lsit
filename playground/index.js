import { get_encoding } from "tiktoken";

const encoding = get_encoding("cl100k_base");
const tokens = encoding.encode('Hello world sai, you are starting ai learning');
console.log(tokens);
console.log('LLM -> Large learning models, which only handle text data');
console.log('LMM -> Large Multi Modal Models, which are for data which is not only text, video, document, images, etc');
console.log('Context window -> How much text model can handle as input, response and previous chat history');
console.log('Privacy -> Open source self hosted models');
console.log('Max output tokens-> how much is the response size it can be');