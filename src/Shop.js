import React, { useState, useEffect } from "react"
import "./App.css"
import { Link } from "react-router-dom"

function Shop() {
	useEffect(() => {
		fetchItems()
	}, [])

	const [items, setItems] = useState([])

	const fetchItems = async () => {
		const data = await fetch("https://fortniteapi.io/items/upcoming?lang=en", {
			method: "GET",
			headers: {
				Authorization: "d64b3363-62de1768-f3846894-389d4978"
			}
		})
		const items = await data.json()
		setItems(items.items)
	}

	return (
		<div>
			{items.map((item) => (
				<h1 key={item.id}>
					<Link to={`/shop/${item.id}`}>{item.name}</Link>
				</h1>
			))}
		</div>
	)
}

export default Shop
