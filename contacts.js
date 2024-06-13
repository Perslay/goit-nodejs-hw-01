import { promises as fs } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log("__dirname: " + __dirname);

const contactsPath = join(__dirname, "/db/contacts.json");
// console.log(contactsPath);

const findContact = async (contactId) => {
  try {
    const contactsData = await fs.readFile(contactsPath);
    const contacts = JSON.parse(contactsData);
    return contacts;
  } catch (err) {
    console.log(err.message);
  }
};

export const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    console.log(data.toString());
  } catch (err) {
    console.log(err.message);
  }
};

export const getContactById = async (contactId) => {
  try {
    const contacts = await findContact(contactId);
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

export const removeContact = async (contactId) => {
  try {
    const contacts = await findContact(contactId);
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );

    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
  } catch (err) {
    console.log(err.message);
  }
};

export const addContact = async (name, email, phone) => {
  try {
    const contacts = await findContact(contactId);
    contacts.push({
      id: "asdasd", // generate random id here
      name,
      email,
      phone,
    });
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  } catch (err) {
    console.log(err);
  }
};
