import React from 'react'

type ReadBookViewProps = {
  className?: string
}

const ReadBookView: React.FC<ReadBookViewProps> = (props) => {
  const { className } = props

  return <div className={className}>ReadBookView</div>
}

export default ReadBookView
