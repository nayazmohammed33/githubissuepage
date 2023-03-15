import { useEffect, useState} from "react";
import { Octokit } from "https://cdn.skypack.dev/octokit";

import Issues from "./Issues";
import Pagination from "./Pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);


  const fetcher = async () => {
    const octokit = new Octokit({
      auth: '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'    })
    let response = await octokit.request('GET /repos/reactjs/reactjs.org/issues', {
      owner: 'reactjs',
      repo: 'reactjs.org',
    })
    console.log(response.data)
    setPosts(response.data);
    setLoading(false);
  }
  useEffect(() => {
    fetcher()
  }, [])



  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className='container mt-5'>
   
    <Issues posts={currentPosts} loading={loading} />
    <Pagination
      postsPerPage={postsPerPage}
      totalPosts={posts.length}
      paginate={paginate}
    />
  </div>
     )
}
export default App
