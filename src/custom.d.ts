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

interface Window {
  tagList: Tag[];
  findTag: (id: string) => Tag;
  createTag: (name: string) => void;
  removeTag: (id: string) => boolean;
  updateTag: (id: string, name: string) => 'success' | 'notFound' | 'duplicate';
}
