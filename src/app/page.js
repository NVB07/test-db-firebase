// import ReadDB from "@/components/readdb/Readdb";
import WriteDB from "@/components/writedb/Writedb";
import ReadDB from "@/components/readdb/Readdb";
import Download from "@/components/download/Download";
import ListFile from "@/components/listfiles/ListFile";
import Signup from "@/components/sigup/Sigup";

export default function Home() {
    return (
        <div>
            <WriteDB />
            <ReadDB />
            <Download />
            <ListFile />
            <Signup />
        </div>
    );
}
