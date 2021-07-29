import React from "react";
import Link from 'next/link'

export default function PageLink(props) {
	let { page } = props
	let { pageNum, isCurrent } = page
	let pageHref = pageNum == 1 ? "/" : `/?page=${ pageNum }`

	if(isCurrent) {
		return <li>{ pageNum }</li>
	}

	return (
		<li>
			<Link href={pageHref}>{ `${ pageNum }` }</Link>
		</li>
	)
}
