import { get_encoding } from "tiktoken";

const encoding = get_encoding("cl100k_base");
const tokens = encoding.encode('Hello world sai, you are starting ai learning');
console.log(tokens);