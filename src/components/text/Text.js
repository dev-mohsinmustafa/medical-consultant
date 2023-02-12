import { useState } from "react";
export default function Text(props) {
    const [text, setText] = useState("")

    const convertToUpperCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnchange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <h1 style={{ color: "skyblue" }}>{props.title}</h1>
            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" value={text} onChange={handleOnchange}  id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Comments</label>
            </div>
            <button className="my-3 btn btn-primary" onClick={convertToUpperCase} >ConvertToUpperCase</button>
        </div>
    );
}