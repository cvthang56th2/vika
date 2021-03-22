<template>
  <div class="wrap-list-task">
    <h1>
      LIST Task
    </h1>
    <button @click="createTask">
      Add Task
    </button>
    <div class="d-flex">
      <div v-for="(groupObj, gIndex) in mappedTask" :key="`group-${gIndex}`" class="xs4 mx-1">
        <h3 class="text-center">{{ groupObj.text }}</h3>
        <VueDraggable class="list-task" :list="groupObj.items" group="task" @change="onDragDropTask($event, groupObj.value)">
          <div v-for="(item, index) in groupObj.items" :key="`group-${gIndex}-task-${index}`" class="list-task-item pointer d-flex" @click="openDetailTask(item)">
            {{ item.name || '-' }}
          </div>
        </VueDraggable>
      </div>
    </div>
    <PopupDetail v-model="showPopupDetail" :taskId="selectedTask && selectedTask._id || ''" @saved="fetchData" />
  </div>
</template>

<script src="./index.js" />

<style lang="scss">
.wrap-list-task {
  .list-task {
    height: 100%;
    .list-task-item {
      padding: 8px;
      border: 1px solid rgb(63, 34, 34);
    }
  }
}
</style>