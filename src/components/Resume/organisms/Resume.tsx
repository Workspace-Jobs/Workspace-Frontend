import CommonTitle from 'components/common/atoms/CommonTitle'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import { ResumeTemplate } from '../style'
import ResumeList from '../molecules/ResumeList/intex'
import { useEffect, useState } from 'react'
import { getResume } from 'api/resume'
import { ResumeListProps } from 'types/components/Resume'

const Resume = () => {
  const [data, setData] = useState<ResumeListProps[]>()

  useEffect(() => {
    getResume().then((res) => {
      setData(res?.data)
    })
  }, [])
  return (
    <CommonTemplate>
      <CommonTitle title="내 이력서" />
      <ResumeTemplate>
        <ResumeList list={data} />
      </ResumeTemplate>
    </CommonTemplate>
  )
}

export default Resume
