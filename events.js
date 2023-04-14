import variables from "./variables.js";
import { fetchCodes } from "./index.js";
import { handleInput } from "./convert.js";
import { handleSubmit } from "./convert.js";

const { amountInput, form } = variables;

fetchCodes();

amountInput.addEventListener('keyup', handleInput);

form.addEventListener("submit", handleSubmit);

