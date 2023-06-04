"use client";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/Firebase";

function Download() {
    const handleDownload = () => {
        const file = document.querySelector("input").files[0];
        console.log(file);
        const storageRef = ref(storage, file.name);

        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log("Uploaded a blob or file!");
        });
    };
    return (
        <div>
            <button onClick={handleDownload}>download</button>
            <input type="file" />
        </div>
    );
}

export default Download;
