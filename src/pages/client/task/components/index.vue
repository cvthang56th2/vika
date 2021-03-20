<template>
  <div>
    <h1>
      LIST Task
    </h1>
    <div class="d-flex">
      <div v-for="(groupObj, gIndex) in mappedTask" :key="`group-${gIndex}`" class="xs4">
        <h3>{{ groupObj.name }}</h3>
        <VueDraggable class="list-task" :list="groupObj.items" group="task" @change="onDragDropTask">
          <div v-for="(item, index) in groupObj.items" :key="`group-${gIndex}-task-${index}`" class="list-task-item">
            <h5 class="pointer">{{ item.name }}</h5>
          </div>
        </VueDraggable>
      </div>
    </div>
  </div>
</template>

<script src="./index.js" />