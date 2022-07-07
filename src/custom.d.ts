type RecordItem = {
  tags: string[]
  notes: string
  toggle: string
  amount: number
  createdTime: Date | undefined
}
type Tag = {
  id: string
  name: string
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicate'
  update: (id: string, name: string) => 'success' | 'notFound' | 'duplicate'
  remove: (id: string) => boolean
  save: () => void
}



