

import { getListTask, saveItem } from '@/services/task'

import VueDraggable from 'vuedraggable'
import PopupDetail from './popup.detail.vue'

export default {
  name: 'ListTask',
  components: {
    VueDraggable,
    PopupDetail
  },
  data: () => ({
    mappedTask: [],
    selectedTask: null,
    showPopupDetail: false
  }),
  created () {
    this.fetchData()
  },
  methods: {
    createTask () {
      this.selectedTask = null
      this.showPopupDetail = true
    },
    openDetailTask (taskObj) {
      this.selectedTask = taskObj
      this.showPopupDetail = true
    },
    async onDragDropTask (e, tag) {
      // TODO: update rank
      if (e.added) {
        this.setLoading()
        try {
          const sendData = {
            _id: e.added.element._id,
            tag
          }
          await saveItem(sendData)
          this.successNotify()
        } catch (error) {
          this.errorNotify(error)
        }
        this.setLoading(false)
      }
    },
    async fetchData () {
      this.setLoading()
      try {
        const { data } = await getListTask()
        this.mappedTask = data || []
      } catch (error) {
        this.errorNotify(error)
      }
      this.setLoading(false)
    }
  }
}
