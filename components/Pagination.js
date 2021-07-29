import React from "react";
import PageLink from "./PageLink";

export default function Pagination(props) {
	let pages = props.paginationObj.pages
	
	if(!pages || pages.length == 0)
		return <span></span>

	return (
		<ul>
			{
				pages.map(page => <PageLink key={page.pageNum} page={page} />)
			}
		</ul>
	)
}