import MarkdownRenderer from '../../components/MarkdownRenderer'

const Post = () => {
  const md = '## 헤드'
  return (
    <div className="text-white ">
      <div className="mt-5 p-5 bg-cardbg">
        <MarkdownRenderer markdown={md} />
      </div>
    </div>
  )
}

export default Post
