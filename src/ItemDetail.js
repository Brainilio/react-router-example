import React, { useState, useEffect } from "react"
import "./App.css"
// import { Link } from "react-router-dom"

function Item({ match }) {
	useEffect(() => {
      fetchItem();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const [item, setItem] = useState({
        // Set images to empty object because of .fullsize
        images: {}
    })

	const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortniteapi.io/items/get?id=${match.params.id}&lang=en`, {
			method: "GET",
			headers: {
				Authorization: "d64b3363-62de1768-f3846894-389d4978"
			}
        })
        const item = await fetchItem.json();
        setItem(item.item);
  

	}

	return (
		<div>
			<h1>{item.name}</h1>
            <img src={item.images.full_size} alt="think"/>
		</div>
	)
}

export default Item
