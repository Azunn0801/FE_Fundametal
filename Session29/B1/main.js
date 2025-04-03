class Contact {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

class ContactManager {
    constructor() {
        this.contacts = [];
        this.nextId = 1;
    }

    addContact(name, email, phone) {
        const newContact = new Contact(this.nextId++, name, email, phone);
        this.contacts.push(newContact);
        console.log("Liên hệ đã được thêm:", newContact);
    }

    displayContacts() {
        console.log("Danh sách liên hệ:");
        this.contacts.forEach(contact => console.log(contact));
    }

    searchByPhone(phone) {
        const found = this.contacts.find(contact => contact.phone === phone);
        console.log(found ? "Thông tin liên hệ:" : "Không tìm thấy liên hệ!", found);
    }

    updateContact(id, newName, newEmail, newPhone) {
        const contact = this.contacts.find(c => c.id === id);
        if (contact) {
            contact.name = newName;
            contact.email = newEmail;
            contact.phone = newPhone;
            console.log("Thông tin liên hệ đã cập nhật:", contact);
        } else {
            console.log("Không tìm thấy liên hệ!");
        }
    }

    deleteContact(id) {
        const index = this.contacts.findIndex(c => c.id === id);
        if (index !== -1) {
            console.log("Liên hệ đã bị xóa:", this.contacts[index]);
            this.contacts.splice(index, 1);
        } else {
            console.log("Không tìm thấy liên hệ để xóa!");
        }
    }
}

const manager = new ContactManager();
manager.addContact("Nguyễn Văn A", "a@example.com", "0123456789");
manager.addContact("Trần Thị B", "b@example.com", "0987654321");
manager.displayContacts();
manager.searchByPhone("0123456789");
manager.updateContact(1, "Nguyễn Văn C", "c@example.com", "0911222333");
manager.deleteContact(2);
manager.displayContacts();