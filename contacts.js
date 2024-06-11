import { promises as fs } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log("__dirname: " + __dirname);

const contactsPath = join(__dirname, "/contacts.json");
// console.log(contactsPath);

export const listContacts = () => {
  // ...twój kod
};

const getContactById = (contactId) => {
  // ...twój kod
};

const removeContact = (contactId) => {
  // ...twój kod
};

const addContact = (name, email, phone) => {
  // ...twój kod
};
