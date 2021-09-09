import { CommentType } from "../data/comments"
import CCC from "./commentcard"

const Cm = ({ cc }: { cc: CommentType[] }) => {
    return (
        <div>
            {
                cc.map(e =>
                    <div>
                        <CCC username={e.username} userImagePath={e.userImagePath}  commentText={e.commentText}  likeNum={e.likeNum} replies={e.replies} />
                    </div>)
            }
        </div>
    )
}

export default Cm;