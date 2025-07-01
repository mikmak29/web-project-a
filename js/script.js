const userName = document.getElementById("name");
const userAge = document.getElementById("age");
const deleteObject = document.getElementById("deleteObject");
const findUserNameInput = document.getElementById("findUser");
const nameDataDisplay = document.getElementById("nameDataDisplay");
const ageDataDisplay = document.getElementById("ageDataDisplay");
let isDataClicked = false;
const userData = []
const preDefineList = [
    {
        "id": "920a9d08-655f-4c55-aa3b-4f31da28e5ae",
        "name": "Hello",
        "age": 1996,
    },
    {
        "id": "69500dc2-e45d-442d-ae6c-d90830610363",
        "name": "world",
        "age": 1920,
    },
    {
        "id": "27770f10-4316-4ccd-aa02-335942fcd2ec",
        "name": "Alice",
        "age": 2001,
    },
    {
        "id": "a23e33e4-71e0-45ea-8e70-f6cefa814a06",
        "name": "Bob",
        "age": 1985,
    },
    {
        "id": "d68a9a6f-b4ef-404b-83a9-199a391c3ce5",
        "name": "Charlie",
        "age": 1999,
    },
    {
        "id": "5f1f0871-6398-4bac-9d45-3208b23e7838",
        "name": "David",
        "age": 1972,
    },
    {
        "id": "3556c230-c1b0-4222-a28c-494a407602a5",
        "name": "Eve",
        "age": 2005,
    },
    {
        "id": "2edddf11-d17a-4104-8888-429196b8bb7b",
        "name": "Frank",
        "age": 1968,
    },
    {
        "id": "81b459a1-21b0-488c-81d1-05aa2ccefbce",
        "name": "Grace",
        "age": 1993,
    },
    {
        "id": "ee123add-cd1f-494b-a8b6-ff85f30bdb2f",
        "name": "Heidi",
        "age": 1988,
    },
];

const createUserData = () => {
    let myuuid = crypto.randomUUID();

    const getName = userName.value;
    const getAge = parseInt(userAge.value.trim());

    const createData = {
        "id": myuuid,
        "name": getName,
        "age": getAge
    }

    userData.push(createData);

    userName.value = "",
    userAge.value = "";
}

const readListData = () => {
    console.log("User List: ", ...userData)
}

const updateData = () => {
}

const deleteUserValue = () => {
    userName.value = "";
    userAge.value = "";
}

const removeUser = () => {
    const getObjectNumber = parseInt(deleteObject.value);
    const remove = userData.splice(getObjectNumber, 1);
    console.log("Successfully remove user: ", remove)
}

const findUserButton = () => {
    const findUserName = findUserNameInput.value;
    const userFind = userData.find(user => {
        return user.name === findUserName;
    })

    nameDataDisplay.textContent = userFind.name;
    ageDataDisplay.textContent = userFind.age;
    
    console.log("Find user: ", userFind)
}

const addListButton = () => {
    const addList = userData.push(...preDefineList)
}

const checkInput = () => {
    console.log("Input: ", ...userData)
}