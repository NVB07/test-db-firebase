"use client";
import { ref, get, child } from "firebase/database";
import { database } from "@/components/firebase/Firebase";
import { useEffect, useState } from "react";

function ReadDB() {
    const [data, setData] = useState("loading");

    useEffect(() => {
        const dbRef = ref(database);
        get(child(dbRef, `chat`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const obj = snapshot.val();
                    console.log(obj.chat1);
                    setData(JSON.stringify(obj));
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h6>{data}</h6>
        </div>
    );
}

export default ReadDB;
