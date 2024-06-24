import { Link } from "react-router-dom"
import "./App.css"

//turn the function into a constant and refer to it as the return

function Blog() {
    return (
        <div className="p-5">
            <div className="blogTitle">//CodeComments</div>
                <div className="blogParagraphHeader">
                    <div className="blogPrompt">Was your first week what you expected? Why? Why not?
                <p></p>
                    </div>
                </div>
        </div>
    )
}

//below is a modular format for blog entries, needs touching up but can use this and route them all
// individually with the components below
// const title =({ text })=>{
//     return (
//         <h2>{text}</h2>
//     )
// }
// const questionAnswerBlogFormat = ({ question, answer}) =>{
//     return(
//         <div>
//             <h3>{question}</h3>
//             <p>{answer}</p>
//         </div>
//     )
// }

// function sprintNUMHERE ({}) => {
//     return (
//         <div>
//             <Title text = {"week 6"} />
//             <questionAnswerBlogFormat
//             question={'whats the meaning of life'}
//             answer={"42"}
//             />
//         </div>
//     )
// }
export default Blog



