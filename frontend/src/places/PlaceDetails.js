import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router"

function PlaceDetails() {

	const { id } = useParams()

	const history = useHistory()

	const [place, setPlace] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/places/${id}`)
			const resData = await response.json()
			setPlace(resData)
		}
		fetchData()
	}, [id])

	async function deletePlace() {
		await fetch(`http://localhost:5000/places/${place.id}`, {
			method: 'DELETE'
		})
		history.push('/places')
	}

	return (
		<main>
			<h1>{place.name}</h1>
			<a href={`/places/${place.id}/edit`} className="btn btn-warning">
				Edit
			</a>
			<button type="submit" className="btn btn-danger" onClick={deletePlace}>
				Delete
			</button>
		</main>
	)
}

export default PlaceDetails