import http from "../../utils/http"
import Link from 'next/link'
import { lumisServer } from "../../utils/cfg"

export default function BlogPost(props) {
	let blogPostDetail = props.blogPost
	let content = blogPostDetail.content
  return (
		<main>
			<div><Link href="/">Home</Link></div>
			<h1>{blogPostDetail.title}</h1>
			{
				blogPostDetail.introductionImage && blogPostDetail.introductionImage.href ? (<div>
					Intro img: <img src={blogPostDetail.introductionImage.href} />
				</div>) : (<span></span>)
			}
			<div dangerouslySetInnerHTML={{__html: content}}></div>
		</main>
  )
}

export async function getServerSideProps(context) {
	let slug = "/" + context.params.slug
	let url = `${ lumisServer }/teste-headless/post/${ slug }.json`
	let blogPostResp = await http.get(url)
	return {
		props: {
			blogPost: blogPostResp.data
		}
	}
}
