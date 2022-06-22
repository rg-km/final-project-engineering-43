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

const materiLama=`
Persamaan 2 Variable
sebuah bentuk relasi sama dengan pada bentuk aljabar yang memiliki dua variabel dan keduanya berpangkat satu.
`;
const materiBaru=`
Persamaan 2 Variable
sebuah bentuk relasi sama dengan pada bentuk aljabar yang memiliki dua variabel dan keduanya berpangkat satu.
Dikatakan Persamaan Linear karena pada bentuk persamaan ini jika digambarkan dalam bentuk grafik, maka akan terbentuk sebuah grafik garis lurus (linear).
`;