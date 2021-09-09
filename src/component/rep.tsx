import { CommentType } from '../data/comments'

const likecheck = (props: CommentType) => {
    if (props.likeNum > 0) return (
        <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-500'>{props.likeNum}</p>
        </div>
    )
    else return ;
}

const Rep = (props: CommentType) => {
    return (
        <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src={props.userImagePath}></img>
            <div className="bg-gray-200 rounded-lg p-2">
                <p className="font-semibold">{props.username}</p>
                <p>{props.commentText}</p>
                {likecheck(props)}
            </div>
        </div>
    )
}

export default Rep