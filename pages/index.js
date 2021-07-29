import http from "../utils/http"
import PostLink from "../components/PostLink"
import Pagination from "../components/Pagination"
import { lumisServer } from "../utils/cfg"

export default function Home(props) {
  return (
    <div>
      Home
		<div>
			<ul>
				{
					props.blogPostsData.rows.map(post => <PostLink key={post["$href"]} post={post} />)
				}
			</ul>
		</div>
		<Pagination paginationObj={props.blogPostsData.pagination} />
    </div>
  )
}

export async function getServerSideProps(context) {
	const { page } = context.query
	let endpoint = !page || page == 1 ? "lista" : `lista/list-pagination/${ page }`
	let blogListResp = await http.get(`${ lumisServer }/teste-headless/${ endpoint }.json`)
	return {
		props: {
			blogPostsData: blogListResp.data
		}
	}
}
