import React from 'react'

import DataComponent from '../components/DataComponent/DataComponent'

const ReadNowPage: React.FC = () => {
  return <DataComponent hasStyle={false} status='reading' sectionTitle='Читаю сейчас' />
}

export default ReadNowPage
