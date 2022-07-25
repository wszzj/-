type RecordItem = {
  tags: Tag[]
  notes: string
  toggle: string
  amount: number
  createdTime?: string
}
type Tag = {
  id: string
  name: string
}

type RootState = {
  recordList: RecordItem[],
  createdRecordError:null | Error,
  createdTagError:null | Error,
  tagList: Tag[],
  currentTag?: Tag,
}

