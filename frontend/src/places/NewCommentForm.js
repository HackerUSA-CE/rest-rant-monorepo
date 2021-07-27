import { useState, useEffect } from "react"
import { useHistory } from "react-router"

function NewCommentForm({ place, onSubmit }) {

    const history = useHistory()

    const [authors, setAuthors] = useState([])

    const [comment, setComment] = useState({
        content: '',
        stars: 3,
        rant: false,
        authorId: null
    })

    useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/users`)
			const resData = await response.json()
			setAuthors(resData)
		}
		fetchData()
	}, [])

    let authorOptions = authors.map(author => {
        return <option value={author.id}>{author.firstName} {author.lastName}</option>
    })

    function handleSubmit(e){
        e.preventDefault()
        onSubmit(comment)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-sm-12">
                    <label htmlFor="content">Content</label>
                    <textarea
                        required
                        value={comment.content}
                        onChange={e => setComment({ ...place, content: e.target.value })}
                        className="form-control"
                        id="content"
                        name="content"
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-sm-4">
                    <label htmlFor="state">Author</label>
                    <select className="form-control" value={place.authorId} onChange={e => setComment({ ...comment, authorId: e.target.value })}>
                        {authorOptions}
                    </select>
                </div>
                <div className="form-group col-sm-4">
                    <label htmlFor="stars">Star Rating</label>
                    <input
                        value={comment.stars}
                        onChange={e => setComment({ ...comment, stars: e.target.value })}
                        type="range"
                        step="0.5"
                        min="1"
                        max="5"
                        id="stars"
                        name="stars"
                        className="form-control"
                    />
                </div>
                <div className="form-group col-sm-4">
                    <label htmlFor="rand">Rant</label>
                    <input
                        checked={place.rant}
                        onClick={e => setComment({ ...comment, rant: e.target.checked })}
                        type="checkbox"
                        id="rant"
                        name="rant"
                        className="form-control"
                    />
                </div>
            </div>
            <input className="btn btn-primary" type="submit" value="Add Comment" />
        </form>
    )
}

export default NewCommentForm