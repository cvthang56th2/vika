
import VueDraggable from 'vuedraggable'
import { getItems } from '@/services/task.js'

export default {
  name: 'ListTask',
  components: {
    VueDraggable
  },
  data: () => ({
    allTaskArr: [],
    mappedTask: []
  }),
  created () {
    this.fetchData()
  },
  methods: {
    mapTask () {
      const groupedTaskObj = this.allTaskArr.reduce((resultObj, taskObj) => { // group tag
        if (taskObj.tag) {
          // TODO: tạo function helpers ensureArray
          resultObj[taskObj.tag] = resultObj[taskObj.tag] || []
          resultObj[taskObj.tag].push(taskObj)
        }
        return resultObj
      }, {})
      this.mappedTask = Object.keys(groupedTaskObj).map(groupName => ({
        name: groupName,
        items: groupedTaskObj[groupName]
      }))
    },
    onDragDropTask (e) {
      console.log('e', e)
    },
    async fetchData () {
      this.setLoading()
      try {
        const { data } = await getItems()
        this.allTaskArr = data || []
        this.mapTask()
      } catch (error) {
        this.errorNotify(error)
      }
      this.setLoading(false)
    }
  }
}
