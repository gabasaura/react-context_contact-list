const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
        },
        actions: {
            fetchContacts: async () => {
                try {
                    const response = await fetch('https://playground.4geeks.com/contact/agendas/gaba');
                    const data = await response.json();
                    console.log("Fetched contacts:", data); // Log fetched data
                    setStore({ contacts: Array.isArray(data.contacts) ? data.contacts : [] });
                    console.log("Updated store:", getStore()); // Log updated store
                } catch (error) {
                    console.error("Error fetching contacts:", error);
                }
            },
            createContact: async (contact) => {
                try {
                    await fetch('https://playground.4geeks.com/contact/agendas/gaba', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(contact)
                    });
                    getActions().fetchContacts();  // Fetch contacts after creating a new one
                } catch (error) {
                    console.error("Error creating contact:", error);
                }
            },
            updateContact: async (id, updatedContact) => {
                try {
                    await fetch(`https://playground.4geeks.com/contact/agendas/gaba/contacts/${id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedContact)
                    });
                    getActions().fetchContacts();  // Fetch contacts after updating one
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            },
            deleteContact: async (id) => {
                try {
                    await fetch(`https://playground.4geeks.com/contact/agendas/gaba/contacts/${id}`, {
                        method: 'DELETE'
                    });
                    getActions().fetchContacts();  // Fetch contacts after deleting one
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            }
        }
    };
};

export default getState;
