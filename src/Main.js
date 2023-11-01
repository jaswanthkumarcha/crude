const data = [];

        function addData(name, age) {
        const id = data.length + 1;
        data.push({ id, name, age });
        console.log(Added: ${name} (Age: ${age}) with ID ${id});
        }

        function editData(id, name, age) {
        const index = data.findIndex(item => item.id === id);
        if (index !== -1) {
        data[index].name = name;
        data[index].age = age;
        console.log(Edited: ID ${id} - New Name: ${name}, New Age: ${age});
        } else {
        console.log(No data found with ID ${id}. Edit failed.);
        }
        }

        function deleteData(id) {
        const index = data.findIndex(item => item.id === id);
        if (index !== -1) {
        const deletedItem = data.splice(index, 1)[0];
        console.log(Deleted: ID ${deletedItem.id} - Name: ${deletedItem.name}, Age: ${deletedItem.age});
        } else {
        console.log(No data found with ID ${id}. Delete failed.);
        }
        }

        function showData() {
        console.log('Current Data:');
        data.forEach(item => {
        console.log(ID ${item.id} - Name: ${item.name}, Age: ${item.age});
        });
        }

// Add some data
        addData('Alice', 25);
        addData('Bob', 30);
        addData('Charlie', 22);

// Show the current data
        showData();

// Edit and delete data
        editData(2, 'Updated Bob', 31);
        deleteData(3);

// Show the updated data
        showData();
