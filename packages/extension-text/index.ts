import { createNode } from '@tiptap/core'

const Text = createNode({
  name: 'text',
  group: 'inline',
})

export default Text

declare module '@tiptap/core/src/Editor' {
  interface AllExtensions {
    Text: typeof Text,
  }
}