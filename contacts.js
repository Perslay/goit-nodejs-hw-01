import { promises as fs } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log("__dirname: " + __dirname);

const contactsPath = join(__dirname, "/db/contacts.json");
// console.log(contactsPath);

export const listContacts = () => {
  fs.readFile(contactsPath)
    .then((data) => {
      // console.log(data.toString());
      console.log("listContacts");
    })
    .catch((err) => console.log(err.message));
};

export const getContactById = async (contactId) => {
  try {
    const contactsData = await fs.readFile(contactsPath);
    const contacts = JSON.parse(contactsData);
    const contact = contacts.find((contact) => contact.id === contactId);

    if (contact) {
      console.log(JSON.stringify(contact, null, 2));
      // return contact;
    } else {
      console.log("Contact not found");
      // return null;
    }
  } catch (err) {
    console.log(err.message);
  }
};

const removeContact = (contactId) => {
  // ...writeFile
};

const addContact = (name, email, phone) => {
  // ...writeFile
};
