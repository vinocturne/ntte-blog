import Markdown from 'react-markdown'

const MarkdownRenderer = ({ markdown }: { markdown: string }) => {
  return (
    <div>
      <Markdown className="markdown">{markdown}</Markdown>
    </div>
  )
}

export default MarkdownRenderer
