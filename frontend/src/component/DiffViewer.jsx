import ReactDiffViewer from "react-diff-viewer";

export default function DiffViewer(){
    return(
        <ReactDiffViewer
        leftTitle="Materi Lama"
        oldValue={materiLama}
        rightTitle="Materi Baru"
        newValue={materiBaru}
        />
    )
}

const materiLama=``;
const materiBaru=``;