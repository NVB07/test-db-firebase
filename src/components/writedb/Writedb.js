"use client";
import { ref, set, update } from "firebase/database";
import { database } from "../firebase/Firebase";

let userid = 1;

export default function WriteDB() {
    const handleClick = () => {
        update(ref(database, "chat"), {
            [`user${userid}`]: { name: `day la user${userid}` },
        });
        console.log("writed userid = ", userid);
        userid++;
    };
    return (
        <div>
            <button onClick={handleClick}>writedb</button>
        </div>
    );
}
