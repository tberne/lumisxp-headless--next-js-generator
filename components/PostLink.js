import React from "react";
import Link from 'next/link'

export default function PostLink(props) {
	let post = props.post
	let postLink = post["$href"].substr(0, post["$href"].length - 5).substr(15)

	return (
		<li key={ postLink }>
			<div>
				<Link href={postLink}>{ post.title }</Link>
			</div>
			{
				post.introduction ? (<aside>{ post.introduction }</aside>) : (<span></span>)
			}
		</li>
	)
}
