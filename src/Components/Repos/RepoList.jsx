import RepoItems from "./RepoItems"
function RepoList({repos}) {
  return (
    <div className ='rounded-lg shadow-lg card bg-base-100'>
     <div className="card-body">
        <h2 className="text-3xl my-5 font-bold card-title">
            Latest Respositories
        </h2>
        {repos.map((repo)=>(
            <RepoItems key={repo.id} repo={repo}/>
        ))}
        
    </div> 
    </div>
  )
}



export default RepoList
