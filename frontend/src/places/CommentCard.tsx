import { useContext } from "react";
import { CurrentUser } from '../contexts/CurrentUser'

type CommentProps = {
    comment: UserComment,
    onDelete: Function
  }

  const CommentCard: React.FunctionComponent<CommentProps> = ({ comment, onDelete }) => {
    const { currentUser } = useContext(CurrentUser);
  
    let deleteButton = null;
  
    if (currentUser && currentUser.userId === comment.authorId) {
      deleteButton = (
        <button className="btn btn-danger" onClick={() => onDelete()}>
          Delete Comment
        </button>
      );
    }
    return (
      <div className="border col-sm-4">
        <h2 className="rant">{comment.rant ? "Rant!" : "Rave!"}</h2>
        <h3>
          <strong>
            - {comment.author.firstName} {comment.author.lastName}
          </strong>
        </h3>
        <h4>Rating: {comment.stars}</h4>
        {deleteButton}
      </div>
    );
  }
  
  export default CommentCard;