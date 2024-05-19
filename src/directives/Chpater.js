import { createVNode, render } from "vue"
import Chpater from '@/components/Chapter.vue'

const id = 'directive--chapter-container'

const directive = {
  mounted(el) {
    const lists = document.getElementsByClassName('w--heading-3')
    const els = Array.from(lists).filter(item => el.contains(item))
    const chapters = []
    els.forEach((item, index) => {
      const data = {
        label: item.textContent,
        key: `anchor${index + 1}`
      }
      item.setAttribute('name', data.key)
      chapters.push(data)
    })

    console.log(chapters)

    const vm = createVNode(Chpater, { chapters })
    const box = document.createElement('div')
    document.body.appendChild(box)
    box.id = id
    render(vm, box)
  },

  unmounted() {
    const box = document.getElementById(id)
    box.parentElement && box.parentElement.removeChild(box)
  }
}

export default directive