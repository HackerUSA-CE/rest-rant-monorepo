import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router"

function EditPlaceForm() {

	const history = useHistory()

    const { placeId } = useParams()

    const [place, setPlace] = useState({
		name: '',
		pic: '',
		city: '',
		state: '',
		cuisines: ''
	})

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5001/places/${placeId}`)
			const resData = await response.json()
			setPlace(resData)
		}
		fetchData()
	}, [ placeId ])

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5001/places/${place.placeId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(place)
		})

		history.push(`/places/${place.placeId}`)
	}

	return (
		<main>
			<h1>Edit Place</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Place Name</label>
					<input
						required
						value={place.name}
						onChange={e => setPlace({ ...place, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="founded">Year Founded</label>
					<input
						required
						value={place.founded}
						onChange={e => setPlace({ ...place, founded: e.target.value })}
						className="form-control"
						id="founded"
						name="founded"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="pic">Place Picture</label>
					<input
						value={place.pic}
						onChange={e => setPlace({ ...place, pic: e.target.value })}
						className="form-control"
						id="pic"
						name="pic"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="city">City</label>
					<input
						value={place.city}
						onChange={e => setPlace({ ...place, city: e.target.value })}
						className="form-control"
						id="city"
						name="city"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="state">State</label>
					<input
						value={place.state}
						onChange={e => setPlace({ ...place, state: e.target.value })}
						className="form-control"
						id="state"
						name="state"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="cuisines">Cuisines</label>
					<input
						value={place.cuisines}
						onChange={e => setPlace({ ...place, cuisines: e.target.value })}
						className="form-control"
						id="cuisines" name="cuisines" required />
				</div>
				<input className="btn btn-primary" type="submit" value="Save" />
			</form>
		</main>
	)
}

export default EditPlaceForm