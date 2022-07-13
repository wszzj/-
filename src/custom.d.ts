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
  tagList: Tag[],
  currentTag?: Tag,
}

