"use client";
import { getStorage, ref, listAll } from "firebase/storage";
import { storage } from "../firebase/Firebase";

// Create a reference under which you want to list

function ListFile() {
    const handleList = () => {
        const listRef = ref(storage);

        // Find all the prefixes and items.
        listAll(listRef)
            .then((res) => {
                res.prefixes.forEach((folderRef) => {
                    // All the prefixes under listRef.
                    // You may call listAll() recursively on them.
                    console.log(folderRef);
                });
                res.items.forEach((itemRef) => {
                    console.log(itemRef._location);
                });
            })
            .catch((error) => {
                // Uh-oh, an error occurred!
            });
    };

    return <button onClick={handleList}>show list</button>;
}

export default ListFile;
